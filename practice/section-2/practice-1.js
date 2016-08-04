 function count_same_elements(collection) {
   var newArray = [];
   for(var i = 0; i < collection.length; i++) 
   {
      var str = {};
      var item = collection[i];
      if(isExist(item,newArray) === false){
        str.key = item;
        str.count = 1;
        newArray.push(str);
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
