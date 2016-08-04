function create_updated_collection(collection_a, object_b) {
   var newArray = [];
   for(var i = 0; i < collection_a.length; i++) 
   {
      var str = {};
      var item = collection_a[i];
      if(isExist(item,newArray) === false){
        str.key = item;
        str.count = 1;
        newArray.push(str);
      }
   }
   same_elements(newArray,object_b.value);
   return newArray;
} 
function　same_elements(newArray,object_b){
   for(var i = 0; i < newArray.length; i++){
     var element = newArray[i];
     if(isExist_1(element.key,object_b)){
       element.count = element.count - parseInt(element.count/3);
     }
   }
   return true;
}
function isExist_1(item,object_b){
  for(var i = 0; i < object_b.length; i++){
    if(item === object_b[i]){
      return true;
    }
  }
  return false;
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
