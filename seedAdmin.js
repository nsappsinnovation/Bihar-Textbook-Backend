import prisma from "./src/config/db.js";
import bcrypt from "bcrypt";

async function main() {
  const email = "admin@example.com";
  const password = "password123";
  const fullName = "Super Admin";

  console.log(`Checking if admin user already exists...`);
  const existingAdmin = await prisma.admin.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    console.log(`✅ Admin user already exists with email: ${email}`);
    console.log(`You can log in with: \nEmail: ${email}\nPassword: ${password}`);
    return;
  }

  console.log(`Creating new admin user...`);
  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.create({
    data: {
      fullName,
      email,
      passwordHash: hashedPassword,
      isActive: true,
    },
  });

  console.log(`🎉 Successfully created first admin user!`);
  console.log(`----------------------------------------`);
  console.log(`Name:     ${admin.fullName}`);
  console.log(`Email:    ${admin.email}`);
  console.log(`Password: ${password}`);
  console.log(`----------------------------------------`);
  console.log(`You can now use these credentials to log in via Swagger and test protected routes.`);
}

main()
  .catch((e) => {
    console.error("❌ Error creating admin user:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
