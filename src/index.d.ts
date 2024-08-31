declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

declare module "react-use-flexsearch" {
  type FlexSearchIndex = any;

  interface FlexSearchOptions {
    [key: string]: any;
  }

  export function useFlexSearch(
    query: string,
    index: FlexSearchIndex,
    store: object,
    options?: FlexSearchOptions
  ): any[];
}
