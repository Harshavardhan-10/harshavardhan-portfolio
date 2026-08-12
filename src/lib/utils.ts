export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  let result = "";
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      result = cn(result, ...input);
      continue;
    }
    if (typeof input === "object") continue;
    result += result ? ` ${input}` : input;
  }
  return result;
}
