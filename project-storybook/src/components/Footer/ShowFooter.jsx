import { Foot } from "./Footer.stories";
import { Links } from "../Navbar/NavLinks.stories";
import { Logo } from "./Logos.stories";
import image1 from "../asset/GDPR compliant - GDPR Copy 5.svg";
import image2 from "../asset/norton-by-symantec-vector-logo 1.svg";
import image3 from "../asset/stripe-seeklogo.com 1.svg";
import image4 from "../asset/Group 8.svg";
import image5 from "../asset/Facebook_black 1.svg";
import image6 from "../asset/Twitter_black 1.svg";
import image7 from "../asset/Youtube_black 1.svg";
import image8 from "../asset/Medium_black 1.svg";

export default function ShowFooter() {
  return (
    <>
      <Foot
        backgroundColor="rgb(26, 40, 78)"
        color="#ffffff"
        headSize="16px"
        fontWeight="600"
        logo="What is Deupload"
        display="flex"
        information="Deupload is a cloud storage services based on Blockchain and Web3 technology, designed to help teams collaborate and file sharing in a completely private like never before."
        images=<Logo
          display="flex"
          alignItems="center"
          gap="20px"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
        />
        justifyContent="space-evenly"
        height="454px"
        padding="4rem 0rem"
        imageMargins="2rem 0"
        headPad="0px 0px 2rem "
        width="363px"
        products="Products"
        resource="Resource"
        community="Community"
        copy="© 2022 Deupload. Powered by Conikal LLC"
        socials=<Logo
          display="flex"
          alignItems="center"
          gap="20px"
          image1={image5}
          image2={image6}
          image3={image7}
          image4={image8}
        />
        lastDisplay="flex"
        lastItems="flex-start"
        lastJustify="space-between"
        lastPadding="72px 40px 0px 130px"
        link1=<Links
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
        link2=<Links
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
        link3=<Links
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
      />
    </>
  );
}
