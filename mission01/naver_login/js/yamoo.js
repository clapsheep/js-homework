/*let tester = prompt("응시자 수를 입력하세요.");
tester = Number(tester);
let pass = 0;
const cutLine = 70;

for (i = 0; i <= tester; i = i + 1) {
  let score = prompt("점수");
  if (score >= 70) {
    pass = pass + 1;
  }
}
console.log(pass);



*/
/*const 합격_기준_점수 = 70;
let 응시자_수 = prompt("시험에 응시한 학생 수는 몇 명인가요?");
let 합격자_수 = 0;
응시자_수 = Number(응시자_수); // 문자 -> 숫자형으로 변형

//무한 루프에 빠지면 안된다.
let 응시자_순번 = 1;
while (응시자_순번 <= 응시자_수) {
  let 응시자_점수 = prompt("응시자의 점수는 몇점입니까?");
  응시자_점수 = Number(응시자_점수);

  if (응시자_점수 >= 합격_기준_점수) {
    합격자_수 = 합격자_수 + 1;
  }
  응시자_순번 = 응시자_순번 + 1;
}
console.log(
  `총 응시자 ${응시자_수}명 중, 합격자는 ${합격자_수}명입니다. (합격률 = ${
    (합격자_수 / 응시자_수) * 100
  }%)`
);
*/
/*{
  // 시작
  const 합격_기준_점수 = 70;
  let 응시자_수 = prompt("시험에 응시한 학생 수는 몇 명인가요?");
  let 합격자_수 = 0;
  응시자_수 = Number(응시자_수); // 문자 → 숫자 형으로 변형

  // 무한 루프에 빠지면 안된다!!!
  let 응시자_순번 = 1;
  while (응시자_순번 <= 응시자_수) {
    let 응시자_점수 = prompt("응시자의 점수는? (0 ~ 100점)");

    if (응시자_점수 >= 합격_기준_점수) {
      합격자_수 = 합격자_수 + 1;
    }

    응시자_순번 = 응시자_순번 + 1;
  }

  console.log(
    `총 응시자 ${응시자_수}명 중, 합격자는 ${합격자_수}명입니다. (합격률 = ${
      (합격자_수 / 응시자_수) * 100
    }%)`
  );

  // 복합 구조
  // 끝
}*/

function setRandomInt() {
  return Math.floor(Math.random() * 10);
}
const 밑변 = setRandomInt() + 1;
console.log(`밑변 : ${밑변}`);
const 높이 = setRandomInt() + 1;
console.log(`높이: ${높이}`);

const 넓이 = (밑변, 높이) => 밑변 * 높이 * 0.5;
삼각형 = 넓이(밑변, 높이);
console.log(`넓이: ${삼각형}`);
