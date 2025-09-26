// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Callout from "./components/mdx/Callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout, // ahora estará disponible en los .mdx
  };
}
