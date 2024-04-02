import { Secondary } from "../Features/Card.stories";
import icon1 from "../asset/Group 374.svg";
import icon2 from "../asset/Group 375.svg";
import icon3 from "../asset/Group 376.svg";
import style from "./HowTo.module.css";

export default function HowTo() {
  return (
    <div
      style={{
        padding: "10rem 0",
      }}>
      <div className={style.writings}>
        <h2>How it works?</h2>
        <p>
          Deupload removes complexity and offers a simple interface that allows
          users to take advantage of the vast array of decentralized storage
          with better security, performance, and pricing.
        </p>
      </div>
      <div className={style.how}>
        <Secondary
          imageIcon={icon1}
          heading="Create an account"
          description="Create an Deupload account and start uploading your files to Decentralized Storage."
          width="260px"
          headPad="18px 0"
          headSize="24px"
          boxDisplay="flex"
          boxDirection="column"
          boxContent="space-between"
          boxAlign="center"
          descTextAlign="center"
          headTextAlign="center"
          descSize="16px"
          descWidth="325px"
          descColor="rgb(131, 134, 150);"
        />
        <hr />
        <Secondary
          imageIcon={icon2}
          heading="Upload your files"
          description="Your file is encrypted and split into pieces then distributed to the nodes around the world."
          width="260px"
          headPad="18px 0"
          headSize="24px"
          boxDisplay="flex"
          boxDirection="column"
          boxContent="space-between"
          boxAlign="center"
          descTextAlign="center"
          headTextAlign="center"
          descSize="16px"
          descWidth="325px"
          descColor="rgb(131, 134, 150);"
        />
        <hr />
        <Secondary
          imageIcon={icon3}
          heading="Share file instantly"
          description="Send your file via email or shareable link with password protect and expiration time."
          width="260px"
          headPad="18px 0"
          headSize="24px"
          boxDisplay="flex"
          boxDirection="column"
          boxContent="space-between"
          boxAlign="center"
          descTextAlign="center"
          headTextAlign="center"
          descSize="16px"
          descWidth="325px"
          descColor="rgb(131, 134, 150);"
        />
      </div>
    </div>
  );
}
