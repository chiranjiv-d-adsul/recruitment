import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const PopupModal = ({ isOpen, onClose, onSave, candidate }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [newCandidate, setNewCandidate] = useState({
    name: candidate ? candidate.name : "",
    location: candidate ? candidate.location : "",
    jobRole: candidate ? candidate.jobRole : "",
  });

  useEffect(() => {
    if (!isOpen) {
      // Reset newCandidate state when modal is closed
      setNewCandidate({
        name: "",
        location: "",
        jobRole: "",
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(newCandidate);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <div className="fixed inset-0 flex items-center justify-center ">
        <ModalContent className="w-[60%] max-w-[400px] sm:mx-auto mx-[10%]  sm:my-[10%] my-[30%] gap-8 p-6 border-2 bg-white rounded-lg">
          <ModalHeader className="flex justify-between font-bold">
            Add a New Candidate
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6}>
            <FormControl className="gap-5 flex flex-col">
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                className="h-[40px] w-full border-2 "
                name="name"
                value={newCandidate.name}
                onChange={handleChange}
                placeholder="Enter candidate name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input
                className="h-[40px] w-full border-2 "
                name="location"
                value={newCandidate.location}
                onChange={handleChange}
                placeholder="Enter candidate location"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Job Role</FormLabel>
              <Input
                className="h-[40px] w-full border-2 "
                name="jobRole"
                value={newCandidate.jobRole}
                onChange={handleChange}
                placeholder="Enter candidate job role"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter className="gap-4 text-white font-medium">
            <Button
              className=" px-4 bg-[#a1a1e4]  py-2 rounded-md hover:bg-[blue]"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#a1a1e4]  px-4 py-2 rounded-md hover:bg-[blue] "
              onClick={handleSave}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </div>
    </Modal>
  );
};

export default PopupModal;
