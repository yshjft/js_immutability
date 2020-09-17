var o1={name :'kim', score:[1, 2]}
Object.freeze(o1); //누구도 객체를 변경할 수 없다. but 객체 내부의 객체는 freeze할 수 없다.(이를 해결하려면 Object.freeze(o1.socre))해야한다.
o1.name='lee';

console.log(o1);