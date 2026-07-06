/** The verdict PayGuard returns after evaluating a pending transaction. */
export type Verdict = "ALLOW" | "WARN" | "BLOCK";

/** A single piece of live on-chain evidence backing a verdict. */
export interface ChainEvidence {
  label: string;
  value: string;
  sourceUrl?: string;
}

/** The decoded, human-readable form of the calldata being checked. */
export interface DecodedAction {
  contract: string;
  method: string;
  args: Record<string, string>;
}

/** Result of running PayGuard's checks against a proposed approval or payment. */
export interface CheckResult {
  verdict: Verdict;
  riskScore: number;
  decodedAction: DecodedAction;
  evidence: ChainEvidence[];
  reasons: string[];
  deliveryProofId?: string;
}
