import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@gmail.com",
      password,
      role: "admin",
    },
  });

  console.log("✅ Admin berhasil dibuat");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
