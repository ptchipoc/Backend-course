import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: process.env.NODE_ENV ==="development"
  ? ["query", "warn", "error"]
  : ["error"]
})

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB connected via prisma");
  } catch (error) {
    console.log(`Database connection fail: ${error.message}`);
    process.exit(1);
  }
}

const disconnectDB = async () => {
  await prisma.$disconnect();
}

export {prisma, connectDB, disconnectDB};