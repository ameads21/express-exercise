function stringToArray(data){
    let result = [];
    let nums = data.split(",")
    for (let i = 0; i < nums.length; i++){
        let valToNumber = Number(nums[i])
        if (Number.isNaN(valToNumber)){
            return new Error(`${nums[i]} is not a valid number`)
        }
        result.push(valToNumber)
    }
    return result
}


function findMean(data){
    let average = 0;
    for (num of data){
        average += num
    }
    return average/data.length
}

function findMedian(data){
    data.sort((a, b) => a-b)

    let midIndex = Math.floor(data.length / 2)
    let median;
    if (midIndex % 2 === 0){
        median = (data[midIndex] + data[midIndex - 1]) / 2
    } else {
        median = data[midIndex]
    }
    return median
}

function findMode(data){
    var map = {};
    for (var i = 0; i < data.length; i++) {
        if (map[data[i]] === undefined) {
            map[data[i]] = 0;
        }
        map[data[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for (prop in map) {
        if (map[prop] > greatestFreq) {
            greatestFreq = map[prop];
            mode = prop;
        }
    }
    return mode;
}


module.exports = {
    stringToArray,
    findMean,
    findMedian,
    findMode
}