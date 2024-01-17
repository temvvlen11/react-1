import React from "react";
import { Header } from "../components/Header";
import { Highlight } from "@/components/Highlight";
import { Chip } from "@/components/Chip";

export default function Home() {
  return (
    <div>
      <Header />
      <Highlight />
      <div className="flex flex-col gap-2 items-center justify-center mt-20">
        <Chip label="About me" />
        <Chip label={"Skills"} />
        <Chip label={"Experience"} />
      </div>
    </div>
  );
}
