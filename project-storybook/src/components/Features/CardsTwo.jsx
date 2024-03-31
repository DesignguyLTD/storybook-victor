/* eslint-disable react/prop-types */
import style from "./CardsTwo.module.css";

export default function CardsTwo({
  backgroundColor,
  display,
  content,
  items,
  direction,
  padding,
  boxShadow,
  icons,
  cardWidth,
  textSize,
  textColor,
  text,
  infoColor,
  information,
  lineHeight,
  wordContent,
  wordItems,
  wordDirection,
  wordDisplay,
  width,
  height,
}) {
  return (
    <>
      <div
        className={style.cardsTwo}
        style={{
          backgroundColor: backgroundColor,
          display: display,
          justifyContent: content,
          alignItems: items,
          flexDirection: direction,
          padding: padding,
          width: width,
          height: height,
          boxShadow: boxShadow,
        }}>
        <div>
          <img src={icons} alt="" />
        </div>
        <div
          style={{
            width: cardWidth,
            display: wordDisplay,
            alignItems: wordItems,
            justifyContent: wordContent,
            flexDirection: wordDirection,
            margin: "-1rem 1.5rem",
            height: "100%",
          }}>
          <h1
            style={{
              fontSize: textSize,
              color: textColor,
            }}>
            {text}
          </h1>
          <p
            style={{
              color: infoColor,
              lineHeight: lineHeight,
            }}>
            {information}
          </p>
        </div>
      </div>
    </>
  );
}
