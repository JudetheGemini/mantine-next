"use client";
import {
  AppShell,
  Burger,
  Button,
  Flex,
  createTheme,
  Group,
  MantineThemeProvider,
  Divider,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure, useHover } from "@mantine/hooks";

import ToothIcon from "../components/logo";
import {
  ArchiveIcon,
  CalendarIcon,
  QuestionMarkCircledIcon,
  ClipboardIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import classes from "./layout.module.css";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { toggle: toggleMobile }] = useDisclosure(false, {
    onOpen: () => console.log("Opened"),
  });
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const defaultTheme = useMantineTheme();
  const { hovered, ref } = useHover();

  // Creating theme
  const theme = createTheme({
    components: {
      Button: Button.extend({
        defaultProps: {
          color: "white",
          variant: "transparent",
        },
      }),
      Flex: Flex.extend({
        defaultProps: {
          gap: "lg",
        },
      }),
    },
  });

  return (
    <AppShell
      transitionDuration={750}
      transitionTimingFunction="ease"
      header={{ height: 60 }}
      navbar={{
        width: 70,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !desktopOpened },
      }}
      //   footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header px="lg" ml="">
        <Group px="" align="center">
          <Burger
            opened={opened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="md"
          />
          <h3>Dentist Direct</h3>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        bg={defaultTheme.colors.blue[9]}
        className={classes.navBar}
      >
        <AppShell.Section m="md" className={classes.section}>
          <Flex gap="15" p="lg" className={classes.menuContainer}>
            <MantineThemeProvider theme={theme}>
              <Burger size="sm" color="white" visibleFrom="sm" />
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Home"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <HomeIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/dashboard"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Home
                  </Button>
                }
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Book Appointment"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <CalendarIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/dashboard/book"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Book Appointment
                  </Button>
                }
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Manage Appointment"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <ClipboardIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/dashboard/manage"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Manage Appointment
                  </Button>
                }
              </Flex>

              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Appointment History"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <ArchiveIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                <Button
                  component={Link}
                  href={"/dashboard/history"}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                >
                  Appointment History
                </Button>
              </Flex>
            </MantineThemeProvider>
          </Flex>
        </AppShell.Section>

        <AppShell.Section m="md" className={classes.section}>
          <Flex gap="15" p="lg" className={classes.menuContainer}>
            <MantineThemeProvider theme={theme}>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Settings"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <GearIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/dashboard/settings"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Settings
                  </Button>
                }
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Profile"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <PersonIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/dashboard/profile"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Profile
                  </Button>
                }
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Help & Support"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <QuestionMarkCircledIcon
                      width="20"
                      height="20"
                      color="white"
                    />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/dashboard/help"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Help
                  </Button>
                }
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <Tooltip
                  label="Logout"
                  position="right"
                  offset={-5}
                  transitionProps={{ transition: "fade", duration: 300 }}
                >
                  <Button>
                    <ExitIcon width="20" height="20" color="white" />
                  </Button>
                </Tooltip>

                {
                  <Button
                    component={Link}
                    href={"/"}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                  >
                    Logout
                  </Button>
                }
              </Flex>
            </MantineThemeProvider>
          </Flex>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      {/* <AppShell.Footer>Footer</AppShell.Footer> */}
    </AppShell>
  );
}
