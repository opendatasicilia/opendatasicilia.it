import path from "path";
import { CreatePagesArgs } from "gatsby";

const createPosts = async (
  graphql: CreatePagesArgs["graphql"],
  createPage: Function
) => {
  const result: GraphQLResult<{ allWpPost: { nodes: WpPost[] } }> =
    await graphql(`
      query {
        allWpPost {
          nodes {
            slug
            uri
          }
        }
      }
    `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data!.allWpPost.nodes;
  posts.forEach((node) => {
    createPage({
      path: node.uri,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: node.slug,
        uri: node.uri,
      },
    });
  });
};

const createCategories = async (
  graphql: CreatePagesArgs["graphql"],
  createPage: Function
) => {
  const result: GraphQLResult<{ allWpCategory: { nodes: WpCategory[] } }> =
    await graphql(`
      query {
        allWpCategory {
          nodes {
            slug
            name
          }
        }
      }
    `);

  if (result.errors) {
    throw result.errors;
  }

  const categories = result.data!.allWpCategory.nodes;
  categories.forEach((category) => {
    createPage({
      path: `/category/${category.slug}`,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        name: category.name,
        slug: category.slug,
      },
    });
  });
};

const createTags = async (
  graphql: CreatePagesArgs["graphql"],
  createPage: Function
) => {
  const result: GraphQLResult<{ allWpTag: { nodes: WpTag[] } }> =
    await graphql(`
      query {
        allWpTag {
          nodes {
            slug
            name
          }
        }
      }
    `);

  if (result.errors) {
    throw result.errors;
  }

  const tags = result.data!.allWpTag.nodes;
  tags.forEach((tag) => {
    createPage({
      path: `/tag/${tag.slug}`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        name: tag.name,
        slug: tag.slug,
      },
    });
  });
};

const createAuthors = async (
  graphql: CreatePagesArgs["graphql"],
  createPage: Function
) => {
  const result: GraphQLResult<{ allWpUser: { nodes: WpUser[] } }> =
    await graphql(`
      query {
        allWpUser {
          nodes {
            slug
          }
        }
      }
    `);

  if (result.errors) {
    throw result.errors;
  }

  const users = result.data!.allWpUser.nodes;
  users.forEach((user) => {
    createPage({
      path: `/author/${user.slug}`,
      component: path.resolve(`./src/templates/user.tsx`),
      context: {
        slug: user.slug,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  try {
    await Promise.all([
      createPosts(graphql, createPage),
      createCategories(graphql, createPage),
      createTags(graphql, createPage),
      createAuthors(graphql, createPage),
    ]);
  } catch (error) {
    console.error("Error creating pages: ", error);
  }
};
