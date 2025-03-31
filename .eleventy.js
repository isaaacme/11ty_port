const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch CSS files for changes during serve
  eleventyConfig.addWatchTarget("./src/assets/css/");
 
  // Minify and bundle CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addCollection("navigation", function(collectionApi) {
    return [
      { title: "הומפייג׳", url: "/" },
      {
        title: "שירותים",
        url: "/services/",
        children: collectionApi.getFilteredByTag("service").map(item => ({
          title: item.data.title,
          url: item.url
        }))
      },
      {
        title: "פרויקטים",
        url: "/projects/",
        children: collectionApi.getFilteredByTag("project").map(item => ({
          title: item.data.title,
          url: item.url
        }))
      },
      { title: "חנות", url: "/shop/" },
      { title: "אודות", url: "/about/" },
    ];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
