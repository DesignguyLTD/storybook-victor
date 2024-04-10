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
  altLogoText,
  backgroundColor,
  width,
}) {
  return (
    <div
      style={{
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        backgroundColor: backgroundColor,
        width: width,
      }}>
      <img src={image1} alt={altLogoText} />
      <img src={image2} alt={altLogoText} />
      <img src={image3} alt={altLogoText} />
      <img src={image4} alt={altLogoText} />
    </div>
  );
}
