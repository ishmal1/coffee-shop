import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Base ESLint configuration that you're importing
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  "next", // Additional base extend
  "eslint:recommended", // Including eslint recommended rules
];

export default {
  extends: eslintConfig,
  globals: {
    React: "readonly", // Define globals
  },
  rules: {
    "no-unused-vars": "warn", // Warn on unused variables
    "no-console": "warn", // Warn on console logs,
  },
};
