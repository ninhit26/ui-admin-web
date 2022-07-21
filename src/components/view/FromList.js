import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Modal, Popconfirm, Space, Table } from "antd";
import { getAbsenceReasons } from "../api/api";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function FromList() {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);

  useEffect(() => {
    getAbsenceReasons().then((res) => {
      setData(res);
    });
  }, []);

  const onFinish = (value) => {
    console.log(value);
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };


  const handleOnDelete = (value) => {
    console.log(value);
  };

  const showModalAdd = () => {
    setIsModalVisibleAdd(true);
  };

  const handleOk = () => {
    onFinish()
    setIsModalVisibleAdd(false);
  };

  const handleCancel = () => {
    setIsModalVisibleAdd(false);
  };

  const columns = [
    {
      title: "Tên ngân hàng",
      dataIndex: "Tên ngân hàng",
      key: "Tên ngân hàng",
    },
    {
      title: "Số điện thoại",
      dataIndex: "Số điện thoại",
      key: "Số điện thoại",
    },
    {
      title: "Họ và tên",
      dataIndex: "Họ và tên",
      key: "Họ và tên",
    },
    {
      title: "Chứng minh thư / CCCD",
      dataIndex: "Chứng minh thư / CCCD",
      key: "Chứng minh thư / CCCD",
    },
    {
      title: "Tên tài khoản",
      dataIndex: "Tên tài khoản",
      key: "Tên tài khoản",
    },
    {
      title: "Ngày tạo",
      dataIndex: "Ngày tạo",
      key: "Ngày tạo",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Popconfirm
          title="Bạn có chắc muốn xóa thông tin người dùng này không ?"
          onConfirm={() => handleOnDelete(record)}
          okText="Có"
          cancelText="Không"
        >
          <a href="#">Xóa </a>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModalAdd}>
        Thêm mới thông tin
      </Button>
      <Modal
        title="Thêm mới thông tin người dùng"
        visible={isModalVisibleAdd}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
            disabled: true,
          }}
          cancelButtonProps={{
            disabled: true,
          }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="bankName"
            label="Tên ngân hàng"
            rules={[{required: true,} ]}
          >
            <Input placeholder="Nhập tên ngân hàng" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[{required: true,} ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item
            name="fullName"
            label="Họ và tên"
            rules={[{required: true,} ]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới
              </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default FromList;
