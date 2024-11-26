import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./configs/schema.js",

  //driver: "pglite",
  dbCredentials: {
    url: "postgresql://video-db_owner:YdmSU8Vkats6@ep-shrill-heart-a2s8m7xh.eu-central-1.aws.neon.tech/video-db?sslmode=require",
  },

  // extensionsFilters: ["postgis"],
  // schemaFilter: "public",
  // tablesFilter: "*",

  // introspect: {
  //   casing: "camel",
  // },

  // migrations: {
  //   prefix: "timestamp",
  //   table: "__drizzle_migrations__",
  //   schema: "public",
  // },

  // entities: {
  //   roles: {
  //     provider: '',
  //     exclude: [],
  //     include: []
  //   }
  // }

  // breakpoints: true,
  // strict: true,
  // verbose: true,
});
