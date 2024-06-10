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
            evaluationAmount: '600+',
            label: ['好吃(99+)', '性价比高(40+)', '有点甜(10+)'],
            brand: '法丽兹',
            title: '法丽兹 醇香黑巧克力味',
            description: '法丽兹醇香黑巧克力味曲奇饼干休闲零食 115g/盒',
            evaluation: '好吃,多次购买了',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/104313/31/17928/343784/5e8d6873Ea28e7038/2ff4d4967c0ea574.jpg!q80.dpg'
        },
        {
            id: 113,
            price: 11.99,
            sales: 70,
            evaluationAmount: '500+',
            label: ['味道不错(99+)', '优惠力度大(60+)', '酸奶味浓(10+)'],
            brand: '法丽兹',
            title: '法丽兹 酸奶巧克力味',
            description: '法丽兹曲奇饼酸奶巧克力味曲奇饼干休闲零食115g',
            evaluation: '每次都购买这个口味，看剧的不二选择',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/92182/9/17818/365750/5e8d68b9E3e01bbe6/09709bb9df8537e8.jpg!q80.dpg'
        }
    ],
    // 雀巢nestle
    120: [
        {
            id: 121,
            price: 9.99,
            sales: 200,
            evaluationAmount: '600+',
            label: ['口感味道好(99+)', '性价比高(50+)',],
            brand: '雀巢',
            title: '雀巢 脆脆鲨巧克力威化夹心饼干',
            description: '雀巢脆脆鲨巧克力味威化饼干40条独立装',
            evaluation: '很好吃,发货快,会回顾!',
            imageUrl: 'https://img.alicdn.com/i1/2448418966/O1CN01lIcyhk2G6TpeJ6HKo_!!2448418966.jpg'
        },
        {
            id: 122,
            price: 11.99,
            sales: 150,
            evaluationAmount: '700+',
            label: ['很好吃(99+)', '日期新鲜(60+)',],
            brand: '雀巢',
            title: '雀巢 脆脆鲨牛奶味威化',
            description: '雀巢(Nestle)饼干 雀巢脆脆鲨牛奶味威化640克（24+8）',
            evaluation: '甜度正好，软硬适中',
            imageUrl: 'https://img.alicdn.com/bao/uploaded/O1CN01IoOHKO22anRefofr8_!!6000000007137-0-yinhe.jpg'
        },
        {
            id: 123,
            price: 9.99,
            sales: 200,
            evaluationAmount: '400+',
            label: ['正品(99+)', '孩子喜欢(40+)',],
            brand: '雀巢',
            title: '雀巢 脆脆鲨威化饼干花生口味',
            description: '雀巢(Nestle) 脆脆鲨威化饼干 花生口味640g（24*20g+赠8*20g）',
            evaluation: '物美价廉，绝对正品',
            imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163114/33/17022/304740/606d5b5bE03e613e9/8e6979c7a5f2981d.jpg'
        },
    ],
    // 百奇
    130: [
        {
            id: 131,
            price: 9.99,
            sales: 200,
            evaluationAmount: '400+',
            label: ['很好吃(80+)', '正品(50+)',],
            brand: '百奇',
            title: '百奇 巧克力棒',
            description: '百奇巧克力味棒饼干45g/盒',
            evaluation: '超级好吃，吃着很满足，就是有点小贵',
            imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/101/MTA-3961991/glico_glico_pocky_coockies_-_cream_co_biscuit_-40_g-_kemasan_kotak-_full02.jpg'
        },
        {
            id: 132,
            price: 11.99,
            sales: 150,
            evaluationAmount: '900+',
            label: ['好吃(99+)', '快递迅速(70+)', '价格实惠(40+)'],
            brand: '百奇',
            title: '百奇 草莓味',
            description: '百奇草莓味棒饼干45g/盒',
            evaluation: '孩子喜欢吃',
            imageUrl: ' https://www.yaoxuangou.cn/imgextra/pro/2019/03/28/c009d62bedd220287edfd20028cac4458b88f55e-FGTT.jpg_420.jpg '
        },
    ],
    // 奥利奥
    140: [
        {
            id: 141,
            price: 9.99,
            sales: 200,
            evaluationAmount: '500+',
            label: ['味道经典(99+)', '包装升级(60+)',],
            brand: '奥利奥',
            title: '奥利奥 夹心饼干',
            description: '奥利奥原味夹心饼干388g/盒',
            evaluation: '原味很经典。',
            imageUrl: ' https://m.360buyimg.com/mobilecms/s750x750_jfs/t7420/115/1256190134/382353/86d4282/599bc751N6fdb1e3a.jpg!q80.dpg '
        },
        {
            id: 142,
            price: 11.99,
            sales: 150,
            evaluationAmount: '900+',
            label: ['口感极佳(99+)', '包装完整(40+)',],
            brand: '奥利奥',
            title: '奥利奥 草莓味',
            description: '奥利奥草莓味夹心饼干388g/盒',
            evaluation: '新鲜品质好，分量十足，价格实惠',
            imageUrl: ' https://tse1-mm.cn.bing.net/th/id/OIP-C.-1xqEndLHebQb1vTxAurlgHaHa?rs=1&pid=ImgDetMain '
        },
    ],
    // 纳宝帝
    150: [
        {
            id: 151,
            price: 9.99,
            sales: 200,
            evaluationAmount: '500+',
            label: ['正品(99+)', '价格实惠(30+)',],
            brand: '纳宝帝',
            title: '纳宝帝 巧克力味威化',
            description: '纳宝帝巧克力味威化饼干350g/罐',
            evaluation: '挺好吃而且划算',
            imageUrl: ' https://tse1-mm.cn.bing.net/th/id/OIP-C.wk-CIEobVKFNWZtLoY5AzQHaHa?rs=1&pid=ImgDetMain '
        },
        {
            id: 152,
            price: 11.99,
            sales: 150,
            evaluationAmount: '600+',
            label: ['很好吃(99+)', '物流服务好(400+)', '价格便宜(20+)'],
            brand: '纳宝帝',
            title: '纳宝帝 芝士威化',
            description: '纳宝帝芝士味威化饼干350g/罐',
            evaluation: '芝士吃着很满足',
            imageUrl: ' https://ts1.cn.mm.bing.net/th/id/R-C.b45df5d37b1efc2f2bac8f551d0458da?rik=qmJZeLKDqbUXRg&riu=http%3a%2f%2fuimg.ugoshop.com%2fimages%2f201707%2fsource_img%2f22675_P_1499586611824.jpg&ehk=jnawy9j51C2O%2f2mh4zpdLLJmkOmj2LJkgYe42ZW0RpU%3d&risl=&pid=ImgRaw&r=0 '
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
    // 奇多
    // 220: [
    //     {
    //         id:22,
    //         price: ,
    //         sales: ,
    //         evaluationAmount: '+',
    //         label: ['(+)', '(+)', '(+)'],
    //         brand: '奇多',
    //         title: ' 味',
    //         description: '',
    //         evaluation: '',
    //         imageUrl: '',
    //     },
    // ]
    // 奇多
    220: [
        {
            id: 221,
            price: 6.9,
            sales: 80,
            evaluationAmount: '400+',
            label: ['口感好(40+)', '便宜实惠(30+)',],
            brand: '奇多',
            title: '奇多 美式火鸡味',
            description: '奇多美式火鸡味粟米棒休闲食品60g/袋',
            evaluation: '味道进行了改进，吃起来不腻',
            imageUrl: ' https://tse2-mm.cn.bing.net/th/id/OIP-C.u1sZ62haJk2NZy-SFrZE5AAAAA?rs=1&pid=ImgDetMain ',
        },
        {
            id: 222,
            price: 6.9,
            sales: 300,
            evaluationAmount: '500+',
            label: ['味道好(70+)', '小时候的味道(40+)', '会回购(30+)'],
            brand: '奇多',
            title: '奇多 日式牛排味',
            description: '奇多日式牛排味粟米棒休闲食品60g/袋',
            evaluation: '味道独特，一份的量刚刚好也不会吃腻，喜欢吃这种口味',
            imageUrl: ' https://tse4-mm.cn.bing.net/th/id/OIP-C.I3zcNuHwp0BAXdod5HaiFAAAAA?rs=1&pid=ImgDetMain',
        },
    ],
    // 呀土豆
    230: [
        {
            id: 231,
            price: 6.99,
            sales: 200,
            evaluationAmount: '500+',
            label: ['好吃(80+)', '买给小孩(20+)',],
            brand: '呀土豆',
            title: '呀土豆 蜂蜜黄油味',
            description: '呀土豆蜂蜜黄油味膨化食品70g/袋',
            evaluation: '酥酥脆脆，性价比高',
            imageUrl: ' https://img.alicdn.com/i1/1916719619/TB2PoYxXxvzQeBjSZFEXXbYEpXa_!!1916719619.jpg',
        },
        {
            id: 232,
            price: 6.99,
            sales: 300,
            evaluationAmount: '600+',
            label: ['味道好(70+)', '小孩喜欢(30+)',],
            brand: '呀土豆',
            title: '呀土豆 番茄酱味',
            description: '呀土豆番茄酱味膨化食品70g/袋',
            evaluation: '新鲜品质好，包装完整',
            imageUrl: ' https://imgservice.suning.cn/uimg1/b2c/image/tBblziuwIhTgYCpm0f2skQ.jpg_800w_800h_4e',
        },
    ],
    // 300辣条
    // 卫龙
    310: [
        {
            id: 311,
            price: 3.69,
            sales: 300,
            evaluationAmount: '600+',
            label: ['好吃(70+)', '经常购买(40+)', '辣味不重(20+)'],
            brand: '卫龙',
            title: '卫龙大面筋 香辣味',
            description: '卫龙大面筋香辣味休闲麻辣零食128g/袋',
            evaluation: '卫龙辣条的经典',
            imageUrl: 'https://cbu01.alicdn.com/img/ibank/2016/621/018/2880810126_1275913164.400x400.jpg ',
        },
        {
            id: 312,
            price: 4.5,
            sales: 400,
            evaluationAmount: '600+',
            label: ['升级款(70+)', '好吃上头(40+)',],
            brand: '卫龙',
            title: '卫龙大面筋 甜辣味',
            description: '卫龙大面筋甜辣味休闲麻辣零食128g/袋',
            evaluation: '升级款多了甜味，更加丰富',
            imageUrl: 'https://cbu01.alicdn.com/img/ibank/2020/398/994/14364499893_1417632778.jpg ',
        },
    ],
    //麻辣王子
    320: [
        {
            id: 321,
            price: 14.99,
            sales: 200,
            evaluationAmount: '500+',
            label: ['口感非常好(70+)', '价值实在(30+)', '品质很好(20+)'],
            brand: '麻辣王子',
            title: '麻辣王子 很麻很辣味',
            description: '麻辣王子很麻很辣味休闲麻辣零食110g（内含6包）',
            evaluation: '不油腻很好吃，辣度能接受',
            imageUrl: ' https://ts1.cn.mm.bing.net/th/id/R-C.5cf11e72cfe17479402894713f586064?rik=Ego83Txgksj0Sg&riu=http%3a%2f%2fimg13.360buyimg.com%2fn1%2fs800x800_jfs%2ft1%2f153682%2f26%2f11662%2f126716%2f5fe6de69Eae8d4edb%2f0eff460a5e080f5e.jpg&ehk=n2%2f6CtcU%2f6XgLmcGAsy7WUgrEUNrUmz5eqDb2NdMKeo%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            id: 322,
            price: 19.99,
            sales: 200,
            evaluationAmount: '600+',
            label: ['不油腻(60+)', '正品(40+)', '孩子喜欢(20+)'],
            brand: '麻辣王子',
            title: '麻辣王子 很麻很辣味',
            description: '麻辣王子很麻很辣味休闲麻辣零食550g（内含30包）',
            evaluation: '麻麻的，辣辣的，很喜欢',
            imageUrl: ' https://img.alicdn.com/i2/2764896337/O1CN0149SgKf1wgOi8eGgLc_!!2764896337.jpg ',
        },
    ],
    // 400缤纷糖果
    //旺仔
    410: [
        {
            id: 411,
            price: 2.99,
            sales: 200,
            evaluationAmount: '600+',
            label: ['经典味道(80+)', '好吃不贵(40+)',],
            brand: '旺仔',
            title: '旺仔牛奶糖 牛奶味',
            description: '旺仔牛奶糖牛奶味休闲糖果18g/袋',
            evaluation: '孩子很喜欢吃这个味道',
            imageUrl: ' https://cbu01.alicdn.com/img/ibank/2016/882/262/2938262288_1041835769.jpg ',
        },
        {
            id: 412,
            price: 2.99,
            sales: 150,
            evaluationAmount: '400+',
            label: ['味道新颖(60+)', '价格实惠(40+)', '好吃(30+)'],
            brand: '旺仔',
            title: '旺仔牛奶糖 香蕉牛奶味',
            description: '旺仔牛奶糖香蕉牛奶味休闲糖果18g/袋',
            evaluation: '一直会回购',
            imageUrl: ' https://cbu01.alicdn.com/img/ibank/2016/919/531/2940135919_1041835769.jpg',
        },
        {
            id: 413,
            price: 2.99,
            sales: 120,
            evaluationAmount: '500+',
            label: ['品质好(60+)', '会回购(30+)',],
            brand: '旺仔',
            title: ' 旺仔牛奶糖 草莓味',
            description: '旺仔牛奶糖草莓味休闲糖果42g/袋',
            evaluation: '孩子很喜欢这个味道，品质不错',
            imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.e7552a3d362f746da20c7765a32ed730?rik=Sh%2bvnD9kkHw5Gg&riu=http%3a%2f%2fimg12.360buyimg.com%2fn1%2fs360x360_jfs%2ft1081%2f8%2f192248134%2f121888%2f7d065392%2f55090fb2Ndb73d35e.jpg&ehk=4hDUnfIt4PrZz3iEYkJDuSMm%2b3q8ElKAFIFeee8QZm0%3d&risl=&pid=ImgRaw&r=0 ',
        },
    ],
    //德芙
    420: [
        {
            id: 421,
            price: 12.99,
            sales: 250,
            evaluationAmount: '600+',
            label: ['好吃(70+)', '纵享丝滑(50+)', '价格实惠(30+)'],
            brand: '德芙',
            title: '德芙 牛奶味',
            description: '德芙牛奶味黑巧克力休闲零食231g/盒',
            evaluation: '德芙巧克力纵享丝滑！',
            imageUrl: ' https://tse3-mm.cn.bing.net/th/id/OIP-C.o7TxGWXfmzSVU4pIIUrBqQAAAA?rs=1&pid=ImgDetMain',
        },
        {
            id: 422,
            price: 12.99,
            sales: 150,
            evaluationAmount: '500+',
            label: ['好吃(80+)', '抹茶味很香(50+)', '品质优秀(20+)'],
            brand: '德芙',
            title: '德芙 抹茶味',
            description: '德芙抹茶味巧克力休闲零食234g/盒',
            evaluation: '相比于原味，这个味道我更喜欢',
            imageUrl: ' https://ts1.cn.mm.bing.net/th/id/R-C.5945d3cb297487ed7cb35f953f45a16c?rik=nGyR181yU2zfuA&riu=http%3a%2f%2fimg04.fn-mart.com%2fpic%2f4eaf133c92a3253809c9%2fKz62TTsnDTflhgugjT%2f59mGeRjaFaQ93Y%2fCsmRsVht9MCAdz_kAAGBnbzzXQQ116_400x400.jpg&ehk=068vehXkGUISHbIXeZLxBOzkR%2bBhghh4kZQkbFs82z4%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            id: 423,
            price: 12.99,
            sales: 150,
            evaluationAmount: '400+',
            label: ['香浓(70+)', '新鲜(20+)', '会回购(20+)'],
            brand: '德芙',
            title: '德芙 草莓味',
            description: '德芙草莓味白巧克力休闲零食221g/盒',
            evaluation: '草莓和巧克力融合的很好',
            imageUrl: ' https://img1.wushang.com/pn/wsec-img1/2020/10/14/bc9d6dd9-5d6b-4e46-8ab4-729159178d19.jpg?x-oss-process=image/resize,w_800,h_800',
        },
    ],
    //悠哈
    430: [
        {
            id: 431,
            price: 5.99,
            sales: 200,
            evaluationAmount: '600+',
            label: ['好吃(60+)', '奶味浓(30+)',],
            brand: '悠哈',
            title: '悠哈 巧克力味',
            description: '悠哈巧克力味奶糖12g/袋',
            evaluation: '奶味很香浓，很喜欢',
            imageUrl: ' https://img3.ey100.com/ItemImages/23/2309/2309002/8009-6601/ViewBig/8009-6601.jpg',
        },
        {
            id: 432,
            price: 5.99,
            sales: 200,
            evaluationAmount: '500+',
            label: ['味道好(60+)', '包装完整(30+)', '有保障(20+)'],
            brand: '悠哈',
            title: '悠哈 牛奶味',
            description: '悠哈原味奶糖120g/袋',
            evaluation: '香甜的奶香侵入味蕾，太好吃啦！',
            imageUrl: ' https://ts1.cn.mm.bing.net/th/id/R-C.b383c2d0c2230549efd07aed12949a6c?rik=xA8Fe%2fVqX3GqLg&riu=http%3a%2f%2fimg3.ey100.com%2fItemImages%2f23%2f2309%2f2309002%2f8009-6590%2fViewBig%2f8009-6590.jpg&ehk=QDNRry11sUtT3T4vxs5azCXhLwnKsVsW0IQ%2fDjFUpMg%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            id: 433,
            price: 4.59,
            sales: 150,
            evaluationAmount: '500+',
            label: ['新品(50+)', '抹茶味浓(30+)', '价格实惠(20+)'],
            brand: '悠哈',
            title: '悠哈 抹茶味',
            description: '悠哈抹茶味奶糖70g/袋',
            evaluation: '牛奶和抹茶结合完全符合我的喜好',
            imageUrl: ' https://ts1.cn.mm.bing.net/th/id/R-C.9889723cea26bc2a6afa93f44f8917b6?rik=A8NUiwjvAjtKiA&riu=http%3a%2f%2fimg4.tbcdn.cn%2ftfscom%2fi3%2f1999658602%2fTB2XR3KlVXXXXXGXXXXXXXXXXXX_!!1999658602.jpg&ehk=HhAlbJ525KcYq0uVCD1zELbUU77d90zg%2bp39fSsBlbM%3d&risl=&pid=ImgRaw&r=0',
        },
    ],
    //炫迈
    440: [
        {
            id: 441,
            price: 10.99,
            sales: 100,
            evaluationAmount: '400+',
            label: ['味道不错(50+)', '性价比高(30+)', '效果好(20+)'],
            brand: '炫迈',
            title: '炫迈 水密西瓜味',
            description: '炫迈（Stride）无糖口香糖水蜜西瓜味28片50.4g',
            evaluation: '优秀的口香糖品牌，一直都购买的炫迈',
            imageUrl: ' https://ts1.cn.mm.bing.net/th/id/R-C.f9e461d4f09aa8162519cec0de7442d1?rik=qrRVxNQTJRn5Ew&riu=http%3a%2f%2fimg13.360buyimg.com%2fn0%2fjfs%2ft14206%2f309%2f2670368827%2f124358%2f8322c9f4%2f5aaf8d2cNce6b5d2f.jpg&ehk=gRCR1yu%2bTxuNMapa1fl8BvXZmpKovETmMT4PDCSBmTM%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            id: 442,
            price: 11.99,
            sales: 120,
            evaluationAmount: '550+',
            label: ['(+)', '(+)', '(+)'],
            brand: '炫迈',
            title: '炫迈 海盐焦糖冰淇淋味',
            description: '炫迈（Stride）无糖口香糖海盐焦糖冰淇淋味28片50.4g ',
            evaluation: '',
            imageUrl: ' https://tse1-mm.cn.bing.net/th/id/OIP-C.1spBJADeaAOqGLaK5hTSgAHaHa?rs=1&pid=ImgDetMain',
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