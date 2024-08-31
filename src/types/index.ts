interface WpPost {
  title: string;
  content: string;
  slug: string;
  uri: string;
  author: WpPostAuthor;
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
  };
}

interface WpTag {
  slug: string;
  name: string;
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
