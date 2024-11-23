import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { useColorModeValue } from "./color-mode";
import LoadingSpinner from "./loadingSpinner";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
  variantType?: "submit" | "danger" | "edit" | "view"; // Define button variants
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      loading,
      disabled,
      loadingText,
      children,
      variantType = "submit",
      ...rest
    } = props;

    // Define styles based on variantType with support for dark mode
    const variantStyles = {
      submit: {
        bg: useColorModeValue("blue.500", "blue.400"),
        color: "white", // Explicitly set text color to white
        _hover: { bg: useColorModeValue("blue.600", "blue.500") },
        _active: { bg: useColorModeValue("blue.700", "blue.600") },
        _disabled: {
          bg: useColorModeValue("gray.300", "gray.700"),
          color: useColorModeValue("gray.500", "gray.400"), // Disabled text color
          cursor: "not-allowed",
        },
      },
      danger: {
        bg: useColorModeValue("red.500", "red.400"),
        color: "white", // Explicitly set text color to white
        _hover: { bg: useColorModeValue("red.600", "red.500") },
        _active: { bg: useColorModeValue("red.700", "red.600") },
        _disabled: {
          bg: useColorModeValue("gray.300", "gray.700"),
          color: useColorModeValue("gray.500", "gray.400"),
          cursor: "not-allowed",
        },
      },
      edit: {
        bg: useColorModeValue("yellow.500", "yellow.400"),
        color: "white", // Explicitly set text color to white
        _hover: { bg: useColorModeValue("yellow.600", "yellow.500") },
        _active: { bg: useColorModeValue("yellow.700", "yellow.600") },
        _disabled: {
          bg: useColorModeValue("gray.300", "gray.700"),
          color: useColorModeValue("gray.500", "gray.400"),
          cursor: "not-allowed",
        },
      },
      view: {
        bg: useColorModeValue("green.500", "green.400"),
        color: "white", // Explicitly set text color to white
        _hover: { bg: useColorModeValue("green.600", "green.500") },
        _active: { bg: useColorModeValue("green.700", "green.600") },
        _disabled: {
          bg: useColorModeValue("gray.300", "gray.700"),
          color: useColorModeValue("gray.500", "gray.400"),
          cursor: "not-allowed",
        },
      },
    };

    return (
      <ChakraButton
        ref={ref}
        disabled={loading || disabled}
        borderRadius="16px"
        {...variantStyles[variantType]}
        {...rest}
      >
        {loading && !loadingText ? (
          <>
            <LoadingSpinner />
          </>
        ) : loading && loadingText ? (
          <>{loadingText}</>
        ) : (
          children
        )}
      </ChakraButton>
    );
  }
);
