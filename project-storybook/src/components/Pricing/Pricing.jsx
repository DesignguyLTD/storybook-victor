import style from "./Pricing.module.css";

/* eslint-disable react/prop-types */
export default function Pricing({
  storage,
  writings,
  button,
  amount,
  gb,
  button2,
  amount2,
  gb2,
  bigButton,
  tick,
  specs1,
  specs2,
  specs3,
  padding,
  width,
  height,
  display,
  justifyContent,
  alignItems,
  boxShadow,
  backgroundColor,
  headWeight,
  headSize,
  headColor,
  hrTextDecoration,
  hrWidth,
  hrColor,
  writingColor,
  writingSize,
  writingWidth,
  amountAlign,
  amountColor,
  amountDirection,
  amountDisplay,
  amountJustify,
  amountSize,
  amountWeight,
  gbFontSize,
  gbWeight,
  specContents,
  specDisplay,
  specGap,
  specItems,
  borderRadius,
  flexDirection,
  hrBorderW,
  textAlign,
  amountAlign2,
  amountDirection2,
  amountDisplay2,
  amountJustify2,
  gap,
  hrBorder,
  hrPad,
  specPad,
  writingMargin,
  amountGap,
  amountGap2,
  color,
}) {
  return (
    <>
      <div
        style={{
          padding: padding,
          width: width,
          height: height,
          display: display,
          justifyContent: justifyContent,
          alignItems: alignItems,
          gap: gap,
          boxShadow: boxShadow,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          flexDirection: flexDirection,
          marginBottom: "15px",
          color: color,
        }}>
        <div style={{ textAlign: textAlign }}>
          <h2
            style={{
              fontWeight: headWeight,
              fontSize: headSize,
              color: headColor,
              marginBottom: "16px",
            }}>
            {storage}
          </h2>
          <hr
            className={style.hr}
            style={{
              width: hrWidth,
              borderStyle: hrTextDecoration,
              borderColor: hrColor,
              borderWidth: hrBorderW,
              border: hrBorder,
              margin: hrPad,
            }}
          />
          <p
            style={{
              color: writingColor,
              fontSize: writingSize,
              width: writingWidth,
              margin: writingMargin,
            }}>
            {writings}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            flexDirection: "column",
            margin: "0px",
          }}>
          <>{button}</>
          <div
            style={{
              display: amountDisplay,
              alignItems: amountAlign,
              justifyContent: amountJustify,
              flexDirection: amountDirection,
              gap: amountGap,
            }}>
            <p
              style={{
                fontSize: amountSize,
                color: amountColor,
                fontWeight: amountWeight,
              }}>
              {amount}
            </p>
            <p
              style={{
                fontWeight: gbWeight,
                fontSize: gbFontSize,
              }}>
              {gb}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}>
          <>{button2}</>
          <div
            style={{
              display: amountDisplay2,
              alignItems: amountAlign2,
              justifyContent: amountJustify2,
              flexDirection: amountDirection2,
              gap: amountGap2,
              // margin: "0px",
            }}>
            <p
              style={{
                fontSize: amountSize,
                color: amountColor,
                fontWeight: amountWeight,
                margin: "0px",
              }}>
              {amount2}
            </p>
            <p
              style={{
                fontWeight: gbWeight,
                fontSize: gbFontSize,
              }}>
              {gb2}
            </p>
          </div>
        </div>
        <div>{bigButton}</div>
        <div>
          <div
            style={{
              display: specDisplay,
              alignItems: specItems,
              justifyContent: specContents,
              gap: specGap,
              padding: specPad,
            }}>
            <img src={tick} alt="" />
            <p>{specs1}</p>
          </div>
          <div
            style={{
              display: specDisplay,
              alignItems: specItems,
              justifyContent: specContents,
              gap: specGap,
              padding: specPad,
            }}>
            <img src={tick} alt="" />
            <p>{specs2}</p>
          </div>
          <div
            style={{
              display: specDisplay,
              alignItems: specItems,
              justifyContent: specContents,
              gap: specGap,
              padding: specPad,
            }}>
            <img src={tick} alt="" />
            <p>{specs3}</p>
          </div>
        </div>
      </div>
    </>
  );
}
