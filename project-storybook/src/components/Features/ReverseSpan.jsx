/* eslint-disable react/prop-types */

export default function ReverseSpan({
  headSize,
  headColor,
  headLine,
  headTextAlign,
  headWeight,
  headWidth,
  blackHead,
  coloredText,
  colored,
  extraColor,
  extraSize,
  extraInfo,
  extraTextAlign,
  extraLine,
  extraWidth,
}) {
  return (
    <div>
      <p
        style={{
          fontSize: headSize,
          color: headColor,
          width: headWidth,
          fontWeight: headWeight,
          lineHeight: headLine,
          textAlign: headTextAlign,
        }}>
        {blackHead}
        <span
          style={{
            color: coloredText,
          }}>
          {colored}
        </span>
        .
      </p>
      <p
        style={{
          width: extraWidth,
          color: extraColor,
          fontSize: extraSize,
          textAlign: extraTextAlign,
          lineHeight: extraLine,
          marginTop: "1.5rem",
        }}>
        {extraInfo}
      </p>
    </div>
  );
}
