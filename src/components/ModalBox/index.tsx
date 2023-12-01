import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Title } from "../Title";
import box1 from "../../assets/box1.svg";
import box2 from "../../assets/box2.svg";
import box3 from "../../assets/box3.svg";
import box4 from "../../assets/box4.svg";
import box5 from "../../assets/box-money.svg";
import boxDefault from "../../assets/box-default.svg";
import { DescriptionBox } from "./DescriptionBox";

type Props = {
    isOpen: boolean;
    isClose: () => void;
};

type PropsCardBox = {
    title: string;
    img: string;
    onClick: () => void;
};

const CardBox = ({ title, img, onClick }: PropsCardBox) => (
    <div
        className="w-full flex gap-1 font-semibold flex-col cursor-pointer transition hover:scale-105"
        onClick={onClick}
    >
        <img src={img} className="w-full rounded" />
        <span>{title}</span>
    </div>
);

export const ModalBox = ({ isOpen, isClose }: Props) => {
    const [openDescriptionBox, setOpenDescriptionBox] = useState(false);
    const [dataInfo, setDataInfo] = useState({ img: "", title: "" });
    if (!isOpen) return null;

    const handleClick = (img: string, title: string) => {
        setOpenDescriptionBox(true);
        setDataInfo({ img: img, title: title });
    };

    return (
        <>
            <div className="flex justify-end z-10 fixed top-0 left-0 h-screen w-screen bg-customBgOpacity animate-show">
                <div className="h-screen w-customModal bg-white p-6 flex flex-col animate-drag">
                    <div className="flex items-center gap-4 mb-4">
                        <IoCloseOutline
                            onClick={isClose}
                            className="h-10 w-10 text-neutral-500 cursor-pointer transition hover:scale-110"
                        />
                        <Title text="Caixinhas" />
                    </div>

                    <div className="mt-2">
                        <span className="font-semibold text-xl">
                            Qual é o seu objetivo para essa Caixinha?
                        </span>
                        <div className="grid grid-cols-2 w-full gap-4 mt-2">
                            <CardBox
                                title="Fazer uma viagem"
                                img={box1}
                                onClick={() =>
                                    handleClick(box1, "Fazer uma viagem")
                                }
                            />
                            <CardBox
                                title="Reformar a casa"
                                img={box2}
                                onClick={() =>
                                    handleClick(box2, "Reformar a casa")
                                }
                            />
                            <CardBox
                                title="Focar na carreira"
                                img={box3}
                                onClick={() =>
                                    handleClick(box3, "Focar na carreira")
                                }
                            />
                            <CardBox
                                title="Meu sonho de consumo"
                                img={box4}
                                onClick={() =>
                                    handleClick(box4, "Meu sonho de consumo")
                                }
                            />
                            <CardBox
                                title="Reserva de emergência"
                                img={box5}
                                onClick={() =>
                                    handleClick(box5, "Reserva de emergência")
                                }
                            />
                            <CardBox
                                title="Outro objetivo"
                                img={boxDefault}
                                onClick={() =>
                                    handleClick(boxDefault, "Outro objetivo")
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionBox
                isClose={() => setOpenDescriptionBox(false)}
                isOpen={openDescriptionBox}
                dataInfo={dataInfo}
            />
        </>
    );
};
