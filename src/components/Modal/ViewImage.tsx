import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        bgColor="pGray.800"
        w="auto"
        h="auto"
        maxW="900px"
        overflow="hidden"
        mx="4"
      >
        <ModalBody p="0">
          <Image src={imgUrl} w="100%" maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter
          bgColor="pGray.800"
          h="32px"
          justifyContent="flex-start"
          px="10px"
          py="8px"
        >
          <Link href={imgUrl} target="_blank" rel="nofollow" fontSize="14px">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
