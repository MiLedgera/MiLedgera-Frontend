import { Button } from "@/components/ui/Button";
import { VerdictBadge } from "@/components/features/VerdictBadge";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 text-center">
        <div className="flex items-center gap-2">
          <VerdictBadge verdict="ALLOW" />
          <VerdictBadge verdict="WARN" />
          <VerdictBadge verdict="BLOCK" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          PayGuard
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Checks token approvals, calldata, and payments before your buyer
          agent signs — returning ALLOW, WARN, or BLOCK with live chain
          evidence, risk scoring, and delivery proof.
        </p>
        <Button>Check a transaction</Button>
      </main>
    </div>
  );
}
