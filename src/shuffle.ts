export const shuffle = (arr: Array<Number>):Array<Number> => {
    const arrCopy = arr.splice(0);
    for (let i = (arrCopy.length - 1); i > 0; i -= 1) {
        const randomIndex: number = Math.floor(Math.random() * (i + 1));
        [arrCopy[randomIndex], arrCopy[i]] = [arrCopy[i], arrCopy[randomIndex]]
    }
    return arrCopy
}
