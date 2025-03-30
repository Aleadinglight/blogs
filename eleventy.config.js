export default async function(eleventyConfig) {
	// Configure Eleventy
  return {
    dir: {
      input: "src",      // your input directory (adjust if different)
      output: "_site",   // the build output directory
    }
  }
};