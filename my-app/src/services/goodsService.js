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
            evaluationAmount: '900+',
            label: ['好吃(99+)', '会回购(60+)', '价格实惠(40+)'],
            brand: '法丽兹',
            title: '法丽兹 抹茶慕斯味',
            description: '法丽兹抹茶慕斯味巧克力曲奇饼干休闲零食115g/盒',
            evaluation: '很好吃,抹茶味很浓,抹茶脑袋最爱!',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/118950/10/522/317194/5e8d6892Eb3913fc2/2557962a1411401b.jpg!q80.dpg'
        },
        {
            id: 112,
            price: 11.99,
            sales: 80,
            evaluation: '600+',
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
            price: 9.99,
            sales: 200,
            brand: '雀巢',
            title: '雀巢 脆脆鲨巧克力威化夹心饼干',
            description: '雀巢脆脆鲨巧克力味威化饼干40条独立装',
            imageUrl: 'https://img.alicdn.com/i1/2448418966/O1CN01lIcyhk2G6TpeJ6HKo_!!2448418966.jpg'
        },
        {
            id: 122,
            price: 11.99,
            sales: 150,
            brand: '雀巢',
            title: '雀巢 脆脆鲨牛奶味威化',
            description: '雀巢(Nestle)饼干 雀巢脆脆鲨牛奶味威化640克（24+8）',
            imageUrl: 'https://img.alicdn.com/bao/uploaded/O1CN01IoOHKO22anRefofr8_!!6000000007137-0-yinhe.jpg'
        },
        {
            id: 123,
            price: 9.99,
            sales: 200,
            brand: '雀巢',
            title: '雀巢 脆脆鲨威化饼干花生口味',
            description: '雀巢(Nestle) 脆脆鲨威化饼干 花生口味640g（24*20g+赠8*20g）',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163114/33/17022/304740/606d5b5bE03e613e9/8e6979c7a5f2981d.jpg'
        },
    ],
    // 百奇
    130: [
        {
            id: 131,
            price: 9.99,
            sales: 200,
            brand: '百奇',
            title: '百奇 巧克力棒',
            description: '百奇巧克力味棒饼干45g/盒',
            imageUrl: ''
        },
        {
            id: 132,
            price: 11.99,
            sales: 150,
            brand: '百奇',
            title: '百奇 草莓味',
            description: '百奇草莓味棒饼干45g/盒',
            imageUrl: ''
        },
    ],
    // 奥利奥
    140: [
        {
            id: 141,
            price: 9.99,
            sales: 200,
            brand: '奥利奥',
            title: '奥利奥 夹心饼干',
            description: '奥利奥巧克力味夹心饼干388g/盒',
            imageUrl: ''
        },
        {
            id: 142,
            price: 11.99,
            sales: 150,
            brand: '奥利奥',
            title: '奥利奥 草莓味',
            description: '奥利奥草莓味夹心饼干388g/盒',
            imageUrl: ''
        },
    ],
    // 纳宝帝
    150: [
        {
            id: 151,
            price: 9.99,
            sales: 200,
            brand: '纳宝帝',
            title: '纳宝帝 花生味威化',
            description: '纳宝帝花生味威化饼干365g/包',
            imageUrl: ''
        },
        {
            id: 152,
            price: 11.99,
            sales: 150,
            brand: '纳宝帝',
            title: '纳宝帝 奶油威化',
            description: '纳宝帝奶油味威化饼干365g/包',
            imageUrl: ''
        },
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