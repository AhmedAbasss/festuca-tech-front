export const ValueName = (name: string,values:any) => name.split(".").reduce((prev: any, curr) => prev && prev[curr], values);
