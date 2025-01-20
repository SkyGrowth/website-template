import { HiEmojiHappy } from "react-icons/hi";
import { HiFire } from "react-icons/hi";
import { HiLightningBolt } from "react-icons/hi";

export const ICON_CARD_BG = { backgroundStyle: "bg-zinc-500" };
const CARD_BG = "bg-zinc-200";
const TITLE_COLOUR = "text-zinc-900";
const TITLE_WEIGHT = "font-medium";
const SUB_COLOUR = "text-zinc-500";
const SUB_WEIGHT = "font-extralight";

const BORDER_COLOUR = "border-zinc--200";

const ICON_1 = "text-blue-700";
const ICON_2 = "text-red-700";
const ICON_3 = "text-yellow-600";

export const CARD1 = {
  title: "Some benefits",
  description:
    "Here are some benefits of this product. This is a great business. This product will help you to save time.",
  buttonText: "Click me",
  backgroundStyle: CARD_BG,
  icon: <HiEmojiHappy size={36} className={ICON_1} />,
  border: BORDER_COLOUR,
  titleStyle: { color: TITLE_COLOUR, fontWeight: TITLE_WEIGHT },
  subheadingStyle: { color: SUB_COLOUR, fontWeight: SUB_WEIGHT },
};

export const CARD2 = {
  title: "Good product",
  description:
    "Here are some benefits of this product. This is a great business. This product will help you to save time.",
  buttonText: "Click me",
  backgroundStyle: CARD_BG,
  icon: <HiFire size={36} className={ICON_2} />,
  border: BORDER_COLOUR,
  titleStyle: { color: TITLE_COLOUR, fontWeight: TITLE_WEIGHT },
  subheadingStyle: { color: SUB_COLOUR, fontWeight: SUB_WEIGHT },
};

export const CARD3 = {
  title: "Save money",
  description:
    "Here are some benefits of this product. This is a great business. This product will help you to save time.",
  buttonText: "Click me",
  backgroundStyle: CARD_BG,
  icon: <HiLightningBolt size={36} className={ICON_3} />,
  border: BORDER_COLOUR,
  titleStyle: { color: TITLE_COLOUR, fontWeight: TITLE_WEIGHT },
  subheadingStyle: { color: SUB_COLOUR, fontWeight: SUB_WEIGHT },
};
