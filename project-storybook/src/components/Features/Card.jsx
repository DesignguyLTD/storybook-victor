/* eslint-disable react/prop-types */
import arrow from "../asset/arrow-right-long 5.svg";
import style from "../Features/Card.module.css";

export default function Card({
  imageIcon,
  headSize,
  heading,
  description,
  otherText,
  descSize,
  descWidth,
}) {
  return (
    <>
      <div className={style.card}>
        <div>
          <img className={style.image} src={imageIcon} alt="" />
        </div>
        <div>
          <p
            className={style.heading}
            style={{
              fontSize: headSize,
            }}>
            {heading}
          </p>
          <p
            style={{
              fontSize: descSize,
              width: descWidth,
            }}>
            {description}
          </p>
        </div>
        <div className={style.other}>
          <p>{otherText}</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </>
  );
}
