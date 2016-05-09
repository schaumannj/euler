/**
 * Created by schaumanni on 9.5.16.
 */
var sum = 2;
var results = [1, 2];
var tmp;
var i = 1;

while(true) {
    i++;
    tmp = results[(i-2)] + results[(i-1)];
    sum += tmp % 2 === 0 ? tmp : 0;
    if(tmp >= 4000000) {
        break;
    }
    results[i] = tmp;
}
console.info(sum)
console.info(results.length)
