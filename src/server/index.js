import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import http from "http";
import { Server } from "socket.io";
// import cors from "cors";
dotenv.config();
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;
// app.use(cors({origin:"*"}));
// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log(socket.id, " .connected ");

  socket.on("message", (message) => {
    console.log("message: ", message);
  });
});
io.on("disconnection", (socket) => {
  console.log(socket.id, " .disconnected ");
});

server.listen(PORT, "localhost", () => {
  console.log(`http://localhost/${PORT}`);
  connectDB();
});
