import React from 'react';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import styles from '../../styles/pay/paySuccess.module.css';

const PaySuccess = () => {
    const history = useHistory();

    const handleViewOrder = () => {
        // history.push(`/order`);
    };
    const handleReturnHome = () => {
        history.push(`/home`);
    };

    return (
        <div className={styles.paySuccess}>
            <div className={styles.head}>
                <LeftOutlined onClick={handleReturnHome} className={styles.backButton} />
                <div>支付成功</div>
            </div>
            <div className={styles.main}>
                <CheckCircleOutlined className={styles.successIcon} />
                <h1 className={styles.title}>支付成功</h1>
                <div className={styles.buttons}>
                    <button className={styles.viewOrderButton} onClick={handleViewOrder}>
                        查看订单
                    </button>
                    <button className={styles.returnHomeButton} onClick={handleReturnHome}>
                        返回首页
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaySuccess;