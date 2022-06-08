import { sanity } from "~/lib/sanity";
import { LoaderFunction, useLoaderData } from "remix";
import { Category } from "~/types/models";
import { getSlug } from "~/lib/slugs";
import { GridItem } from "~/components/GridItem";

interface LoaderData {
    categories: Category[];
}

export const loader: LoaderFunction = async () => {
    const categories = await sanity.fetch(`
        *[_type == 'category'] {
            _id,
            title,
            mainImage
        }
    `);
    return { categories };
};

export default function Index() {
    const { categories } = useLoaderData<LoaderData>();

    return (
        <div className="max-w-[1235px] mx-auto">
            <h4 className="my-5 text-3xl">Kategorie</h4>
            <div className="grid-cols-3 grid gap-10 justify-center">
                {categories.map((c) => {
                    return (
                        <GridItem
                            key={c._id}
                            linkTo={`/kategorie/${getSlug(c.title)}`}
                            background={
                                <div
                                    className={`w-full h-full bg-gray-200`}
                                ></div>
                            }
                            title={c.title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
