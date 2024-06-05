import React, { Component } from 'react'
import { Flex, Layout } from 'antd';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from "../../styles/register/register.module.css";

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

class Register extends React.Component {
    handleLoginClick = () => {
        this.props.history.push('/login');
    };
    handleRegisterClick = () => {
        this.props.history.push('/register');
    };

    render() {
        return (
            <div className={styles.register}>
                <div className="registerMain">
                    <div className="registerLeft"></div>
                    <div className="registerRight">
                        <h2>注册</h2>
                        <Form
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                prefix: '86',
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="email"
                                label="邮箱"
                                rules={[
                                    {
                                        type: 'email',
                                        message: '输入邮箱无效!',
                                    },
                                    {
                                        required: true,
                                        message: '请输入邮箱!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="密码"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                        // message: '请输入密码!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (regex.test(value)) {
                                                return Promise.resolve();
                                            } else {
                                                return Promise.reject('密码必须包含大小写字母和数字，长度为8-16位');
                                            }
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="再次输入密码"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: '再次输入密码!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('输入密码不一致!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form>

                        <div className={styles.buttonContainer}>
                            <Button type="primary" className={styles.buttonRegister} htmlType="submit" onClick={this.handleLoginClick}>
                                登录
                            </Button>
                            <Button className={styles.buttonRegister} htmlType="submit" onClick={this.handleRegisterClick}>
                                注册
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;