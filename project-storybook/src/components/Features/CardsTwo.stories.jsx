import CardsTwo from "./CardsTwo";
import icons from "../asset/Group 370.svg";

export default {
  title: "CardsTwo",
  component: CardsTwo,
  argTypes: {
    backgroundColor: { control: "color" },
    display: { control: "text" },
    content: { control: "text" },
    items: { control: "text" },
    direction: { control: "text" },
    padding: { control: "text" },
    boxShadow: { control: "text" },
    icons: { control: "text" },
    cardWidth: { control: "number" },
    width: { control: "number" },
    height: { control: "number" },
    textSize: { control: "number" },
    textColor: { control: "color" },
    text: { control: "text" },
    infoColor: { control: "color" },
    information: { control: "text" },
    lineHeight: { control: "number" },
    wordContent: { control: "text" },
    wordItems: { control: "text" },
    wordDirection: { control: "text" },
    wordDisplay: { control: "text" },
    altCardTwo: { control: "text" },
  },
};

export const Sect = (args) => <CardsTwo {...args} />;
Sect.args = {
  icons: icons,
  text: "Private by design",
  information:
    "We believe data privacy is a human right, which is why Deupload is built on a decentralized architecture that makes data breaches a thing of the past.",
  display: "flex",
  content: "center",
  items: "start",
  cardWidth: "408px",
  backgroundColor: "#ffffff",
  width: "562px",
  height: "179px",
  boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.02)",
  padding: "2rem 0 0 2rem",
};
