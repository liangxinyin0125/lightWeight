// addresses: [
//     {
//         key: '',
//         title:'',
//         addressee: '',
//         telephone: '',
//     },
// ]

// const writeAddress = (address) => {
//     localStorage.removeItem('addresses');
//     address.key = getNumberOfAddress() + 1;
//     var addresses = JSON.parse(localStorage.getItem('addresses'));
//     if(addresses == null) {
//         addresses = [];
//         localStorage.setItem('addresses', JSON.stringify(addresses.concat(address)));
//         writeDefaultAddress(1);
//     }
//     localStorage.setItem('addresses', JSON.stringify(addresses.concat(address)));
// }
const writeAddress = (address) => {
    const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    address.key = addresses.length ? addresses[addresses.length - 1].key + 1 : 1; // Ensure unique key
    addresses.push(address);
    localStorage.setItem('addresses', JSON.stringify(addresses));
    if (addresses.length === 1) {
        writeDefaultAddress(address.key);
    }
}

const removeAddress = (key) => {
    const addresses = JSON.parse(localStorage.getItem('addresses'));
    if(addresses == null) {
        return;
    }
    localStorage.setItem('addresses', JSON.stringify(addresses.filter(address => {
        return key !== address.key;
    })));
}

const updateAddress = (key, n_address) => {
    const addresses = JSON.parse(localStorage.getItem('addresses'));
    if(addresses == null) {
        return;
    }
    localStorage.setItem('addresses', JSON.stringify(addresses.map(address => {
        if(key == address.key) {
            address = n_address;
            n_address.key = key;
        }
        return address;
    })));
}

const readAddress = () => {
    return JSON.parse(localStorage.getItem('addresses'));
}

const getNumberOfAddress = () => {
    const addresses = JSON.parse(localStorage.getItem('addresses'));
    if(addresses == null) {
        return 0;
    }
    return addresses.length;
}

const writeDefaultAddress = (key) => {
    const addresses = JSON.parse(localStorage.getItem('addresses'));
    console.log(addresses);
    if(addresses == null) {
        return;
    }
    localStorage.setItem('default_address', JSON.stringify(addresses.find(address => address.key == key)));
}

const readDefaultAddress = () => {
    return JSON.parse(localStorage.getItem('default_address'));
}

export { writeAddress, readAddress, removeAddress, updateAddress, writeDefaultAddress, readDefaultAddress };