/* eslint-disable react/prop-types */
import style from "./BigCard.module.css";

export default function BigCards({
  fileColor,
  backgroundColor,
  file,
  fileSize,
  textColor,
  fileText,
  images,
  textWidth,
  boxWidth,
  imageWidth,
  boxHeight,
}) {
  return (
    <>
      <div
        className={style.bigCard}
        style={{
          backgroundColor: backgroundColor,
          width: boxWidth,
          height: boxHeight,
          margin: "3rem 0",
        }}>
        <h1
          style={{
            color: fileColor,
            fontSize: fileSize,
            margin: "-7rem 0 2rem",
          }}>
          {file}
        </h1>
        <p
          style={{
            color: textColor,
            maxWidth: textWidth,
          }}>
          {fileText}
        </p>
        <div>
          <img
            style={{
              maxWidth: imageWidth,
            }}
            src={images}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
