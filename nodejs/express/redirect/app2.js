const express = require("express");
const app = express();
 
app.use("/home/bar",function (request, response) {
  response.redirect("about")
});
app.use("/home/foobar", function (request, response) {
  response.redirect("/aboutit")
});
app.use("/aboutit", function (request, response) {
  response.send("<h1>About</h1>");
});

app.use("/home/foo", function (request, response) {
  response.redirect("./about")
});
app.use("/home/foo/bar", function (request, response) {
  response.redirect("../about2")
});
app.use("/home/foo2/bar", function (request, response) {
  response.redirect(301,".")
});
app.use("/home/foo2", function (request, response) {
  response.send("<h1>Upper foo2</h1>");
});
app.use("/home/about", function (request, response) {
  response.send("<h1>About</h1>");
});


app.listen(3000);