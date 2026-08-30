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
    const elements = document.querySelectorAll(".section-fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

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
        {/* Main Outer Container - Wider max-w-6xl for side-by-side splits */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-12 md:pt-16 space-y-24">
          {/* Top Header & Navigation Bar */}
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-6 font-sans">
            <Link
              href="/"
              className="group inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors duration-200"
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
                  <span className="text-green-600 font-sans">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="size-3.5" />
                  <span className="font-sans">Share Story</span>
                </>
              )}
            </button>
          </div>

          {/* SECTION 1: The Cab Ride (Text Left, Image Right) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight">
                  Our Story
                </h1>
                <p className="text-xl md:text-2xl text-gray-900 font-instrument ">
                  It all started with a cab ride.
                </p>
                <div className="flex items-center text-xs text-gray-400 gap-2 pt-1 font-sans">
                  <span>June 19, 2019</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                <p>Not a business meeting.</p>
                <p>Not a carefully written business plan.</p>
                <p>
                  Just a family of four travelling to attend a wedding in 2019.
                </p>
                <p>
                  Like most people at the time, we had recently started using
                  Ola and Uber. The convenience itself still felt
                  fascinating—open your phone, book a cab, and within a few
                  minutes, a car is standing right outside your home.
                </p>
                <p>
                  That day, as we sat in the cab and headed towards our
                  destination, we started talking about exactly that.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={banner}
                alt="Our Story Banner"
                className="w-full h-auto rounded-xl object-cover shadow-xs"
                priority
              />
              <span className="block text-center text-xs text-gray-500  mt-2 font-light font-sans">
                It all started with a cab ride in 2019
              </span>
            </div>
          </section>

          {/* SECTION 2: Asking Questions & The Idea (Image Left, Text Right) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="space-y-6">
              <blockquote className="font-instrument text-2xl md:text-3xl text-gray-900  leading-relaxed">
                Technology is changing everything, isn't it?
              </blockquote>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                <p>
                  And somewhere between that conversation, curiosity took over.
                  We started asking our driver questions:
                </p>
                <ul className="pl-6 list-disc space-y-2 text-gray-800">
                  {[
                    "How does this business actually work?",
                    "How much does a driver earn?",
                    "How do Ola and Uber make money?",
                    "What are the expenses?",
                    "Is it actually profitable?",
                    "How often do you get rides?",
                  ].map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
                <p>
                  What started as a casual conversation slowly turned into a
                  full discussion about the business behind the ride. And then,
                  somewhere along that journey, an idea struck us.
                </p>
              </div>
              <blockquote className="font-instrument text-2xl md:text-3xl text-gray-900  leading-relaxed">
                Wait… why can't we do this too?
              </blockquote>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                <p>
                  At that time, we didn't even own a car. For years, our family
                  had been thinking about buying one, but buying a car was a big
                  financial decision for us.
                </p>
                <p>
                  And then came a simple thought: What if we bought a car—and
                  instead of letting it remain parked most of the time, we put
                  it to work? We could use it for our family whenever we needed
                  it. And when we didn't need it, we could put it on travel
                  platforms, take bookings and earn from it.
                </p>
                <p>
                  Maybe the earnings could help us pay the EMI. Maybe,
                  eventually, it could even become a business. Honestly, we
                  didn't know. But the idea was exciting enough to explore.
                </p>
              </div>
            </div>
            <div className="md:order-first">
              <Image
                src={realques}
                alt="Asking driver questions"
                className="w-full h-auto rounded-xl object-cover shadow-xs"
              />
              <span className="block text-center text-xs text-gray-500  mt-2 font-light font-sans">
                Asking the driver questions about the business
              </span>
            </div>
          </section>

          {/* SECTION 3: Taking the Leap (Text Left, Image Right) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="space-y-6">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
                One conversation changed everything.
              </h2>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                <p>
                  The very next day, we found ourselves walking into a car
                  showroom. We weren't there to buy a car. At least, not yet. We
                  were just asking questions.
                </p>
                <p>
                  Which cars are best for the travel business? What is the EMI?
                  Which category gets more demand? Sedan or a bigger vehicle?
                  How does taxi registration work?
                </p>
                <blockquote className="font-instrument text-2xl md:text-3xl text-gray-900  leading-relaxed">
                  But sometimes, the best decisions begin as “We're just
                  looking.”
                </blockquote>
                <p>
                  Over the next few days, we researched, discussed, calculated
                  and debated. And then we took a leap.
                </p>
                <p>
                  On 19th June 2019, we reached a significant milestone: we
                  bought our very first car, a Mahindra Marazzo. It wasn't just
                  the first car of Yashdeep Travels; it was the first car our
                  family had ever owned.
                </p>
                <p>
                  And suddenly, the idea we had discussed with a stranger during
                  a cab ride was sitting right outside our home.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={image2}
                alt="Car showroom visit"
                className="w-full h-auto rounded-xl object-cover shadow-xs"
              />
              <span className="block text-center text-xs text-gray-500  mt-2 font-light font-sans">
                Taking the leap: Walking into the showroom
              </span>
            </div>
          </section>

          {/* SECTION 4: The COVID Pause (Image Left, Text Right) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="space-y-6">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
                Just when things started moving, the world stopped.
              </h2>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                <p>
                  By early 2020, we had started understanding the business. We
                  could see the potential. We knew that if we continued building
                  the right customer base, this could grow into something much
                  bigger.
                </p>
                <p>
                  And then COVID arrived. Suddenly, there were no journeys. No
                  travellers. No bookings. But the EMI still existed. For a new
                  business that had only just started finding its footing, it
                  was one of our toughest phases.
                </p>
                <p>We had to pause. Adjust. Manage. And wait.</p>
                <p>
                  But somewhere during that difficult period, one belief
                  remained:
                </p>
              </div>
              <blockquote className="font-instrument text-2xl md:text-3xl text-gray-900  leading-relaxed">
                When people start travelling again, we will be ready.
              </blockquote>
              <p className="text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                And that's exactly what we did.
              </p>
            </div>
            <div className="md:order-first">
              <Image
                src={covidcris}
                alt="COVID crisis management"
                className="w-full h-auto rounded-xl object-cover shadow-xs"
              />
              <span className="block text-center text-xs text-gray-500  mt-2 font-light font-sans">
                A challenging chapter: Managing through the pandemic
              </span>
            </div>
          </section>

          {/* SECTION 5: Trust & Growth (Text Left, Image Right) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="space-y-6">
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
                One car became three.
              </h2>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
                <p>
                  When travel slowly returned to normal, so did our business.
                  And this time, we were more confident.
                </p>
                <p>
                  In 2021, our family sat together and made another decision.
                  Let's grow.
                </p>
                <p>
                  We added two more vehicles—a Ford Aspire and an Ertiga. One
                  car had now become three.
                </p>
                <p>
                  Over time, we built our own customer base and gradually moved
                  away from depending on external platforms. Our business grew
                  through something we value even today: Trust.
                </p>
                <p>
                  Customers travelled with us. Then travelled with us again.
                  Then recommended us to someone else.
                </p>
                <p>
                  And slowly, the small idea that started inside a cab was
                  becoming something real.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={growth}
                alt="Adding Ertiga and Aspire to fleet"
                className="w-full h-auto rounded-xl object-cover shadow-xs"
              />
              <span className="block text-center text-xs text-gray-500  mt-2 font-light font-sans">
                Expanding the vision: Expanding our service fleet
              </span>
            </div>
          </section>

          {/* SECTION 6: Today & Beyond (Centered Column) */}
          <section className="max-w-3xl mx-auto space-y-6 section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-10">
              The journey kept getting bigger.
            </h2>
            <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
              <p>
                As the years passed, our cars travelled further, our customers
                travelled more, and Yashdeep Travels continued growing with
                them. Today, we have served over 2,500+ happy customers and
                crossed 22+ lakh kilometres on the road.
              </p>
              <p>
                Our services have expanded to cover Pan-India journeys,
                customized holiday packages, and end-to-end hotel assistance.
              </p>
              <p>
                After years of service and several lakh kilometres on the road,
                we reached another important moment: It was time to begin
                again—with a new fleet.
              </p>
              <p>
                Today, our journey continues with the Toyota Innova Crysta,
                Toyota Rumion and Hyundai Aura, helping us serve different
                travel needs with greater comfort and reliability.
              </p>
            </div>
          </section>

          {/* SECTION 7: Our Philosophy (Centered Column) */}
          <section className="max-w-3xl mx-auto space-y-6 section-fade-in opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight mt-10">
              But honestly, our story is not really about cars.
            </h2>
            <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-[1.8] font-sans">
              <p>
                It's about an ordinary family sitting in the back of a cab…
                Asking a driver a few random questions… Getting curious about
                how something works…
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
              <p>
                We may help people reach their destinations—but Yashdeep Travels
                itself is still on its journey.
              </p>
              <h2 className="font-instrument text-3xl md:text-4xl text-gray-900 text-center  pt-6 leading-tight">
                And this is only the beginning….!
              </h2>
            </div>

            {/* Book Now Section / CTA */}
            <div className="border-t border-neutral-200 pt-16 mt-16 text-center space-y-6 font-sans">
              <h3 className="font-instrument text-3xl md:text-4xl text-gray-900 font-normal tracking-tight">
                Be a part of our ongoing journey.
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed">
                Experience the same safety, cleanliness, and customized travel
                booking that our family has prioritized since 2019.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/919099042156?text=${encodeURIComponent(
                    "Hello Yashdeep Travels, I read your story and want to book a trip with you. Please connect me with a booking agent.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <SpecularButton
                    size="lg"
                    radius={8}
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
                  className="inline-flex items-center justify-center space-x-2 text-sm font-semibold text-gray-700 hover:text-[#D51745] hover:bg-neutral-50 transition-all duration-200 border border-neutral-300 px-6 py-3.5 rounded-lg w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="size-4" />
                  <span>Call Helpline</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
