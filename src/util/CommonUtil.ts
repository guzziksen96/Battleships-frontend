
export const boardRange = 10;
export const toColumnName = (intValue: number, toUpper: boolean = false) =>  toUpper ? String.fromCharCode(97 + intValue).toLocaleUpperCase() : String.fromCharCode(97 + intValue);

export const getColumns = (toUpper: boolean = false) => Array.from(Array(boardRange).keys()).map(i => toColumnName(i, toUpper));
export const rows = Array.from(Array(boardRange).keys());
