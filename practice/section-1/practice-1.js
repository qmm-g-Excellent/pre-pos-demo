function collect_same_elements(collection_a, collection_b) {
   var newArray=[];
   for(var i = 0; i < collection_a.length; i++)
  {
     var item=collection_a[i];
     if(isExist(item,collection_b))
     {
       newArray.push(item);
     }
   }
  return newArray;
}

function isExist(element,collection_b)
{
    for(var i = 0; i < collection_b.length; i++)
    {
       if(collection_b[i] === element){

          return true;
       } 
    }
    return false;
}




