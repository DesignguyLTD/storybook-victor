import { Create, SignIn } from "../Buttons/Button.stories";

import { Links } from "./NavLinks.stories";
import logo from "../asset/logo-color 1.svg";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.info}>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div data-test="link">
            <Links
              display="flex"
              alignItems="center"
              listStyleType="none"
              link1="Features"
              link2="Solutions"
              link3="NFT Storage"
              link4="Pricing"
              link5="Developers"
              link6="Resource"
              listPadding="0px 24px 0px 0px "
              fontSize="16px"
              color="rgb(92, 95,110)"
            />
          </div>
        </div>
        <div className={style.others}>
          <ul className={style.english}>
            <Links
              display="flex"
              alignItems="center"
              listStyleType="none"
              link1="App"
              link2="English"
              listPadding="0 0 0 0"
              gap="10px "
              fontSize="16px"
              color="rgb(92, 95,110)"
            />
          </ul>
          <SignIn
            label="Sign In"
            fontSize="16px"
            backgroundColor="white"
            color="black"
            borderWidth="2px"
            borderColor="#0B0D0E"
            borderStyle="solid"
            margin="0px 10px 0px 10px "
            height="42px"
            width="112px"
            padding="9px 17px"
            borderRadius="12px"
          />
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
      </nav>
    </>
  );
}
