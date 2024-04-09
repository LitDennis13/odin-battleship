function checkIfItemInArray(arr, item) {
    for (const index of arr) {
        if (index[0] === item[0] && index[1] === item[1]) {
            return true;
        }
    }
    return false;
}

export default checkIfItemInArray;
