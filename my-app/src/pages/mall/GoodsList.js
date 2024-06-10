import React, { useState } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { LeftOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { goodsLists } from '../../services/goodsService';
import styles from "../../styles/mall/goodsList.module.css";

export const handleGoodsClick = (id, history) => {
    history.push(`/goods/${id}`);
};

const GoodsList = () => {
    const { id } = useParams();
    const history = useHistory();
    const location = useLocation();
    const [sortOption, setSortOption] = useState('default');
    const [priceOrder, setPriceOrder] = useState('asc');
    const selectedCategoryId = location.state?.selectedCategoryId;

    // const handleGoodsClick = (id) => {
    //     history.push(`/goods/${id}`);
    // };
    const handleBackClick = () => {
        history.push('/classification', { selectedCategoryId: selectedCategoryId });
    };

    const handleSortChange = (option) => {
        if (option === 'price') {
            setPriceOrder(priceOrder === 'asc' ? 'desc' : 'asc');
        }
        setSortOption(option);
    };

    const sortedGoods = [...goodsLists[id]].sort((a, b) => {
        if (sortOption === 'sales') {
            return b.sales - a.sales;
        } else if (sortOption === 'price') {
            return priceOrder === 'asc' ? a.price - b.price : b.price - a.price;
        }
        return 0;
    });

    return (
        <div className={styles.goodsList}>
            <div className={styles.head}>
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
                        <div className={styles.priceIcons}>
                            <UpOutlined className={priceOrder === 'asc' && sortOption === 'price' ? styles.activeIcon : styles.inactiveIcon} />
                            <DownOutlined className={priceOrder === 'desc' && sortOption === 'price' ? styles.activeIcon : styles.inactiveIcon} />
                        </div>
                        {/* {sortOption === 'price' && (priceOrder === 'asc' ? <UpOutlined/> : <DownOutlined/>)} */}
                    </span>
                </div>
            </div>
            <div className={styles.grid}>  
                {sortedGoods.map(product => (
                    // {goodsLists[id].map(product => (
                    <div
                        key={product.id}
                        className={styles.gridItem}
                        onClick={() => handleGoodsClick(product.id)}
                    >
                        <img src={product.imageUrl} alt={product.title} className={styles.image} />
                        <div className={styles.infoContainer}>
                            <div className={styles.goodsTitle}>{product.title}</div>
                            <div className={styles.saleInfo}>
                                <div className={styles.price}>{product.price}</div>
                                <div className={styles.sales}>销售量: {product.sales}</div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className={styles.end}>没有更多数据了</div>
        </div>
    )
}

export default GoodsList;
// export { handleGoodsClick };