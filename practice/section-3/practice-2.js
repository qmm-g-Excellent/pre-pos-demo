function create_updated_collection(collection_a, object_b) {
  for( var i = 0; i < collection_a.length; i++)
  {
      var item = collection_a[i].key;
      if(isExist(item,object_b)){
          var n = (collection_a[i].count - collection_a[i].count%3)/3;
          collection_a[i].count =  collection_a[i].count - n;
      }
  }
return collection_a;    
} 
 
function isExist(item,object_b){
    for(var i = 0; i < object_b.value.length; i++){
       if(item === object_b.value[i]){
           return true;
           
       } 
    }
    return false;
}
