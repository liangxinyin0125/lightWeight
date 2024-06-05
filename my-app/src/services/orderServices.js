const writeTempOrder = (order) => {
    localStorage.setItem('temp_order', JSON.stringify(order));
}

const readTempOrder = () => {
    return JSON.parse(localStorage.getItem('temp_order'));
}

const clearTempOrder = () => {
    localStorage.removeItem('temp_order');
}

const updateTempOrder = (order) => {
    clearTempOrder();
    writeTempOrder(order);
}

const createOrder = () => {
    var temp = JSON.parse(localStorage.getItem('temp_order'));
    temp.key = getNumberOfOrder() + 1;
    var orders = JSON.parse(localStorage.getItem('order_list'));
    if(orders === null) {
        orders = [];
    }
    writeOrders(orders.concat(temp));
}

const writeOrders = (orders) => {
    localStorage.setItem('order_list', JSON.stringify(orders));
}

const getNumberOfOrder = () => {
    var orders = JSON.parse(localStorage.getItem('order_list'));
    if(orders == null) {
        return 0;
    }
    else {
        return orders.length();
    }
}

export { writeTempOrder, readTempOrder, clearTempOrder, updateTempOrder, createOrder }