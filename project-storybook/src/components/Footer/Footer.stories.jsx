import Footer from "./Footer";
import { Links } from "../Navbar/NavLinks.stories";
import { Logo } from "./Logos.stories";
import image1 from "../asset/GDPR compliant - GDPR Copy 5.svg";
import image2 from "../asset/norton-by-symantec-vector-logo 1.svg";
import image3 from "../asset/stripe-seeklogo.com 1.svg";
import image4 from "../asset/Group 8.svg";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    gap: { control: "text" },
    color: { control: "text" },
    padding: { control: "text" },
    display: { control: "text" },
    alignItems: { control: "text" },
    justifyContent: { control: "text" },
    backgroundColor: { control: "text" },
    logo: { control: "text" },
    information: { control: "text" },
    images: { control: "text" },
    products: { control: "text" },
    link1: { control: "text" },
    link2: { control: "text" },
    link3: { control: "text" },
    resource: { control: "text" },
    community: { control: "text" },
    copy: { control: "text" },
    socials: { control: "text" },
    headSize: { control: "text" },
    fontWeight: { control: "number" },
    height: { control: "number" },
    textAlign: { control: "text" },
    firstDisplay: { control: "text" },
    firstDirection: { control: "text" },
    firstGap: { control: "text" },
    firstItems: { control: "text" },
    firstJustify: { control: "text" },
    imageDisplay: { control: "text" },
    imageGap: { control: "text" },
    imageItems: { control: "text" },
    imageMargins: { control: "text" },
    socialDisplay: { control: "text" },
    socialGap: { control: "text" },
    socialItems: { control: "text" },
    socialMargins: { control: "text" },
    headPad: { control: "text" },
    lastDisplay: { control: "text" },
    lastGap: { control: "text" },
    lastItems: { control: "text" },
    lastJustify: { control: "text" },
    lastPadding: { control: "text" },
    lastMargins: { control: "text" },
  },
};

export const Foot = (args) => <Footer {...args} />;
Foot.args = {
  backgroundColor: "rgb(26, 40, 78)",
  color: "#ffffff",
  headSize: "16px",
  fontWeight: "600",
  logo: "What is Deupload",
  display: "flex",
  information:
    "Deupload is a cloud storage services based on Blockchain and Web3 technology, designed to help teams collaborate and file sharing in a completely private like never before.",
  images: (
    <Logo
      display="flex"
      alignItems="center"
      gap="20px"
      image1={image1}
      image2={image2}
      image3={image3}
      image4={image4}
    />
  ),
  justifyContent: "space-evenly",
  width: "363px",
  products: "Products",
  resource: "Resource",
  community: "Community",
  link1: (
    <Links
      display="flex"
      alignItems="left"
      listStyleType="none"
      link1="Features"
      link2="Solutions"
      link3="Pricing"
      link4="Token"
      link5="Security"
      link6="Comparison"
      padding="0"
      fontSize="16px"
      flexDirection="column"
      color="rgb(255, 255,255)"
      gap=".5rem"
    />
  ),
  link2: (
    <Links
      display="flex"
      alignItems="left"
      padding="0"
      listStyleType="none"
      link1="Whitepaper"
      link2="Developer"
      link3="Brand Kits"
      link4="Compliance"
      link5="Privacy Policy"
      link6="Terms of service"
      fontSize="16px"
      flexDirection="column"
      color="rgb(255, 255,255)"
      gap=".5rem"
    />
  ),
  link3: (
    <Links
      display="flex"
      alignItems="left"
      listStyleType="none"
      padding="0"
      link1="Guide"
      link2="Blog"
      link3="FAQs"
      link4="Forum"
      link5="Help Center"
      link6="support desk"
      fontSize="16px"
      flexDirection="column"
      color="rgb(255, 255,255)"
      gap=".5rem"
    />
  ),
};
