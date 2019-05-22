function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array;
}


function bubbleSort (array) {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i+1] !== undefined && array[i] > array[i+1]) {
                swap(array, i, i+1);
                swapped = true;
            }
        }

    } while (swapped)

    return array;
}

