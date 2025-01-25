import ButtonWithDisclosure from "@/components/ButtonWithDisclosure";
import { cn } from "@/utils";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/hero";
import PortfolioSection from "./components/portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <div className="relative">
        <div
          id="about-section"
          className="py-16 p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative"
        >
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-balance text-center text-slate-900 sm:text-2xl lg:text-3xl tracking-tighter max-w-xl mx-auto">
                How we turn sparks into flames.
              </h2>
            </div>
            <div className="flex relative gap-8">
              <div className="h-[60vh] flex-1 sticky top-20 bg-zinc-50 rounded-xl border border-zinc-400/20 shadow-sm"></div>
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-balance text-slate-900 sm:text-xl lg:text-2xl tracking-tighter mb-4">
                    1. Discovery
                  </h3>
                  <p className="text-base text-slate-700 text-balance">
                    Every big idea starts with a single spark. We listen,
                    question, and illuminate the path forward.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-balance text-slate-900 sm:text-xl lg:text-2xl tracking-tighter mb-4">
                    2. Design
                  </h3>
                  <p className="text-base text-slate-700 text-balance">
                    We map out your vision with clarity—turning sparks into a
                    blueprint for innovation.{" "}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-balance text-slate-900 sm:text-xl lg:text-2xl tracking-tighter mb-4">
                    3. Development
                  </h3>
                  <p className="text-base text-slate-700 text-balance">
                    Where the magic happens. Our code, your dream, fused
                    seamlessly.{" "}
                  </p>
                </div>
                <div>
                  <div className="size-12 rounded-xl bg-blue-600 ring-2 ring-offset-2 ring-offset-white ring-blue-600" />
                  <h3 className="text-lg font-medium text-balance text-slate-900 sm:text-xl lg:text-2xl tracking-tighter mb-4">
                    4. Deliver
                  </h3>
                  <p className="text-base text-slate-700 text-balance">
                    We don’t just hand it over; we stand by to see the flame
                    burn bright. Your success, our signature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative">
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-balance text-center text-slate-900 sm:text-2xl lg:text-3xl tracking-tighter max-w-xl mx-auto">
                We&apos;ve built some cool stuff.
              </h2>
            </div>
          </div>
        </div>
        <div className="py-16 p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative">
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-balance text-center text-slate-900 sm:text-2xl lg:text-3xl tracking-tighter max-w-xl mx-auto">
                Loved by the few who matter
              </h2>
              <div className="grid grid-cols-3 gap-8">
                <div className="aspect-square rounded-xl bg-zinc-50 border border-zinc-400/20 shadow-sm" />
                <div className="aspect-square rounded-xl bg-zinc-50 border border-zinc-400/20 shadow-sm" />
                <div className="aspect-square rounded-xl bg-zinc-50 border border-zinc-400/20 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative">
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-balance text-center text-slate-900 sm:text-2xl lg:text-3xl tracking-tighter max-w-xl mx-auto">
                We are small but mighty
              </h2>
            </div>
          </div>
        </div>
        <div className="py-16 p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative">
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-balance text-center text-slate-900 sm:text-2xl lg:text-3xl tracking-tighter max-w-xl mx-auto">
                Ready to disrupt the status quo?
              </h2>
            </div>
          </div>
        </div>
        <div className="py-16 p-4 flex flex-col space-y-16 justify-center items-center container mx-auto max-w-5xl relative">
          <p className="text-center font-medium text-slate-700 text-balance">
            Built with ❤️ during late nights and powered by big dreams.
          </p>
        </div>
      </div>
    </>
  );
}
