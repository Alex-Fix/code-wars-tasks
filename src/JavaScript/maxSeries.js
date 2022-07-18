/*
Function for calculating the maximum subseries in a series of numbers
*/


function maxSeriesN3( series ) {
    let max = Number.MIN_VALUE;
    
    for(let startIndex = 0; startIndex < series.length; ++startIndex)
        for(let chunkLength = 1; chunkLength < series.length; ++chunkLength) {
            let maxPerLevel = 0;
            for(let seriesIndex = startIndex, chunkIndex = 0; seriesIndex < series.length && chunkIndex < chunkLength; ++seriesIndex, ++chunkIndex)
                {
                    maxPerLevel += series[seriesIndex];
                    if(maxPerLevel > max)
                        max = maxPerLevel;
                }
        }
    
    return max;
}

function maxSeriesN( series ) {
    let currSum = 0, maxSum = 0;
    
    for(let el of series) {
        currSum = Math.max(currSum + el, 0);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

const series = [1, -3, 5, 6, 7, -17, 11];
//const series = [ -31, 2, -1 , 4];

console.log(maxSeriesN(series));