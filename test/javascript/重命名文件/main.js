const fs = require("fs")
const path = require("path")

var fileArr = fs.readdirSync(path.join(process.cwd(), "videos"))
console.log(fileArr)
fileArr.map(item=>{
  var reg = /(?<!\d)\d{4,13}(?!\d)/g;
  var id = item.match(reg)?.[0] || null
  if(!id) return
  var newArr = fs.readdirSync(path.join(process.cwd(), "newVideos"))
  if(newArr.includes(id)){
    var pathToFile = path.join(process.cwd(), "videos/"+item)
    var newPathToFile = path.join(process.cwd(), "removeVideos/"+id+'.mp4')
  }else{
    var pathToFile = path.join(process.cwd(), "videos/"+item)
    var newPathToFile = path.join(process.cwd(), "newVideos/"+id+'.mp4')
  }
  fs.renameSync(pathToFile, newPathToFile)
})
