function collect_same_elements(collection_a, collection_b) {
    var newArray=[];
    for(var i = 0; i < collection_a.length; i++)
   {  
       var item = collection_a[i];
       if(isExist(item,collection_b[0]))
       {
           newArray.push(item);
        }   
   }
    return newArray;
}

function isExist(element,collection)
{
   for(var i = 0; i < collection.length; i++)
   {
     if(collection[i] === element){
       return true;
    }
   }
  return false;
}
