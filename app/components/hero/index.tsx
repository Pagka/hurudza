import { cn } from "@/utils";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="main-section"
      className="py-lg p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative"
    >
      <div className="space-y-12 max-w-4xl mx-auto text-center">
        <div className="space-y-4">
          <p className="text-lg text-slate-600 font-medium">/hu·ru·dza/</p>
          <h1 className="text-4xl font-medium text-balance text-slate-900 sm:text-5xl lg:text-6xl tracking-tighter">
            Transforming ideas into exceptional digital experiences.
          </h1>
        </div>
        <div className="space-y-8 flex flex-col items-center">
          <p className="text-lg text-slate-700 text-balance">
            We are a team of passionate designers, developers, and strategists
            who are committed to creating exceptional digital products that help
            businesses grow.
          </p>
          <Link
            href={"/contact"}
            className={cn(
              "px-6 py-3 bg-zinc-900 text-white rounded-full font-medium tracking-tight",
              "hover:ring-2 hover:ring-zinc-900 ring-offset-2 ring-offset-slate-100",
              "transition-all duration-200 ease-in-out",
            )}
          >
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
