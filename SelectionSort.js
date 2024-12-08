const SelectionSort = (arr) => {
    let n = arr.length;
    // outer loop
    for (let i = 0; i < n; i++) {
        let smallest = i;
        // inner loop
        for (let j = i + 1; j < n; j++) {
            // check if the next number after i is less than the first number
            if (arr[j] < arr[smallest]) {
                // swap the smallest to be the first
                smallest = j
            }
        }
        // check if the smallest value is not the current value
        if (smallest !== i) {
            // store the the current value in a temporary variable
            let temp = arr[i]
            // put smallest value in the current position
            arr[i] = arr[smallest]
            // goo on checking the other valuee 
            arr[smallest] = temp
        }
    }
    // make the functon return the sorted array
    return arr

}

console.log(SelectionSort([5, 2, 9, 2, 34, 78, 23, 1, 0, -34]));