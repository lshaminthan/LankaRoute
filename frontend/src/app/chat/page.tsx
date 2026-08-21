"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { districts } from "@/data/districts";
import { interests } from "@/data/interests";

type Message = { role: "user" | "assistant"; text: string };

type ChecklistId = "whereTo" | "whereFrom" | "whosComing" | "when" | "whatFor";

const checklistItems: { id: ChecklistId; icon: IconName; label: string; hint: string }[] = [
  { id: "whereTo", icon: "mapPin", label: "Where To", hint: "Let me inspire you if you don't know" },
  { id: "whereFrom", icon: "flag", label: "Where From", hint: "I'll ask where you're setting off from" },
  { id: "whosComing", icon: "users", label: "Who's Coming", hint: "I'll ask who you're travelling with" },
  { id: "when", icon: "calendar", label: "When You'd Go", hint: "I'll ask when you'd like to travel" },
  { id: "whatFor", icon: "leaf", label: "What You're After", hint: "I'll ask what would make this trip yours" },
];

const whoKeywords = [
  "solo",
  "alone",
  "myself",
  "friend",
  "family",
  "partner",
  "spouse",
  "husband",
  "wife",
  "group",
  "couple",
  "kids",
  "children",
];
const whenKeywords = [
  "day",
  "days",
  "week",
  "weeks",
  "weekend",
  "month",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const whatKeywords = Array.from(
  new Set(
    interests.flatMap((interest) => [
      ...interest.name.toLowerCase().split(/[^a-z]+/),
      ...interest.description.toLowerCase().split(/[^a-z]+/),
    ]),
  ),
).filter((word) => word.length > 3);
const districtNames = districts.map((district) => district.name.toLowerCase());

function detectChecklist(conversation: string): Record<ChecklistId, boolean> {
  const text = conversation.toLowerCase();
  const mentionsDistrict = districtNames.some((name) => text.includes(name));
  return {
    whereTo: mentionsDistrict,
    whereFrom: /\bfrom\b/.test(text) && mentionsDistrict,
    whosComing: whoKeywords.some((word) => text.includes(word)) || /\b\d+\s*(people|people|of us)\b/.test(text),
    when: whenKeywords.some((word) => text.includes(word)),
    whatFor: whatKeywords.some((word) => text.includes(word)),
  };
}

const initialMessage: Message = {
  role: "assistant",
  text: "Hey traveler! Tell me where you'd like to go in Sri Lanka and I'll help you plan it.",
};

const placeholderReply =
  "Real AI trip planning is coming soon — for now, try the step-by-step planner to build a real itinerary.";

function ChatContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q");
  const hasSentInitialQuery = useRef(false);

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [value, setValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const checklist = useMemo(() => {
    const conversation = messages
      .filter((message) => message.role === "user")
      .map((message) => message.text)
      .join(" ");
    return detectChecklist(conversation);
  }, [messages]);

  const capturedCount = Object.values(checklist).filter(Boolean).length;

  function sendMessage(text: string) {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: placeholderReply }]);
      setIsThinking(false);
    }, 900);
  }

  useEffect(() => {
    if (initialQuery && !hasSentInitialQuery.current) {
      hasSentInitialQuery.current = true;
      sendMessage(initialQuery);
    }
  }, [initialQuery]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const text = value.trim();
    if (!text) return;
    setValue("");
    sendMessage(text);
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col bg-white lg:flex-row">
      <div className="flex flex-1 flex-col p-4 sm:p-8">
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto pb-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "bg-primary-blue text-white"
                      : "bg-light-grey text-gray-800"
                  }`}
                >
                  {message.text}
                  {message.role === "assistant" && index > 0 && (
                    <Link
                      href="/plan"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-blue/10 px-3.5 py-1.5 text-sm font-semibold text-primary-blue hover:bg-primary-blue/15"
                    >
                      Try the step-by-step planner
                      <Icon name="arrowRight" className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="rounded-3xl bg-light-grey px-4 py-3 text-sm text-gray-400">
                  Thinking…
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-light-grey p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
              <Icon name="paperclip" className="h-5 w-5 shrink-0 text-gray-400" aria-hidden />
              <Icon name="microphone" className="h-5 w-5 shrink-0 text-gray-400" aria-hidden />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white transition-colors hover:bg-deep-blue"
              >
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <aside className="hero-bg flex w-full flex-col justify-between p-6 sm:p-8 lg:w-2/5 lg:shrink-0">
        <div>
          <div className="flex items-center gap-4">
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/40 text-lg font-bold text-white">
              {capturedCount}/5
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Trip Checklist
              </p>
              <p className="font-display text-xl font-bold text-white">Your trip is taking shape</p>
              <p className="text-sm text-white/70">{capturedCount} of 5 captured</p>
            </div>
          </div>

          <ol className="relative mt-8 space-y-6 border-l border-white/25 pl-6">
            {checklistItems.map((item) => {
              const isCaptured = checklist[item.id];
              return (
                <li key={item.id} className="relative">
                  <span
                    className={`absolute -left-[1.95rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full ${
                      isCaptured ? "bg-white text-primary-blue" : "bg-white/20 text-white"
                    }`}
                  >
                    <Icon name={isCaptured ? "check" : item.icon} className="h-3.5 w-3.5" />
                  </span>
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
                    {item.label}
                  </p>
                  <p className={`text-sm ${isCaptured ? "text-white" : "text-white/60"}`}>
                    {item.hint}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <Link
          href="/plan"
          className="mt-8 flex flex-col items-center gap-2 rounded-3xl bg-white/95 p-5 text-center transition-colors hover:bg-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white">
            <Icon name="sparkles" className="h-4 w-4" />
            Generate my trip
          </span>
          <span className="text-xs text-gray-500">
            Keep chatting to fill the checklist, or jump into the step-by-step planner any time.
          </span>
        </Link>
      </aside>
    </section>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={null}>
      <ChatContent />
    </Suspense>
  );
}
