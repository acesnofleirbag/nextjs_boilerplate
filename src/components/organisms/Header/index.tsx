import Link from "next/link";
import { Link as CUILink, Flex } from "@chakra-ui/react";

type Props = {
   backgroundColor?: string;
}

export const Header: React.FC<Props> = ({
   backgroundColor = "white",
}: Props) => {
   return (
      <Flex backgroundColor={backgroundColor}>
         <CUILink as={Link} href="/">Home</CUILink>
         <CUILink>Introduction</CUILink>
         <CUILink>Portfolio</CUILink>
         <CUILink>Contact</CUILink>
      </Flex>
   );
}
