import { Create, SignIn } from "../Buttons/Button.stories";

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

          <ul className={style.navlinks}>
            <li>Features</li>
            <li>Solutions</li>
            <li>NFT Storage</li>
            <li>Pricing</li>
            <li>Developers</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className={style.others}>
          <ul className={style.english}>
            <li>App</li>
            <li>English</li>
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
          />
          <Create
            label="Create an account"
            width="194px"
            height="42px"
            fontSize="16px"
            backgroundColor="#651FFF"
            color="white"
            borderWidth="0"
          />
        </div>
      </nav>
    </>
  );
}
