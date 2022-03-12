export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
}

export interface Author {
    _id: string;
}

export interface Category {
    _id: string;
}
