import Link from "next/link";
import {
  ChevronLeft,
  ArrowLeft,
  House,
  Calendar,
  Sparkle,
} from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    {
      label: "Featured Work",
      href: "/#work",
      desc: "Check out our latest studio projects",
    },
    {
      label: "Capabilities & Features",
      href: "/#features",
      desc: "Explore what we design and build",
    },
    {
      label: "Pricing & Plans",
      href: "/#pricing",
      desc: "Transparent plans tailored to scale",
    },
    {
      label: "Book a Strategy Call",
      href: "/booking",
      desc: "Schedule a 1-on-1 consultation",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white selection:bg-blue-100 selection:text-blue-600">
      <main className="w-full relative min-h-screen flex flex-col justify-between max-w-[85rem] border-x border-neutral-200">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24 text-center">
          {/* Big Stylish 404 Number */}
          <div className="relative flex flex-col gap-2 select-none">
            <p className="text-md  font-extrabold text-neutral-700 tracking-tighter leading-none">
              4<span className="text-orange-500">0</span>4
            </p>
            <h2 className="lg:text-3xl text-2xl text-neutral-900 font-semibold tracking-tighter">
              Page not found.
              <br />
              No Problem
              <br /> .{" "}
            </h2>

            <Link
              href="/"
              className="p-2 border w-fit mx-auto border-neutral-200 mt-4 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-200"
            >
              <ChevronLeft />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
