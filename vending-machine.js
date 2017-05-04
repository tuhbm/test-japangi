/**
벤딩머신을 만들자

 구성요소
 - 벤딩머신
 - 상태값
    > 음료수 종류별 객체
        >> 수량
        >> 가격
 - 동작
    > 전원을 켠다.
    > 돈을 넣는 기능
        >> 거스름 돈이 있는지 체크
            >>> 거스름 돈이 없을시 돈이 들어가지 않고 에러메시지 리턴
        >> 현재 있는 음료수 상태 리턴
        >> 돈을 넣으면 거스름돈 반환 버튼 활성화


    > 음료수선택
        >>음료수 배출
        >>거스름돈 계산


    > 거스름돈 배출

 */

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getInfo = function() {
        return “Name : ” + firstName + ” ” + lastName + “\nAge : ” + age;
    }
}

var person1 = new Person(“Jason”, “Bourne”, 33);
var person2 = new Person(“Jenny”, “Laurence”, 18);