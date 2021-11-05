const fs = require('fs')
function copyFile(sourcePath,files,dist,newName){
  files.forEach((item,index)=>{
    let oldPath = sourcePath+'/'+item 
    let newPath = dist+'/'+newName+index+'.'+ item.split('.')[1]
    let readStream = fs.createReadStream(oldPath); //创建读取文件流
    let writeStream = fs.createWriteStream(newPath);//创建写入文件流
    readStream.pipe(writeStream);
  })
}
module.exports = copyFile