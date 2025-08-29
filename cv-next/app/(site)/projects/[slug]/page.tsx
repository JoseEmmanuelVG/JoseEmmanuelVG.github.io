// app/(site)/projects/[slug]/page.tsx
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "../../../../components/mdx";
import { getProjectSlugs, getProjectSource } from "../../../../lib/content";


export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

type Params = { slug: string };

// Nota: Acepta objeto O promesa y resuélvelo con Promise.resolve
export default async function ProjectDetailPage(
  props: { params: Params | Promise<Params> }
) {
  const { slug } = await Promise.resolve(props.params);

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
