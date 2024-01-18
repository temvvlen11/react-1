import { Chip } from "@/components/Chip";
import { Highlight } from "@/components/Highlight";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white">
      <Header />
      <Highlight />
      <div className="flex flex-col items-center justify-center gap-2 mt-20">
        <Chip label="About me" />
        <Chip label={"Skills"} />
        <Chip label={"Experience"} />
      </div>
    </div>
  );
}
