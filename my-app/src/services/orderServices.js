const writeTempOrder = (order) => {
    // 直接写入会覆盖原来的值，因此也可用于update
    localStorage.setItem('temp_order', JSON.stringify(order));
}

const readTempOrder = () => {
    return JSON.parse(localStorage.getItem('temp_order'));
}

const clearTempOrder = () => {
    localStorage.removeItem('temp_order');
}

const createOrder = (total) => {
    var temp = JSON.parse(localStorage.getItem('temp_order'));
    temp.key = 1;
    temp.total = total;
    temp.state = 'waiting for pay';
    localStorage.setItem('order', JSON.stringify(temp));
    localStorage.removeItem('temp_order');
}

const cancelOrder = () => {
    var order = JSON.parse(localStorage.getItem('order'));
    delete order.key;
    delete order.total;
    delete order.state;
    localStorage.setItem('temp_order', JSON.stringify(order));
    localStorage.removeItem('order');
}

const updateOrderState = (state) => {
    var order = JSON.parse(localStorage.getItem('order'));
    order.state = state;
    localStorage.setItem('order', JSON.stringify(order));
}

const readOrder = () => {
    return JSON.parse(localStorage.getItem('order'));
}

export { writeTempOrder, readTempOrder, clearTempOrder, createOrder, cancelOrder, updateOrderState, readOrder };