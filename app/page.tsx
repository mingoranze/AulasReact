"use client";

import { CustomButon } from "@/src/components/CustomButton";
import { useState } from "react";

const Page = () => {
  // Funções de clique para os botões
  const handleClick1 = () => {
    alert("Botão 1 clicado!");
  }
  const handleClick2 = () => {
    alert("Botão 2 clicado!");
  }
  const handleClick3 = () => {
    alert("Botão 3 clicado!");
  }

  // Contador com useState
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  // Renderização dos botões e do contador
  const [showButton, setShowButton] = useState(false);

  const handleShowButton = () => {
    setShowButton(!showButton);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-3 ">

      <CustomButon label={showButton ? "Esconder Botões" : "Mostrar Botões"} onClick={handleShowButton} />

      {showButton &&
      <div className="">
        <CustomButon label="Clique aqui 1" onClick={handleClick1} />
        <CustomButon label="Clique aqui 2" onClick={handleClick2} />
        <CustomButon label="Clique aqui 3" onClick={handleClick3} />

        <div className="flex flex-col items-center">
        <p className="">{count}</p>
        <CustomButon label="Contador" onClick={handleIncrement} />
        </div>
      </div>
      }


    </div>
  );
}

export default Page;