const path = require('path')

function getPath(sourcePath){
  let isAb = path.isAbsolute(sourcePath) //判断是否为绝对路径，不是就转为绝对路径
  let completePath = isAb?sourcePath:path.resolve(__dirname,sourcePath)
  return completePath
}
module.exports = getPath