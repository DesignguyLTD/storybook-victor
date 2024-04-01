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
  gap,
  fontSize,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
}) {
  return (
    <>
      <ul
        style={{
          display: display,
          alignItems: alignItems,
          listStyleType: listStyleType,
          justifyContent: justifyContent,
          textAlign: "center",
          gap: gap,
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
            href={location1}
            target="_blank"
            rel="noopener noreferrer">
            {link1}
          </a>
        </li>
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
            href={location2}
            target="_blank"
            rel="noopener noreferrer">
            {link2}
          </a>
        </li>
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
            href={location3}
            target="_blank"
            rel="noopener noreferrer">
            {link3}
          </a>
        </li>
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
            href={location4}
            target="_blank"
            rel="noopener noreferrer">
            {link4}
          </a>
        </li>
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
            href={location5}
            target="_blank"
            rel="noopener noreferrer">
            {link5}
          </a>
        </li>
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
            href={location6}
            target="_blank"
            rel="noopener noreferrer">
            {link6}
          </a>
        </li>
      </ul>
    </>
  );
}
