const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// handling uncaught exception
process.on("uncaughtException", err => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down Server uncaughtException");
  process.exit(1);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// connecting Database
connectDatabase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on ${process.env.PORT}`);
});

// unhandle Promise rejection
process.on("unhandledRejection", err => {
  console.log(`Error ${err.message}`);
  console.log("Shutting Down Server");

  server.close(() => {
    process.exit(1);
  });
});
