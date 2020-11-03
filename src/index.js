const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");


// Routers
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");

app.use(express.json());
app.use(userRouter);
app.use(bookRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));

