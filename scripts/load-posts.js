const { z } = require("zod");

const Post = z.object({
  sourceFile: z.string(),
  title: z.string(),
  keywords: z.array(z.string()),
  description: z.string(),
  publishedDate: z.string(),
  readingTime: z.string(),
  coverImage: z.object({
    URL: z.string(),
    title: z.string(),
    authorURL: z.string(),
    author: z.string(),
  }),
  coverImageFilename: z.string(),
});

const loadPosts = () => {
    const posts = require('../data/posts.json')
    return posts.map(raw => {
        const parsed = Post.parse(raw)
        const githubURL = `https://github.com/ducin/ducin.it/blob/gh-pages/posts/${raw.sourceFile}.md`

        return {
            ...parsed,
            githubURL
        }
    })
}

module.exports = {
    loadPosts
}
