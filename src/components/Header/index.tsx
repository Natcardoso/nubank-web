import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GrCircleQuestion } from "react-icons/gr";
import PhotoProfile from "../../assets/photo-profile.png";

export const Header = () => {
    return (
        <header className="bg-white h-14 flex justify-end items-center gap-3 pr-4">
            <FiEye className="w-8 h-8" />
            <GrCircleQuestion className="w-7 h-7" />
            <FaRegEnvelope className="w-7 h-7" />
            <img src={PhotoProfile} className="h-12 w-12 rounded-full ml-4" />
        </header>
    );
};
