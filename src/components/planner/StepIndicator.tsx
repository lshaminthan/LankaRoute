import { Icon } from "@/components/ui/Icon";

const steps = [
  { number: 1, label: "Interests" },
  { number: 2, label: "District" },
  { number: 3, label: "Places" },
  { number: 4, label: "Itinerary" },
];

export function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex w-full items-center">
      {steps.map((step, index) => {
        const isComplete = current > step.number;
        const isActive = current === step.number;
        return (
          <li key={step.number} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-2.5">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors sm:h-9 sm:w-9 ${
                  isComplete
                    ? "bg-primary-blue text-white"
                    : isActive
                      ? "bg-primary-blue text-white"
                      : "bg-light-grey text-gray-400"
                }`}
              >
                {isComplete ? <Icon name="check" className="h-4 w-4" strokeWidth={2.5} /> : step.number}
              </span>
              <span
                className={`hidden text-xs font-medium sm:block sm:text-sm ${
                  isActive || isComplete ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span
                className={`mx-2 h-0.5 flex-1 rounded transition-colors sm:mx-4 ${
                  isComplete ? "bg-primary-blue" : "bg-light-grey"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
