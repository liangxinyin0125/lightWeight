## 0. 部分代码规范

- 事件函数通常使用handleXX，onXX的方式命名
- JSX--使用驼峰式命名法给大部分属性命名


## 1. 基本项目结构

- src: 源代码
    - assets: 公共资源
        - images: 图片
    - components: 组件
        - Login:  Login页面的组件
        - MallTabBar.js: 底部导航栏    
    - pages: 页面
        - login: 登录页面文件夹
            - Login.js: 登录页面(lxy)
        - mall: 商城主页面文件夹
            - Home.js: 首页（梁）
              - 搜索框
              - 轮播图
              - 热门商品
            - Classification.js: 分类(lxy)
              - 商品id命名：x(表示类别:饼干、膨化薯片、辣条、缤纷糖果、甜品)x(品种)x(该品种中商品的具体id)
              - 1饼干：1法丽兹、2雀巢、3百奇、4奥利奥、5纳宝帝
              - 2膨化薯片：乐事、奇多、呀土豆
              - 3辣条：卫龙、麻辣王子、
              - 4缤纷糖果：旺仔、德芙、悠哈、阿尔卑斯
              - 5甜品：甜甜圈、蛋糕、
            - GoodsList.js: 商品列表（lxy）
            - Goods.js: 商品页面（lxy）
            - ShoppinCart.js: 购物车（lxy,骏）
            - Mine.js: 我的（梁）
            - Address.js:地址管理页面(梁，骏)
        - pay: 购买全链路文件夹
            - CreateOrder.js: 创建订单页面(骏,东)
            - Pay.js: 支付页面(lxy+忆)
            - PaySuccess.js: 支付成功页面(lxy)
            - Order.js: 订单详情页面(骏,东)

    - utils: 工具
    - styles: css样式
    - services: 服务
      - 
    - App.js
    - router.js: 路由
    - index.js: 入口文件

## 2. 业务逻辑
- userService.js 用户服务
    - login 登录
    - logout 退出
    - getUserInfo 获取用户信息

- goodService.js 商品服务
    - getGoodByCategory  获取商品分类
    - getGoodList 获取商品列表
    - getGoodDetail 获取商品详情

- categoryService.js 分类服务
    - getCategoryList 获取分类列表

- orderService.js 订单服务
    - createOrder 创建订单
    - getOrderList 获取订单列表
    - getOrderDetail 获取订单详情

- cartService.js 购物车服务
    - addCart 添加购物车
    - getCartList 获取购物车列表
    - updateCart 更新购物车
    - deleteCart 删除购物车

- payService.js 支付服务
    - pay 支付

## 3. 业务实体建模
good: {
    id: 1,
    name: '商品1',
    price: 100,
    categoryId: '1',
    img: 'http://www.baidu.com/1.jpg',
}

order: {
    id: 1,
    userId: 1,
    orderNo: '201801010001',
    createTime: '2018-01-01 00:00:00',
    payTime: '2018-01-01 00:00:00',
    status: 0未支付 1已支付 2发货 3确认收货
    total: 100,
    goods: [
        {
            id: 1,
            count: 1
        }
    ],
}
user: {
    id: 1,
    name: '张三',
    phone: '13888888888',
    address: '北京市朝阳区'
    password: '123456',
}

## 4. 业务流程梳理
### 购买
商品列表页 ->  goodService.getGoodList() 
商品详情页 goodId ->  goodService.getGoodDetail(goodId) 
创建订单 goodId ->  orderId = orderService.createOrder(goodId) 
支付orderId  ->  payService.pay(orderId)
订单详情 支付orderId orderService.getOrderDetail(orderId)


其他流程请自行梳理