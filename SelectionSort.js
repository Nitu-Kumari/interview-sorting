Example=[5,8,10];
function selectionSort(items){
    var len=items.length;
    for (i=0;i<len;i++){
        //set minimum to this position
        min = i;
        //check
        for(j=i+1; j<len; j++){
            if (items[j] < items[min]){
                min=j;

            }
        }
    //swap array
    var temp = items[min];
    items[min] = items[j]
    items[j] = temp;
    }
}
selectionSort(Example);