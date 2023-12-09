/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};
const emailInput = document.querySelector("#userEmail");
const passwordInput = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

// 이메일 벨리데이션 정규 표현식 함수
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// 패스워드 밸리데이션 정규표현식 함수
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

//이메일 밸리데이션 - 만약에 emailInput에 입력한 값이 emailReg()에 들어가서 true 라면, 통과, 아니면 fail
function emailHandleInput() {
  if (emailReg(emailInput.value)) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
}

emailInput.addEventListener("input", emailHandleInput);

// 패스워드 밸리데이션
function passwordHandleInput() {
  if (pwReg(passwordInput.value)) {
    passwordInput.classList.remove("is--invalid");
  } else {
    passwordInput.classList.add("is--invalid");
  }
}

passwordInput.addEventListener("input", passwordHandleInput);

// 웰컴페이지 이동 함수
function enterWelcomePage() {
  window.location.href = "welcome.html";
}

//아이디 비밀번호 일치 시 웰컴 페이지 이동
function handleLoginButton(e) {
  e.preventDefault();
  if (emailInput.value === user.id && passwordInput.value === user.pw) {
    enterWelcomePage();
  } else {
    alert("이메일과 패스워드를 다시 확인해주세요.");
    location.reload(true);
  }
}

loginButton.addEventListener("click", handleLoginButton);
