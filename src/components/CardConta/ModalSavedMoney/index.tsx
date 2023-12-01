import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { Title } from "../../Title";
import { SubTitle } from "../../SubTitle";
import IconMoney from "../../../assets/icon-money.svg";
import { FiChevronRight } from "react-icons/fi";

type Props = {
    isOpen: boolean;
    isClose: () => void;
};

export const ModalSavedMoney = ({ isOpen, isClose }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="flex justify-end z-10 absolute top-0 left-0 h-screen w-screen bg-customBgOpacity animate-show">
            <div className="h-screen w-4/12 bg-white p-6 animate-drag">
                <div className="flex justify-between mb-28">
                    <div className="flex items-center gap-4">
                        <IoCloseOutline
                            onClick={isClose}
                            className="h-10 w-10 text-neutral-500 cursor-pointer transition hover:scale-110"
                        />
                        <Title text="Dinheiro guardado" />
                    </div>
                    <GrCircleQuestion className="h-8 w-8 text-neutral-500" />
                </div>
                <div className="my-8">
                    <SubTitle
                        color="text-neutral-500"
                        text="Total guardado"
                        fontWeight="font-semibold"
                        size="text-xl"
                    />
                    <span className="text-5xl font-semibold">R$ 0,00</span>
                </div>
                <div className="flex justify-between rounded-md p-4 cursor-pointer transition hover:bg-neutral-200">
                    <div className="flex items-center gap-4">
                        <img src={IconMoney} className="h-10 w-10" />
                        <span className="text-xl w-2/3">
                            Disponível a qualquer momento
                        </span>
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-neutral-500 font-medium text-xl">
                            R$ 0,00
                        </span>
                        <FiChevronRight className="h-8 w-8 text-neutral-500 cursor-pointer transition hover:scale-110" />
                    </div>
                </div>
                <div className="border-b-2 mt-4"></div>
            </div>
        </div>
    );
};
