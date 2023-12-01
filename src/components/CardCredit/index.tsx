import React from "react";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";
import { MdCreditCard } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";

export const CardCredit = () => {
    return (
        <div className="flex h-max justify-between w-full p-6">
            <div>
                <div className="flex gap-3">
                    <MdCreditCard className="h-10 w-10 rotate-90" />
                    <Title text="Cartão de crédito" />
                </div>
                <div className="flex flex-col gap-2  mt-2">
                    <SubTitle
                        fontWeight="font-semibold"
                        text="Fatura atual"
                        color="text-neutral-500"
                        size="text-lg"
                    />
                    <span className="font-bold text-4xl">R$ 100,00</span>
                    <span className="font-medium text-base text-neutral-500">
                        Limite disponível de R$ 4.000
                    </span>
                </div>
            </div>
            <div>
                <FiChevronRight className="h-8 w-8 text-neutral-400 cursor-pointer hover:scale-125" />
            </div>
        </div>
    );
};
