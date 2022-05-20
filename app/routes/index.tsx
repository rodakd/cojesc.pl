import { sanity } from "~/lib/sanity";
import { HeadersFunction, Link, LoaderFunction, useLoaderData } from "remix";
import { H2 } from "~/components/typography";
import { Post } from "~/types/models";

interface LoaderData {
    posts: Post[];
}

export const loader: LoaderFunction = async () => {
    const posts = await sanity.fetch(`
        *[_type == 'post'] {
            _id,
            title,
            slug
        }
    `);
    return { posts };
};

export const headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 10}`,
    };
};

export default function Index() {
    const { posts } = useLoaderData<LoaderData>();

    return (
        <div>
            <div className="p-10">
                <H2>blog pupu</H2>
                <ul className="mt-5 text-lg">
                    {posts.map((p) => (
                        <li key={p._id} className="underline">
                            <Link to={`post/${p.slug.current}`}>{p.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
