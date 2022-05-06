import { ModalProps, ModalLayout as Modal } from '.';
import { Meta } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';

const meta: Meta = {
  title: 'UI/Modal',
  component: Modal
};

export default meta;

const Template = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const closeHandler = () => setIsOpen(false);

  const openHandler = () => setIsOpen(true);

  return (
    <>
      <Button onClick={openHandler}>
        Open modal
      </Button>
      <Modal isOpen={isOpen} onClose={closeHandler} >
        My Modal
      </Modal>
    </>
  );
};
export const Default = Template.bind({});