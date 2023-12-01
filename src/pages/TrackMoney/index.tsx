import { CardBoxNu } from "../../components/CardBoxNu";
import { CardInvestAndCript } from "../../components/CardInvestAndCript";

export const TrackMoney = () => {
    return (
        <div className="p-2 grid gap-y-2 overflow-hidden h-screen">
            <div className="bg-white rounded-lg overflow-hidden">
                <CardBoxNu />
            </div>
            <CardInvestAndCript />
        </div>
    );
};
