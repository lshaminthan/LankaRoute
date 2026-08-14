"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" center />

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
