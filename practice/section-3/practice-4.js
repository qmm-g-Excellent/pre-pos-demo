function create_updated_collection(collection_a, object_b) {
   var newArray = [];
   for(var i = 0; i < collection_a.length; i++) 
   {
      var item = collection_a[i];
      isExist(item,newArray);
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
    if(item.length > 1){
       if(item[0] === newArray[i].key){
         newArray[i].count += parseInt(item.subsreing(2));
          break;
       }
    }
   else  if(item === newArray[i].key){
              newArray[i].count++;
              break;
    }
  }
   var str = {};
  if(item.length > 1 && i === newArray.length){
      str.key = item[0];
      str.count = parseInt(item.substring(2));
      newArray.push(str);
  }
  else if(item.length === 1 && i === newArray.length){
         str.key = item;
        str.count = 1;
        newArray.push(str);
  }
              return true;
  
}
