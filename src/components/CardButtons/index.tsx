import React, { useRef } from "react";
import { FaHandHoldingUsd, FaRegHeart } from "react-icons/fa";
import { MdPhoneIphone, MdPix } from "react-icons/md";
import iconReceive from "../../assets/icon-receive.svg";
import iconTranfer from "../../assets/icon-transferBlack.svg";
import { BsGlobeAmericas } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { AiOutlineBarcode } from "react-icons/ai";

export const CardButtons = () => {
    return (
        <div className="flex flex-wrap justify-center p-4 gap-8">
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300 ">
                    <MdPix className="h-8 w-8" />
                </div>
                <span>Área Pix</span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300 ">
                    <AiOutlineBarcode className="h-8 w-8" />
                </div>
                <span>Pagar</span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <img src={iconReceive} className="h-8 w-8" />
                </div>
                <span>Transferir</span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <FaHandHoldingUsd className="h-8 w-8" />
                </div>
                <span className="w-min text-center leading-none">
                    Pegar Emprestado
                </span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <img src={iconTranfer} className="h-8 w-8" />
                </div>
                <span>Depositar</span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <FaRegHeart className="h-8 w-8" />
                </div>
                <span>Doação</span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <BsGlobeAmericas className="h-8 w-8" />
                </div>
                <span className="w-min text-center leading-none">
                    Tranferir Internac.
                </span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <TbReportMoney className="h-8 w-8" />
                </div>
                <span>Cobrar</span>
            </div>
            <div className="flex gap-2 flex-col items-center cursor-pointer">
                <div className="rounded-full bg-neutral-200 p-6 transition hover:bg-neutral-300">
                    <MdPhoneIphone className="h-8 w-8" />
                </div>
                <span className="w-20 text-center leading-none">
                    Recarga de celular
                </span>
            </div>
        </div>
    );
};
