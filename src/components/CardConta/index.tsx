import React, { ReactElement, useState } from "react";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";
import { TbPig } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { Historic } from "./Historic";
import { ModalSavedMoney } from "./ModalSavedMoney";

type Props = {
    title: string;
    money: string;
    icon: ReactElement<SVGRectElement>;
    id?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const Card = ({ title, money, icon, id, onClick }: Props) => (
    <div
        className="flex justify-between w-full items-center mb-2 text-neutral-500 cursor-pointer transition hover:bg-neutral-100 p-4 rounded-xl"
        onClick={onClick}
    >
        <div className="flex items-center gap-3">
            {icon}
            <div className="flex flex-col">
                <span>{title}</span>
                <span
                    className={`font-semibold ${
                        id === 2 ? "text-green-600" : ""
                    }`}
                >
                    {money}
                </span>
            </div>
        </div>
        <FiChevronRight className="w-6 h-6 transition hover:scale-125" />
    </div>
);

export const CardConta = () => {
    const [openSavedMoney, setOpenSavedMoney] = useState(false);

    return (
        <>
            <div className="bg-white rounded-lg p-6">
                <Title text="Conta" />
                <div className="mt-4">
                    <div className="mb-6">
                        <SubTitle
                            text="Saldo disponível"
                            color="text-neutral-500"
                            size="text-lg"
                            fontWeight="font-semibold"
                        />
                        <span className="font-bold text-4xl">R$ 4.000,00</span>
                    </div>
                    <div className="flex gap-4">
                        <Card
                            icon={<TbPig className="h-8 w-8" />}
                            title="Dinheiro guardado"
                            money="R$ 300,00"
                            onClick={() => setOpenSavedMoney(true)}
                        />
                        <Card
                            icon={<BsBarChart className="h-8 w-8" />}
                            title="Rendimento da conta"
                            money="+ R$ 20,00 este mês"
                            id={2}
                        />
                    </div>
                </div>
                <Historic />
            </div>
            {openSavedMoney && (
                <ModalSavedMoney
                    isOpen={openSavedMoney}
                    isClose={() => setOpenSavedMoney(false)}
                />
            )}
        </>
    );
};
