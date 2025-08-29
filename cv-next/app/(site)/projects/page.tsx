import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx";
import { getProjectSlugs, getProjectSource } from "@/lib/content";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

// Nota: cambio clave: params es Promise<{ slug: string }>
export default async function ProjectDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

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
