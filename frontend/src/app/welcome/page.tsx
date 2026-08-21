import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function WelcomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-light-grey px-4 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-blue to-accent-coral text-white">
          <Icon name="check" className="h-8 w-8" />
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900">
          You&apos;re in!
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Welcome to LankaRoute. Let&apos;s get your Sri Lanka trip planned — bus and train times,
          hotels and your whole group in sync.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/plan"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
          >
            Start planning
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-blue shadow-sm transition-colors hover:bg-light-grey"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
