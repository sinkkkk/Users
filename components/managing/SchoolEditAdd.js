import React, { useState } from "react"
import { Button, Modal, Form, Input, InputNumber, Select } from "antd"

const { Option } = Select

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      visible={visible}
      title="Add a new School"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log("Validate Failed:", info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="school_add"
      >
        <Form.Item name={["school", "regcode"]} label="Registry Code" rules={[{ required: true, message: "Please input a registry code!" }]}>
          <InputNumber style={{ width: 472 }}/>
        </Form.Item>

        <Form.Item name={["school", "name"]} label="Name" rules={[{ required: true, message: "Please input a name!" }]}>
          <Input />
        </Form.Item>

        <Form.Item name={["school", "type"]} label="Type" rules={[{ required: true, message: "Please input a type!" }]}>
          <Select placeholder="Select school type">
            <Option value="Primary School">Primary School</Option>
            <Option value="High School">High School</Option>
            <Option value="Vocational School">Vocational School</Option>
            <Option value="University">University</Option>
          </Select>
        </Form.Item>

        <Form.Item name={["school", "county"]} label="County" rules={[{ required: true, message: "Please input a county!" }]}>
          <Input />
        </Form.Item>

        <Form.Item name={["school", "city"]} label="City" rules={[{ required: true, message: "Please input a city!" }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    console.log("Received values of form: ", values)
    setVisible(false)
    fetch("/api/v1/schools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then((json) => {
        console.log("Create school response: ", json)
      })
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
      >
        Add
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

class SchoolEditAdd extends React.Component {
  render () {
    return <CollectionsPage />
  }
}

export default SchoolEditAdd
