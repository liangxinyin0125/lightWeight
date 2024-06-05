import { Button, Card, Layout, List, Avatar, InputNumber } from 'antd';
import { Redirect } from 'react-router-dom';
import React, { useState, useLayoutEffect } from 'react';
import { LeftOutlined, EnvironmentFilled } from '@ant-design/icons';
import MallTabBar from "../../components/MallTabBar";
// import styles from "../../styles/pay/create-order.module.css";
// import "../../styles/pay/create-order.css";
import { writeTempOrder, readTempOrder, clearTempOrder, updateTempOrder, createOrder } from "../../services/orderServices";

const { Header, Content, Footer } = Layout;

const CreateOrder = () => {
    const order = JSON.parse(localStorage.getItem('temp_order'));
    console.log(order);
    const address = localStorage.getItem('default_address');
    const [total, setTotal] = useState(0);
    const [back, setBack] = useState(false);
    const [confirm, setConfirm] = useState(false);

    useLayoutEffect(() => {
        calculateTotal();
    }, []);

    const calculateTotal = () => {
        var total = 0;
        order.data.forEach(element => {
            total += element.detail.price * element.number;
        });
        setTotal(total);
    }

    const onBack = () => {
        clearTempOrder();
        setBack(true);
    }
    const onChange = (e, index) => {
        if(e == null){
            e = 1;
        }
        var n_order = order;
        n_order.data[index].number = e;
        updateTempOrder(n_order);
        calculateTotal();
    }
    const onConfirm = () => {
        createOrder();
        setConfirm(true);
    }

    if(back) {
        return <Redirect to='/shoppinCart' replace='true' />;
    }
    if(confirm) {
        return <Redirect to='/' replace='true' />;
    }

    return (
        <div className='create-order'>
            <Layout>
                <Header className='header'>
                    <Button className='back' icon={<LeftOutlined />} onClick={onBack} />
                    <h1 className='title'>确认订单</h1>
                </Header>
                <Content className='content'>
                    <Card className='address' title={
                        <div>
                            <EnvironmentFilled style={{ fontSize: '1.2rem' }} />
                            <a style={{ marginLeft: '0.9rem', fontSize: '1.2rem' }}>{address}</a>
                        </div>
                    }>
                    </Card>
                    <Card className='order' title='订单明细' styles={{ header: { fontSize: '1.2rem', marginTop: '0.6rem' } }}>
                        <List
                            className='list'
                            itemLayout="horizontal"
                            dataSource={order.data}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar shape="square" src={item.detail.icon} />}
                                        title={<p>{item.detail.title}</p>}
                                        description={<p>{item.detail.description}</p>}
                                    />
                                    <div>
                                        <p style={{marginLeft: '0.6rem'}}>单价：￥{item.detail.price}</p>
                                        <InputNumber style={{ width: '7rem' }} min={1} addonBefore='数量：'
                                        defaultValue={item.number} onChange={(e) => onChange(e, index)} />
                                    </div>
                                </List.Item>
                            )}
                        />
                        <div className='line'>
                            <p>总价：￥${total}</p>
                            <Button type='primary' onClick={onConfirm}>
                                支付
                            </Button>
                        </div>
                    </Card>
                </Content>
                <MallTabBar activeKey='shoppinCart' />
                {/* <Footer className='footer'>
                    <MallTabBar activeKey='shoppinCart' />
                </Footer> */}
            </Layout>
        </div>
    );
}

export default CreateOrder;


