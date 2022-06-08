import { DiscussionEmbed } from "disqus-react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { BlockContent } from "~/components/BlockContent";
import { SanityImg } from "~/components/SanityImg";
import { sanity } from "~/lib/sanity";
import { getSlug } from "~/lib/slugs";
import { Post } from "~/types/models";

interface LoaderData {
    post: Post | undefined;
}

export const loader: LoaderFunction = async ({ params }) => {
    const posts = await sanity.fetch(`
        *[_type == 'post' && slug.current == '${params.slug}'] {
            _id,
            title,
            author->,
            body,
            categories[]->,
            mainImage,
            publishedAt,
            slug
        }
    `);
    return { post: posts[0] };
};

export default function Post() {
    const { post } = useLoaderData<LoaderData>();

    if (!post) {
        return <div className="p-10">Ten post nie istnieje</div>;
    }

    return (
        <div className="w-full pt-10 px-10">
            <div className="w-[600px] mx-auto max-w-full">
                <SanityImg
                    src={post.mainImage}
                    className="w-full rounded-lg shadow-lg max-w-full"
                />

                <div className="my-5 flex flex-col">
                    <h1 className="text-2xl mb-1">{post.title}</h1>
                    <div className="flex items-center gap-x-2 mb-3">
                        <SanityImg
                            src={post.author.image}
                            className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-sm">{post.author.name}</span>
                    </div>
                    {post.categories.length > 0 && (
                        <div className="text-xs font-light">
                            <span>Kategorie: </span>
                            {post.categories.map((c, idx) => (
                                <Link
                                    key={idx}
                                    to={`/kategorie/${getSlug(c.title)}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    {c.title}
                                    {idx !== post.categories.length - 1 && ", "}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <BlockContent value={post.body} />

                <DiscussionEmbed
                    shortname="cojesc"
                    config={{
                        url: `https://cojesc.rodak.io/post/${post.slug.current}`,
                        identifier: post._id,
                        title: post.title,
                    }}
                />
            </div>
        </div>
    );
}
