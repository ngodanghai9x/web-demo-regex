let ejs = require('ejs');
// let file = require('templateEjsTest.ejs');
// console.log("🚀 ~ file: ejsTest.js:3 ~ file", file)
async function run() {
  let people = ['geddy', 'neil', 'alex'];
  let html = ejs.render(`
<div>
  <h2><%= people.join(", "); %></h2>
</div>

<h2><%= people.join(", "); %></h2>
`, { people: people });

  let html2 = await ejs.renderFile(`./templateEjsTest.ejs`, { people: people });
  console.log("🚀 ~ file: testEjs.js:4 ~ html", html)
  console.log("🚀 ~ html2", html2)
}
run();
