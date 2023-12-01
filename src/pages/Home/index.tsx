import HandEmoji from "../../assets/hand-emoji.svg";
import { CardButtons } from "../../components/CardButtons";
import { CardConta } from "../../components/CardConta";
import { CardCredit } from "../../components/CardCredit";
import { CardFindMore } from "../../components/CardFindMore";
import { MyCard } from "../../components/MyCard";

export const Home = () => {
    return (
        <div className="h-full p-2 grid grid-rows-1 grid-cols-custom gap-x-2 overflow-hidden">
            <div className="grid gap-y-2 grid-rows-custom1">
                <div className="bg-purple-600 rounded-lg flex items-center justify-between p-6">
                    <h1 className="text-3xl text-white font-normal italic">
                        Olá Natália Almeida!
                    </h1>
                    <img src={HandEmoji} className="w-14" />
                </div>
                <CardConta />
            </div>
            <div className="rounded-lg grid gap-y-2 grid-rows-custom2">
                <div className="bg-white rounded-lg flex justify-center">
                    <CardButtons />
                </div>
                <div className="flex justify-between gap-2">
                    <div className="flex bg-white rounded-lg w-full">
                        <CardCredit />
                    </div>
                    <div className="bg-white rounded-lg w-full">
                        <MyCard />
                    </div>
                </div>
                <div className="bg-white rounded-lg w-full">
                    <CardFindMore />
                </div>
            </div>
        </div>
    );
};
