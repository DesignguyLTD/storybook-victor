import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    borderWidth: { control: "number" },
    borderColor: { control: "color" },
    borderStyle: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "number" },
    width: { control: "number" },
    height: { control: "number" },
    margin: { control: "text" },
    onclick: { action: "clicked" },
  },
};

export const SignIn = (args) => <Button {...args} />;
SignIn.args = {
  label: "Sign In",
  backgroundColor: "white",
  color: "black",
  onclick: action("Sign In"),
};

export const Create = (args) => <Button {...args} />;
Create.args = {
  label: " Create an account",
  backgroundColor: "#651FFF",
  color: "white",
};
