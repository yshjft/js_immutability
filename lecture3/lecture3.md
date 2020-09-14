lecture 3
===========================


## 3.1
(case of 원시데이터)               
var p1=1; var p2=1;          
/*           
    p2는 이미 존재하는 값(1)을 가지므로 결과적으로 p1과 p2는 같은 값을 가리키게 된다.
    (결론) p1 === p2 : true            
*/     
불변하다...              
            
               
(case of 객체)             
var o1 ={ name : 'kim'}; var o2={ name : 'kim' }                  
/*             
    (결론) o1 === o2 : false          
    같은 객체여도 메모리를 공유하지 않고 따로 생성하여 데이터를 보관한다(객체의 가변성 때문이다.)              
*/            

                   
               
## 3.2
원시 데이터는 값이 같을 때 같은 값을 가리키다가 값이 달라졌을 때 다른 값을 가리키게 된다.           
(원시 데이터 타입은 필요할 때 까지 새로운 것을 만들지 않는다)         
          
객체는 생성하는 시점에서 같은 값을 기지고 있다 하더라도 별도로 객체를 생성하여 참조한다.          
(객체는 생성할 떄 마다 새로운 객체를 만든다.)           

if) var o1 ={ name : 'kim'};  var o3=o1;                 
o3.name = 'lee'              
/*             
    (결론)              
    o1의 name도 'lee'로 변경된다. -> 심각한 에러가 될 수 있다.
*/             
               
            
             
## 3.3
var o2 = Object.assign({}, o1)         
o2.name='lee'            
o1의 name이 변경되지 않는다             
              
               

## 3.4
 var o1 ={ name:'kim', score: [1, 2]}        
 배열도 객체이다.           
 score는 배열의 위치를 저장하고 있다.         
          

var o2 = Object.assign({}, o1);         
o2.score.push(3); //문제 발생 !!!, o1의 score까지 변경된다.       

o2.score=o2.score.concat(); //o2의 score는 o1의 score와 다르다.        
배열 복제는 concat, slice, arrayfrom를 사용한다.           
o2.score.push(3) // o2.score=[1, 2, 3]; o1.score=[1, 2];가 된다. 원본에 대해서 불변함을 유지할 수 있게 된다.             