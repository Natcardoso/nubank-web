import React, { useState } from "react";
import imgBox from "../../assets/img-box.svg";
import boxMoney from "../../assets/box-money.svg";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";
import { ModalBox } from "../ModalBox";
import { Button } from "../Button";

export const CardBoxNu = () => {
    const [openModalBox, setOpenModalBox] = useState(false);

    return (
        <>
            <div className="flex h-full">
                <div className="relative">
                    <img
                        src={boxMoney}
                        className="h-full w-custom object-cover brightness-50"
                    />
                    <span className="absolute top-16 left-14 text-white font-bold text-4xl">
                        Caixinhas do Nu
                    </span>
                </div>
                <div className="flex gap-8 justify-center w-full flex-col ml-2 p-4">
                    <div>
                        <Title text="Crie sua primeira caixinha" />

                        <SubTitle
                            text="Organize seu dinheiro de acordo com seus objetivos e nós te
                            ajudamos a chegar lá mais rápido."
                            color="text-neutral-500"
                            size="text-lg"
                            fontWeight="font-medium"
                        />

                        <div className="font-semibold py-1 px-4 bg-neutral-300 rounded w-max mt-3">
                            Indispensável
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-end gap-4">
                            <div className="mb-2">
                                <span className="font-medium text-xl">
                                    Reserva de Emergência
                                </span>
                                <SubTitle
                                    text="O primeiro passo para ter tranquilidade financeira e
                            poder poupar."
                                    color="text-neutral-500"
                                    size="text-lg"
                                    fontWeight="font-medium"
                                />
                                <div className="mt-8">
                                    <Button
                                        text="Comece a guardar"
                                        onClick={() => setOpenModalBox(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModalBox && (
                <ModalBox
                    isOpen={openModalBox}
                    isClose={() => setOpenModalBox(false)}
                />
            )}
        </>
    );
};
