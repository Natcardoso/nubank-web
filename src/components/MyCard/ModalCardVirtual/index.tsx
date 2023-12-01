import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Title } from "../../Title";
import MasterCard from "../../../assets/master-card.svg";

type Props = {
    isOpen: boolean;
    isClose: () => void;
};

type PropsInfo = {
    title: string;
};

const InfoTitle = ({ title }: PropsInfo) => (
    <span className="text-xl text-neutral-500">{title}</span>
);

const InfoResponse = ({ title }: PropsInfo) => (
    <span className="text-lg font-semibold">{title}</span>
);

const ContainerInfo = ({ children }: any) => (
    <div className="flex flex-col">{children}</div>
);

export const ModalCardVirtual = ({ isOpen, isClose }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="flex justify-end z-10 absolute top-0 left-0 h-screen w-screen bg-customBgOpacity animate-show">
            <div className="h-screen w-4/12 bg-white animate-drag">
                <div className="flex flex-col justify-between mb-10 p-6 pt-2 bg-purple-600 h-64">
                    <div className="flex items-center justify-between w-full">
                        <IoCloseOutline
                            onClick={isClose}
                            className="h-10 w-10 text-white cursor-pointer transition hover:scale-110"
                        />
                        <img src={MasterCard} className="w-20 h-20" />
                    </div>
                    <span className="text-white font-semibold text-2xl">
                        MATHEUS H SANTOS
                    </span>
                </div>
                <div className="p-6">
                    <Title text="Cartão virtual" />
                    <div className="flex flex-col gap-8 mt-8">
                        <ContainerInfo>
                            <InfoTitle title="Nome" />
                            <InfoResponse title="Matheus H Santos" />
                        </ContainerInfo>
                        <ContainerInfo>
                            <InfoTitle title="Número" />
                            <InfoResponse title="1234 2222 1234 1234" />
                        </ContainerInfo>
                        <div className="flex justify-between">
                            <ContainerInfo>
                                <InfoTitle title="Validade" />
                                <InfoResponse title="08 / 29" />
                            </ContainerInfo>
                            <div className="w-1/2">
                                <ContainerInfo>
                                    <InfoTitle title="CVC" />
                                    <InfoResponse title="123" />
                                </ContainerInfo>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <ContainerInfo>
                                <InfoTitle title="MasterCard" />
                                <InfoResponse title="Gold" />
                            </ContainerInfo>
                            <div className="w-1/2">
                                <ContainerInfo>
                                    <InfoTitle title="Função" />
                                    <InfoResponse title="Débito e Crédito" />
                                </ContainerInfo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
