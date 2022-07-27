/* function check(str, bracketsConfig) {
    for (let i = 0; i < str.length; i++) {
        bracketsConfig.forEach(config => {
            if (str[i] === config[0] && str[i + 1] === config[1]) {
                str = str.slice(0, i) + str.slice(i + 2, str.length);
                i -= 2;
            }
        });
    }

    return (str.length === 0);
}
const config5 = [
    ['(', ')'],
    ['|', '|']
];

console.log(check('|()|', config5));
 */

module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.length; i++) {
        bracketsConfig.forEach(config => {
            if (str[i] === config[0] && str[i + 1] === config[1]) {
                str = str.slice(0, i) + str.slice(i + 2, str.length);
                i -= 2;
            }
        });
    }

    return (str.length === 0);
}