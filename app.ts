// unknown 타입
let userInput: unknown; // any보다 unknown이 조금 더 나은 이유는 조금이라도 타입 체크를 한다는 점
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// 절대 타입
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError("An error occurred!", 500);
