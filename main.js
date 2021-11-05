
const fs = require('fs')
const {sourcePath,dist,newName} = require('./config')
const getPath = require('./resolvePath')
const copyFile = require('./copyFile')
const completePath = getPath(sourcePath)

fs.readdir(completePath,(err,files)=>{
  if(err) return console.log(err)
  let hasDist = fs.existsSync(dist)//判断是否存在 存放文件的目录
  hasDist?'':fs.mkdirSync(dist) //如果不存在创建一个
  copyFile(sourcePath,files,dist,newName)
})



