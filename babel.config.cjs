module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { chrome: '100' }, modules: false }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};