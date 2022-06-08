import { sanity } from "~/lib/sanity";
import { LoaderFunction, useLoaderData } from "remix";
import { Post } from "~/types/models";
import { GridItem } from "~/components/GridItem";
import { SanityImg } from "~/components/SanityImg";
import { getNameFromSlug } from "~/lib/slugs";

interface LoaderData {
    posts: Post[];
    categoryTitle: string;
}

export const loader: LoaderFunction = async ({ params }) => {
    const categoryTitle = getNameFromSlug(params.slug);

    const posts = await sanity.fetch(`
        *[_type == 'post' && categories[]->.title match "${categoryTitle}"] {
            _id,
            title,
            slug,
            mainImage,
            publishedAt
        } | order(publishedAt desc)
    `);

    return { posts, categoryTitle };
};

export default function Category() {
    const { posts, categoryTitle } = useLoaderData<LoaderData>();

    return (
        <div className="max-w-[1235px] mx-auto">
            <h4 className="my-5 text-3xl">Kategoria "{categoryTitle}"</h4>
            <div className="grid-cols-3 grid gap-10 justify-center">
                {posts.map((p) => {
                    return (
                        <GridItem
                            key={p._id}
                            linkTo={`/post/${p.slug.current}`}
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
