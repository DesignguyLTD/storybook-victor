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
  specs,
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
            }}
          />
          <p
            style={{
              color: writingColor,
              fontSize: writingSize,
              width: writingWidth,
            }}>
            {writings}
          </p>
        </div>
        <div>
          <>{button}</>
          <div
            style={{
              display: amountDisplay,
              alignItems: amountAlign,
              justifyContent: amountJustify,
              flexDirection: amountDirection,
            }}>
            <p
              style={{
                fontSize: amountSize,
                color: amountColor,
                fontWeight: amountWeight,
                lineHeight: "72px",
                margin: "0px",
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
        <div>
          <>{button2}</>
          <div
            style={{
              display: amountDisplay2,
              alignItems: amountAlign2,
              justifyContent: amountJustify2,
              flexDirection: amountDirection2,
            }}>
            <p
              style={{
                fontSize: amountSize,
                color: amountColor,
                fontWeight: amountWeight,
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
            }}>
            <img src={tick} alt="" />
            <p>{specs}</p>
          </div>
          <div
            style={{
              display: specDisplay,
              alignItems: specItems,
              justifyContent: specContents,
              gap: specGap,
            }}>
            <img src={tick} alt="" />
            <p>{specs}</p>
          </div>
          <div
            style={{
              display: specDisplay,
              alignItems: specItems,
              justifyContent: specContents,
              gap: specGap,
            }}>
            <img src={tick} alt="" />
            <p>{specs}</p>
          </div>
        </div>
      </div>
    </>
  );
}
