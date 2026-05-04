import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { MessageRole, PrismaClient } from "../src/generated/prisma/client.js";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT ?? 3306),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const session = await prisma.chatSession.create({
    data: {
      title: "Seed Session",
      messages: {
        create: [
          {
            role: MessageRole.SYSTEM,
            content: "Seed data berhasil dibuat.",
          },
        ],
      },
    },
  });

  console.log(`Seed session created: ${session.id}`);
}

main()
  .catch((error) => {
    console.error("Seed failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
