// src/lib/db.js
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const db = prisma;

//The code snippet above is the db.js file from the linktree project. The file exports a PrismaClient instance that is used to interact with the database. The code also checks if a global prismadb variable exists and reuses it if it does, to prevent multiple instances of the PrismaClient from being created. This pattern is commonly used in Next.js projects to manage database connections and ensure efficient resource usage.
//The db.js file is typically imported in other files where database operations are needed, allowing components and pages to interact with the database using PrismaClient methods. This separation of concerns helps keep the codebase organized and maintainable.
