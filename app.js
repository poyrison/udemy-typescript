"use strict";
// const person: { 타입을 명시적으로 정의
//   name: string;
//   age: number;
// }
const person = {
    // 타입을 추론
    name: "JunSik",
    age: 30,
    hobbies: ["Sports", "Listening to music"],
    role: [2, "author"],
};
// person.role.push("admin"); // push는 튜플에서 허용되는 일종의 예외이다.
// person.role[1] = 10; // 두 번째 값은 문자열이어야 하기 때문에 10을 두 번째 값으로 정의할 수 없다.
let favoriteActivity;
favoriteActivity = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
