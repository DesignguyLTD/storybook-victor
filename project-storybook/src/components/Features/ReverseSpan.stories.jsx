import ReverseSpan from "./ReverseSpan";

export default {
  title: "ReverseSpan",
  component: ReverseSpan,
  argTypes: {
    headSize: { control: "number" },
    headColor: { control: "color" },
    headLine: { control: "number" },
    headTextAlign: { control: "text" },
    headWeight: { control: "number" },
    headWidth: { control: "number" },
    blackHead: { control: "text" },
    coloredText: { control: "color" },
    colored: { control: "text" },
    extraColor: { control: "color" },
    extraSize: { control: "number" },
    extraInfo: { control: "text" },
    extraTextAlign: { control: "text" },
    extraWidth: { control: "number" },
    extraLine: { control: "number" },
  },
};

export const ReverseText = (args) => <ReverseSpan {...args} />;

ReverseText.args = {
  blackHead: "Decentralized storage built for ",
  colored: "better privacy",
  headSize: "48px",
  coloredText: "rgb( 101, 31, 255)",
  headWidth: "498px",
  headLine: "64px",
  headWeight: "500",
  extraInfo:
    "Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy. Every file is encrypted, split into pieces, and stored on a global network of nodes, making data breaches and downtime a thing of the past.",
  extraWidth: "498px",
  extraLine: "28px",
  extraColor: "rgb(131, 134, 150)",
};
