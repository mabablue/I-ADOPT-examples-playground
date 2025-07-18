import { getVariable, getVariables } from '$lib/store/variable.js';
import toJSONLD from '$lib/util/model/toJSONLD';

export async function load({ params }) {

  // get corresponding variable
  const variable = await getVariable( params.path.replace( '.html', '' ) );

  // pass everything on
  return {
    path:         params.path,
    variable:     toJSONLD( variable ),
    issue:        variable.issue,
    variableList: await getVariables(),
  };

};
