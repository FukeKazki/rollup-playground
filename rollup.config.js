import ts from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.ts",
  output: {
    file: "index.js"
  },
  plugins: [
    ts({
      tsconfig: {
        target: "esnext"
      }
    }),
    terser()
  ]
}