import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";
import IconCards from "../../assets/my-cards.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { ModalCardVirtual } from "./ModalCardVirtual";

export const MyCard = () => {
    const [openCardVirtual, setOpenCardVirtual] = useState(false);

    return (
        <>
            <div className="flex flex-col justify-center w-full p-6">
                <div className="flex gap-3 items-center">
                    <img src={IconCards} className="rotate-90" />
                    <Title text="Meus cartões" />
                </div>
                <div className="flex items-center justify-between w-full mt-4 mb-6">
                    <div className="flex flex-col">
                        <SubTitle
                            fontWeight="font-semibold"
                            text="Cartão virtual"
                            color="text-neutral-500"
                            size="text-lg"
                        />
                        <div className="flex items-center gap-4">
                            <MdCreditCard className="h-8 w-8 rotate-90" />
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">
                                    Matheus H Santos
                                </span>
                                <span className="font-medium text-base text-neutral-500">
                                    *****3829
                                </span>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setOpenCardVirtual(true)}>
                        <FiChevronRight className="h-8 w-8 text-neutral-400 cursor-pointer hover:scale-125" />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-2">
                        <SubTitle
                            fontWeight="font-semibold"
                            text="Cartão físico"
                            color="text-neutral-500"
                            size="text-lg"
                        />
                        <div className="flex items-center gap-3 text-purple-600 transition cursor-pointer hover:text-purple-800">
                            <AiOutlinePlus className="h-8 w-8 rotate-90" />
                            <div className="flex flex-col">
                                <span className="font-medium text-lg">
                                    Pedir cartão adicional
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FiChevronRight className="h-8 w-8 text-neutral-400 cursor-pointer hover:scale-125" />
                    </div>
                </div>
            </div>
            {openCardVirtual && (
                <ModalCardVirtual
                    isOpen={openCardVirtual}
                    isClose={() => setOpenCardVirtual(false)}
                />
            )}
        </>
    );
};
