import { Price, PriceTwoCards } from "./Pricing.stories";

import { Create } from "../Buttons/Button.stories";
import style from "./ShowPrice.module.css";
import tick from "../asset/Group 221.svg";

export default function ShowPrice() {
  return (
    <div>
      <div className={style.cyn}>
        <div>
          <h1 className={style.heading}>
            Simple. <span>Fair pricing</span>.
          </h1>
          <p className={style.text}>
            Pay for what you use. There is no minimum charge. Always know what
            you’ll pay.
          </p>
        </div>
        <div className={style.cards}>
          <Price
            storage="Storage"
            writings="Access a complete decentralized storage with simple pay-as-you-go pricing"
            amount="$0.008"
            gb="per GB/month"
            specs1="Everything you need to storage & share files"
            specs2="No fees for API requests or data retrievals"
            specs3="No setup fees, monthly fees, or hidden fees"
            tick={tick}
            width="563px"
            height="574px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 24px 0px rgba(0,0,0,0.02)"
            borderRadius="24px"
            hrWidth="403px"
            specPad="0 0 10px"
            hrTextDecoration="dashed"
            hrBorderW="1px"
            textAlign="center"
            amountDisplay="flex"
            writingColor="rgb(131, 134, 150)"
            amountDirection="column"
            amountAlign="center"
            amountSize="64px"
            amountWeight="600"
            amountColor="rgb(11,13,14)"
            specDisplay="flex"
            specGap="16px"
            specItems="center"
            amountDisplay2="none"
            writingMargin="0 auto"
            gap="2rem"
            writingWidth="330px"
            backgroundColor="rgb(255, 255, 255)"
            hrBorder="1px dashed rgb(226, 228, 233)"
            headSize="32px"
            hrPad=" 16px 0"
            bigButton=<Create
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
          />
          <PriceTwoCards
            storage="Transfer"
            writings="Pay only for what you use. There is no minimum charge. You pay for all bandwidth into and out of Deupload."
            amount="$0.006"
            amount2="$0.006"
            gb="GB/month"
            gb2="GB/month"
            button=<Create
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
            button2=<Create
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
            width="563px"
            height="478px"
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="left"
            boxShadow="0px 4px 24px 0px rgba(0,0,0,0.02)"
            borderRadius="0 24px 24px 0"
            hrWidth="403px"
            hrTextDecoration="dashed"
            hrBorderW="1px"
            textAlign="left"
            amountDisplay="flex"
            amountDisplay2="flex"
            amountAlign="end"
            amountAlign2="end"
            hrPad="0 0rem 1rem"
            amountSize="48px"
            amountWeight="600"
            amountGap="15px"
            amountGap2="15px"
            amountColor="rgb(255, 255, 255)"
            specDisplay="flex"
            specGap="16px"
            specItems="center"
            gap="2rem"
            hrBorder="1px dashed rgb(226, 228, 233)"
            writingWidth="395px"
            backgroundColor="rgb(101, 31, 255)"
            headSize="32px"
            specPad="0 0 5px"
            color="white"
            padding="30px 80px"
          />
        </div>
      </div>
      <div className={style.wyt}>
        <div className={style.others}>
          <p>
            Never pay for unused storage again. Never pay expensive seats for
            team member again. Only pay for what you use. Don’t get stalled by
            contracts, capacity planning, or price modeling.
          </p>
          <div className={style.buttons}>
            <Create
              label="Pricing calculator"
              width="205px"
              height="48px"
              fontSize="16px"
              backgroundColor="#651FFF"
              color="white"
              borderWidth="0"
              padding="13px 25px"
              borderRadius="12px"
            />
            <Create
              label="Comparison"
              fontSize="16px"
              backgroundColor="white"
              color="black"
              borderWidth="2px"
              borderColor="#0B0D0E"
              borderStyle="solid"
              margin="0px 10px 0px 10px "
              height="48px"
              width="197px"
              padding="13px 25px"
              borderRadius="12px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
