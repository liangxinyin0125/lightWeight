import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { goodsLists } from '../../services/goodsService';
import MallTabBar from "../../components/MallTabBar";
import styles from "../../styles/mall/goodsList.module.css";

const GoodsList = () => {
    const { id } = useParams();
    const history = useHistory();
    const [sortOption, setSortOption] = useState('default');
    const [priceOrder, setPriceOrder] = useState('asc');

    const handleGoodsClick = (id) => {
        history.push(`/goods/${id}`);
    };
    const handleBackClick = () => {
        history.goBack();
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        if (option === 'price') {
            setPriceOrder(priceOrder === 'asc' ? 'desc' : 'asc');
        }
    };

    const sortedProducts = [...goodsLists[id]].sort((a, b) => {
        if (sortOption === 'sales') {
            return b.sales - a.sales;
        } else if (sortOption === 'price') {
            return priceOrder === 'asc' ? a.price - b.price : b.price - a.price;
        }
        return 0;
    });

    return (
        <div className={styles.goodsList}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <LeftOutlined onClick={handleBackClick} className={styles.backButton} />
                    <div>商品列表</div>
                </div>
                <div className={styles.sortOptions}>
                    <span
                        onClick={() => handleSortChange('default')}
                        className={sortOption === 'default' ? styles.selected : ''}
                    >
                        综合排序
                    </span>
                    <span
                        onClick={() => handleSortChange('sales')}
                        className={sortOption === 'sales' ? styles.selected : ''}
                    >
                        销量优先
                    </span>
                    <span
                        onClick={() => handleSortChange('price')}
                        className={sortOption === 'price' ? styles.selected : ''}
                    >
                        价格排序
                    </span>
                </div>
            </div>
            <div className={styles.grid}>
                {goodsLists[id].map(product => (
                    <div
                        key={product.id}
                        className={styles.gridItem}
                        onClick={() => handleGoodsClick(product.id)}
                    >
                        <img src={product.imageUrl} alt={product.title} className={styles.image} />
                        <div>
                            <div className={styles.title}>{product.title}</div>
                            <div className={styles.price}>
                                {/* ¥{product.price} */}
                                {product.price}
                            </div>
                            <div className={styles.sales}>销售量: {product.sales}</div>
                        </div>

                    </div>
                ))}
            </div>
            <MallTabBar activeKey='classification'></MallTabBar>
        </div>
    )
}

export default GoodsList;