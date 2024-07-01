import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import {
  companies,
  flossColors,
  flossColorsUsed,
  projectDimensions,
  projects,
  users,
} from "@/data/seed";

const client = await db.connect();

async function seedUsers() {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedCompanies() {
  try {
    // Create the "companies" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS companies (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        productType VARCHAR(100) NOT NULL,
        website VARCHAR(255),
      );
    `;

    console.log(`Created "companies" table`);

    // Insert data into the "projects" table
    const insertedCompanies = await Promise.all(
      companies.map(async (company) => {
        return client.sql`
        INSERT INTO companies (id, name, productType, website)
        VALUES (${company.id}, ${company.name}, ${company.productType}, ${company.website})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedCompanies.length} copmanies`);

    return {
      createTable,
      companies: insertedCompanies,
    };
  } catch (error) {
    console.error("Error seeding companies:", error);
    throw error;
  }
}

async function seedProjectDimensions() {
  try {
    // Create the "projectDimensions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projectDimensions (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        height INT NOT NULL,
        width INT NOT NULL,
        display VARCHAR(255),
      );
    `;

    console.log(`Created "projectDimensions" table`);

    // Insert data into the "projects" table
    const insertedProjectDimensions = await Promise.all(
      projectDimensions.map(async (dimensions) => {
        return client.sql`
        INSERT INTO companies (id, height, width, display)
        VALUES (${dimensions.id}, ${dimensions.height}, ${dimensions.width}, ${dimensions.display})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProjectDimensions.length} copmanies`);

    return {
      createTable,
      companies: insertedProjectDimensions,
    };
  } catch (error) {
    console.error("Error seeding companies:", error);
    throw error;
  }
}

async function seedFlossColors() {
  try {
    // Create the "flossColors" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS flossColors (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        companyIdentifier VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        hex VARCHAR(10) NOT NULL,
        companyId INT FOREIGN KEY REFERENCES companies (id)
      );
    `;

    console.log(`Created "flossColors" table`);

    // Insert data into the "projects" table
    const insertedFlossColors = await Promise.all(
      flossColors.map(async (color) => {
        return client.sql`
        INSERT INTO flossColors (id, companyIdentifier, name, hex, companyId)
        VALUES (${color.id}, ${color.companyIdentifier}, ${color.name}, ${color.hex}, ${color.companyId})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedFlossColors.length} flossColors`);

    return {
      createTable,
      flossColors: insertedFlossColors,
    };
  } catch (error) {
    console.error("Error seeding flossColors:", error);
    throw error;
  }
}

async function seedProjects() {
  try {
    // Create the "projects" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        dimensionId INT NOT NULL,
      );
    `;

    console.log(`Created "projects" table`);

    // Insert data into the "projects" table
    const insertedProjects = await Promise.all(
      projects.map(async (project) => {
        return client.sql`
        INSERT INTO projects (id, title, dimensionId)
        VALUES (${project.id}, ${project.title}, ${project.dimensionsId})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProjects.length} projects`);

    return {
      createTable,
      projects: insertedProjects,
    };
  } catch (error) {
    console.error("Error seeding projects:", error);
    throw error;
  }
}

async function seedColorsUsed() {
  try {
    // Create the "flossColorsUsed" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS flossColorsUsed (
        projectId INT FOREIGN KEY REFERENCES projects (id),
        flossColorId INT FOREIGN KEY REFERENCES flossColors (id),
        row INT NOT NULL,
        column INT NOT NULL,
        CONSTRAINT colorsUsedId PRIMARY KEY (projectId, flossColorId),
      );
    `;

    console.log(`Created "flossColorsUsed" table`);

    // Insert data into the "projects" table
    const insertedFlossColorsUsed = await Promise.all(
      flossColorsUsed.map(async (usedColor) => {
        return client.sql`
        INSERT INTO flossColorsUsed (projectId, flossColorId, row, column)
        VALUES (${usedColor.projectId}, ${usedColor.flossColorId}, ${usedColor.row}, ${usedColor.column} )
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedFlossColorsUsed.length} flossColorsUsed`);

    return {
      createTable,
      usedFlossColors: insertedFlossColorsUsed,
    };
  } catch (error) {
    console.error("Error seeding flossColorsUsed:", error);
    throw error;
  }
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCompanies();
    await seedProjectDimensions();
    await seedFlossColors();
    await seedProjects();
    await seedColorsUsed();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
