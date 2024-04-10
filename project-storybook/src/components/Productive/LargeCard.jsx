/* eslint-disable react/prop-types */
import style from "./LargeCard.module.css";

export default function LargeCard({
  headLine,
  headWidth,
  headerSize,
  colorText,
  coloredText,
  infoColor,
  infoLine,
  infoSize,
  infoWidth,
  extra,
  illustrations,
  restOfText,
  display,
  justifyContent,
  alignItems,
  width,
  padding,
  borderRadius,
  headWeight,
  backgroundColor,
  information,
  extra2,
  altLargeText,
}) {
  return (
    <div
      className={style.card}
      style={{
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: padding,
        borderRadius: borderRadius,
        width: width,
        backgroundColor: backgroundColor,
        marginBottom: "3rem",
      }}>
      <div className={style.first}>
        <div className={style.text}>
          <p
            style={{
              fontSize: headerSize,
              width: headWidth,
              lineHeight: headLine,
              fontWeight: headWeight,
            }}>
            <span style={{ color: colorText }}>{coloredText}</span> {restOfText}
          </p>
          <p
            style={{
              color: infoColor,
              fontSize: infoSize,
              width: infoWidth,
              lineHeight: infoLine,
              marginTop: "1.5rem",
            }}>
            {information}
          </p>
        </div>
        <div className={style.extra}>
          {extra}
          {extra2}
        </div>
      </div>
      <div className={style.image}>
        <img src={illustrations} alt={altLargeText} />
      </div>
    </div>
  );
}
