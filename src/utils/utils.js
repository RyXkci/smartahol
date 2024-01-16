const parseVolume = (num, unit) => {
    let parsedVolume;
       //   TURNING EVERYTHING IN TO ML
    if (unit === "cl") {
        parsedVolume = num * 10
    } else if (unit === "l") {
        parsedVolume = num * 1000
    } else{parsedVolume = num}
    console.log(parsedVolume)
    return parsedVolume;
}

const calculateCost = (cost, volume) => {
    return cost/volume
}

const maxAbvReduce = (arr) => {
    return arr.reduce((maxItem, currentItem) => {
        return currentItem.percentage > maxItem ? currentItem.percentage : maxItem;
    }, arr[0].percentage)
}

const minAbvReduce = (arr) => {
    // Reduce, starts as first abvCost of object, checks if second is smaller. If it is it returns it, othherwise it returns the current.Used to find the smallest abv.
    return arr.reduce((minObj, currentObj) => {
        return currentObj.abvCost < minObj.abvCost ? currentObj : minObj;
      }); 
}

export {parseVolume, calculateCost, maxAbvReduce, minAbvReduce};