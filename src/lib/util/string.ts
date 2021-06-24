export const insertStr = (str: string, index: number, insert: string) => {
  return str.slice(0, index) + insert + str.slice(index, str.length);
};
