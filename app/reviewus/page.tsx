"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";
import { toast } from "react-toastify";

export default function ReviewUs() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Please select a star rating.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Copy review comment to clipboard
      if (comment.trim()) {
        await navigator.clipboard.writeText(comment.trim());
        toast.success("Review copied to clipboard! Paste it on Google.");
      } else {
        toast.info("Opening Google reviews page...");
      }

      // Short delay for user feedback before redirecting
      setTimeout(() => {
        window.open(
          "https://www.google.com/search?q=Yashdeep+Travels+Vadodara#lrd=0x395fc66ab8c2f7f3:0x4f37ecddd18a20d2,3,1",
          "_blank"
        );
        setIsSubmitting(false);
      }, 1200);
    } catch (err) {
      console.error("Failed to copy review", err);
      // Fallback redirect
      window.open(
        "https://www.google.com/search?q=Yashdeep+Travels+Vadodara#lrd=0x395fc66ab8c2f7f3:0x4f37ecddd18a20d2,3,1",
        "_blank"
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center justify-center p-4">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft size={16} />
        <span>Back to Home</span>
      </Link>

      {/* Review Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Card Header resembling Google Write Review */}
        <div className="p-6 border-b border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#D51745]/10 flex items-center justify-center text-[#D51745] font-extrabold text-xl">
            Y
          </div>
          <div>
            <h1 className="font-extrabold text-lg text-gray-900 leading-snug">Yashdeep Travels</h1>
            <p className="text-xs text-gray-500 font-semibold">Vadodara, Gujarat</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Public posting notice */}
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
              G
            </div>
            <div>
              <p className="font-semibold text-gray-800">Posting publicly on Google</p>
              <p className="text-[10px] text-gray-400">Your review will be shared under your Google account</p>
            </div>
          </div>

          {/* Star selector */}
          <div className="flex flex-col items-center py-4 border-y border-gray-50">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform active:scale-90 hover:scale-110 cursor-pointer"
                >
                  <Star
                    size={38}
                    className={`transition-colors duration-100 ${
                      star <= (hoverRating || rating)
                        ? "text-[#FBBF24] fill-[#FBBF24] stroke-[#FBBF24]"
                        : "text-gray-300 fill-none stroke-current"
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-xs font-bold text-[#D51745] mt-2.5 uppercase tracking-wider">
                {rating === 1 && "Hated it"}
                {rating === 2 && "Disliked it"}
                {rating === 3 && "It was OK"}
                {rating === 4 && "Liked it"}
                {rating === 5 && "Loved it"}
              </p>
            )}
          </div>

          {/* Text Area */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
              Share details of your experience
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="How was our cab service? Was the driver polite and the car clean?"
              rows={5}
              className="w-full p-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none bg-gray-50/50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D51745] hover:bg-[#B21035] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/10 text-sm disabled:opacity-50"
          >
            <span>{isSubmitting ? "Opening Google..." : "Submit Review"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
