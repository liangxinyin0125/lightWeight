import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { LeftOutlined, RightOutlined, TruckOutlined, ReconciliationOutlined, InsuranceOutlined } from '@ant-design/icons';
import { goodsLists } from '../../services/goodsService.js';
import MallTabBar from '../../components/MallTabBar.js';
import styles from "../../styles/mall/goods.module.css";

const Goods = ({ }) => {
    const { id } = useParams();
    const history = useHistory();
    const [showReturnPolicy, setShowReturnPolicy] = useState(false);
    const [showBrandInfo, setShowBrandInfo] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const allGoods = Object.values(goodsLists).flat();
    const goods = allGoods.find(p => p.id === parseInt(id));
    if (!goods) {
        return <div>商品未找到</div>;
    }

    const handleBackClick = () => {
        history.goBack();
    };

    const handleModalClose = () => {
        setShowModal(false);
        setModalContent(null);
    };
    const handleReturnPolicy = () => {
        setModalContent('returnPolicy');
        setShowModal(true);
    };
    const handleBrandInfo = () => {
        setModalContent('brandInfo');
        setShowModal(true);
    };

    return (
        <div className={styles.goods}>
            <div className={styles.goodstInfo}>
                <div className={styles.head}>
                    <LeftOutlined onClick={handleBackClick} className={styles.backButton} />
                </div>
                <div className={styles.goodsPhoto}>
                    <img src={goods.imageUrl} alt={goods.title} className={styles.image} />
                </div>
                <div className={styles.goodsDetails}>
                    <div className={styles.goodsTitle}>{goods.title}</div>
                    <div className={styles.saleInfo}>
                        <div className={styles.price}>{goods.price}</div>
                        <div className={styles.sales}>已售: {goods.sales}</div>
                    </div>
                    <div className={styles.description}>{goods.description}</div>
                </div >
                <div className={styles.lists}>
                    <div className={styles.list}>
                        <TruckOutlined className={styles.icons} />
                        <div>
                            <div className={styles.detailsTitle} style={{paddingBottom:'5px'}}>48小时内发货</div>
                            <div className={styles.detailsTitle}>广东广州  快递：免运费</div>
                        </div>
                    </div>
                    <div className={styles.list} onClick={handleReturnPolicy}>
                        <div className={styles.detailsTitle}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <InsuranceOutlined className={styles.icons} />
                                退货运费险 七天无理由退货
                            </div>
                            <RightOutlined />
                        </div>
                    </div>
                    <div className={styles.list} onClick={handleBrandInfo}>
                        <div className={styles.detailsTitle}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <ReconciliationOutlined className={styles.icons} />
                                品牌信息及保质期
                            </div>
                            <RightOutlined />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.goodsEvaluation}>
            </div>

            <div className={styles.goodsActions}>
                <button className={styles.addToCartButton}>加入购物车</button>
                <button className={styles.buyNowButton}>立即购买</button>
            </div>

            <CSSTransition
                in={showModal}
                timeout={300}
                classNames={{
                    enter: styles.modalEnter,
                    enterActive: styles.modalEnterActive,
                    exit: styles.modalExit,
                    exitActive: styles.modalExitActive,
                }}
                unmountOnExit
            >
                <div className={styles.modalOverlay} onClick={handleModalClose}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {modalContent === 'returnPolicy' && (
                            <div>
                                <div className={styles.goodsTitle}>退货运费险 七天无理由退货</div>
                                <div className={styles.lists}>
                                    <div className={styles.list}>
                                        <div className={styles.detailsTitle}>退货运费险已包含在商品价格中</div>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.detailsTitle}>本商品支持七天无理由退货</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {modalContent === 'brandInfo' && (
                            <div>
                                <div className={styles.goodsTitle}>品牌信息及保质期</div>
                                <div className={styles.lists}>
                                    <div className={styles.list}>
                                        <div className={styles.detailsTitle}>品牌：{goods.brand || '未知品牌'}</div>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.detailsTitle}>保质期：12个月</div>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.detailsTitle}>产地：中国</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button className={styles.modalCloseButton} onClick={handleModalClose}>我知道了</button>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};
export default Goods;