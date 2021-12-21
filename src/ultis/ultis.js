import mysql from 'mysql';

export const safeFilter = (value) => {
  return value;
}
export const isEmpty = (value) => {
  return value === null || value === undefined || String(value).trim() === '';
}

export const singleInsertEscaped = (tableName, data) => {
  if (!data || !Object.keys(data).length) return null;

  Object.keys(data).forEach(key => {
    if (data[key] === null || data[key] === undefined || data[key] === "") {
      delete data[key];
    }
  });

  const keys = Object.keys(data).join(",");
  const values = Object.values(data).map(value =>
    mysql.escape(safeFilter(value))
  ).join(",");

  const escapedSql = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`;

  console.log("Single Insert Escaped: data =", data);
  console.log("Single Insert Escaped: sql =", escapedSql);

  return escapedSql;
}

// export const multiInsertEscaped = (
//   tableName,
//   data,
//   ignoreColumn = null
// ) => {
//   // const keys = data
//   //   .reduce((_prev, curr) => Object.keys(curr).map(key => key), [])
//   //   .join(", ");
//   if (!data || !data.length) return null;

//   const keys = Object.keys(data[0]).join(',');
//   if (!keys || !keys.length) return null;

//   const values = data.map(item => {
//     return Object.keys(item).map(key => {
//       const value = item[key];

//       if (isEmpty(value)) {
//         return null;
//       } else {
//         if (typeof value == "string") {
//           return safeFilter(value);
//         }
//         return value;
//       }
//     });
//   });

//   const ignoreDuplicateStr = ignoreColumn
//     ? ` ON DUPLICATE KEY UPDATE ${ignoreColumn}=${ignoreColumn}`
//     : "";

//   const valuesStr = values.map(() => `(?)`).join(", ");

//   const escapedSql = [
//     `INSERT INTO ${tableName} (${keys}) VALUES ${valuesStr}${ignoreDuplicateStr};`,
//     values
//   ];

//   console.log("Multi Insert Escaped: data =", data);
//   console.log("Multi Insert Escaped: sql =", escapedSql);

//   return escapedSql;
// }