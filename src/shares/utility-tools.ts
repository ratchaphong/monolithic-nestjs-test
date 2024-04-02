export const toBoolean = (value: string): boolean => {
  const truthy: string[] = ['true', 'TRUE', 'True', '1'];

  return truthy.includes(value);
};

export const arrayExist = (array: any): boolean => {
  return Array.isArray(array) && array.length > 0;
};
