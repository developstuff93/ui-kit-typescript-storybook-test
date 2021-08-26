export const BtnTypeOptions: Array<"primary" | "secondary" | "disabled"> = [
  "primary",
  "secondary",
  "disabled",
];
export const BtnBrandOptions: Array<"first" | "second"> = ["first", "second"];

export interface BtnProps {
  type?: "primary" | "secondary" | "disabled";
  brand?: "first" | "second";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
