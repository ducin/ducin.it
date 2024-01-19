const { z } = require("zod");

const Post = z.object({
  title: z.string(),
  keywords: z.array(z.string()),
  description: z.string(),
  publishedDate: z.string(),
  sourceFile: z.string(),
  thumbnailFile: z.string(),
  readingTime: z.string(),
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
