const o1 = {name : 'kim'}
Object.freeze(o1);
const o2 = {name : 'lee'}

/*
    o1 = o2
    Assignment to constant variable.
    const로 인해 발생한다.
*/

o1.name = 'park';
console.log(o1);
/*
    여전히 o1.name은 kim이다.
    object.freeze로 인한 결과이다.
*/