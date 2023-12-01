import React from "react";

type Props = {
    text: string;
};

export const Title = ({ text }: Props) => {
    return <span className="text-2xl font-semibold">{text}</span>;
};
