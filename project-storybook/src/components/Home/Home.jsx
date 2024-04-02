import HowTo from "../HowTo/HowTo";
// import Footer from "../Footer/Footer";
import MainText from "./MainText";
import Navbar from "../Navbar/Navbar";
import { Primary } from "../Features/Card.stories";
import Productive from "../Productive/Productive";
import ShowFooter from "../Footer/ShowFooter";
import ShowPrice from "../Pricing/ShowPrice";
import Started from "../Started/Started";
import Storage from "../Features/Storage";
import arrow from "../asset/arrow-right-long 5.svg";
import icon1 from "../asset/Group 364.svg";
import icon2 from "../asset/Group 366.svg";
import icon3 from "../asset/Group 365.svg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainText />
      <div className={style.cards}>
        <Primary
          imageIcon={icon1}
          heading="Lightweight"
          description="Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress."
          otherText="Products features"
          headSize="28px"
          descSize="16px"
          descWidth="264px"
          arrow={arrow}
          backgroundColor="#651FFF"
          width="359px"
          height="395px"
          padding="30px 30px"
          color="white"
          headPad="1.5rem 0"
          otherFont="16px"
          otherMargin="2rem 0rem  0 0"
        />
        <Primary
          imageIcon={icon2}
          heading="Decentralization"
          description="Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design."
          otherText="how it works"
          headSize="28px"
          descSize="16px"
          descWidth="278px"
          arrow={arrow}
          backgroundColor="#651FFF"
          width="359px"
          height="395px"
          padding="30px 30px"
          color="white"
          headPad="1.5rem 0"
          otherFont="16px"
          otherMargin="2rem 0  0 0"
        />
        <Primary
          imageIcon={icon3}
          heading="No subscription"
          description="With Pay-as-you-go pricing, now you only pay for the resource you use without being charged a flat monthly fee even if you don’t use it up."
          otherText="Metered billing"
          headSize="28px"
          descSize="16px"
          descWidth="278px"
          arrow={arrow}
          backgroundColor="#651FFF"
          width="359px"
          height="395px"
          padding="30px 30px"
          color="white"
          headPad="1.5rem 0"
          otherFont="16px"
          otherMargin="2rem 0  0 0"
        />
      </div>
      <Productive />
      <Storage />
      <ShowPrice />
      <HowTo />
      <Started />
      <ShowFooter />
    </>
  );
}
