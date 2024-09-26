import type { ButtonHTMLAttributes } from "react";

import "./index.css";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} />;
};
