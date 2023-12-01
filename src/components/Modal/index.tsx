import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Title } from "../Title";
import boxMoney from "../../assets/box-money.svg";

type Props = {
    isOpen: boolean;
    isClose: () => void;
    titleModal: string;
};

export const Modal = ({ isOpen, isClose, titleModal }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="flex justify-end z-10 absolute top-0 left-0 h-screen w-screen bg-customBgOpacity">
            <div className="h-screen w-4/12 bg-white p-6">
                <div className="flex justify-between mb-10">
                    <IoCloseOutline
                        onClick={isClose}
                        className="h-10 w-10 text-neutral-500 cursor-pointer transition hover:scale-110"
                    />
                </div>
                <Title text={titleModal} />
                <img src={boxMoney} />
                <div className="p-2 bg-neutral-400">Indispensável</div>
                <div>
                    <span>Reserva de Emergência</span>
                    <span>
                        O primeiro passo para ter tranquilidade financeira e
                        poder poupar.
                    </span>
                </div>
            </div>
        </div>
    );
};
