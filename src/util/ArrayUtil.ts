export const selectMany = (arr: Array<any>) => arr.length ? arr.reduce(function(a, b){ return a.concat(b); }) : [];
