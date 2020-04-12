function hex2RGB(hex, alpha){
    hex = hex.replace('#','');
    if (hex.length % 3 !== 0) {
        throw new Error('Geçersiz hex değeri.');
    }
    const x = hex.length / 3;
    hex = hex.match(new RegExp(`.{${x}}`, "g"));
    hex = hex.map(itm => parseInt(itm.repeat(2 / itm.length), 16));
    if (!alpha) {
        alpha = '1';
    }
    if (parseFloat(alpha) > 1) {
        alpha = '1';
    }
    alpha = (alpha.length > 0 && alpha[0] === '0' ? alpha.slice(1) : alpha);
    result = hex;
    return `rgba(${result},${alpha})`; 
}

module.exports = hex2RGB;