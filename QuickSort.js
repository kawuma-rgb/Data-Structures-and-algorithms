const quickSort = (arr)=>{
    if(arr.length<=1){
        return arr;
    }
    let pivot = arr[arr.length -1];
    let left = arr.filter((el)=>el <pivot);
    let right = arr.filter((el)=>el >pivot);
    return [...quickSort(left),pivot,...quickSort(right)];

}

let array = [1995, 2023, 1878, 2020, 1956, 1803, 2001, 1900, 1989, 2031, 
    1977, 1964, 2015, 1850, 1912, 1945, 2008, 1867, 1883, 1939];

console.log(quickSort(array));
