/* eslint-disable react/prop-types */
import style from "../Features/Card.module.css";

export default function Card({
  imageIcon,
  headSize,
  heading,
  description,
  otherText,
  descSize,
  descWidth,
  arrow,
  width,
  height,
  color,
  padding,
  backgroundColor,
  boxShadow,
  headPad,
  boxPad,
  descColor,
  lineHeight,
  boxDisplay,
  boxContent,
  boxAlign,
  boxPadding,
  boxHeight,
  boxBorder,
  otherFont,
  otherMargin,
  otherColor,
  bigImage,
  display,
  justifyContent,
  alignContent,
  gap,
  boxDirection,
  flexDirection,
  descTextAlign,
  headTextAlign,
  altCardText,
}) {
  return (
    <>
      <div
        className={style.card}
        style={{
          width: width,
          height: height,
          color: color,
          padding: padding,
          backgroundColor: backgroundColor,
          boxShadow: boxShadow,
          display: display,
          justifyContent: justifyContent,
          alignContent: alignContent,
          gap: gap,
          flexDirection: flexDirection,
        }}>
        <div>
          <div
            style={{
              display: boxDisplay,
              justifyContent: boxContent,
              flexDirection: boxDirection,
              alignItems: boxAlign,
              border: boxBorder,
              padding: boxPadding,
              height: boxHeight,
            }}>
            <div>
              <img className={style.image} src={imageIcon} alt={altCardText} />
            </div>
            <div
              style={{
                padding: boxPad,
              }}>
              <p
                className={style.heading}
                style={{
                  fontSize: headSize,
                  padding: headPad,
                  textAlign: headTextAlign,
                }}>
                {heading}
              </p>
              <p
                style={{
                  fontSize: descSize,
                  width: descWidth,
                  textAlign: descTextAlign,
                  color: descColor,
                  lineHeight: lineHeight,
                }}>
                {description}
              </p>
            </div>
          </div>
          <div
            className={style.other}
            style={{
              margin: otherMargin,
            }}>
            <p
              style={{
                fontSize: otherFont,
                color: otherColor,
              }}>
              {otherText}
            </p>
            <img
              style={{
                color: otherColor,
              }}
              src={arrow}
              alt=""
            />
          </div>
        </div>
        <div>
          <img src={bigImage} alt="" />
        </div>
      </div>
    </>
  );
}
