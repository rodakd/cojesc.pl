import { sanity } from "~/lib/sanity";
import { LoaderFunction, useLoaderData } from "remix";
import { Post } from "~/types/models";
import { SanityImg } from "~/components/SanityImg";
import { GridItem } from "~/components/GridItem";

interface LoaderData {
    posts: Post[];
}

export const loader: LoaderFunction = async () => {
    const posts = await sanity.fetch(`
        *[_type == 'post'] {
            _id,
            title,
            slug,
            mainImage,
            publishedAt
        } | order(publishedAt desc)
    `);
    return { posts };
};

export default function Index() {
    const { posts } = useLoaderData<LoaderData>();

    return (
        <div className="max-w-[1235px] mx-auto">
            <h4 className="my-5 text-3xl">Najnowsze</h4>
            <div className="grid-cols-3 grid gap-10 justify-center">
                {posts.map((p) => {
                    return (
                        <GridItem
                            key={p._id}
                            linkTo={`post/${p.slug.current}`}
                            background={
                                <SanityImg
                                    src={p.mainImage}
                                    className="w-full h-full"
                                />
                            }
                            title={p.title}
                            rightTopText={new Date(
                                p.publishedAt
                            ).toLocaleDateString()}
                        />
                    );
                })}
            </div>
        </div>
    );
}
