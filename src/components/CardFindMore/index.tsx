import React from "react";
import { Title } from "../Title";
import bgDebito from "../../assets/bg-debitoAutomatico.png";
import bgNuFriend from "../../assets/bg-nuAmigos.png";
import bgLife from "../../assets/bg-seguroVida.png";
import { Button } from "../Button";

type PropsButton = {
    text: string;
};

type PropsCard = {
    title: string;
    subtitle: string;
    textButton: string;
    img: string;
};

const Card = ({ title, textButton, subtitle, img }: PropsCard) => (
    <div className="bg-neutral-200 rounded-lg overflow-hidden w-full h-full flex flex-col">
        <img src={img} className="h-44 w-full" />
        <div className="flex flex-col gap-6 p-4 justify-between h-full">
            <div className="flex flex-col">
                <span className="font-semibold">{title}</span>
                <span className="text-neutral-700 text-sm">{subtitle}</span>
            </div>
            <Button text={textButton} />
        </div>
    </div>
);

export const CardFindMore = () => {
    return (
        <div className="flex flex-col p-6 h-full">
            <Title text="Descubra mais" />
            <div className="mt-4 flex gap-2 h-full">
                <Card
                    title="Débito automático do Nu"
                    subtitle="Nenhuma conta pra trás e você no controle."
                    textButton="Conhecer"
                    img={bgDebito}
                />
                <Card
                    title="Seguro de vida"
                    subtitle="Cuide de quem você ama de um jeito simples e que cabe no seu bolso."
                    textButton="Conhecer"
                    img={bgLife}
                />
                <Card
                    title="Indique o Nu para amigos"
                    subtitle="Espalhe como é simples estar no controle."
                    textButton="Indicar amigos"
                    img={bgNuFriend}
                />
            </div>
        </div>
    );
};
