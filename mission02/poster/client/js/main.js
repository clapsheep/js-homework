/* -------------------------------------------------------------------------- */
/*                                   유틸함수 정의                                  */
/* -------------------------------------------------------------------------- */

// DOM 노드를 가져오는 함수
function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자타입이어야합니다.");
  }
  return document.querySelector(node);
}

function getNodes(node) {
  if (typeof node !== "string") {
    throw new Error("getNodes 함수의 인수는 문자타입이어야합니다.");
  }
  return document.querySelectorAll(node);
}
// DOM 속성값을 가져오는 함수
function getAttr(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof node !== "string") {
    throw new TypeError("setAttr 함수의 두번째 인수는 문자타입이어야 합니다.");
  }
  if (!node[prop] && prop !== "class" && prop !== "title") {
    node.dataset[prop] = value;
    return;
  }
  node.setAttribute(prop.value);
}

function attr(node, prop, value) {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

/* class -------------------------------------------------------------------- */

function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") {
    throw new TypeError(
      "addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (!className) {
    node.className = "";
    return;
  }
  if (typeof className !== "string") {
    throw new TypeError(
      "removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }
  node.classList.remove(className);
}

const toggleClass = (node, className) => {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") {
    throw new TypeError(
      "toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  return node.classList.toggle(className);
};

/* css ---------------------------------------------------------------------- */

function setCss(node, prop, value) {
  if (typeof node === "string") node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      "setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }

  if (!value)
    throw new SyntaxError("setCss 함수의 세 번째 인수는 필수값 입니다.");

  node.style[prop] = value;
}

function getCss(node, prop) {
  if (typeof node === "string") node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      "getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }

  return getComputedStyle(node).getPropertyValue(prop);
}

const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = getNode("nav > ul");
const visualImage = getNode(".visual img");
const root = "./assets/audio/";

const audioPlay = [
  `${root}ember.m4a`,
  `${root}wade.m4a`,
  `${root}clod.m4a`,
  `${root}gale.m4a`,
].map((item) => {
  return new AudioPlayer(item);
});
console.log(audioPlay);

function handleClick(e) {
  e.preventDefault();

  let target = e.target;
  let li = target.closest("li");

  // 이미지 클릭 상태 활성화
  const navList = Array.from(navigation.children);

  navList.forEach((li) => {
    removeClass(li, "is-active");
  });

  if (!li) return;
  addClass(li, "is-active");

  // visual Image 변환
  let clickImageSrc = getAttr(target, "src");
  let clickImageAlt = getAttr(target, "alt");
  if (!clickImageAlt || !clickImageSrc) return;
  visualImage.src = clickImageSrc;
  visualImage.alt = clickImageAlt;

  // 이름변경
  let imgName = getNode(".nickName");
  let index = li.dataset.index;
  imgName.innerText = data[index - 1].name;

  //body background color 변경
  let bgColor = data[index - 1].color;
  let colorA = bgColor[0];
  let colorB = bgColor[1];
  if (!colorB) {
    colorB = "#000";
  }
  let bodyNode = getNode("body");
  setCss(
    bodyNode,
    "background",
    `linear-gradient(to bottom, ${colorA},${colorB})`
  );

  // 오디오재생

  audioPlay[index - 1].play();
  // 어케 멈추는거임 ㅠ
}

navigation.addEventListener("click", handleClick);
