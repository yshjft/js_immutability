var v = 1; //v라는 변수를 선언, 또한 v는 1의 이름
/*
    가정) 현재 2개의 코드 사이에 1억줄이 있다고 가정하자
    누군가가 v=2;라는 코드를 작성하였다. 이로 인하여 원하는 결과를 얻지 못한다.
    (에러도 발생시키지 않는 무서운 버그를 만들어낸다)
*/
console.log('v : ', v);

const c=1;
/*
    가정) 현재 2개의 코드 사이에 1억줄이 있다고 가정하자
    누군가가 c=2;라는 코드를 작성하였다. 정직하게 에러를 발생시킨다.
*/
 console.log('c : ', c);