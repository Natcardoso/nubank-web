import React from "react";
import { SubTitle } from "../../SubTitle";
import { FiSearch } from "react-icons/fi";
import { RiBarcodeFill } from "react-icons/ri";
import { MdCreditCard } from "react-icons/md";
import { IconTransfer } from "../../../assets/icon-transfer";
import IconReceive from "../../../assets/icon-receive.svg";

type Props = {
    title: string;
    subTitle?: string;
    price: string;
    time: string;
};

const Card = ({ title, subTitle, price, time }: Props) => {
    let icon;

    if (title == "Compra no débito" || title == "Pagamento da fatura") {
        icon = <MdCreditCard className="h-8 w-8 rotate-90" />;
    } else if (title == "Transferência recebida") {
        icon = <IconTransfer />;
    } else if (title == "Transferência enviada") {
        icon = <img src={IconReceive} className="h-8 w-8 text-green-700" />;
    } else {
        icon = <RiBarcodeFill className="h-8 w-8" />;
    }

    return (
        <div className="flex justify-between py-4 border-b-2 border-neutral-100">
            <div className="flex gap-4">
                <div
                    className={`p-6 ${
                        title == "Transferência recebida"
                            ? "bg-green-200"
                            : "bg-neutral-200"
                    } max-w-max rounded-full`}
                >
                    {icon}
                </div>

                <div className="flex flex-col">
                    <span className="font-medium text-lg">{title}</span>
                    <span className="text-neutral-400">{subTitle}</span>
                    <span className="text-neutral-400">{price}</span>
                </div>
            </div>
            <span className="text-neutral-400">{time}</span>
        </div>
    );
};

export const Historic = () => {
    return (
        <div className="mt-8">
            <SubTitle
                text="Histórico"
                color="text-black"
                size="text-2xl"
                fontWeight="font-medium"
            />
            <div className="flex gap-3 p-4 mb-4 bg-neutral-100 rounded-full mt-4">
                <FiSearch className="h-6 w-6 text-neutral-500 ml-4" />
                <input
                    type="text"
                    placeholder="Buscar"
                    className="outline-none bg-transparent text-lg"
                />
            </div>
            <div className="h-80 overflow-y-scroll pr-4">
                <Card
                    title="Compra no débito"
                    subTitle="The best Acai Garca"
                    price="R$ 20,00"
                    time="Ontem"
                />
                <Card
                    title="Transferência recebida"
                    subTitle="Wagner Marques Cardoso"
                    price="R$ 40,00"
                    time="05 MAI"
                />
                <Card
                    title="Transferência enviada"
                    subTitle="Matheus Henrique Santos"
                    price="R$ 15,00"
                    time="01 MAI"
                />
                <Card
                    title="Pagamento efetuado"
                    subTitle="Life Cobranças LTDA"
                    price="R$ 111,00"
                    time="20 ABR"
                />
                <Card
                    title="Pagamento da fatura"
                    price="R$ 150, 00"
                    time="15 ABR"
                />
            </div>
        </div>
    );
};
