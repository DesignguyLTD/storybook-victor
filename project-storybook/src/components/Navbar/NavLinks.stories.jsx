import NavLinks from "./NavLinks";

export default {
  title: "NavLinks",
  component: NavLinks,
  argTypes: {
    display: { control: "text" },
    alignItems: { control: "text" },
    listStyleType: { control: "text" },
    justifyContent: { control: "text" },
    listPadding: { control: "text" },
    textDecoration: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "number" },
    gap: { control: "number" },
    link1: { control: "text" },
    link2: { control: "text" },
    link3: { control: "text" },
    link4: { control: "text" },
    link5: { control: "text" },
    link6: { control: "text" },
    location1: { control: "text" },
    location2: { control: "text" },
    location3: { control: "text" },
    location4: { control: "text" },
    location5: { control: "text" },
    location6: { control: "text" },
    flexDirection: { control: "text" },
    padding: { control: "text" },
  },
};

export const Links = (args) => <NavLinks {...args} />;
Links.args = {
  display: "flex",
  alignItems: "center",
  listStyleType: "none",
  link1: "Features",
  link2: "Solutions",
  link3: "NFT Storage",
  link4: "Pricing",
  link5: "Developers",
  link6: "Resource",
  fontSize: "16px",
  color: "rgb(92, 95,110)",
  gap: "2rem",
};
