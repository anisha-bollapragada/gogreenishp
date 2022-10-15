const express = require("express");

const PORT = process.env.PORT || 1111;
const app = express();

// body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// share public assets
app.use(express.static("public"));

// connect up routes
app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`);
});
