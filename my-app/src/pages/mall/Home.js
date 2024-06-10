import React, { useState, useEffect } from 'react';
import { Input, Carousel, Button } from 'antd';
import styles from '../../styles/mall/home.module.css';
import MallTabBar from "../../components/MallTabBar";
import { getCarouselItems, getHotItems } from '../../services/homeServices';
import { useHistory } from 'react-router-dom'; // 从 react-router-dom 导入 useHistory
import { handleGoodsClick } from './GoodsList';

const Home = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [hotItems, setHotItems] = useState([]);
    const history = useHistory(); // 初始化 useHistory

    useEffect(() => {
        const items = getCarouselItems();
        console.log("Carousel Items:", items); // 查看轮播图数据
        setCarouselItems(items);

        const hotProducts = getHotItems();
        console.log("Hot Items:", hotProducts); // 查看热销商品数据
        setHotItems(hotProducts);
    }, []);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>首页</h1>
            </div>
            <div className={styles.searchContainer}>
                <Input
                    placeholder="搜索商品"
                    size="large"
                    style={{
                        borderRadius: '30px 0 0 30px',
                        width: 'calc(100% - 60px)',
                        display: 'inline-block',
                        background: 'white',
                        paddingLeft: '10px'
                    }}
                />
                <Button
                    type="primary"
                    size="large"
                    style={{
                        borderRadius: '0 30px 30px 0',
                        backgroundColor: 'orange',
                        borderColor: 'orange',
                        marginLeft: '-1px',
                        display: 'inline-block',
                        width: '60px'
                    }}
                >
                    搜索
                </Button>
            </div>
            <div className={styles.carouselContainer}>
                <Carousel autoplay>
                    {carouselItems.map((item, index) => (
                        <div key={index}>
                            <img src={item.src} alt={item.alt} className={styles.carouselImage} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={styles.grid}>
                {hotItems.map(product => (
                    <div
                        key={product.id}
                        className={styles.gridItem}
                        onClick={() => handleGoodsClick(product.id, history)}
                    >
                        <img src={product.imageUrl} alt={product.title} className={styles.image} />
                        <div className={styles.infoContainer}>
                            <div className={styles.goodsTitle}>{product.title}</div>
                            <div className={styles.saleInfo}>
                                <div className={styles.price}>${product.price}</div>
                                <div className={styles.sales}>销售量: {product.sales}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <MallTabBar activeTab="home" />
        </div>
    );
}

export default Home;