import { Create, SignIn } from "../Buttons/Button.stories";

import image from "../asset/deupoad-hero-screen 1.svg";
import style from "./MainText.module.css";

export default function MainText() {
  return (
    <>
      <div className={style.mainContainer}>
        <p>
          File storage and sharing for remote teams that work together on{" "}
          <span className={style.span}>Web3</span>
        </p>
        <p>
          Deupload is a online file manager on decentralized cloud storage and
          IPFS that allows you storage, share, collect files privately and team
          collaboration without subscription.
        </p>
        <div className={style.button}>
          <Create
            label="Get Started"
            fontSize="16px"
            backgroundColor="#651FFF"
            color="white"
            borderWidth="0"
            width="164px"
            height="48px"
            borderRadius="12px"
          />
          <SignIn
            label="Pricing"
            fontSize="16px"
            backgroundColor="white"
            color="black"
            borderWidth="2px"
            borderColor="#0B0D0E"
            borderStyle="solid"
            margin="0px 10px 0px 10px "
            height="48px"
            width="148px"
            borderRadius="12px"
          />
        </div>

        <div className={style.image}>
          <img className={style.img} src={image} alt="" />
        </div>

        <div>
          <h2 className={style.light}>
            Lightning fast. Better privacy. Fairer cost.
          </h2>
          <p className={style.word}>
            You can choose continue to use centralized cloud storage but we have
            some better reasons for you to start moving to decentralized storage
            because it is simply the future of the internet.
          </p>
        </div>
      </div>
    </>
  );
}
