module.exports = function check(str, bracketsConfig) {
  let newArr = str.split('');

  for (let i = 0; i < newArr.length; i++) {
    bracketsConfig.forEach((item) => {
      if (newArr[i] === item[0] && newArr[i + 1] === item[1]) {
        newArr.splice(i, 2);
        i = - 1;
      }
    })
  }
  return newArr.length === 0 ? true : false;
}
