const presets = [
    [
      "@babel/env"
    ],
  ];

  const plugins = [
    ["transform-react-jsx", { "pragma":"h" }]
  ];
  
  module.exports = { presets, plugins };