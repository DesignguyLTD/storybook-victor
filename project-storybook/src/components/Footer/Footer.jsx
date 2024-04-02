/* eslint-disable react/prop-types */
export default function Footer({
  gap,
  color,
  padding,
  display,
  alignItems,
  justifyContent,
  backgroundColor,
  logo,
  information,
  images,
  products,
  link1,
  link2,
  link3,
  resource,
  community,
  copy,
  socials,
  headSize,
  fontWeight,
  textAlign,
  firstDisplay,
  firstDirection,
  firstGap,
  firstItems,
  firstJustify,
  imageDisplay,
  imageGap,
  imageItems,
  imageMargins,
  socialDisplay,
  socialGap,
  socialItems,
  socialMargins,
  width,
  height,
  headPad,
  lastDisplay,
  lastGap,
  lastItems,
  lastJustify,
  lastPadding,
  lastMargins,
}) {
  return (
    <div
      style={{
        color: color,
        padding: padding,
        backgroundColor: backgroundColor,
        height: height,
      }}>
      <div
        style={{
          display: display,
          alignItems: alignItems,
          justifyContent: justifyContent,
          gap: gap,
        }}>
        <div
          style={{
            display: firstDisplay,
            justifyContent: firstJustify,
            flexDirection: firstDirection,
            alignItems: firstItems,
            gap: firstGap,
            width: width,
          }}>
          <p
            style={{
              fontSize: headSize,
              fontWeight: fontWeight,
              textAlign: textAlign,
              padding: headPad,
            }}>
            {logo}
          </p>
          <p>{information}</p>
          <div
            style={{
              margin: imageMargins,
              display: imageDisplay,
              alignItems: imageItems,
              gap: imageGap,
            }}>
            {images}
          </div>
        </div>
        <div
          style={
            {
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "left",
              // justifyContent: "center",
            }
          }>
          <p
            style={{
              fontSize: headSize,
              fontWeight: fontWeight,
              textAlign: textAlign,
              padding: headPad,
            }}>
            {products}
          </p>
          <div>{link1}</div>
        </div>
        <div>
          <p
            style={{
              fontSize: headSize,
              fontWeight: fontWeight,
              textAlign: textAlign,
              padding: headPad,
            }}>
            {resource}
          </p>
          <div>{link2}</div>
        </div>
        <div>
          <p
            style={{
              fontSize: headSize,
              fontWeight: fontWeight,
              textAlign: textAlign,
              padding: headPad,
            }}>
            {community}
          </p>
          <div>{link3}</div>
        </div>
      </div>
      <div
        style={{
          margin: lastMargins,
          display: lastDisplay,
          alignItems: lastItems,
          gap: lastGap,
          padding: lastPadding,
          justifyContent: lastJustify,
        }}>
        <p
          style={{
            fontSize: headSize,
            fontWeight: fontWeight,
            textAlign: textAlign,
            padding: headPad,
          }}>
          {copy}
        </p>
        <div
          style={{
            margin: socialMargins,
            display: socialDisplay,
            alignItems: socialItems,
            gap: socialGap,
          }}>
          {socials}
        </div>
      </div>
    </div>
  );
}
