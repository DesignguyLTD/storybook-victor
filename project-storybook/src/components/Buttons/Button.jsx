/* eslint-disable react/prop-types */
import style from "./Button.module.css";

export default function Button({
  label,
  backgroundColor,
  color,
  fontSize,
  borderWidth,
  borderColor,
  borderStyle,
  margin,
  onclick,
  width,
  height,
}) {
  return (
    <button
      className={style.button}
      type="button"
      onClick={onclick}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        fontSize: fontSize,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        margin: margin,
        width: width,
        height: height,
      }}>
      {label}
    </button>
  );
}
