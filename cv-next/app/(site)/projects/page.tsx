import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "../../../components/mdx";
import { getProjectSlugs, getProjectSource } from "../../../lib/content";
import type { PageProps } from "next"; // Nota: Tipado oficial

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

/**
 * En algunos entornos (CI) Next tipa `params` como `Promise<any>`.
 * Usamos PageProps con `Promise<{slug:string}>` y resolvemos con `await`.
 */
export default async function ProjectDetailPage(
  { params }: PageProps<Promise<{ slug: string }>>
) {
  const { slug } = await params; // Nota clave: await params

  const { source, data } = getProjectSource(slug);

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
    components: MDXComponents,
  });

  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="mb-2">{data.title}</h1>
      {content}
    </article>
  );
}
