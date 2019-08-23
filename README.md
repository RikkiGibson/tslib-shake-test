# tslib shake test

This demonstrates that tree-shaking works on `import * as tslib_1` style imports.

1. run `npm install`. You should see webpack output comparing tree-shaken es2015 code and non-tree-shaken commonjs code.
2. optionally, you can run `npx tsc` to produce `index.js` which you can inspect and see the import-star syntax used in the emitted js code.

My conclusion from this is that tree-shaking of tslib imports *should* just work, but it can get hairy and if you're triaging bundle size in your project, remember to take a look at the webpack flags `--display-modules` and `--display-used-exports`.
