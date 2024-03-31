/* eslint-disable react/prop-types */
import style from "./Navbar.module.css";

export default function NavLinks({
  display,
  alignItems,
  listStyleType,
  justifyContent,
  listPadding,
  textDecoration,
  color,
  fontSize,
  links,
}) {
  return (
    <>
      <ul
        style={{
          display: display,
          alignItems: alignItems,
          listStyleType: listStyleType,
          justifyContent: justifyContent,
        }}>
        <li
          className={style.navlinks}
          style={{
            padding: listPadding,
          }}>
          <a
            style={{
              textDecoration: textDecoration,
              color: color,
              fontSize: fontSize,
            }}
            href={location}
            target="_blank"
            rel="noopener noreferrer">
            {links}
          </a>
        </li>
      </ul>
    </>
  );
}
