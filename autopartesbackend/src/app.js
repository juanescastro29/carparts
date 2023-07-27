const express = require("express");
const morgan = require("morgan");

app = express();

app.set("PORT", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/store", require("./routes/product"));

module.exports = app;