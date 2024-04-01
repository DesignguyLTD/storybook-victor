import { ReverseText } from "./ReverseSpan.stories";
import { Secondary } from "./Card.stories";
import { Sect } from "./CardsTwo.stories";
import arrow1 from "../asset/arrow-right-long 2.svg";
import arrow2 from "../asset/arrow-right-long 2 (1).svg";
import icon2 from "../asset/Group 367.svg";
import icon3 from "../asset/Group 368.svg";
import icon4 from "../asset/Group 371.svg";
import icon5 from "../asset/Group 370.svg";
import icon6 from "../asset/Group 369.svg";
import style from "./Storage.module.css";

export default function Storage() {
  return (
    <div className={style.covering}>
      <div>
        <ReverseText
          blackHead="Decentralized storage built for "
          colored="better privacy"
          headSize="48px"
          coloredText="rgb( 101, 31, 255)"
          headWidth="498px"
          headLine="64px"
          headWeight="500"
          extraInfo="Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy. Every file is encrypted, split into pieces, and stored on a global network of nodes, making data breaches and downtime a thing of the past."
          extraWidth="498px"
          extraLine="28px"
          extraColor="rgb(131, 134, 150)"
        />
        <div className={style.secondary}>
          <Secondary
            imageIcon={icon2}
            heading="Upgrade your storage"
            description="Better security, performance and cost, Deupload is the better way to store data."
            otherText="Learn use cases"
            width="260px"
            otherColor="rgb(0, 229, 255)"
            arrow={arrow1}
            headPad="18px 0"
            headSize="18px"
            otherMargin="10px 0"
          />
          <Secondary
            imageIcon={icon3}
            heading="Carbon neutral storage."
            description="Utilizing existing unused storage capacity on recycled hardware around the world."
            otherText="Environment impact"
            width="260px"
            otherColor="rgb(52, 211, 153)"
            arrow={arrow2}
            headPad="18px 0"
            headSize="18px"
            otherMargin="10px 0"
          />
        </div>
      </div>
      <div className={style.sect}>
        <Sect
          icons={icon4}
          text="Private by design"
          information="We believe data privacy is a human right, which is why Deupload is built on a decentralized architecture that makes data breaches a thing of the past."
          display="flex"
          content="center"
          items="start"
          cardWidth="408px"
          backgroundColor="#ffffff"
          width="562px"
          height="179px"
          boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.02)"
          padding="2rem 0 2rem 2rem"
          textPad="0px 0px 15px"
          infoColor="rgb(131, 134, 150)"
          lineHeight="24px"
        />
        <Sect
          icons={icon5}
          text="Distributed network"
          information="An object is never in one place. Data is split into 80 pieces, and distributed to uncorrelated Nodes. When you call for the data, it’s automatically reconstituted in an instant."
          display="flex"
          content="center"
          items="start"
          cardWidth="408px"
          backgroundColor="#ffffff"
          width="562px"
          height="210px"
          boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.02)"
          padding="2rem 0 2rem 2rem"
          textPad="0px 0px 15px"
          infoColor="rgb(131, 134, 150)"
          lineHeight="24px"
        />
        <Sect
          icons={icon6}
          text="Worldwide availability"
          information="Data is stored on Nodes that are selected by reputation and local latency. The fastest Nodes from this set are chosen to store pieces, ensuring quick access to your data."
          display="flex"
          content="center"
          items="start"
          cardWidth="408px"
          backgroundColor="#ffffff"
          width="562px"
          height="210px"
          boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.02)"
          padding="2rem 0 0 2rem"
          textPad="0px 0px 15px"
          infoColor="rgb(131, 134, 150)"
          lineHeight="24px"
        />
      </div>
    </div>
  );
}
