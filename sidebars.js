/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Tutorials",
      items: [
        "lua/intro",
        {
          type: "category",
          label: "ElementAPI",
          items: [
            {
              type: "autogenerated",
              dirName: "lua/elements", // Generate sidebar slice from docs/tutorials/easy
            },
          ],
        },
      ],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
