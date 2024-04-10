import Logos from "./Logos.jsx";
import image1 from "../asset/Facebook_black 1.svg";
import image2 from "../asset/Twitter_black 1.svg";
import image3 from "../asset/Youtube_black 1.svg";
import image4 from "../asset/Medium_black 1.svg";

export default {
  title: "Logos",
  component: Logos,
  argTypes: {
    display: { control: "text" },
    justifyContent: { control: "text" },
    alignItems: { control: "text" },
    image1: { control: "text" },
    image2: { control: "text" },
    image3: { control: "text" },
    image4: { control: "text" },
    gap: { control: "number" },
    altLogoText: { control: "text" },
    backgroundColor: { control: "color" },
    width: { control: "number" },
  },
};

export const Logo = (args) => <Logos {...args} />;
Logo.args = {
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
};
