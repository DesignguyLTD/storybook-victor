import { First } from "./BigCards.stories";
import image from "../asset/deupload-file-sharing 2.svg";
import image2 from "../asset/deupload-file-request 1.svg";
import style from "./Productive.module.css";
export default function Productive() {
  return (
    <>
      <div className={style.proBody}>
        <p className={style.text}>
          Lightweight design, ready to use for{" "}
          <span className={style.span}>team productivity.</span>
        </p>

        <div className={style.theBigCards}>
          <First
            file="File Sharing"
            fileText="Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats."
            images={image}
            boxWidth="546px"
            boxHeight="688px"
            backgroundColor="rgb(255, 247, 237)"
            textWidth="409px"
            fileColor="#651FFF"
            textColor="#838696"
          />
          <First
            file="Collect Files"
            fileText="You can collect and receive files in a secure environment, even if the other person doesn’t have a Deupload account."
            images={image2}
            boxWidth="546px"
            boxHeight="688px"
            backgroundColor="#E0F7FA"
            textWidth="409px"
            fileColor="#651FFF"
            textColor="#838696"
          />
        </div>
      </div>
    </>
  );
}
