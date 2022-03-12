import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanity = sanityClient({
    projectId: "3m1u2it7",
    dataset: "production",
    useCdn: true,
});

export const imageUrlFor = (source: SanityImageSource) =>
    imageUrlBuilder(sanity).image(source);
