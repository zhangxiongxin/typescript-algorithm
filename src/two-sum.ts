export const twoSum = (arr: Array<Number>, target: Number): Array<Number> => {
    const log = new Map();
    for (let index in arr) {
        if (log.has(<number>target - <number>arr[index])) {
            return [+log.get(<number>target - <number>arr[index]), +index]
        } else {
            log.set(arr[index], index)
        }
    }
    return [-1, -1]
}
