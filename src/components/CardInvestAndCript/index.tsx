import React from "react";
import { SubTitle } from "../SubTitle";
import imgInvest from "../../assets/invest-bg.svg";
import imgCript from "../../assets/cript-bg.svg";
import imgCard1 from "../../assets/img-card-1.svg";
import imgCard2 from "../../assets/img-card-2.svg";
import imgCard3 from "../../assets/img-card-3.svg";
import bitcoin from "../../assets/bitcoin.svg";
import uniwasp from "../../assets/uniswap.svg";
import polygon from "../../assets/polygon.svg";
import ethereum from "../../assets/ethereum.svg";

import { Title } from "../Title";
import { Button } from "../Button";

type PropsCard = {
    title: string;
    img: string;
    bgColor: string;
    imgSize?: boolean;
};

const Card = ({ title, img, bgColor, imgSize }: PropsCard) => (
    <div className="flex flex-col justify-center items-center gap-2">
        <div
            className={`${bgColor} rounded-full ${
                imgSize ? "w-16 h-16" : "w-28"
            } p-2`}
        >
            <img src={img} className="w-full h-full" />
        </div>
        <span className={`font-semibold text-center ${imgSize ? "" : "w-52"}`}>
            {title}
        </span>
    </div>
);

export const CardInvestAndCript = () => {
    return (
        <div className="grid grid-cols-2 gap-x-2">
            <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={imgInvest}
                        className="w-full h-32 object-cover brightness-50"
                    />
                    <span className="absolute bottom-6 left-6 text-white font-bold text-3xl">
                        Investimentos
                    </span>
                </div>
                <div className="flex justify-center mt-2">
                    <SubTitle
                        text="Tudo o que você precisa para investir em um só lugar"
                        color="text-neutral-500"
                        fontWeight="font-medium"
                        size="text-lg"
                    />
                </div>
                <div className="flex flex-col items-center p-4">
                    <Title text="Para quem quer" />
                    <div className="flex items-center justify-center mt-4 w-full">
                        <Card
                            title="Investimento com menos risco"
                            img={imgCard1}
                            bgColor="bg-purple-600"
                        />
                        <Card
                            title="Maior potencial de ganho"
                            img={imgCard2}
                            bgColor="bg-green-400"
                        />
                        <Card
                            title="Devolvem parte do lucro na sua conta"
                            img={imgCard3}
                            bgColor="bg-blue-400"
                        />
                    </div>
                    <div className="mt-8">
                        <Button text="Conhecer" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={imgCript}
                        className="w-full h-32 object-cover brightness-50"
                    />
                    <span className="absolute bottom-6 left-6 text-white font-bold text-3xl">
                        Cripto
                    </span>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-col items-center justify-center mt-2">
                        <Title text="Compre criptomoedas a partir de R$ 1" />
                        <SubTitle
                            text="Você pode vendê-las quando quiser. Sem burocracia, como tudo que a gente faz."
                            color="text-neutral-500"
                            fontWeight="font-medium"
                            size="text-lg"
                        />
                    </div>
                    <div className="flex flex-col items-center p-4 justify-center h-full">
                        <div className="flex flex-col items-center">
                            <Title text="Criptomoedas disponíveis" />
                            <div className="flex gap-12 mt-4">
                                <Card
                                    title="Bitcoin"
                                    img={bitcoin}
                                    bgColor="bg-orange-200"
                                    imgSize={true}
                                />
                                <Card
                                    title="Ethereum"
                                    img={ethereum}
                                    bgColor="bg-neutral-300"
                                    imgSize={true}
                                />
                                <Card
                                    title="Polygon"
                                    img={polygon}
                                    bgColor="bg-purple-200"
                                    imgSize={true}
                                />
                                <Card
                                    title="Uniswap"
                                    img={uniwasp}
                                    bgColor="bg-pink-200"
                                    imgSize={true}
                                />
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button text="Conhecer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
