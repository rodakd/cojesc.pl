import * as React from "react";

import { Link } from "remix";
import { getSlug } from "~/lib/slugs";
import { Post } from "~/types/models";
import { SanityImg } from "./SanityImg";

type Props = {
    post: Post;
};

export const PostHeader: React.FC<Props> = ({ post }) => {
    return (
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
    );
};
