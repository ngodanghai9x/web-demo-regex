import path from "path";

export const myPath = (_path) => {
  // console.log("🚀 path.js: ", {__dirname, _path})
  return path.join(__dirname, `../${_path}`);
}