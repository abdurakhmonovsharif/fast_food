import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { ReactNode } from "react";

const QuestionerModal = ({
    children,
    isOpen,
    onClose,
    ifAgree,
}: {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    ifAgree?: () => void;
}
) => {
    const handleAgree = () => {
        onClose?.()
        ifAgree?.()
    }
    return (
        <Modal backdrop={'opaque'} isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Yo'q
                            </Button>
                            <Button color="primary" onPress={handleAgree}>
                                Ha
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default QuestionerModal
