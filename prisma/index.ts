// prisma/index.ts
import { PrismaClient } from "@prisma/client";

export * from "@prisma/client";

// globalThis é palavra chave para uma variável global em JS
// a passagem é por referência quando usamos objeto
const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// se não estiver em ambiente de produção, guarde a instância na variável global
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
