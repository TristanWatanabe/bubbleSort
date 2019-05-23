function split (arr) {

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return [left, right]
}

function merge (left, right) {
    let sortedArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray, ...left, ...right];
}