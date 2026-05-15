import type { ReactElement } from "react";

export type MenuProp = {
  path?: string;
  title: string;
};
export type SkillsProp = {
  className?: string;
  title: string;
  width: string;
};
export type SkillsNumProp = {
  className?: string;
  title: string;
  text: string;
};
export type TechProp = {
  icon: ReactElement;
  title: string;
  // index?: boolean;
};
export type CardProp = {
  icon: ReactElement;
  title: string;
  message: string;
  index?: Number | boolean;
  className?: string;
  selectIndexCard?: Number | boolean;
};
export type ButtonProp = {
  type: "ghost" | "blue" | "glow";
  title: string;
  className?: string;
  icon?: ReactElement;
  onClick?: () => void;
};

export type AboutCardProp = {
  index?: Number | boolean;
  selectIndex?: Number | boolean;
  icon: ReactElement;
  title: string;
  desc: string;
  tech: [string] | string[];
};
