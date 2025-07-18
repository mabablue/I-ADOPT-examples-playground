import { getVariables, PATH_ROOT } from "$lib/store/variable";

export async function load() {
  return {
    variables: await getVariables(),
    root: PATH_ROOT,
  };
}
