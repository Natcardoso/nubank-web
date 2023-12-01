import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Title } from "../../Title";
import { Button } from "../../Button";

type Props = {
    dataInfo: {
        img: string;
        title: string;
    };
    isClose: () => void;
    isOpen: boolean;
};

export const DescriptionBox = ({ dataInfo, isClose, isOpen }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 right-0 top-0 h-screen w-customModal bg-white flex flex-col animate-drag">
            <div className="h-[300px]">
                <img
                    src={dataInfo.img}
                    className="w-full object-cover h-full"
                />
                <div className="absolute top-4 left-4 bg-customBgOpacity rounded-full p-2 w-max">
                    <BsArrowLeft
                        onClick={isClose}
                        className="h-8 w-8 text-white cursor-pointer transition hover:scale-110"
                    />
                </div>
            </div>
            <form className="p-6 flex flex-col h-full justify-between">
                <div className="flex flex-col gap-4">
                    <div>
                        <span className="font-semibold text-sm">
                            Crie um nome para sua Caixinha
                        </span>
                        <input
                            type="text"
                            value={dataInfo.title}
                            className="border-b-2 w-full mb-1 mt-2 outline-none font-medium text-lg"
                        />
                        <div className="flex justify-end text-neutral-500">
                            <span>{dataInfo.title.length}/22</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-sm">
                                Quando você planeja usar o dinheiro dessa
                                Caixinha?
                            </span>
                            <span className="text-neutral-500">
                                Não se preocupe. Você pode mudar de ideia
                                depois.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 my-2">
                            <div className="flex gap-1 font-medium">
                                <input type="radio" id="six" name="month" />
                                <label htmlFor="six">Em até 6 meses</label>
                            </div>
                            <div className="flex gap-1 font-medium">
                                <input
                                    type="radio"
                                    id="sixOurOne"
                                    name="month"
                                />
                                <label htmlFor="sixOurOne">
                                    Entre 6 meses e 1 ano
                                </label>
                            </div>
                            <div className="flex gap-1 font-medium">
                                <input type="radio" id="one" name="month" />
                                <label htmlFor="one">Em mais de 1 ano</label>
                            </div>
                            <div className="flex gap-1 font-medium">
                                <input
                                    type="radio"
                                    id="dontKnow"
                                    name="month"
                                />
                                <label htmlFor="dontKnow">Não sei</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm">
                            Quanto quer transferir?
                        </span>
                        <span className="text-neutral-500">
                            Seu saldo disponível é: 100,00
                        </span>
                        <input
                            type="text"
                            placeholder="R$ 0,00"
                            className="border-b-2 w-full mt-2 outline-none font-medium text-lg"
                        />
                        <span className="text-sm font-semibold text-neutral-500">
                            Comece a partir de R$ 1,00
                        </span>
                    </div>
                </div>
                <Button text="Confirmar" sizefull />
            </form>
        </div>
    );
};
