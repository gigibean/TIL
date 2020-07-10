# DOM 요소 - 4

## 하위 노드가 있는지 점검
hasChildNodes() 메서드는 지정된 녿에 자식 녿가 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다.
node.hasChildNodes()
boolean 값을 리턴합니다.

<br/>

## 노드 클래스
classList 속성은 요소의 클래스 이름을 DOMTokenList 객체로 반환합니다.
element.classList
DOMTokenList 를 반환합니다.
DOMTokenList는 DOM 속성을 구분 짓는 하나의 리스트 형식입니다.    
배열 모양의 객체이며 목록에 인덱스를 만들어 개별 속성을 가져올 수 있습니다.

<br/>

## 노드 클래스 추가
요소에 하나 이상의 클래스를 추가합니다.
element.classList.add(class1, class2, ..)
반환되는 값이 없습니다.
```
var htmlLi = document.querySelector(".html");
htmlLi.classList.add("selected");
```

<br/>

## 노드 클래스 제거
요소에 하나 이상의 클래스를 제거합니다.
element.classList.remove(class1, class2,..)
반환되는 값은 없습니다.

<br/>

## 노드 클래스 여부 반환
요소에 지정된 클래스가 있는지 여부를 나타내는 부울 값을 반환합니다.

```
var htmlLi = document.querySelector(".html");
var bool. htmlLi.classList.contain("css");
console.log(bool);
```

<br/>

## 노드 클래스 추가, 제거 토글
요소의 클래스를 토글 형식으로 추가 제거합니다.
element.classList.toggle(class, true|false)
boolean 값이 리턴된니다.

<br/>
만일 지정된 클래스가 있다면, 지정된 클래스를 요소에서 제거하고 false를 반환합니다.   
반대로 지정된 클래스가 없다면 추가하고 true를 반환합니다.  
선택적인 두 번째 매개변수는 클래스가 이미 존재하는지 여부에 관계없이 클래스를 추가하거나 제거하도록 하는 부울입니다.

```
var htmlLI = document.querySelector(".html");
htmlLi.addEventListener("click", function(e) {
    var flag = e.target.clasList.toggle("selected");
    console.log("flag" + flag);
});
```
