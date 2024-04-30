// 15- Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function scores(scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]) {
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
        else if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }
    console.log(`No. of times score exceeded to maxiumum number ${max} is:\t${maxCount}`);
    console.log(`No. of times score fell bellow to minimum number ${min} is:\t${minCount}`);
    
}
scores()