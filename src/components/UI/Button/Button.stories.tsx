import Button, { ButtonProps } from '.';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'UI/Button',
  component: Button
};

export default meta;

const Template = (args: ButtonProps) => {
  return <Button {...args} >button</Button>;
};
export const Default = Template.bind({});