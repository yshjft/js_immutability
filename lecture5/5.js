var score = [1, 2, 3];
// score.push(4);
var score2 = score.concat(4);// concat은 원본을 immutable하게 만든다.
console.log(score, score2 );