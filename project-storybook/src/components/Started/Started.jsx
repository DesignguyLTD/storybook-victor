import { Create } from "../Buttons/Button.stories";
import { Primary } from "../Features/Card.stories";
import arrow from "../asset/arrow-right-long 5.svg";
import arrow2 from "../asset/arrow-right-long 3 (2).svg";
import bigImage from "../asset/Frame.svg";
import icon1 from "../asset/Group 373.svg";
import icon2 from "../asset/Group 372.svg";
import style from "./Started.module.css";

export default function Started() {
  return (
    <div
      style={{
        margin: "4rem 0",
      }}>
      <div className={style.started}>
        <div>
          <h2>Ready to get started?</h2>
          <p>
            File storage and sharing on decentralized storage that suits any
            business size.
          </p>
        </div>
        <Create
          label="Create an account"
          width="194px"
          height="42px"
          fontSize="16px"
          backgroundColor="#651FFF"
          color="white"
          borderWidth="0"
          padding="9px 17px"
          borderRadius="12px"
        />
      </div>
      <div className={style.cards}>
        <Primary
          imageIcon={icon1}
          heading="Are you an individual"
          description="Syncing, backing up, and sharing your photos, videos and documents in total privacy couldn’t be easier."
          otherText="Start now"
          headSize="24px"
          descSize="16px"
          descWidth="264px"
          arrow={arrow}
          backgroundColor="#651FFF"
          width="359px"
          height="289px"
          padding="30px 30px"
          color="white"
          headPad="5px 0"
          otherFont="16px"
          otherMargin="2rem 0rem  0 0"
        />
        <Primary
          imageIcon={icon2}
          heading="Are you a business"
          description="Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place on decentralized network."
          otherText="See pricing"
          headSize="24px"
          descSize="16px"
          descWidth="355px"
          arrow={arrow2}
          backgroundColor="rgb(229, 229, 229)"
          width="736px"
          height="289px"
          padding="20px 40px"
          color=" rgb(101, 31, 255)"
          headPad="5px 0"
          otherFont="16px"
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          otherMargin="1.8rem 0rem  0 0"
          bigImage={bigImage}
        />
      </div>
    </div>
  );
}
