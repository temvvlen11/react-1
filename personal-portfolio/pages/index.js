import React from "react";
import { Header } from "../components/Header";
import { Highlight } from "@/components/Highlight";
import { Chip } from "@/components/Chip";

const name = "Sagar";

export default function Home() {
  return (
    <div>
      <Header />
<<<<<<< Updated upstream
      <div className="container px-2 mx-auto lg:flex">
        <div className="flex justify-center order-2 mt-10">
          <img src="/images/profile.jpg" alt="profile" />
        </div>
        <div className="order-1 mt-20">
          <h2 className="text-4xl">Hi, I’m {name} 👋</h2>
          <p className="mt-2 text-base text-slate-500">
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
          </p>
        </div>
=======
      <Highlight />
      <div className="flex flex-col gap-2 items-center justify-center mt-20">
        <Chip label="About me" />
        <Chip label={"Skills"} />
        <Chip label={"Experience"} />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
