import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};
