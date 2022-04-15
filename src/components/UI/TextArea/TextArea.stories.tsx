import { useForm } from 'react-hook-form';
import TextArea, { TextAreaProps } from './index';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'UI/TextAera',
  component: TextArea
};

export default meta;

const Template = (args: TextAreaProps) => {
  const { register } = useForm();
  return <div>oui</div>;
};
export const Default = Template.bind({});