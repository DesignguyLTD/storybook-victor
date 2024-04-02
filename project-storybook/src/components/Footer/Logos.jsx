/* eslint-disable react/prop-types */
export default function Logos({
  display,
  justifyContent,
  gap,
  alignItems,
  image1,
  image2,
  image3,
  image4,
}) {
  return (
    <div
      style={{
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
      }}>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
    </div>
  );
}
