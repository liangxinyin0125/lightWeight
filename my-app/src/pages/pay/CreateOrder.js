import { Card, List, Avatar, InputNumber } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useState, useLayoutEffect } from 'react';
import { PlusOutlined, MinusOutlined, LeftOutlined, EnvironmentFilled, EnvironmentTwoTone, setTwoToneColor } from '@ant-design/icons';
import MallTabBar from "../../components/MallTabBar";
import styles from "../../styles/pay/createOrder.module.css";
import { readDefaultAddress } from "../../services/addressService";
import { writeTempOrder, readTempOrder, clearTempOrder, createOrder } from "../../services/orderServices";

setTwoToneColor('#ff5000');

const CreateOrder = () => {
    const order = readTempOrder();
    const isEmpty = (order.length == 0);
    const address = readDefaultAddress();
    const history = useHistory();
    const [total, setTotal] = useState(0); // total其实也可以写进order对象里，但是得有一个set state页面才会重新渲染

    useLayoutEffect(() => {
        calculateTotal();
    }, []);

    const calculateTotal = () => {
        var total = 0;
        order.forEach(element => {
            total += element.detail.price * element.number;
        });
        setTotal(total);
    }

    const onBack = () => {
        clearTempOrder();
        history.goBack();
    }
    const onMinus = (e,index) => {
        onChange(order[index].number - 1, index);
    }
    const onPlus = (e,index) => {
        onChange(order[index].number + 1, index);
    }
    const onChange = (e, index) => {
        if(e == null || e < 1){
            e = 1;
        }
        if(e > 9) {
            e = 9;
        }
        const n_order = [...order];
        n_order[index].number = e;
        writeTempOrder(n_order);
        calculateTotal();
    }
    const onConfirm = () => {
        createOrder(total);
        const totalPrice = total;
        history.push({
            pathname: '/pay',
            state: { totalPrice },
        });
    }

    return (
        <div className={styles.create-order}>
            <div className={styles.header}>
                <LeftOutlined className={styles.backButton} onClick={onBack} />
                <div>确认订单</div>
            </div>
            <div className={styles.content}>
                <Card className={styles.address} title={
                    <div style={{ marginTop: '2rem' }}>
                        <EnvironmentFilled className={styles.mapIcon} />
                        <a style={{ marginLeft: '0.9rem', fontSize: '1.8rem', color: 'black' }}>{address.title}</a>
                    </div>
                }>
                </Card>
                <Card title='' styles={{ header: { fontSize: '1.2rem' } }}>
                    <List
                        className={styles.list}
                        itemLayout="horizontal"
                        dataSource={order}
                        renderItem={(item, index) => (
                            <List.Item style={{ textAlign: 'left' }} className='list_item'>
                                <List.Item.Meta
                                    avatar={<Avatar style={{height: '5rem', width: '5rem'}} shape="square" src={item.detail.imageUrl} />}
                                    title={<span style={{ fontSize: '1rem'}}>{item.detail.title}</span>}
                                    description={<span style={{ fontSize: '1rem'}}>{item.detail.description}</span>}
                                />
                                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <div style={{ color: '#ff5000', marginBottom: '2.5rem' }}>￥{item.detail.price}</div>
                                    <InputNumber style={{ width: '6.5rem', clear: 'both' }} min={1} max={9}
                                    addonBefore={<MinusOutlined onClick={(e) => onMinus(e, index)} disabled={item.number == 1} />}
                                    addonAfter={<PlusOutlined onClick={(e) => onPlus(e, index)} disabled={item.number == 9} />}
                                    value={item.number} onChange={(e) => onChange(e, index)} />
                                </div>
                            </List.Item>
                        )}
                    />
                    <div className={styles.line}>
                        <span style={{marginTop: '0.3rem'}}>合计：<span style={{color: '#ff5000'}}>￥{total}</span></span>
                        <button className={styles.confirmButton} onClick={onConfirm} disabled={isEmpty ? true : false}>
                            提交订单
                        </button>
                    </div>
                </Card>
            </div>
            <MallTabBar activeKey='shoppinCart' />
        </div>
    );
}

export default CreateOrder;


