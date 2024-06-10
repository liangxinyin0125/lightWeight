import React, { useState, useEffect } from 'react';
import { Button, List, Space, Divider, Modal, Form, Input, Tag } from 'antd';
import { ArrowLeftOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import styles from '../../styles/mall/address.module.css'; 
import { writeAddress, readAddress, removeAddress, updateAddress, writeDefaultAddress, readDefaultAddress } from '../../services/addressService'; 

const Address = () => {
  const [addressList, setAddressList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (!localStorage.getItem('addresses')) {
      const initialAddresses = [
        {
          key: 1,
          title: 'Home',
          addressee: 'John Doe',
          telephone: '123-456-7890',
          address: '123 Main St, Anytown, USA',
        },
        {
          key: 2,
          title: 'Office',
          addressee: 'Jane Smith',
          telephone: '987-654-3210',
          address: '456 Elm St, Othertown, USA',
        },
      ];
      localStorage.setItem('addresses', JSON.stringify(initialAddresses));
      writeDefaultAddress(1);
    }
    setAddressList(readAddress() || []);
    setDefaultAddress(readDefaultAddress() || {});
  }, []);

  const showModal = (address = null) => {
    setCurrentAddress(address);
    if (address) {
      form.setFieldsValue(address);
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (currentAddress) {
        updateAddress(currentAddress.key, values);
      } else {
        writeAddress(values);
      }
      setAddressList(readAddress() || []);
      setDefaultAddress(readDefaultAddress() || {});
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (address) => {
    showModal(address);
  };

  const handleDelete = (key) => {
    removeAddress(key);
    setAddressList(readAddress() || []);
    setDefaultAddress(readDefaultAddress() || {});
  };

  const handleAddNewAddress = () => {
    showModal();
  };

  const handleSetDefault = (key) => {
    writeDefaultAddress(key);
    setDefaultAddress(readDefaultAddress() || {});
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button icon={<ArrowLeftOutlined />} type="text" onClick={() => console.log('返回')} />
        <h4 className={styles.myAddress}>我的收货地址</h4>
      </div>

      <Divider />

      <List
        itemLayout="vertical"
        dataSource={addressList}
        renderItem={item => (
          <List.Item className={styles.itemBox}>
            <List.Item.Meta
              title={<span className={`${styles.itemTitle} ${styles.nickname}`}>{`${item.addressee} ${item.telephone}`}</span>}
              description={<span className={styles.itemDescription}>{item.address}</span>}
            />
            <div className={styles.actions}>
              {defaultAddress.key === item.key && (
                <Tag color="blue" className={styles.defaultTag}>默认地址</Tag>
              )}
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => handleEdit(item)}
              />
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(item.key)}
              />
              <Button
                type="text"
                onClick={() => handleSetDefault(item.key)}
              >
                设为默认
              </Button>
            </div>
          </List.Item>
        )}
      />

      <div className={styles.addButtonContainer}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddNewAddress}
          className={styles.addButton}
        >
          新增地址
        </Button>
      </div>

      <Modal title={currentAddress ? '编辑地址' : '新增地址'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="addressee" label="收件人" rules={[{ required: true, message: '请输入收件人' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="telephone" label="电话" rules={[{ required: true, message: '请输入电话' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="地址" rules={[{ required: true, message: '请输入地址' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Address;
