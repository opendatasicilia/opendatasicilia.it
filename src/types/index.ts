import { IGatsbyImageData } from "gatsby-plugin-image";

interface WpPost {
  title: string;
  content: string;
  date: string;
  categories: {
    nodes: WpCategory[];
  };
  excerpt?: string;
  slug: string;
  uri: string;
  author: WpPostAuthor;
  featuredImage?: WpImage;
  comments: {
    nodes: any[];
  };
}

interface WpCategory {
  slug: string;
  name: string;
}

interface WpTag {
  slug: string;
  name: string;
}

interface WpUser {
  slug: string;
  name: string;
  description: string;
  avatar: {
    url: string;
  };
}

interface WpPostAuthor {
  node: {
    name: string;
    slug: string;
  };
}

interface WpImage {
  node: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

interface AllWpPostData {
  allWpPost: {
    nodes: WpPost[];
  };
}

interface GraphQLResult<T> {
  data?: T;
  errors?: any;
}

interface TemplateProps {
  data: any;
  pageContext?: any;
}

export {
  WpPost,
  WpCategory,
  WpTag,
  WpUser,
  WpPostAuthor,
  WpImage,
  AllWpPostData,
  GraphQLResult,
  TemplateProps,
};
