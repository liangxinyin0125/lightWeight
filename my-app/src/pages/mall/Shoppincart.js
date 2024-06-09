import { Card, List, Avatar, Checkbox, ConfigProvider } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { MinusCircleFilled } from '@ant-design/icons';
import MallTabBar from "../../components/MallTabBar";
import { removeShoppincart, readShoppincart } from "../../services/shoppincartServices";
import { writeTempOrder } from "../../services/orderServices";
import styles from "../../styles/mall/shoppincart.module.css";

const ShoppinCart = () => {
    const address = '北京交通大学';
    localStorage.setItem('default_address', address);
    // localStorage.removeItem('default_address');
    // 以上都是调试用的代码

    const history = useHistory();
    const items = readShoppincart() || [];
    const isEmpty = (items.length == 0);
    const [manage, setManage] = useState(false);
    const [select, setSelect] = useState(new Array(items.length).fill(false));

    const onManage = (e) => {
        if (manage) {
            setManage(false);
        }
        else {
            setManage(true);
        }
    }
    const onSelect = (e, index) => {
        const n_select = [...select];
        n_select[index] = e.target.checked;
        setSelect(n_select);
    }
    const onSubmit = () => {
        var order = [];
        select.forEach((selected, index) => {
            if (selected) {
                order = order.concat({
                    detail: items[index],
                    number: 1,
                });
            }
        });
        writeTempOrder(order);
        history.push('/createOrder');
    }
    const onDelete = () => {
        select.forEach((selected, index) => {
            if (selected) {
                removeShoppincart(items[index].id);
            }
        });
        setSelect(select.filter(selected => {
            return !selected;
        }));
    }
    const onDeleteIcon = (e, index) => {
        removeShoppincart(items[index].id);
        setSelect(select.slice(0, index).concat(select.slice(index + 1)));
    }
    return (
        <div className={styles.shoppincart}>
            <div className={styles.header}>购物车</div>
            <div className={styles.content}>
                <Card title='商品清单' styles={{ header: { fontSize: '1.2rem' } }}
                    extra={
                        <>
                            {manage ?
                                <button className={styles.textButton} onClick={onManage} style={{ color: '#ff5000' }}>退出管理</button>
                                :
                                <button className={styles.textButton} onClick={onManage}>管理</button>}
                        </>
                    }
                >
                    <List
                        className={styles.list}
                        itemLayout="horizontal"
                        dataSource={items}
                        renderItem={(item, index) => (
                            <List.Item style={{ textAlign: 'left' }} className='list_item'>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#ff5000',
                                            colorPrimaryBorder: '#ff5200',
                                            borderRadiusSM: 50,
                                        },
                                    }}
                                >
                                    <Checkbox className={styles.checkbox} checked={select[index]} onChange={(e) => onSelect(e, index)} style={{ marginRight: '0.6rem' }} />
                                </ConfigProvider>
                                <List.Item.Meta
                                    avatar={<Avatar style={{ height: '5rem', width: '5rem' }} shape="square" src={item.imageUrl} />}
                                    title={<span style={{ fontSize: '1rem' }}>{item.title}</span>}
                                    description={
                                        <>
                                            <span style={{ fontSize: '1rem' }}>{item.description}</span>
                                            <div style={{ color: '#ff5000', marginTop: '1rem', fontSize: '1.2rem' }}>￥{item.price}</div>
                                            {manage && <MinusCircleFilled className={styles.deleteIcon} onClick={(e) => onDeleteIcon(e, index)} style={{ float: 'right' }} />}
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                    <div className={styles.line}>
                        {manage ?
                            <button className={styles.deleteButton} onClick={onDelete}>
                                删除
                            </button>
                            :
                            <button className={styles.confirmButton} onClick={onSubmit} disabled={isEmpty ? true : false}>
                                结算
                            </button>
                        }
                    </div>
                </Card>
            </div>
            <MallTabBar activeKey='shoppinCart' />
        </div>
    );
}

export default ShoppinCart;