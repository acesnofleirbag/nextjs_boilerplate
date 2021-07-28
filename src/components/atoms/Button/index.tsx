import { Button as CUIButton } from "@chakra-ui/react";

type Props = {
  backgroundColor?: string;
  fontColor?: string;
  label: string;
  onClick?: () => void;
  outline?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

export const Button: React.FC<Props> = ({
  backgroundColor = "capri",
  fontColor = "white",
  label,
  outline = false,
  size = "md",
  ...props
}: Props) => {
  return (
    <CUIButton
       bg={outline ? "transparent" : backgroundColor}
       color={outline ? backgroundColor : fontColor}
       borderColor={outline ? backgroundColor : "transparent"}
       border={outline ? "2px" : undefined}
       size={size}
       {...props}
    >
      {label}
    </CUIButton>
  );
}
