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
}) {
  return (
    <div
      style={{
        gap: gap,
        color: color,
        padding: padding,
        display: display,
        alignItems: alignItems,
        justifyContent: justifyContent,
        backgroundColor: backgroundColor,
      }}>
      <div>
        <div>
          <p>{logo}</p>
          <p>{information}</p>
          <div>{images}</div>
        </div>
        <div>
          <p
            style={{
              fontSize: headSize,
            }}>
            {products}
          </p>
          <div>{link1}</div>
        </div>
        <div>
          <p
            style={{
              fontSize: headSize,
            }}>
            {resource}
          </p>
          <div>{link2}</div>
        </div>
        <div>
          <p
            style={{
              fontSize: headSize,
            }}>
            {community}
          </p>
          <div>{link3}</div>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: headSize,
          }}>
          {copy}
        </p>
        <div>{socials}</div>
      </div>
    </div>
  );
}
