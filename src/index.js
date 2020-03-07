module.exports = function check(str, bracketsConfig) {
    const confArray = bracketsConfig.map(item => item.join(""));
    let j = 0;

    while (j <= bracketsConfig.length) {
        for(let i = 0; i < confArray.length; i++) {
            if (str.includes(confArray[i], 0)) {
                str = str.replace(confArray[i], "");
                i--;
            }
        }
        j++;
    }
    return (str.length === 0) ? true : false;
}


