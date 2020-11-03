import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://allynalda.ghost.io',
    key: '804a8457725cbbf99f9b8c4fee',
    version: "v3"
  });

  export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all",
        include: "tags,authors"
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPages() {
    return await api.pages
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }