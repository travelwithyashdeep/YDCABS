"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecularButton from "@/components/SpecularButton";
import { ArrowLeft, Share2, Phone, Check } from "lucide-react";
import Image from "next/image";
import banner from "@/public/images/our-story-banner.png";
import image2 from "@/public/images/buying-car.png";
import realques from "@/public/images/real-ques.png";
import covidcris from "@/public/images/covid-crisis.png";
import growth from "@/public/images/growth phase.png";

export default function OurStory() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const textSelectors = "h1, h2, h3, p, li, blockquote";
    const container = document.querySelector("main");
    if (!container) return;

    const elements = container.querySelectorAll(textSelectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      // Exclude text tags inside buttons or links
      if (el.closest("button") || el.closest("a")) {
        return;
      }

      el.classList.add(
        "opacity-0",
        "translate-y-4",
        "transition-all",
        "duration-700",
        "ease-out"
      );
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Our Story - Yashdeep Travels",
          text: "Read the inspiring story behind Yashdeep Travels.",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pb-24 relative select-text">
        {/* Top Centered Container */}
        <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-16 space-y-8 animate-fade-in-blur">
          {/* Back Button */}
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-6">
            <Link
              href="/"
              className="group inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-[#D51745] transition-colors duration-200"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-black transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-green-600 animate-pulse" />
                  <span className="text-green-600">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="size-3.5" />
                  <span>Share Story</span>
                </>
              )}
            </button>
          </div>

          {/* Article Header */}
          <div className="">
            <h1 className="font-instrument text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight">
              Our Story
            </h1>
            <Image src={banner} alt="banner" />
            <p className="text-xl  text-gray-500 mt-2 font-light font-sans tracking-wide leading-relaxed">
              "It all started with a cab ride."
            </p>
            <div className="flex items-center text-xs text-gray-400 gap-2 pt-2">
              <span>June 19, 2019</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          <hr className="border-[#E5E7EB] my-8" />

          {/* Article Content - Centered Reading Column */}
          <article className="space-y-12 text-gray-800 text-lg md:text-xl font-normal leading-relaxed font-sans ">
            {/* SECTION 1: The Spark */}
            <section id="spark" className="space-y-6 pt-4 scroll-mt-24">
              <p className="font-light text-gray-600  border-l-4 border-gray-300 pl-4 py-1">
                Not a business meeting.
              </p>
              <p className="font-light text-gray-600  border-l-4 border-gray-300 pl-4 py-1">
                Not a carefully written business plan.
              </p>
              <p className="font-light text-gray-600  border-l-4 border-gray-300 pl-4 py-1">
                Just a family of four travelling to attend a wedding in 2019.
              </p>

              <p className="mt-4">
                Like most people at the time, we had recently started using Ola
                and Uber. The convenience itself still felt fascinating—open
                your phone, book a cab, and within a few minutes, a car is
                standing right outside your home.
              </p>

              <p>
                That day, as we sat in the cab and headed towards our
                destination, we started talking about exactly that.
              </p>

              <p className="my-8 pl-6 border-l-4 border-[#D51745]  text-2xl  text-gray-900  font-medium leading-relaxed">
                “Technology is changing everything, isn't it?”
              </p>

              <p>
                And somewhere between that conversation, curiosity took over.
              </p>

              <p>We started asking our driver questions:</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 pt-2">
                {[
                  "How does this business actually work?",
                  "How much does a driver earn?",
                  "How do Ola and Uber make money?",
                  "What are the expenses?",
                  "Is it actually profitable?",
                  "How often do you get rides?",
                ].map((q, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-gray-700 text-base md:text-lg"
                  >
                    <span className="text-[#D51745] font-bold select-none mt-0.5">
                      •
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-4">
                What started as a casual conversation slowly turned into a full
                discussion about the business behind the ride.
              </p>
              <p>And then, somewhere along that journey, an idea struck us.</p>
              <p className="font-medium text-gray-900 text-xl italic">
                “Wait… why can't we do this too?”
              </p>
              <p>
                At that time, we didn't even own a car. For years, our family
                had been thinking about buying one, but buying a car was a big
                financial decision for us.
              </p>
              <p>And then came a simple thought.</p>
              <p className="bg-gray-100 p-6 rounded-xl border border-gray-200/60 font-light text-gray-700 text-lg leading-relaxed shadow-sm">
                What if we bought a car—and instead of letting it remain parked
                most of the time, we put it to work? We could use it for our
                family whenever we needed it. And when we didn't need it, we
                could put it on travel platforms, take bookings and earn from
                it.
              </p>

              <p>
                Maybe the earnings could help us pay the EMI. Maybe, eventually,
                it could even become a business.
              </p>

              <p>
                Honestly, we didn't know. But the idea was exciting enough to
                explore.
              </p>
            </section>

            <div className="flex justify-center py-6">
              <span className="text-gray-300 tracking-widest text-2xl">
                • • •
              </span>
            </div>

            {/* SECTION 2: Taking the Leap */}
            <section id="leap" className="space-y-6 scroll-mt-24">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-6">
                One conversation changed everything.
              </h2>
              <Image src={image2} alt="image2" />

              <p>
                The very next day, we found ourselves walking into a car
                showroom.
              </p>

              <p className="font-light text-gray-600 italic">
                We weren't there to buy a car. At least, not yet. We were just
                asking questions.
              </p>

              <p className="text-gray-700">
                Which cars are best for the travel business? What is the EMI?
                Which category gets more demand? Sedan or a bigger vehicle? How
                does taxi registration work?
              </p>

              <blockquote className="my-6 text-xl text-[#D51745] italic font-medium">
                But sometimes, the best decisions begin as “We're just looking.”
              </blockquote>

              <p>
                Over the next few days, we researched, discussed, calculated and
                debated.
              </p>

              <p>And then we took a leap.</p>

              <div className="bg-white text-white p-8  space-y-4 shadow-sm border border-neutral-200">
                <span className="text-xs uppercase tracking-wider text-[#D51745] font-black">
                  Significant Milestone
                </span>
                <h3 className="font-instrument text-3xl text-white leading-tight">
                  On 19th June 2019, we bought our very first car.
                </h3>
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                  A{" "}
                  <strong className="text-white font-semibold">
                    Mahindra Marazzo
                  </strong>
                  . It wasn't just the first car of Yashdeep Travels. It was the
                  first car our family had ever owned.
                </p>
              </div>

              <p className="pt-2">
                And suddenly, the idea we had discussed with a stranger during a
                cab ride was sitting right outside our home.
              </p>
            </section>

            <div className="flex justify-center py-6">
              <span className="text-gray-300 tracking-widest text-2xl">
                • • •
              </span>
            </div>

            {/* SECTION 3: Finding Focus */}
            <section id="focus" className="space-y-6 scroll-mt-24">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-6">
                Then came the real question: Now what?
              </h2>
              <Image src={realques} alt="real-question" />
              <p>
                Buying the car was the easy part. Running a business around it
                was something entirely new.
              </p>

              <p>
                We registered on different platforms, understood how bookings
                worked and started learning everything from scratch. At one
                point, my brother even drove trips himself.
              </p>

              <p className="font-light text-gray-600 italic">
                There was no big team. No office. No existing customer base.
              </p>

              <p>
                Just one car, a family willing to figure things out, and a
                belief that maybe there was something bigger here.
              </p>

              <p>
                Very soon, however, we realised something important: We didn't
                want Yashdeep Travels to be just another local cab service.
              </p>

              <p className="font-semibold text-gray-900">
                We wanted to focus on journeys that were planned, meaningful and
                beyond the city.
              </p>

              {/* Focus List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {[
                  "Vadodara to Ahmedabad Airport",
                  "Vadodara to Statue of Unity",
                  "Pavagadh / Nearby Hills",
                  "Weekend Family Trips",
                  "Outstation & Long Journeys",
                  "Customized Holiday Tours",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-white border border-gray-100 p-4 rounded-xl shadow-xs"
                  >
                    <div className="p-1 rounded-full bg-red-50 text-[#D51745]">
                      <Check className="size-4" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p>
                That became our focus. And slowly, people started trusting us.
              </p>

              <p className="italic text-gray-600 font-light">
                Friends became customers. Family members recommended us. One
                customer referred another.
              </p>

              <p className="font-medium text-gray-900 text-lg">
                And the best feeling of all? People started coming back.
              </p>
            </section>

            <div className="flex justify-center py-6">
              <span className="text-gray-300 tracking-widest text-2xl">
                • • •
              </span>
            </div>

            {/* SECTION 4: The COVID Pause */}
            <section id="pause" className="space-y-6 scroll-mt-24">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-6">
                Just when things started moving, the world stopped.
              </h2>
              <Image src={covidcris} alt="covid-crisi" />
              <p>
                By early 2020, we had started understanding the business. We
                could see the potential. We knew that if we continued building
                the right customer base, this could grow into something much
                bigger.
              </p>
              <div className="p-6 bg-red-50/50 border border-red-100 rounded-xl space-y-3">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#D51745]">
                  Crisis Phase
                </span>
                <p className="font-light text-gray-800 text-lg leading-relaxed">
                  And then COVID arrived. Suddenly, there were no journeys. No
                  travellers. No bookings. But the EMI still existed. For a new
                  business that had only just started finding its footing, it
                  was one of our toughest phases.
                </p>
              </div>

              <p>We had to pause. Adjust. Manage. And wait.</p>

              <p className="font-medium text-gray-900">
                But somewhere during that difficult period, one belief remained:
              </p>

              <blockquote className="pl-6 border-l-4 border-[#D51745] italic text-xl text-gray-800">
                "When people start travelling again, we will be ready."
              </blockquote>

              <p>And that's exactly what we did.</p>
            </section>

            <div className="flex justify-center py-6">
              <span className="text-gray-300 tracking-widest text-2xl">
                • • •
              </span>
            </div>

            {/* SECTION 5: Trust & Growth */}
            <section id="growth" className="space-y-6 scroll-mt-24">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-6">
                One car became three.
              </h2>
              <Image src={growth} alt="growth" />
              <p>
                When travel slowly returned to normal, so did our business. And
                this time, we were more confident.
              </p>

              <p>
                In 2021, our family sat together and made another decision.{" "}
                <span className="font-semibold">Let's grow.</span>
              </p>

              <p>
                We added two more vehicles—a Ford Aspire and an Ertiga. One car
                had now become three.
              </p>

              <p>
                Over time, we built our own customer base and gradually moved
                away from depending on external platforms. Our business grew
                through something we value even today:{" "}
                <strong className="text-gray-900 font-semibold text-xl">
                  Trust
                </strong>
                .
              </p>

              <p className="italic text-gray-700 pl-4 border-l-2 border-gray-200">
                Customers travelled with us. Then travelled with us again. Then
                recommended us to someone else.
              </p>

              <p>
                And slowly, the small idea that started inside a cab was
                becoming something real.
              </p>
            </section>

            <div className="flex justify-center py-6">
              <span className="text-gray-300 tracking-widest text-2xl">
                • • •
              </span>
            </div>

            {/* SECTION 6: Today & Beyond */}
            <section id="today" className="space-y-6 scroll-mt-24">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-6">
                The journey kept getting bigger.
              </h2>

              <p>
                As the years passed, our cars travelled further. Our customers
                travelled more. And Yashdeep Travels continued growing with
                them.
              </p>
              <p>
                After years of service and several lakh kilometres on the road,
                we reached another important moment: It was time to begin
                again—with a new fleet.
              </p>
              <p>
                Today, our journey continues with the{" "}
                <strong className="text-gray-900 font-semibold">
                  Toyota Innova Crysta
                </strong>
                ,{" "}
                <strong className="text-gray-900 font-semibold">
                  Toyota Rumion
                </strong>{" "}
                and{" "}
                <strong className="text-gray-950 font-semibold">
                  Hyundai Aura
                </strong>
                , helping us serve different travel needs with greater comfort
                and reliability.
              </p>
              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl text-center space-y-1 shadow-xs hover:border-[#D51745]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#D51745]">
                    2,500+
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Happy Customers Served
                  </div>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl text-center space-y-1 shadow-xs hover:border-[#D51745]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#D51745]">
                    22+ Lakh
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Kilometres Travelled
                  </div>
                </div>

                <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl text-center space-y-1 shadow-xs hover:border-[#D51745]/30 transition-all duration-300 md:col-span-2">
                  <div className="text-2xl font-bold text-gray-900">
                    National Reach & Full-Assistance
                  </div>
                  <div className="text-sm text-gray-500 font-light pt-2 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
                    <span className="flex items-center gap-1.5">
                      <Check className="size-4 text-[#D51745]" /> Pan-India
                      journeys
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="size-4 text-[#D51745]" /> Customized
                      holiday packages
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="size-4 text-[#D51745]" /> End-to-end
                      hotel assistance
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-center py-6">
              <span className="text-gray-300 tracking-widest text-2xl">
                • • •
              </span>
            </div>
            {/* SECTION 7: Our Philosophy */}
            <section id="philosophy" className="space-y-6 scroll-mt-24">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-6">
                But honestly, our story is not really about cars.
              </h2>

              <p>
                It's about an ordinary family sitting in the back of a cab…
                Asking a driver a few random questions… Getting curious about
                how something works…
              </p>

              <p className="font-semibold text-xl italic text-gray-900 text-center py-2">
                And then asking: “Why can't we try this?”
              </p>

              <p>
                Yashdeep Travels was never born from a perfect plan. It was born
                from curiosity. From a little bit of courage. And from one
                decision to take a chance on an idea.
              </p>

              <p>
                Today, every new customer, every trip and every journey takes
                that story a little further. And perhaps that's what we love
                most about this business.
              </p>

              <p className="bg-red-50 p-6 rounded-xl border border-red-100 font-medium text-[#D51745] text-lg leading-relaxed text-center">
                “Over and above providing the cab service on a Pan-India basis,
                we are customising the travel experience according to the need
                of our clients - right from the{" "}
                <strong>'Idea to Itinerary'</strong>”
              </p>

              <p>
                We may help people reach their destinations—but Yashdeep Travels
                itself is still on its journey.
              </p>

              <p className="font-instrument text-3xl text-gray-900 text-center italic pt-4">
                And this is only the beginning….!
              </p>
            </section>
          </article>

          <hr className="border-[#E5E7EB] my-12" />

          {/* Book Now Section / CTA */}
          <div className="text-white p-8 md:p-12 text-center space-y-6 border border-neutral-200 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14  opacity-40 blur-3xl rounded-full -z-10 pointer-events-none" />

            <h3 className="font-instrument text-4xl text-white tracking-tight">
              Be a part of our ongoing journey.
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base font-light">
              Experience the same safety, cleanliness, and customized travel
              booking that our family has prioritized since 2019.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/919099042156?text=${encodeURIComponent("Hello Yashdeep Travels, I read your story and want to book a trip with you. Please connect me with a booking agent.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpecularButton
                  size="lg"
                  radius={12}
                  textColor="#ffffff"
                  lineColor="#eeeeee"
                  baseColor="#D51745"
                  intensity={0.9}
                  speed={0.4}
                  shineSize={15}
                  followMouse
                >
                  Book My Trip Now
                </SpecularButton>
              </a>

              <a
                href="tel:+919099042156"
                className="inline-flex items-center justify-center space-x-2 text-sm font-semibold hover:text-[#D51745] transition-colors duration-200 border border-white/20 hover:border-[#D51745]/50 px-6 py-4 rounded-xl w-full sm:w-auto"
              >
                <Phone className="size-4" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
