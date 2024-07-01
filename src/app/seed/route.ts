import bcrypt from "bcrypt";
import { VercelPoolClient, db } from "@vercel/postgres";
import {
  companies,
  flossColors,
  flossColorsUsed,
  projectDimensions,
  projects,
  users,
} from "@/data/seed";

async function seedUsers(client: VercelPoolClient) {
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

async function seedCompanies(client: VercelPoolClient) {
  try {
    // Create the "companies" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS companies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        producttype VARCHAR(100) NOT NULL,
        website VARCHAR(255)
      );
    `;

    console.log(`Created "companies" table`);

    const insertedCompanies = await Promise.all(
      companies.map(async (company) => {
        return client.sql`
        INSERT INTO companies (id, name, producttype, website)
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

async function seedProjectDimensions(client: VercelPoolClient) {
  try {
    // Create the "projectDimensions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projectdimensions (
        id SERIAL PRIMARY KEY,
        height INT NOT NULL,
        width INT NOT NULL,
        display VARCHAR(255)
      );
    `;

    console.log(`Created "projectdimensions" table`);

    // Insert data into the "projects" table
    const insertedProjectDimensions = await Promise.all(
      projectDimensions.map(async (dimensions) => {
        return client.sql`
        INSERT INTO projectdimensions (id, height, width, display)
        VALUES (${dimensions.id}, ${dimensions.height}, ${dimensions.width}, ${dimensions.display})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProjectDimensions.length} projectdimensions`);

    return {
      createTable,
      projectDimensions: insertedProjectDimensions,
    };
  } catch (error) {
    console.error("Error seeding projectdimensions:", error);
    throw error;
  }
}

async function seedFlossColors(client: VercelPoolClient) {
  try {
    // Create the "flosscolors" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS flosscolors (
        id SERIAL PRIMARY KEY,
        companyidentifier VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        hex VARCHAR(10) NOT NULL,
        companyid INT,
        FOREIGN KEY (companyid) REFERENCES companies(id)
      );
    `;

    console.log(`Created "flosscolors" table`);

    // Insert data into the "projects" table
    const insertedFlossColors = await Promise.all(
      flossColors.map(async (color) => {
        return client.sql`
        INSERT INTO flosscolors (id, companyidentifier, name, hex, companyid)
        VALUES (${color.id}, ${color.companyIdentifier}, ${color.name}, ${color.hex}, ${color.companyId})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedFlossColors.length} flosscolors`);

    return {
      createTable,
      flossColors: insertedFlossColors,
    };
  } catch (error) {
    console.error("Error seeding flosscolors:", error);
    throw error;
  }
}

async function seedProjects(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "projects" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        dimensionid INT NOT NULL,
        creatorid UUID,
        FOREIGN KEY (creatorid) REFERENCES users(id)
      );
    `;

    console.log(`Created "projects" table`);

    // Insert data into the "projects" table
    const insertedProjects = await Promise.all(
      projects.map(async (project) => {
        return client.sql`
        INSERT INTO projects (title, dimensionid, creatorid)
        VALUES (${project.title}, ${project.dimensionsId}, ${project.creatorId})
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

async function seedColorsUsed(client: VercelPoolClient) {
  try {
    // Create the "flosscolorsused" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS flosscolorsused (
        projectid INT NOT NULL,
        flosscolorid INT NOT NULL,
        rowid INT NOT NULL,
        columnid INT NOT NULL,
        FOREIGN KEY (projectid) REFERENCES projects(id),
        FOREIGN KEY (flosscolorid) REFERENCES flosscolors(id),
        PRIMARY KEY (projectid, flosscolorid, rowid, columnid)
      );
    `;

    console.log(`Created "flosscolorsused" table`);

    // Insert data into the "projects" table
    const insertedFlossColorsUsed = await Promise.all(
      flossColorsUsed.map(async (usedColor) => {
        return client.sql`
        INSERT INTO flosscolorsused (projectid, flosscolorid, rowid, columnid)
        VALUES (${usedColor.projectId}, ${usedColor.flossColorId}, ${usedColor.rowId}, ${usedColor.columnId} );`;
      })
    );

    console.log(`Seeded ${insertedFlossColorsUsed.length} flosscolorsused`);

    return {
      createTable,
      usedFlossColors: insertedFlossColorsUsed,
    };
  } catch (error) {
    console.error("Error seeding flosscolorsused:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const client: VercelPoolClient = await db.connect();
    await seedUsers(client);
    await seedCompanies(client);
    await seedProjectDimensions(client);
    await seedFlossColors(client);
    await seedProjects(client);
    await seedColorsUsed(client);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json(
      { error, message: "Database seed error" },
      { status: 500 }
    );
  }
}
