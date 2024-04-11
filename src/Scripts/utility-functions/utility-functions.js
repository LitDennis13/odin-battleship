function checkIfItemInArray(arr, item) {
    for (const index of arr) {
        if (index[0] === item[0] && index[1] === item[1]) {
            return true;
        }
    }
    return false;
}

function checkIfArrInArr(arr, arrToFind) {
    for (const item of arr) {
        if (item[0] === arrToFind[0] && item[1] === arrToFind[1]) {
            return true;
        }
    }
    return false;
}

export { checkIfItemInArray, checkIfArrInArr };
