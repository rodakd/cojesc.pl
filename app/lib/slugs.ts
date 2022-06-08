import { capitalize } from "./strings";

export const getSlug = (str: string) => {
    return str.toLowerCase().split(" ").join("-");
};

export const getNameFromSlug = (slug?: string) => {
    if (slug) {
        return capitalize(slug).split("-").join(" ");
    }
};
