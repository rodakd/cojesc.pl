import * as React from "react";

import { PortableText, PortableTextProps } from "@portabletext/react";

type Props = {
    value: PortableTextProps["value"];
};

const components: PortableTextProps["components"] = {
    block: {
        normal: ({ children }) => <p className="mb-5 font-light">{children}</p>,
    },
};

export const BlockContent: React.FC<Props> = (props) => {
    return <PortableText value={props.value} components={components} />;
};
