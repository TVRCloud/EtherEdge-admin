import { Box } from "@chakra-ui/react";

interface CardProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ header, content, footer }) => {
  return (
    <div className="bg-primary-bg rounded-[20px] p-[20px]">
      {header && <Box mb={4}>{header}</Box>}
      {content && <Box mb={4}>{content}</Box>}
      {footer && <Box>{footer}</Box>}
    </div>
  );
};
