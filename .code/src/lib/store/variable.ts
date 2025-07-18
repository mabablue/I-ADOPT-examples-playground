import extract from '$lib/util/extract.js';
import { promises as Fs } from 'node:fs';
import Path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Variable } from "$lib/util/model/models";


// memoization
const VARIABLES : { [index: string]: Variable } = {}
const PARSER_ERRORS : { [index: string]: any } = {}
const RAWS : { [index: string]: string } = {}


// root path to load RDF-files
// https://stackoverflow.com/a/55944697/1169798
const pathComponents = Path.dirname( fileURLToPath(import.meta.url) ).split( Path.sep );
while( (pathComponents.length > 0) && (pathComponents.pop() != '.code' ) ) {}
export const PATH_ROOT = pathComponents.join( Path.sep );


export type VariableList = {
  title:    string,
  path:     string,
  section:  string,
  comment:  string,
}


/**
 * retrieve all Variables
 */
export async function getVariables() : Promise<{ [index: string]: Array<VariableList> }> {

  const variables : { [index: string]: Array<VariableList> } = {};

  // scan for RDF files
  for await(const rawFilePath of Fs.glob( '**/*.ttl', { cwd: PATH_ROOT } ) ) {

    // skip templates
    if( rawFilePath.includes( 'template' ) ) {
      continue;
    }

    // get variable
    let variable;
    try {
      variable = await getVariable( rawFilePath );
    } catch( e ) {
      console.error( rawFilePath + ' - ' + e.message );
      continue;
    }
    if( !variable ) {
      console.error( rawFilePath + ' - Could not extract variable!' );
      continue;
    }

    // add to results
    const entry = {
      title:    variable.getLabel(),
      comment:  variable.getComment(),
      path:     rawFilePath.replace( /\\/g, '/' ),  // use canonical web paths
      section:  Path.dirname( rawFilePath ),
    };
    if( !(entry.section in variables) ) {
      variables[entry.section] = [];
    }
    variables[entry.section].push( entry );

  }

  // sort each entry by label
  for( const key of Object.keys( variables ) ) {
    variables[key].sort( (a,b) => a.title.localeCompare( b.title ) );
  }

  return variables
}



/**
 * get the Variable object from the given turtle file
 */
export async function getVariable( path: string ) : Promise<Variable> {

  // short-circuit
  if( path in VARIABLES ) {
    return VARIABLES[ path ];
  }
  if( path in PARSER_ERRORS ) {
    throw PARSER_ERRORS[ path ];
  }

  try {
    // path to file
    const filePath = Path.join( PATH_ROOT, path );

    // retrieve file content
    const raw = await Fs.readFile( filePath, 'utf8' );
    const variable = (await extract( raw ))[0];

    // attempt to get the issue link
    const issue = raw.match( /ex:issue "([^"]+)"/ )?.[1];
    if( issue && variable ) {
      variable.issue = issue;
    }

    // memorize
    RAWS[ path ] = raw;
    VARIABLES[ path ] = variable;
    return variable;

  } catch( e ) {

    // memorize error and pass on
    PARSER_ERRORS[ path ] = e;
    throw e;

  }

}


/**
 * retrieve the raw turtle file
 */
export async function getRaw( path:string ) : Promise<string | undefined> {

  // short-circuit
  if( path in RAWS ) {
    return RAWS[ path ];
  }

  // trigger loading
  await getVariable( path );

  // now it should be in our store
  return RAWS[ path ];

}
