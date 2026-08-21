"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

const faqs = [
  {
    question: "Is it free?",
    answer: "Yes — LankaRoute is free to use while we're building out the full experience.",
  },
  {
    question: "Does it work for any route in Sri Lanka?",
    answer:
      "We cover all 25 districts, with real bus and train data plus sensible fallbacks for less common routes.",
  },
  {
    question: "Can I add my group?",
    answer: "Yes — share your plan link and anyone in your group can follow along.",
  },
  {
    question: "Is live tracking optional?",
    answer: "Yes — turn it on only when you want your group to see your live location.",
  },
  {
    question: "How does LankaRoute plan a trip?",
    answer:
      "You pick your interests, choose districts and select places — LankaRoute builds a day-by-day itinerary with routes, transport and hotel suggestions.",
  },
  {
    question: "Do I need an account?",
    answer: "No — you can build and view a full trip plan without signing in. Accounts are optional.",
  },
  {
    question: "Is the AI chat live yet?",
    answer:
      "Not yet — real AI trip planning is coming soon. Until then, the step-by-step planner builds a real itinerary today.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Find answers to common questions about LankaRoute&apos;s trip planning service.
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-gray-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && <p className="pb-5 text-sm text-gray-600 sm:text-base">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
