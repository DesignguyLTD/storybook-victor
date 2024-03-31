import BigCards from "./BigCards";
import image from "../asset/deupload-file-sharing 2.svg";

export default {
  title: "BigCards",
  component: BigCards,
  argTypes: {
    fileColor: { control: "color" },
    backgroundColor: { control: "color" },
    file: { control: "text" },
    fileSize: { control: "number" },
    textColor: { control: "color" },
    fileText: { control: "text" },
    images: { control: "text" },
    textWidth: { control: "number" },
    boxWidth: { control: "number" },
    imageWidth: { control: "number" },
    boxHeight: { control: "number" },
  },
};

export const First = (args) => <BigCards {...args} />;
First.args = {
  file: "File Sharing",
  fileText:
    "Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats.",
  images: image,
  boxWidth: "546px",
  boxHeight: "688px",
  backgroundColor: "rgb(255, 247, 237)",
  textWidth: "409px",
  fileColor: "#651FFF",
  textColor: "#838696",
};
