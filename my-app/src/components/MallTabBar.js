import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {
    AppstoreOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const MallTabBar = (props) => {
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <HomeOutlined />,
            badge: Badge.dot,
        },
        {
            key: 'classification',
            title: '分类',
            icon: <AppstoreOutlined />,
            badge: '5',
        },
        {
            key: 'shoppinCart',
            title: '购物车',
            icon: <ShoppingCartOutlined />,
            badge: '99+',
        },
        {
            key: 'mine',
            title: '我的',
            icon: <UserOutlined />,

        },
    ];
    const [change, setChange] = useState(false);
    const [redirect, setRedirect] = useState('home');

    const onChange = (e) => {
        setRedirect(e);
        setChange(true);
    }

    if (change) {
        return <Redirect to={`/${redirect}`} replace='true' />;
    }

    return (
        <div style={{ width: '100vw', position: 'fixed', bottom: '0', zIndex: '9999', backgroundColor: 'white' }}>
            <TabBar
                safeArea
                activeKey={props.activeKey}
                onChange={onChange}
                className="custom-tab-bar"
            >
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                    />))}
            </TabBar>
        </div>
    );
}

export default MallTabBar;