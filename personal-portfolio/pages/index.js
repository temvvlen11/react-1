import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-2">
        <div className="flex justify-center mt-10">
          <img src="/images/profile.jpg" alt="profile" />
        </div>
        <div className="mt-20">
          <h2 className="text-4xl">Hi, I’m Sagar 👋</h2>
          <p className="text-base mt-2 text-slate-500">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
      </div>
    </div>
  );
}
