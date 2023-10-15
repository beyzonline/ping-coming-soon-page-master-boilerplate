import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];
type FieldType = {
  email?: string;
};
const FormControl: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('inline');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const buttonItemLayout =
    formLayout === 'inline' ? { wrapperCol: { span: 14, offset: 4 } } : null;


  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item<FieldType>
        name="email"
        rules={[{ required: true, message: 'Please provide a valid email adress' }]}
      >
        <Input placeholder="Your email adress.." />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Notify Me</Button>
      </Form.Item>
    </Form>
  );
};

export default FormControl;