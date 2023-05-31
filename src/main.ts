import express from "express";
import routes from "./routes";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static("static"));
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});