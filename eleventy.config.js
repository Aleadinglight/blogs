export default async function(eleventyConfig) {
	// Configure Eleventy
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.setLayoutResolution(false);

  return {
    dir: {
      input: "src",      // your input directory (adjust if different)
      output: "_site",   // the build output directory
    }
  }
};