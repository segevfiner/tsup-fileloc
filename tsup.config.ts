import { defineConfig } from 'tsup';
//@ts-ignore
import fileloc from 'esbuild-plugin-fileloc';

export default defineConfig(async () => {
    return {
      entry: ['src/index.ts'],
      sourcemap: true,
      esbuildPlugins: [fileloc.filelocPlugin({ rootDir: __dirname })],
    };
  });
