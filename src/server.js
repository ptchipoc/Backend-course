import express from "express"
import { config } from "dotenv"
import { connectDB, disconnectDB } from "./config/db.js";

// import routes
import MovieRoutes from './Routes/movieRoutes.js'
import AuthRoutes from './Routes/authRoutes.js'

config();
connectDB();

const app = express();
const PORT = 5001;

// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// API routes
app.use('/movies', MovieRoutes);
app.use('/auth', AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
})

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Regition: ", err);
  Server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.error("uncaught Exception: ", err);
  Server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("SIGTERM", (err) => {
  console.error("SIGTERM received, shtting down gracefully ", err);
  Server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});