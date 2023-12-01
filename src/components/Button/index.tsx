import React from "react";

type Props = {
    text: string;
    sizefull?: boolean;
    onClick?: () => void;
};

export const Button = ({ text, sizefull, onClick }: Props) => (
    <button
        onClick={onClick}
        type="button"
        className={`${
            sizefull ? "w-full" : " w-max"
        } flex justify-center py-2 px-10 rounded-full bg-purple-600 text-white text-lg font-semibold transition hover:bg-purple-800`}
    >
        {text}
    </button>
);
