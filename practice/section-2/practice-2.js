 function count_same_elements(collection) {
   var newArray = [];
     var resp = /-/;
    // var newArraystr = [];
   for(var i = 0; i < collection.length; i++) 
   {
      var str = {};
      var item = collection[i];
      if(isExist(item,newArray) === false){//如果新数组中元素不存在就添加
         if(resp.test(item)){
        //方法一：获取某个下标下的字符
        // str.key = collection[i].substring(0,1);
        // str.count = parseInt(collection[i].substring(2));
        
       　//方法二：将特殊字符拆分，拆分后放在新数组里面，再访问某个下标下的字符
        //  newArraystr = collection[i].split("");
        //  str.key = newArraystr[0];
        //  str.count = parseInt(newArraystr[2]);
        
        //方法三：直接用下标访问字符串元素里面的某个字符，注意访问的结果都是字符串，要用parseInt()获取数字
        str.key = collection[i][0];
        str.count = parseInt(collection[i][2]);
        newArray.push(str);
      }
      else{
        str.key = item;
        str.count = 1;
        newArray.push(str);
      }
      }
   }
   return newArray;
 }
function isExist(item,newArray){
  for(var i = 0; i < newArray.length; i++){
    if(item === newArray[i].key){
      newArray[i].count++;
      return true;
    }
  }
  return false;
}

　　　　　 
