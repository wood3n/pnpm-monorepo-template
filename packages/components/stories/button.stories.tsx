import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../src/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
  render: () => <Button>测试</Button>,
};
