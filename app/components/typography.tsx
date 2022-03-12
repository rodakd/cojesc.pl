import React from "react";
import clsx from "clsx";

type TitleProps = {
    variant?: "primary" | "secondary";
    as?: React.ElementType;
    className?: string;
    id?: string;
} & (
    | { children: React.ReactNode }
    | {
          dangerouslySetInnerHTML: {
              __html: string;
          };
      }
);

const fontSize = {
    h1: "leading-tight text-4xl md:text-5xl",
    h2: "leading-tight text-3xl md:text-4xl",
    h3: "text-2xl font-medium md:text-3xl",
};

const titleColors = {
    primary: "text-black dark:text-white",
    secondary: "text-gray-400 dark:text-blueGray-500",
};

function Heading({
    variant = "primary",
    size,
    as,
    className,
    ...rest
}: TitleProps & { size: keyof typeof fontSize }) {
    const Tag = as ?? size;
    return (
        <Tag
            className={clsx(fontSize[size], titleColors[variant], className)}
            {...rest}
        />
    );
}

function H1(props: TitleProps) {
    return <Heading {...props} size="h1" />;
}

function H2(props: TitleProps) {
    return <Heading {...props} size="h2" />;
}

function H3(props: TitleProps) {
    return <Heading {...props} size="h3" />;
}

export { H1, H2, H3 };
