import Card from "./Card";
import icon1 from "../asset/Group 364.svg";
import icon2 from "../asset/Group 367.svg";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    imageIcon: { control: "text" },
    heading: { control: "text" },
    description: { control: "text" },
    otherText: { control: "text" },
    headSize: { control: "number" },
    descSize: { control: "number" },
    descWidth: { control: "number" },
    arrow: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
    padding: { control: "text" },
    backgroundColor: { control: "color" },
    descColor: { control: "color" },
    boxShadow: { control: "text" },
    headPad: { control: "text" },
    boxPad: { control: "text" },
    lineHeight: { control: "number" },
    boxDisplay: { control: "text" },
    boxContent: { control: "text" },
    boxAlign: { control: "text" },
    boxPadding: { control: "text" },
    boxHeight: { control: "number" },
    otherFont: { control: "number" },
    boxBorder: { control: "text" },
    otherMargin: { control: "text" },
    otherColor: { control: "color" },
    textPad: { control: "number" },
  },
};

export const Primary = (args) => <Card {...args} />;

Primary.args = {
  imageIcon: icon1,
  heading: "Lightweight",
  description:
    "Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.",
  otherText: "Products features",
  headSize: "28px",
  descSize: "16px",
  descWidth: "264px",
  backgroundColor: "#651FFF",
  width: "359px",
  height: "395px",
  padding: "30px 30px",
  color: "white",
  headPad: "1.5rem 0",
  otherFont: "16px",
};

export const Secondary = (args) => <Card {...args} />;

Secondary.args = {
  imageIcon: icon2,
  heading: "Upgrade your storage",
  description:
    "Better security, performance and cost, Deupload is the better way to store data.",
  otherText: "Learn use cases",
  width: "260px",
  otherColor: "green",
};
