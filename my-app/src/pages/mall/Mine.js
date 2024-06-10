import React, { useState, useEffect } from 'react';
import MallTabBar from "../../components/MallTabBar";
import { Link } from 'react-router-dom';
import { Avatar, Row, Col, Button, List, Divider, Space } from 'antd';
import {
  SettingOutlined,
  UserOutlined,
  CreditCardOutlined,
  FileDoneOutlined,
  SendOutlined,
  RetweetOutlined,
  EnvironmentOutlined,
  HistoryOutlined,
  HeartOutlined,
  StarOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import styles from '../../styles/mall/mine.module.css';
import { getUserInfo, getOrderStats, getMenuItems } from '../../services/mineServices';

const Mine = () => {
  const [userInfo, setUserInfo] = useState({});
  const [orderStats, setOrderStats] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setUserInfo(getUserInfo());
    setOrderStats(getOrderStats());
    setMenuItems(getMenuItems());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Space align="center" size="large">
          <Avatar size={90} icon={<UserOutlined />} />
          <div>
            <h2 className={styles.h2}>{userInfo.nickname}</h2>
          </div>
        </Space>
        <div className={styles.icons}>
          {/*<Button shape="circle" icon={<SettingOutlined />} />*/}
        </div>
      </div>

      <Divider />

      <Row gutter={16} className={styles.section}>
        <Col span={6}>
          <div className={styles.statItem}>
            <FileDoneOutlined style={{ fontSize: '24px' }} />
            <p style={{ marginTop: '12px' }}>全部订单</p>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.statItem}>
            <CreditCardOutlined style={{ fontSize: '24px' }} />
            <p style={{ marginTop: '12px' }}>待付款</p>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.statItem}>
            <SendOutlined style={{ fontSize: '24px' }} />
            <p style={{ marginTop: '12px' }}>待收货</p>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.statItem}>
            <RetweetOutlined style={{ fontSize: '24px' }} />
            <p style={{ marginTop: '12px' }}>退款/售后</p>
          </div>
        </Col>
      </Row>

      <Divider />

      <List
        itemLayout="horizontal"
        dataSource={menuItems}
        renderItem={item => (
          <List.Item style={{ marginBottom: '16px' }}>
            <List.Item.Meta
              avatar={React.createElement(require('@ant-design/icons')[item.icon], { style: { fontSize: '24px' } })}
              title={<h3 style={{ fontSize: '16px' }}><Link to={item.link} style={{ color: '#000' }}>{item.title}</Link></h3>}
            />
          </List.Item>
        )}
      />

      <MallTabBar activeTab="mine" />
    </div>
  );
};

export default Mine;
