import { PortableTextProps } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: SanityImageSource;
    publishedAt: string;
    body: PortableTextProps["value"];
    categories: Category[];
    author: Author;
}

export interface Author {
    _id: string;
    name: string;
    image: SanityImageSource;
}

export interface Category {
    _id: string;
    title: string;
    mainImage: SanityImageSource;
}
