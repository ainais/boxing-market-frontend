import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * ESLint flat config for Next.js 16 + TypeScript.
 */
const config = [...nextVitals, ...nextTypeScript];

export default config;
