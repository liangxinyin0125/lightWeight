import React from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Goods from '../pages/mall/Goods';

// - 1饼干：1法丽兹、2雀巢、3百奇、4奥利奥、5纳宝帝
// - 2膨化薯片：乐事、奇多、呀土豆
// - 3辣条：卫龙、麻辣王子、
// - 4缤纷糖果：旺仔、德芙、悠哈、炫迈
// - 5甜品：甜甜圈、蛋糕、
export const goodsLists = {
    // 100饼干
    // 法丽兹fariz
    110: [
        {
            id: 111,
            price: 12.99,
            sales: 120,
            brand: '法丽兹',
            title: '法丽兹 抹茶慕斯味',
            description: '法丽兹抹茶慕斯味巧克力曲奇饼干休闲零食115g/盒',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/118950/10/522/317194/5e8d6892Eb3913fc2/2557962a1411401b.jpg!q80.dpg'
        },
        {
            id: 112,
            price: 11.99,
            sales: 80,
            brand: '法丽兹',
            title: '法丽兹 醇香黑巧克力味',
            description: '法丽兹醇香黑巧克力味曲奇饼干休闲零食 115g/盒',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/104313/31/17928/343784/5e8d6873Ea28e7038/2ff4d4967c0ea574.jpg!q80.dpg'
        },
        {
            id: 113,
            price: 11.99,
            sales: 70,
            brand: '法丽兹',
            title: '法丽兹 酸奶巧克力味',
            description: '法丽兹曲奇饼酸奶巧克力味曲奇饼干休闲零食115g',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/92182/9/17818/365750/5e8d68b9E3e01bbe6/09709bb9df8537e8.jpg!q80.dpg'
        }
    ],
    // 雀巢nestle
    120: [
        {
            id: 121,
            title: '雀巢 商品 1',
            price: 9.99,
            sales: 200,
            imageUrl: ''
        },
        {
            id: 122,
            title: '雀巢 商品 2',
            price: 11.99,
            sales: 150,
            imageUrl: ''
        }
    ],
    // 百奇
    130: [
        {
            id: 131,
            title: '雀巢 商品 1',
            price: 9.99,
            sales: 200,
            imageUrl: ''
        },
        {
            id: 132,
            title: '雀巢 商品 2',
            price: 11.99,
            sales: 150,
            imageUrl: ''
        }
    ],
    // 奥利奥
    140: [
        {
            id: 141,
            title: '雀巢 商品 1',
            price: 9.99,
            sales: 200,
            imageUrl: ''
        },
        {
            id: 142,
            title: '雀巢 商品 2',
            price: 11.99,
            sales: 150,
            imageUrl: ''
        }
    ],
    // 纳宝帝
    150: [
        { 
            id: 151, 
            title: '雀巢 商品 1', 
            price: 9.99, 
            sales: 200, 
            imageUrl: '' 
        },
        { 
            id: 152,
            title: '雀巢 商品 2', 
            price: 11.99, 
            sales: 150, 
            imageUrl: '' 
        }
    ],

    // 200膨化薯片
    // 乐事
    210: [
        {
            id: 211,
            title: '乐事 黄瓜味',
            description: '乐事 薯片 黄瓜味单袋装 75g',
            price: 12.99,
            sales: 120,
            imageUrl: 'https://th.bing.com/th/id/R.cc773330591d98e5dba27a440b461fb5?rik=W90yNZXsmRtXEA&riu=http%3a%2f%2fossmuyuanec.oss-cn-beijing.aliyuncs.com%2fStorage%2fShop%2f1217%2fProducts%2f6746%2f1.png&ehk=lDHXmkhTlqKKCojU%2f%2bjGV%2bf2DyfKj7QO5e0yVzlHj7w%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            id: 212,
            title: '乐事 墨西哥鸡汁番茄味',
            description: '乐事 薯片 墨西哥鸡汁番茄味 75g',
            price: 15.99,
            sales: 80,
            imageUrl: 'https://th.bing.com/th/id/R.b0883bbc2b226283ae6464e2fd871f4b?rik=3ROdu3IU5XkeMw&riu=http%3a%2f%2fossmuyuanec.oss-cn-beijing.aliyuncs.com%2fStorage%2fShop%2f1217%2fProducts%2f6746%2f2.png&ehk=hbG4gPK7amEEJzkpdZjE5PtMfCkqAQD1t3XWZKP5m1M%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            id: 213,
            title: '乐事 广东深井烧鹅味',
            description: '乐事 薯片 广东深井烧鹅味 地方限定口味 75g',
            price: 15.99,
            sales: 80,
            imageUrl: 'https://cdn.img.foodaily.com/images/new_products/high_image/2022/11/09/db4c9a626cf7ae9c8a6c2b5c03876235.jpg'
        },
    ],
};

const infoLists = [
    {
        id: 111,
        name: '法丽兹 抹茶慕斯味',
        description: '法丽兹抹茶慕斯味巧克力曲奇饼干休闲零食115g/盒',
        price: 19.99,
        categoryId: '1',
        image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/118950/10/522/317194/5e8d6892Eb3913fc2/2557962a1411401b.jpg!q80.dpg',
    },
    
];