import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { categories } from '../../services/classificationService';
import MallTabBar from "../../components/MallTabBar";
import styles from "../../styles/mall/classification.module.css";


const Classification = () => {
    const defaultCategory = categories.find(category => category.name === '饼干') || categories[0];
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
    const history = useHistory();

    const handleSubcategoryClick = (subcategory) => {
        history.push(`/goodsList/${subcategory.id}`);
    };

    return (
        <div className={styles.classification}>
            <div className={styles.head}>分类</div>
            <div className={styles.main}>
                <div className={styles.mainLeft}>
                    <ul>
                        {categories.map(category => (
                            <li
                                key={category.name}
                                onClick={() => setSelectedCategory(category)}
                                className={selectedCategory.name === category.name ? styles.selected : ''}
                                style={{ margin: '10px 0' }}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.mainRight}>
                    <div className={styles.grid}>
                        {selectedCategory.subcategories.map(subcategory => (
                            <div
                                key={subcategory.name}
                                className={styles.gridItem}
                                onClick={() => handleSubcategoryClick(subcategory)}
                                style={{ margin: '10px' }}
                            >
                                <img src={subcategory.imageUrl} alt={subcategory.name} className={styles.image} />
                                <div>{subcategory.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MallTabBar activeKey='classification'></MallTabBar>
        </div>
    );
}

export default Classification;