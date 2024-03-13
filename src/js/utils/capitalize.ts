/*
* Capitalize first letter of string
* @param string - string to be capitalized
* @returns a new string
*/
export const capitalize = (string: string) => {
  if (string !== undefined) return string.charAt(0).toUpperCase() + string.slice(1);
};
