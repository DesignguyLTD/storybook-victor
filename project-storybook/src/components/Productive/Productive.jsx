import { Create, SignIn } from "../Buttons/Button.stories";

import { First } from "./BigCards.stories";
import { Large } from "./LargeCard.stories";
import image from "../asset/deupload-file-sharing 2.svg";
import image2 from "../asset/deupload-file-request 1.svg";
import image3 from "../asset/Group 232.svg";
import style from "./Productive.module.css";

export default function Productive() {
  return (
    <>
      <div className={style.proBody}>
        <p className={style.text}>
          Lightweight design, ready to use for
          <span className={style.span}> team productivity.</span>
        </p>

        <div className={style.theBigCards}>
          <First
            file="File Sharing"
            fileText="Securely share files within or outside your organization and control access track edits and analyze the shared content stats."
            images={image}
            boxWidth="546px"
            boxHeight="688px"
            backgroundColor="rgb(255 247 237)"
            textWidth="409px"
            fileColor="#651FFF"
            textColor="#838696"
          />
          <First
            file="Collect Files"
            fileText="You can collect and receive files in a secure environment even if the other person doesn’t have a Deupload account."
            images={image2}
            boxWidth="546px"
            boxHeight="688px"
            backgroundColor="#E0F7FA"
            textWidth="409px"
            fileColor="#651FFF"
            textColor="#838696"
          />
        </div>
        <div>
          <Large
            restOfText="in  one simple place with privacy come first."
            coloredText="Team collaboration"
            colorText="rgb(101 31 255)"
            headerSize="42px"
            headLine="56px"
            headWidth="456px"
            headWeight="500"
            backgroundColor="rgb(236 236 254);"
            borderRadius="24px"
            padding="10px 15px"
            information="Securely share and work together with Deupload’s simple file storage and sharing easy user management unlimited file size password protected links and more."
            infoColor="rgb(131 134 150)"
            infoSize="18px"
            infoWidth="450px"
            infoLine="32px"
            illustrations={image3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            extra2={
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
                borderRadius="12px"
              />
            }
            extra={
              <Create
                label="Start now"
                width="164px"
                height="48px"
                fontSize="16px"
                backgroundColor="#651FFF"
                color="white"
                borderWidth="0"
                borderRadius="12px"
              />
            }
          />
        </div>
      </div>
    </>
  );
}
