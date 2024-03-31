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
    links: { control: "text" },
  },
};

export const Links = (args) => <Links {...args} />;
