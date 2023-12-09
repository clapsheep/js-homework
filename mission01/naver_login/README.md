# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

# 과제수행일지

## 과제포인트

1. email 정규표현식을 사용한 validation

- [x] 사용자가 작성한 이메일이 이메일 형식이 맞는지 정규표현식을 사용하여 validation

2. pw 정규표현식을 사용한 validation

- [x] 사용자가 작성한 비밀번호가 제시된 조건(특수문자를 포함한 6자리 이상)에 맞는지 정규표현식을 사용한 validation

3. 상태 변수 관리

- [x] DOM을 조작하여 사용자가 위의 1, 2번 각각 조건에 부합되지 않게 작성했을 시 `in-vaild` 클래스를 추가, 조건에 부합할 시 제거

4. 로그인 버튼을 클릭시 조건처리

- [x] 사용자가 입력한 이메일과 패스워드가 설정된 이메일과 패스워드와 일치할 시, WelcomePage로 이동, 일치하지 않을 시 경고창과 함께 Page Reload

## 과제풀이과정

### 변수선언

- 사용자가 입력한 email에 접근

```
const emailInput = document.querySelector("#userEmail");
```

- 사용자가 입력한 pw에 접근

```
const passwordInput = document.querySelector("#userPassword");
```

-> 해당 대상에 접근 후 값을 가져오려면 `.value`를 붙여야 함

- 로그인 버튼에 접근

```
const loginButton = document.querySelector(".btn-login");
```

---

### 함수선언

- vaildation 함수

```
function emailHandleInput(e) {
  if (emailReg(emailInput.value)) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
}
```

-> 같은 방식으로 패스워드도 만듬

---

- 웰컴페이지 이동 함수

```
function enterWelcomePage() {
  window.location.href = "welcome.html";
}
```

---

- vaildation 성공 시 로그인버튼을 통한 웰컴페이지 이동 함수

```
function handleLoginButton(e) {
  e.preventDefault();
  if (emailInput.value === user.id && passwordInput.value === user.pw) {
    enterWelcomePage();
  } else {
    alert("이메일과 패스워드를 다시 확인해주세요.");
    location.reload(true);
  }
}
```

-> `e.preventDefault`로 기존 HTML 태그가 가진 기능을 상실시켜야 제대로 작동

-> `location.reload(true);`로 페이지 리로드

---

### 실행부

- vaildation 함수 실행

```
emailInput.addEventListener("input", emailHandleInput);
```

---

- 로그인 버튼 동작 함수 실행

```
loginButton.addEventListener("click", handleLoginButton);
```
