import type { MDXComponents } from "mdx/types";
import Callout from "./components/mdx/Callout";
import LinkGrid from "./components/mdx/LinkGrid";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { Callout, LinkGrid, ...components };
}
