import { Create, SignIn } from "../Buttons/Button.stories";

import LargeCard from "./LargeCard";
import image from "../asset/Group 232.svg";

export default {
  title: "LargeCard",
  component: LargeCard,
  argTypes: {
    headLine: { control: "number" },
    headWidth: { control: "number" },
    headerSize: { control: "number" },
    colorText: { control: "color" },
    coloredText: { control: "text" },
    infoColor: { control: "text" },
    infoLine: { control: "number" },
    infoSize: { control: "number" },
    infoWidth: { control: "number" },
    extra: { control: "text" },
    illustrations: { control: "text" },
    restOfText: { control: "text" },
    display: { control: "text" },
    justifyContent: { control: "text" },
    alignItems: { control: "text" },
    width: { control: "number" },
    headWeight: { control: "number" },
    padding: { control: "text" },
    backgroundColor: { control: "text" },
    borderRadius: { control: "text" },
    information: { control: "text" },
    extra2: { control: "text" },
  },
};

export const Large = (args) => <LargeCard {...args} />;
Large.args = {
  restOfText: "in  one simple place with privacy come first.",
  coloredText: "Team collaboration",
  colorText: "rgb(101, 31, 255)",
  headerSize: "42px",
  headLine: "56px",
  headWidth: "456px",
  headWeight: "500",
  backgroundColor: "rgb(236, 236, 254);",
  borderRadius: "24px",
  padding: "10px 15px",
  information:
    "Securely share and work together with Deupload’s simple file storage and sharing, easy user management, unlimited file size, password protected links and more.",
  infoColor: "rgb(131,134,150)",
  infoSize: "18px",
  infoWidth: "450px",
  infoLine: "32px",
  illustrations: image,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  extra2: (
    <SignIn
      label="More features"
      fontSize="16px"
      backgroundColor="white"
      color="black"
      borderWidth="2px"
      borderColor="#0B0D0E"
      borderStyle="solid"
      margin="0px 10px 0px 10px "
      height="48px"
      width="169px"
    />
  ),
  extra: (
    <Create
      label="Start now"
      width="164px"
      height="48px"
      fontSize="16px"
      backgroundColor="#651FFF"
      color="white"
      borderWidth="0"
    />
  ),
};
