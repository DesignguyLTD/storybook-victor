import Card from "./Card";
import icon1 from "../asset/Group 364.svg";
// import icons2 from "../asset/Group 366.svg";
// import icons3 from "../asset/Group 365.svg";

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
  },
};

export const Primary = (args) => <Card {...args} />;

Primary.args = {
  imageIcon: icon1,
  heading: "Lightweight",
  description:
    "Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.",
  otherText: "Products features",
};
