const switchOptions = [
  {
    id: "lineNumbers",
    title: "Line Numbers",
    trueValue: true,
    falseValue: false,
    value: true,
  },
  {
    id: "readOnly",
    title: "Read Only",
    trueValue: false,
    falseValue: true,
    value: true,
  },
];
const selectOptions = [
  {
    id: "tabSize",
    title: "Tab Size",
    options: ["2", "4", "6", "8"],
    value: 2,
  },
  {
    id: "mode",
    title: "Language",
    options: ["javascript", "xml", "markdown", "php", "python", "ruby"],
    value: "javascript",
  },
  {
    id: "theme",
    title: "Select themes",
    options: [
      "default",
      "zenburn",
      "solarized",
      "rubyblue",
      "paraiso-dark",
      "midnight",
      "material",
      "hopscotch",
      "twilight",
    ],
    value: "zenburn",
  },
];

const defaultValues = {
  basic: `const component = {
    name: 'bankpro',
    author: 'RedQ Team',
    website: 'https://bankpro.redq.io/'
};`,
  javascript: `const component = {
    name: 'bankpro',
    author: 'RedQ Team',
    website: 'https://bankpro.redq.io/'
};`,
  markdown: `# bankpro
###This is a RedQ Team production
[have a look](https://bankpro.redq.io/)
  `,
  xml: `<isomprphic>
    <to>Tove</to>
    <name>bankpro</name>
    <author>RedQ Team</author>
    <website>bankpro.redq.io</website>
</isomprphic>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://bankpro.redq.io/</h1>
 <p>This is a RedQ Team production</p>
 <a href="https://bankpro.redq.io/">visit ou site</a>
 </body>
</html>
`,
  python: `
print("bankpro")
print("This is a RedQ Team production")
print("visit us https://bankpro.redq.io ")
`,
  ruby: `rint "bankpro"
print "This is a RedQ Team production"
print "visit us https://bankpro.redq.io "
`,
};

export { switchOptions, selectOptions, defaultValues };
