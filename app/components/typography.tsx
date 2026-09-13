import type { SplitHeading } from "../content/types";

export function SplitTitle({ value }: { value: SplitHeading }) {
  return (
    <>
      {value.line1}
      <br />
      {value.line2Prefix}
      <em>{value.em}</em>
    </>
  );
}
