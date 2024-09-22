import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    viewport: {
      disable: true,
    },
    options: {
      storySort: {
        order: ["*", "Changelog"],
      },
    },
  },
};

export default preview;
