function checkIfItemInArray(arr, item) {
    for (const index of arr) {
        if (index[0] === item[0] && index[1] === item[1]) {
            return true;
        }
    }
    return false;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        // eslint-disable-next-line no-param-reassign
        array[i] = array[j];
        // eslint-disable-next-line no-param-reassign
        array[j] = temp;
    }
}

function checkIfArrInArr(arr, arrToFind) {
    for (const item of arr) {
        if (item[0] === arrToFind[0] && item[1] === arrToFind[1]) {
            return true;
        }
    }
    return false;
}

export { checkIfItemInArray, checkIfArrInArr, shuffleArray };
