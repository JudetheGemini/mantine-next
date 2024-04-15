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
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const defaultTheme = useMantineTheme();

  const theme = createTheme({
    components: {
      Button: Button.extend({
        defaultProps: {
          color: "white",
          variant: "transparent",
        },
      }),
    },
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
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
      <AppShell.Navbar p="lg" bg={defaultTheme.colors.blue[9]}>
        <AppShell.Section m="md">
          <Flex gap="md" p="lg" align="start" direction="column">
            <MantineThemeProvider theme={theme}>
              {/* <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
              /> */}
              <Flex gap="sm" direction="row" justify="center" align="center">
                <HomeIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard"}
                  onClick={toggleMobile}
                >
                  Home
                </Button>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <CalendarIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard/book"}
                  onClick={toggleMobile}
                >
                  Book Appointment
                </Button>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <ClipboardIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard/manage"}
                  onClick={toggleMobile}
                >
                  Manage Appointment
                </Button>
              </Flex>

              <Flex gap="sm" direction="row" justify="center" align="center">
                <ArchiveIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard/history"}
                  onClick={toggleMobile}
                >
                  Appointment History
                </Button>
              </Flex>
            </MantineThemeProvider>
          </Flex>
        </AppShell.Section>
        <Divider />
        <AppShell.Section m="md">
          <Flex gap="md" align="start" p="lg" direction="column">
            <MantineThemeProvider theme={theme}>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <GearIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard/settings"}
                  onClick={toggleMobile}
                >
                  Settings
                </Button>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <PersonIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard/profile"}
                  onClick={toggleMobile}
                >
                  Profile
                </Button>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <QuestionMarkCircledIcon width="20" height="20" color="white" />
                <Button
                  component={Link}
                  href={"/dashboard/help"}
                  onClick={toggleMobile}
                >
                  Help
                </Button>
              </Flex>
              <Flex gap="sm" direction="row" justify="center" align="center">
                <ExitIcon width="20" height="20" color="white" />
                <Button component={Link} href={"/"} onClick={toggleMobile}>
                  Logout
                </Button>
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
