import * as React from "react";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { imageUrlFor } from "~/lib/sanity";
import { HTMLProps } from "~/types/common";

type Props = {
    src: SanityImageSource;
} & HTMLProps<HTMLImageElement>;

export const SanityImg: React.FC<Props> = ({ src, ...props }) => {
    return <img src={imageUrlFor(src).url()} {...props} />;
};
