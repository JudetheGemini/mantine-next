"use client";
import {
  Button,
  Group,
  createTheme,
  MantineThemeProvider,
} from "@mantine/core";

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "cyan",
        variant: "outline",
      },
    }),
  },
});

export default function DemoButton() {
  return (
    <MantineThemeProvider theme={theme}>
      <Button>Default button</Button>
      <Button color="red" variant="filled">
        Button with props
      </Button>
    </MantineThemeProvider>
  );
}
