import { Create } from "../Buttons/Button.stories";
import Pricing from "./Pricing";
import tick from "../asset/Group 221.svg";
export default {
  title: "Pricing",
  component: Pricing,
  argTypes: {
    storage: { control: "text" },
    writings: { control: "text" },
    button: { control: "text" },
    amount: { control: "text" },
    gb: { control: "text" },
    button2: { control: "text" },
    amount2: { control: "text" },
    gb2: { control: "text" },
    bigButton: { control: "text" },
    tick: { control: "text" },
    specs1: { control: "text" },
    specs2: { control: "text" },
    specs3: { control: "text" },
    padding: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    display: { control: "text" },
    justifyContent: { control: "text" },
    alignItems: { control: "text" },
    boxShadow: { control: "text" },
    backgroundColor: { control: "color" },
    headWeight: { control: "text" },
    headSize: { control: "number" },
    headColor: { control: "color" },
    hrTextDecoration: { control: "text" },
    hrWidth: { control: "number" },
    hrColor: { control: "color" },
    writingColor: { control: "color" },
    writingSize: { control: "number" },
    writingWidth: { control: "number" },
    amountAlign: { control: "text" },
    amountColor: { control: "color" },
    amountDirection: { control: "text" },
    amountDisplay: { control: "text" },
    amountJustify: { control: "text" },
    amountSize: { control: "number" },
    amountWeight: { control: "text" },
    gbFontSize: { control: "number" },
    gbWeight: { control: "text" },
    specContents: { control: "text" },
    specDisplay: { control: "text" },
    specGap: { control: "text" },
    specItems: { control: "text" },
    borderRadius: { control: "text" },
    flexDirection: { control: "text" },
    textAlign: { control: "text" },
    hrBorderW: { control: "number" },
    gap: { control: "number" },
    amountAlign2: { control: "text" },
    amountDirection2: { control: "text" },
    amountDisplay2: { control: "text" },
    amountJustify2: { control: "text" },
    hrBorder: { control: "text" },
    hrPad: { control: "text" },
    specPad: { control: "text" },
    writingMargin: { control: "text" },
    amountGap: { control: "text" },
    amountGap2: { control: "text" },
    color: { control: "color" },
    altPricingText: { control: "text" },
    amountHeight: { control: "number" },
  },
};

export const Price = (args) => <Pricing {...args} />;
Price.args = {
  storage: "Storage",
  writings:
    "Access a complete decentralized storage with simple, pay-as-you-go pricing",
  amount: "$0.008",
  gb: "per GB/month",
  specs1: "Everything you need to storage & share files",
  specs2: "No fees for API requests or data retrievals",
  specs3: "No setup fees, monthly fees, or hidden fees",
  tick: tick,
  width: "563px",
  height: "574px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 4px 24px 0px rgba(0,0,0,0.02)",
  borderRadius: "24px",
  hrWidth: "403px",
  hrTextDecoration: "dashed",
  hrBorderW: "1px",
  textAlign: "center",
  amountDisplay: "flex",
  amountDirection: "column",
  amountAlign: "center",
  amountSize: "64px",
  amountWeight: "600",
  amountColor: "rgb(11,13,14)",
  specDisplay: "flex",
  specGap: "16px",
  specItems: "center",
  amountDisplay2: "none",
  gap: "2rem",
  hrBorder: "1px dashed rgb(226, 228, 233)",
  writingWidth: "330px",
  backgroundColor: "rgb(255, 255, 255)",
  headSize: "32px",
  specPad: "0 0 5px",
  bigButton: (
    <Create
      label="Get started in minutes"
      width="402px"
      height="42px"
      fontSize="16px"
      backgroundColor="#651FFF"
      color="white"
      borderWidth="0"
      padding="9px 17px"
      borderRadius="12px"
    />
  ),
};

export const PriceTwoCards = (args) => <Pricing {...args} />;
PriceTwoCards.args = {
  storage: "Transfer",
  writings:
    "Pay only for what you use. There is no minimum charge. You pay for all bandwidth into and out of Deupload.",
  amount: "$0.006",
  amount2: "$0.006",
  gb: "GB/month",
  gb2: "GB/month",

  button: (
    <Create
      label="Inbound"
      fontSize="12px"
      backgroundColor="rgb(236,236, 254)"
      color="rgb(101,31,255)"
      borderWidth="0px"
      borderStyle="solid"
      height="24px"
      padding="6px 13px"
      borderRadius="12px"
      width="85px"
    />
  ),
  button2: (
    <Create
      label="Outbound"
      fontSize="12px"
      backgroundColor="rgb(224,247, 250)"
      color="rgb(34,211,238) "
      borderWidth="0px"
      borderStyle="solid"
      height="24px"
      padding="6px 13px"
      borderRadius="12px"
      width="85px"
    />
  ),
  width: "563px",
  height: "478px",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  boxShadow: "0px 4px 24px 0px rgba(0,0,0,0.02)",
  borderRadius: "0 24px 24px 0",
  hrWidth: "403px",
  hrTextDecoration: "dashed",
  hrBorderW: "1px",
  textAlign: "left",
  amountDisplay: "flex",
  amountDisplay2: "flex",
  amountAlign: "center",
  amountAlign2: "end",
  hrPad: "0 0rem",
  amountSize: "48px",
  amountWeight: "600",
  amountGap: "15px",
  amountGap2: "15px",
  amountColor: "rgb(255, 255, 255)",
  specDisplay: "flex",
  specGap: "16px",
  specItems: "center",
  gap: "2rem",
  hrBorder: "1px dashed rgb(226, 228, 233)",
  writingWidth: "395px",
  backgroundColor: "rgb(101, 31, 255)",
  headSize: "32px",
  specPad: "0 0 5px",
  color: "white",
  padding: "30px 80px",
  amountHeight: "4.5rem",
};
