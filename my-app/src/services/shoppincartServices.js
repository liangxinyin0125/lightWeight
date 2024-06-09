const writeShoppincart = (good) => {
    var shoppincart = JSON.parse(localStorage.getItem('shoppin_cart'));
    if(shoppincart == null) {
        shoppincart = [];
    }
    if(shoppincart.find(item => item.id == good.id)) {
        return;
    }
    localStorage.setItem('shoppin_cart', JSON.stringify(shoppincart.concat(good)));
}

const removeShoppincart = (id) => {
    const shoppincart = JSON.parse(localStorage.getItem('shoppin_cart'));
    if(shoppincart == null) {
        return;
    }
    localStorage.setItem('shoppin_cart', JSON.stringify(shoppincart.filter(item => item.id !== id)));
}

const readShoppincart = () => {
    return JSON.parse(localStorage.getItem('shoppin_cart'));
}

export { writeShoppincart, removeShoppincart, readShoppincart };