import { DiscussionEmbed } from "disqus-react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { BlockContent } from "~/components/BlockContent";
import { PostHeader } from "~/components/PostHeader";
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
            <div className="w-[780px] mx-auto max-w-full p-10 pt-0">
                <SanityImg
                    src={post.mainImage}
                    className="w-full rounded-lg shadow-lg max-w-full"
                />
                <PostHeader post={post} />
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
