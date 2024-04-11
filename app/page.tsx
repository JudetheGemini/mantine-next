import Link from "next/link";
import { Button, Center, Flex, Group } from "@mantine/core";

export default function Home() {
  return (
    <Flex justify="center" align="center" pos="absolute" top="50%" left="45%">
      <Button component={Link} href={"/dashboard"}>
        {" "}
        Go to Dashboard
      </Button>
    </Flex>
  );
}
