import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "../../../components/mdx";
import { getProjectSlugs, getProjectSource } from "../../../lib/content";

// Genera las rutas estáticas desde /content/projects/*.mdx
export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

// Nota: Tipado compatible: objeto O promesa de objeto
type Params = { slug: string };

export default async function ProjectDetailPage(
  props: { params: Params | Promise<Params> }
) {
  const { slug } = await Promise.resolve(props.params); // Nota clave

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
