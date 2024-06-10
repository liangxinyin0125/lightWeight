const getCarouselItems = () => {
    const carouselItems = JSON.parse(localStorage.getItem('carouselItems'));
    if (carouselItems) {
      return carouselItems;
    } else {
      const defaultCarouselItems = [
        { src: 'https://cb-img2.lianlianpay.com/material/computer/paperwork-3154814_960_720.jpg?x-oss-process=image/resize,p_100/format,webp', alt: 'Slide 1' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xNIGLxa5E1RCZ1tuhrJF7xOVZjeAxy6kEw&s', alt: 'Slide 2' },
        { src: 'https://assets-au-01.kc-usercontent.com/e095818a-c2b1-025d-b9b3-a502057ea75e/655446c2-6a59-445c-a4b7-e50624710aae/iStock-1350857525%201.png', alt: 'Slide 3' }
      ];
      localStorage.setItem('carouselItems', JSON.stringify(defaultCarouselItems));
      return defaultCarouselItems;
    }
  };
  
  const getHotItems = () => {
    const hotItems = JSON.parse(localStorage.getItem('hotItems'));
    if (hotItems) {
      return hotItems;
    } else {
      const defaultHotItems = [
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
        },
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
      ];
      localStorage.setItem('hotItems', JSON.stringify(defaultHotItems));
      return defaultHotItems;
    }
  };
  
  export { getCarouselItems, getHotItems };
  