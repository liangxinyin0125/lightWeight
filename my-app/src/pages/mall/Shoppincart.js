import { Button, Card, Layout, List, Avatar, InputNumber, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import React, { useState, useLayoutEffect } from 'react';
import { LeftOutlined, EnvironmentFilled } from '@ant-design/icons';
import MallTabBar from "../../components/MallTabBar";
import { writeTempOrder, readTempOrder, clearTempOrder, updateTempOrder, createOrder } from "../../services/orderServices";
// import styles from "../../styles/pay/create-order.module.css";
// import "../../styles/pay/create-order.css";


const { Header, Content, Footer } = Layout;

const ShoppinCart = () => {
    const mock = [
        {
            key: 1,
            title: 'donut0',
            description: 'it\'s just a dount',
            icon: 'https://img0.baidu.com/it/u=1021787944,2084770190&fm=253&fmt=auto&app=138&f=JPEG?w=1083&h=500',
            price: 20,
        },
        {
            key: 2,
            title: 'donut1',
            description: 'it\'s just a dount',
            icon: 'https://img2.baidu.com/it/u=1306975568,669364901&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
            price: 30,
        },
        {
            key: 3,
            title: 'donut2',
            description: 'it\'s just a dount',
            icon: 'https://img2.baidu.com/it/u=3815240381,417283762&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
            price: 30,
        },
        {
            key: 4,
            title: 'donut3',
            description: 'it\'s just a dount',
            icon: 'https://img2.baidu.com/it/u=816098472,1762446190&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
            price: 30,
        },
        {
            key: 5,
            title: 'donut4',
            description: 'it\'s just a dount',
            icon: 'https://img2.baidu.com/it/u=1901146448,760818695&fm=253&fmt=auto&app=138&f=JPEG?w=545&h=377',
            price: 200,
        },
    ];
    const address = '北京交通大学';
    localStorage.setItem('default_address', address);
    const onTest = () => {
        localStorage.setItem('shoppin_cart', JSON.stringify(mock));
        // localStorage.removeItem('shoppin_cart');
    }

    const items = JSON.parse(localStorage.getItem('shoppin_cart')) || [];
    const [select, setSelect] = useState([]);
    const [number, setNumber] = useState(new Array(items.length).fill(1));
    const [submit, setSubmit] = useState(false);

    const onSelect = (e, index) => {
        if (e.target.checked) {
            setSelect(select.concat({
                item: items[index],
                index: index
            }));
        }
        else {
            setSelect(select.filter(element => {
                return element.item.key != items[index].key;
            }));
        }
    }
    const onChange = (e, index) => {
        var n_number = number;
        n_number[index] = e;
        setNumber(n_number);
        console.log(number);
    }
    const onSubmit = () => {
        var data = [];
        select.forEach((element, index) => {
            data = data.concat({
                detail: element.item,
                number: number[element.index],
            });
        });
        const order = {
            key: 0,
            data: data,
        };
        writeTempOrder(order);
        setSubmit(true);
    }

    if (submit) {
        return <Redirect to='/createOrder' replace='true' />;
    }

    return (
        <div className='create-order'>
            <Layout>
                <Header className='header' style={{ backgroundColor: 'antiquewhite' }}>
                    <h1 className='title'>购物车</h1>
                </Header>
                <Content className='content'>
                    <Card className='order' title='商品清单' styles={{ height: '92vh', header: { fontSize: '1.2rem', marginTop: '0.6rem' } }}>
                        <List
                            style={{ height: '62vh' }}
                            className='list'
                            itemLayout="horizontal"
                            dataSource={items}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <Checkbox onChange={(e) => onSelect(e, index)} style={{ marginRight: '0.6rem' }} />
                                    <List.Item.Meta
                                        avatar={<Avatar shape="square" src={item.icon} />}
                                        title={<p>{item.title}</p>}
                                        description={<p>{item.description}</p>}
                                    />
                                    <div>
                                        <p style={{ marginLeft: '0.6rem' }}>单价：￥{item.price}</p>
                                        <InputNumber style={{ width: '7rem' }} min={1} addonBefore='数量：'
                                            defaultValue={1} onChange={(e) => onChange(e, index)} />
                                    </div>
                                </List.Item>
                            )}
                        />
                        <div className='line'>
                            {/* <p>总价：￥${total}</p> */}
                            <Button type='primary' onClick={onTest}>
                                test
                            </Button>
                            <Button type='primary' onClick={onSubmit}>
                                提交
                            </Button>
                        </div>
                    </Card>
                </Content>
                <Footer className='footer'>
                    <MallTabBar activeKey='shoppinCart' />
                    {/* <MallTabBar className='tabbar' activeKey='shoppinCart' /> */}
                </Footer>
            </Layout>
        </div>
    );
}

export default ShoppinCart;