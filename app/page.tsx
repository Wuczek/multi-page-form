"use client";
import { useState } from "react";
import FirstPage from "./components/FirstPage";
import Buttons from "./components/Buttons";
import PageCounter from "./components/PageCounter";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FinalPage from "./components/FinalPage";

export default function Home() {
  const [page, setPage] = useState(1);
  const [choice, setChoice] = useState<Choice>({
    user: {
      name: "",
      surname: "",
      email: "",
    },
    plan: {
      name: "",
    },
    services: [
      {
        name: "Service1",
        price: "1$",
        checked: false,
      },
      {
        name: "Service2",
        price: "2$",
        checked: false,
      },
      {
        name: "Service3",
        price: "3$",
        checked: false,
      },
    ],
  });

  return (
    <main className="h-screen w-full grid place-content-center">
      <div className="w-72 h-[26rem] border-2 relative rounded-md shadow-lg">
        <PageCounter page={page} />
        {page === 1 && <FirstPage setChoice={setChoice} choice={choice} />}
        {page === 2 && <SecondPage setChoice={setChoice} choice={choice} />}
        {page === 3 && <ThirdPage setChoice={setChoice} choice={choice} />}
        {page === 4 && <FinalPage setChoice={setChoice} choice={choice} />}
        <Buttons page={page} setPage={setPage} choice={choice} />
      </div>
    </main>
  );
}
