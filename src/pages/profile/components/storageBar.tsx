import { Box, Flex, Text } from "@chakra-ui/react";

type StorageBarProps = {
  storageUsed: number;
  storageTotal: number;
};
const StorageBar = ({ storageUsed, storageTotal }: StorageBarProps) => {
  const storagePercentage = (storageUsed / storageTotal) * 100;

  return (
    <Box w="100%" mt="auto" minHeight="50px" className="systemStorage-bar">
      <Flex w="100%" justify="space-between" mb="10px" className="sysS">
        <Text className="sysS-text">
          Storage Used: {storageUsed}GB / {storageTotal}GB
        </Text>
        <Text className="sysS-text">{storagePercentage.toFixed(2)}%</Text>
      </Flex>
      <Box
        w="100%"
        bg="gray.200"
        borderRadius="10px"
        overflow="hidden"
        height="20px"
        position="relative"
      >
        <Box
          bg="#422afb"
          height="100%"
          width={`${storagePercentage}%`}
          borderRadius={storagePercentage < 100 ? "10px" : "10px"}
          position="absolute"
          transition="width 0.5s ease-in-out"
        />
        <Box
          bg="#f4f7fe"
          height="100%"
          width={`${100 - storagePercentage}%`}
          position="absolute"
          right="0"
        />
      </Box>
    </Box>
  );
};

export default StorageBar;
