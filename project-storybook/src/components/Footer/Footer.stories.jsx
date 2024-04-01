import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    gap: { control: "text" },
    color: { control: "text" },
    padding: { control: "text" },
    display: { control: "text" },
    alignItems: { control: "text" },
    justifyContent: { control: "text" },
    backgroundColor: { control: "text" },
    logo: { control: "text" },
    information: { control: "text" },
    images: { control: "text" },
    products: { control: "text" },
    link1: { control: "text" },
    link2: { control: "text" },
    link3: { control: "text" },
    resource: { control: "text" },
    community: { control: "text" },
    copy: { control: "text" },
    socials: { control: "text" },
    headSize: { control: "text" },
  },
};

export const Foot = (args) => <Footer {...args} />;
Foot.args = {};
