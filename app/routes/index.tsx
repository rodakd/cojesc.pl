import { sanity } from "~/lib/sanity";
import { Link, LoaderFunction, useLoaderData } from "remix";
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

export default function Index() {
    const { posts } = useLoaderData<LoaderData>();

    return (
        <div>
            <div className="p-10">
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
