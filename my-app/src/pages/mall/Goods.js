import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { goodsLists } from '../../services/goodsService.js';
import MallTabBar from '../../components/MallTabBar.js';
import styles from "../../styles/mall/goods.module.css";

const Goods = ({ }) => {
    const { goodsId } = useParams();
    const goods = goodsLists[goodsId];

    return (
        <div className={styles.goods}>
            <div className={styles.goodstInfo}>
                <div className={styles.goodsPhoto}>
                    <img src={goods.imageUrl} alt={goods.title} className={styles.image} />
                    {/* <img src={goods.image} alt={goods.name} /> */}
                </div>
                <div className={styles.goodsTitle}>
                    <h1>{goods.title}</h1>
                </div>
            </div>

            <div className={styles.goodsDetails}>
                <div className={styles.price}>价格: ¥{goods.price}</div>
                <div className={styles.sales}>销售量: {goods.sales}</div>
                <div className={styles.description}>{goods.description}</div>
            </div>

            <div className={styles.goodsEvaluation}>

            </div>

            {/* <img src={goods.image} alt={goods.name} />
            <h1>{goods.name}</h1>
            <p>{goods.description}</p>
            <p>Price: ${goods.price}</p> */}
            <MallTabBar activeKey='classification'></MallTabBar>
        </div>
    );
};
export default Goods;