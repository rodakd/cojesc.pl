import * as React from "react";

import { Link } from "remix";

type Props = {
    linkTo: string;
    background: JSX.Element;
    title: string;
    rightTopText?: string;
};

export const GridItem: React.FC<Props> = (props) => {
    return (
        <Link
            to={props.linkTo}
            className="transition-all duration-500 h-52 w-96 relative rounded-lg overflow-hidden drop-shadow-lg hover:drop-shadow-xl hover:opacity-80"
        >
            {props.background}
            <span className="absolute bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.60)] w-full py-3 text-white">
                {props.title}
            </span>
            {props.rightTopText && (
                <span className="absolute top-3 right-3 text-white">
                    <span className="text-shadow">{props.rightTopText}</span>
                </span>
            )}
        </Link>
    );
};
