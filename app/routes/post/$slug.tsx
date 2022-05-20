import { HeadersFunction, json, LoaderFunction, useLoaderData } from "remix";
import { sanity } from "~/lib/sanity";
import { Post } from "~/types/models";

interface LoaderData {
    post: Post;
}

export const loader: LoaderFunction = async ({ params }) => {
    const posts = await sanity.fetch(`
        *[_type == 'post' && slug.current == '${params.slug}'] {
            _id,
            title
        }
    `);
    return json(
        { post: posts[0] },
        {
            headers: {
                "Cache-Control": `public, max-age=${
                    60 * 60 * 24 * 30
                }, s-maxage=${60 * 60 * 24 * 30}`,
            },
        }
    );
};

export const headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, max-age=${60 * 60 * 24 * 30}, s-maxage=${
            60 * 60 * 24 * 30
        }`,
    };
};

export default function Post() {
    const { post } = useLoaderData<LoaderData>();

    if (!post) {
        return <div className="p-10">This post doesnt exist</div>;
    }

    return <div className="p-10">{post.title}</div>;
}
