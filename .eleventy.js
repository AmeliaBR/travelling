module.exports = {
  pathPrefix : "narrowboating-november-2018", // GitHub pages directory / repo name
  dir: {
    input: "source",
    output: "docs", // because GitHub Pages
    includes: "_templates",
  },
  dataTemplateEngine: false, // global data files are plain JSON
}