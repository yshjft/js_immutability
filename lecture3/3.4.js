var o1 = { name : 'kim', score:[1, 2] };
var o2=Object.assign({}, o1);
o2.score = o2.score.concat();
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
