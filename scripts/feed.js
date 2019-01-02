const fs = require('fs')
const Feed = require('feed').Feed

const posts = require('./posts.json')

const feed = new Feed({
  title: "Tomasz Ducin",
  description: "Tomasz Ducin Blog - Independent Consultant, Architect & Trainer. JavaScript, TypeScript, Angular, React, Redux, RxJS, Architecture, Design Patterns.",
  id: "ducin.it",
  link: "http://ducin.it",
  image: "http://ducin.it/images/tomasz-ducin-logo-zolte-300.png",
  favicon: "http://ducin.it/images/td-logo-zolte-80.png",
  copyright: "All rights reserved 2017-2019, Tomasz Ducin",
  generator: "feed3r", // optional, default = 'Feed for Node.js'
  feedLinks: {
    // json: "http://ducin.it/feed.json",
    atom: "http://ducin.it/feed.xml"
  },
  author: {
    name: "Tomasz Ducin",
    email: "tomasz@ducin.it",
    link: "http://ducin.it"
  }
});

posts.forEach(post => {
  feed.addItem({
    title: post.title,
    id: post.url,
    link: post.url,
    description: post.description,
    content: post.content,
    author: [
      {
        name: "Tomasz Ducin",
        email: "tomasz@ducin.it",
        link: "http://ducin.it"
      }
    ],
    date: new Date(post.date),
    image: post.image
  });
});

feed.addCategory("JavaScript");
feed.addCategory("TypeScript");
feed.addCategory("React");
feed.addCategory("Angular");
feed.addCategory("Architecture");

// feed.addContributor({
//   name: "Johan Cruyff",
//   email: "johancruyff@example.com",
//   link: "https://example.com/johancruyff"
// });

// Output: RSS 2.0
fs.writeFileSync('./feed.xml', feed.rss2())

// Output: Atom 1.0
// fs.writeFileSync('./feed.xml', feed.atom1())
