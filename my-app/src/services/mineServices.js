// services/mineServices.js

const getUserInfo = () => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      userInfo = {
        nickname: '昵称',
        avatar: '',
        address: '收货地址'
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    return userInfo;
  };
  
  const getOrderStats = () => {
    let orderStats = JSON.parse(localStorage.getItem('orderStats'));
    if (!orderStats) {
      orderStats = {
        allOrders: 10,
        pendingPayment: 2,
        pendingReceipt: 3,
        refunds: 1
      };
      localStorage.setItem('orderStats', JSON.stringify(orderStats));
    }
    return orderStats;
  };
  
  const getMenuItems = () => {
    const menuItems = [
      { title: '地址管理', icon: 'EnvironmentOutlined', link: '/address' },
      { title: '我的足迹', icon: 'HistoryOutlined', link: '/footprint' },
      { title: '我的关注', icon: 'HeartOutlined', link: '/follow' },
      { title: '我的收藏', icon: 'StarOutlined', link: '/collection' },
      { title: '我的评价', icon: 'CommentOutlined', link: '/comments' },
      { title: '设置', icon: 'SettingOutlined', link: '/settings' }
    ];
    return menuItems;
  };
  
  const updateUserInfo = (newInfo) => {
    const userInfo = { ...getUserInfo(), ...newInfo };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    return userInfo;
  };
  
  export { getUserInfo, getOrderStats, getMenuItems, updateUserInfo };
  