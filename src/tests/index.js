import * as JasmineDOMModule from '@testing-library/jasmine-dom';

// Compatibilidad: según cómo se resuelva el módulo, los matchers vienen en .default o directamente
const JasmineDOM = JasmineDOMModule.default || JasmineDOMModule;

beforeEach(() => {
  jasmine.addMatchers(JasmineDOM);
});

// Carga automáticamente todos los *.spec.js / *.spec.jsx dentro de src/
const context = import.meta.webpackContext('..', {
  recursive: true,
  regExp: /\.spec\.jsx?$/,
});
context.keys().forEach(context);