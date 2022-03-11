import { useForm } from 'react-hook-form';
import TextArea from './index';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/TextAera',
  component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template = (args: any) => {
  const { register } = useForm();
  return <TextArea {...args} register={register} />;
};
export const Default = Template.bind({});