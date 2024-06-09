import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LeftOutlined, WechatOutlined, AlipayCircleOutlined } from '@ant-design/icons';
import { cancelOrder, updateOrderState } from "../../services/orderServices";
import styles from '../../styles/pay/pay.module.css';
{/* <WechatOutlined />
<AlipayCircleOutlined /> */}
const Pay = () => {
    const history = useHistory();
    const location = useLocation();
    const { totalPrice } = location.state || { totalPrice: 0 };
    const [paymentMethod, setPaymentMethod] = useState('wechat');

    const handleBackClick = () => {
        cancelOrder();
        history.goBack();
    };
    const handleConfirmPayment = () => {
        updateOrderState('pay successfully');
        history.push('/paySuccess');
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    // 购物车传递价格用此函数
    // const handleCheckout = () => {
    //     history.push({
    //         pathname: '/pay',
    //         state: { totalPrice }
    //     });
    // };

    return (
        <div className={styles.pay}>
            <div className={styles.head}>
                <LeftOutlined onClick={handleBackClick} className={styles.backButton} />
                <div>支付</div>
            </div>
            <div className={styles.main}>
                <div className={styles.payPrice}>
                    支付金额
                    <div className={styles.price}>
                        {totalPrice}
                    </div>
                </div>

                <div className={styles.payMethod}>
                    <label className={styles.payOption}>
                        <AlipayCircleOutlined className={styles.alipayIcon} />
                        <span className={styles.payName}>支付宝支付</span>
                        <input
                            type="radio"
                            value="alipay"
                            checked={paymentMethod === 'alipay'}
                            onChange={handlePaymentChange}
                        />
                        <span className={styles.customRadio}></span>
                    </label>
                    <label className={styles.payOption}>
                        <WechatOutlined className={styles.wechatPayIcon} />
                        <span className={styles.payName}>微信支付</span>
                        <input
                            type="radio"
                            value="wechat"
                            checked={paymentMethod === 'wechat'}
                            onChange={handlePaymentChange}
                        />
                        <span className={styles.customRadio}></span>
                    </label>
                </div>
                <button
                    className={styles.confirmButton}
                    onClick={handleConfirmPayment}
                >
                    确认支付
                </button>
            </div>
        </div>
    );
}

export default Pay;