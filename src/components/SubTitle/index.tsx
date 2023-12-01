import React from "react";

type Props = {
    text: string;
    color: string;
    size: string;
    fontWeight: string;
};

export const SubTitle = ({ text, color, size, fontWeight }: Props) => {
    return <div className={`${fontWeight}  ${color} ${size}`}>{text}</div>;
};
