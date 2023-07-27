const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const PORT =  process.env.PORT || 4000 ;

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

//config
dotenv.config({path:"backend/config/config.env"});

connectDatabase();


const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });