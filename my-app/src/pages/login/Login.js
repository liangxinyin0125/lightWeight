import React, { Component, useState, useRef } from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory, withRouter } from 'react-router-dom';
import 'antd/dist/reset.css';
import styles from "../../styles/login/login.module.css";

const onFinish = (values) => {
    console.log('Success:', values);
};

const Login = () => {
    const history = useHistory();

    const handleLoginClick = () => {
        history.push('/home');
    };
    const handleRegisterClick = () => {
        history.push('/register');
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginTop}>
                <div className={styles.words1}>Hello!</div>
                <div className={styles.appInfo}>
                    <div className={styles.info_column}>
                        <div className={styles.words2}>
                            『欢迎来到
                        </div>
                        <img className={styles.app_icon} src={require('../../assets/images/login/app.png')}></img>
                    </div>
                    <div className={styles.info_column}>
                        <div style={{ fontSize: '4.6rem', paddingLeft: '8rem' }}>零趣』</div>
                    </div>
                </div>
            </div>
            <div className={styles.loginMain}>
                <div className={styles.title}>登录</div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                        userID: '',
                        password: ''
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label={<span className={styles.login_label_item}>用户名</span>}
                        name="userID"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input className={styles.login_input_item} />
                    </Form.Item >

                    <Form.Item
                        label={<span className={styles.login_label_item}>密码</span>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                        style={{
                            maxWidth: 600,
                            labelFontSize: 19,
                            fontSize: 15,
                            algorithm: true
                        }}
                    >
                        <Input.Password className={styles.login_input_item} />
                    </Form.Item>
                </Form>

                <div className={styles.buttonContainer}>
                    <Button type="primary" className={styles.buttonLogin} htmlType="submit" onClick={handleLoginClick}>
                        登录
                    </Button>
                    <Button type="primary" className={styles.buttonLogin} htmlType="submit" onClick={handleRegisterClick}>
                        注册
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;