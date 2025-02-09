---
layout: home-with-toc
title: "HTML"
date: 2024-09-07 17:33:43 +0900
categories: etc
has_children: true
---

# HTML

> 마크업 언어로, 태그를 사용하는 언어이다.

html 태그는 &lt;태그 이름&gt;태그를 적용할 내용&lt;/태그이름&gt;과 같은 문법으로 사용한다. `<div></div>` 앞은 열리는 태그, 뒤는 닫히는 태그라고 불린다. 각 태그는 고유 <span style="color: yellowgreen">속성</span>을 지니고 있으며 속성은 태그 이름 뒤에 `속성 이름 = "속성 값" `형태로 사용한다.

## 태그의 종류

태그는 <span style="color: yellowgreen">홑태그</span>와 <span style="color: yellowgreen">쌍태그</span>로 나뉜다. 홑태그는 태그 이름 뒤에 속성을 붙이지 않는 태그이다. 쌍태그는 태그 이름 뒤에 속성을 붙이는 태그이다.

홑태그는 `hr, br, img, input, meta, link, audio, video` 등이 있다. html5 이후로 홑태그는 단축 끝태그도 안써도 되게 되어 기존의 `<br/>`이 아닌 `<br>`과 같은 형태로 사용할 수 있게 됐다.

또한 차지하는 공간에 따라 크게 <span style="color: red" id="inline&block"><b>블록태그</b></span>와 <span style="color: red"><b>인라인 태그</b></span>로 나뉜다. 블록태그는 차지하는 공간이 한줄이며, 인라인태그는 차지하는 공간이 해당 요소의 크기만큼 차지한다. 대표적인 예시로 `div, p`는 블록태그이고, `a, span`은 인라인 태그이다.

<span style="color: violet">세부적으로 분류</span>해보자면 다음처럼 분류할 수 있다.

- 텍스트 태그 - `h1~h6(heading), p(paragraph), br(line break), hr(horizontal rule), span` 등이 있다.

- 앵커 태그 - `a`태그는 <span style="color: yellowgreen">href(hyper reference) 속성</span>을 사용해 링크를 지정한다. 이때, <span style="color: red">절대경로와 상대경로</span>를 잘 구분해야한다.

  > 페이지 내의 특정 지점으로 이동하기 위해서는 <span style="color: yellowgreen">아이디 경로</span>를 사용한다. 아이디 경로는 특정 글자를 눌렀을때 그 곳으로 이동시켜준다. `<a href="#id"></a>`라면 `<div id="id">`이 있어야 한다. #top이나 #을 넣으면 페이지 최상단으로 이동시켜준다.

  > <span style="color: yellowgreen">target속성</span>을 통해 링크를 열 때 새로운 창을 열지 아니면 현재 창에서 열지를 지정할 수 있다. `target="_blank"`는 새로운 창을 열어주고, `target="_self"`는 현재 창에서 열어준다. (기본값은 `_self`)

- 글자 모양 태그 - `strong, b(bold), em, i(italic), u(underline), small, sub(아래첨자), sup(위첨자), ins(밑줄), del(취소선)` 등이 있다. 글자 모양 태그 내부에 블록태그는 넣을 수 없다. 이는 웹 표준에 위반되는 것이므로 주의해야한다. 태그는 아니지만 `&nbsp;` 공백문자를 의미하는 HTML엔티티가 존재한다.

- 미디어 태그 - 자세한건 [여기를](/docs/html/mediaTags.html)를 참고하자.

- 목록 태그 - `ul(unordered list), ol(ordered list), dl(definition list), li(list item)`등이 있다.

  > 순서가 없는 목록인 ul태그는 목록 앞에 <span style="color: yellowgreen">불릿</span>이 찍히고 네비게이션 바에 주로 사용된다. 순서가 있는 목록인 ol태그는 목록 앞에 순서를 의미하는 숫자가 찍힌다. dl태그는 정의 목록을 나타내며, 사전처럼 설명하는 목록에 사용된다.

  > 이러한 목록태그들에는 `list-style, list-style-position` 등의 자체 스타일 속성이 존재한다. list-style은 불릿의 모양을 지정해주는 속성이며 주로 none을 사용하여 불릿을 없애는 경우가 많다. list-style-position은 불릿의 위치를 지정해주는 속성이다. 불릿을 없애는 경우애는 자동적으로 들여쓰기가 적용되어 이를 없애기 위해 padding-left 속성을 0으로 줘서 사용하기도 한다.

  > dl태그는 dt(definition term)태그와 dd(definition description)태그를 사용해 사전처럼 사용된다. dt태그는 정의되는 용어를 지정하고, dd태그는 용어에 대한 설명을 지정한다.

- 표 태그 - `table, tr(table row), td(table data), th(table header)` table은 표를 삽입하는 태그이고, tr은 표의 행을 삽입하는 태그이며, td는 표의 셀을 삽입하는 태그이다.

  > <span style="color: red">table은 왼쪽에서 오른쪽으로 데이터가 삽입</span>되며, <span style="color: red">다음 행으로 넘어갈 때 tr</span>을 사용하면 된다.

  > table태그에는 테두리의 두께를 지정해주는 border 속성이 존재한다. th, tr, td에는 align속성으로 글자 정렬을 지정해줄 수 있으며, th와 td는 colspan, rowspan과 같이 셀의 너비와 높이를 지정해 병합시켜주는 속성이 존재한다. rowspan은 원래 가로지만 세로로 병합이 되며, colspan 또한 원래 세로지만 가로로 병합이 된다.

  > table태그에는 border속성으로 border를 줄수도 있지만, <span style="color: yellowgreen;">border-collapse 속성</span>을 사용해 테두리를 합칠 수도 있다. collapse값을 주면 테두리를 합치고, separate값을 주면 테두리를 따로 둔다.

  > <span id="tabledesc" style="color: yellowgreen;">thead, tbody, tfoot</span>은 원래 생략해도 되지만 표의 구조를 명확하게 하기 위해 사용한다.

- 시맨틱 태그 - `header, footer, section, article, aside, nav, main, figure, figcaption`등이 있다. 시맨틱 태그는 태그 자체가 의미를 가지고 있는 태그이다. 예를 들어 header태그는 헤더를 의미하며, footer태그는 푸터를 의미한다. <span style="color: red">이러한 태그들은 웹 페이지의 구조를 명확하게 하기 위해 사용</span>된다.
  `header` | form태그를 활용해 검색 창을 넣거나, nav태그를 사용해 사이트 메뉴를 넣어 주로 페이지 맨 위쪽에 삽입됨.

  `nav` | 메뉴를 지정해주는 태그이다. 같은 사이트 안의 문서나 다른 사이트의 문서로 연결하는 링크를 나타내며, footer에 있는 사이트맵 등에서도 주로 사용되기도 함.

  `main` | 문서의 주요 내용을 지정하는 태그이다. 주로 문서의 내용을 구분하기 위해 사용된다.

  `section` | 주로 문서에서 주제별로 콘텐츠를 묶을 때 사용된다.

  `article` | 주로 section내에 웹 상의 본문 내용이 들어간다.

  `aside` | 주로 문서의 본문 외에 삽입되는 내용이 들어간다. 주로 광고나 링크 등이 들어간다.

  `footer` | 제작자의 연락처 정보 / 저작권 정보를 표시하며, 페이지 맨 아래쪽에 삽입됨.

  `address` | 주로 문서에서 제작자의 연락처 정보를 지정할 때 사용된다.

  `figure` | 주로 문서에서 이미지나 동영상 등을 삽입할 때 사용된다. figure태그 내에 미디어 태그를 넣는 형식으로 사용한다.

  `figcaption` | 주로 문서에서 이미지나 동영상 등의 설명을 지정할 때 사용된다.

---

## 입력 양식 태그

입력 양식 태그는 사용자가 입력한 데이터를 서버로 전송하기 위해 사용된다. 각 태그들을 자세히 알아보자.

- input 태그 - input태그는 다양한 유형이 존재한다. 이러한 유형은 type속성으로 지정하여 사용한다. 대표적인 유형으로 `text, password, number, email, tel, search, date, time, datetime-local, month, week, url, color`등이 있다.

  > input태그에는 <span style="color: yellowgreen">name속성</span>과 <span style="color: yellowgreen">value속성</span>이 존재하는데, name속성은 입력 양식의 이름을 지정하는 속성이며 서버로 전송할 때 사용된다. value속성은 입력 양식의 값을 지정하는 속성이다. text같은 경우에는 사용자가 직접 입력하기 때문에, value가 추가적으로 필요하지 않다.

  > `type이 submit || reset || button`일 경우 value속성은 버튼에 표시되는 글자를 지정해줄 수 있다. 자세한 type 속성에 대한 것은 [input 태그](/docs/html/inputTags.html)를 참고하자.

  > <span style="color: red">checkbox나 radio는 반드시 같은 name속성</span>을 가져야 한다. 같은 이름을 가진 입력 양식들은 하나의 그룹으로 묶이기 때문이다. 이때문에 다른 input타입은 name이 같아서는 안된다.

  > name속성은 앞서 말했듯이 서버로 값을 보낼때 지정되는 이름이므로, 사용자에게 보여져서는 안되는 데이터를 서버로 전송할때 사용되는 `hidden` type의 input태그에서 name속성이 유용하게 사용된다. 접속일시, 회원가입일시, 상태값을 전송할때 hidden이 사용된다.

- label 태그 - 입력 양식의 이름을 지정하는 태그이다. `<label for="id">이름</label><input type="text" id="id" name="name">`와 같은 형식으로 사용한다. label태그는 클릭 시 해당 input 입력 양식이 포커싱되는 기능을 가지고 있다. <span style="color: red">for속성으로 연결된 input태그의 id속성을 지정해줘야 한다.</span>

- form 태그 - 대다수의 input태그들이 이 form태그 내에서 사용된다. `<form><input type = "text" name = "search"></form>`과 같은 형식으로 사용하며, <span style="color: yellowgreen">method속성</span>을 통해 데이터 전송방식을 알 수 있는데, <span style="color: red">GET, POST, PUT, DELETE</span> 등이 존재한다.

  > GET방식은 값을 가져오는 것으로, 흔히 검색창에 무엇을 검색할 때 `www.naver.com?search=eoisvh9w834` 과 같은 식으로 주소에 데이터를 직접 입력해 전달해준다. 이 때문에 보안에 상당히 취약하다. 따라서 회원가입, 금융정보, 주소 등등과 같은 정보를 입력할 때는 서버에 값을 입력하는 POST방식을 사용한다. <span style="color: #aaa">(유저의 credentials를 드러나게하면 안됨.)</span> GET과 POST, 그리고 기타 방식에 관한 내용은 [REST API](/docs/etc/restAPI.html)를 다룰때 더 자세히 알아보자.

- select 태그 - 선택 양식을 삽입하는 태그이다. `<select><option value="1">1</option><option value="2">2</option></select>`와 같은 형식으로 사용하며, 다중 선택을 원할 경우 `multiple`속성을 사용할 수 있다. 선택 옵션은 option태그를 사용해 삽입한다. 옵션들을 그룹으로 묶기 위해서는 `<optgroup label="그룹이름">`과 같은 형식으로 사용할 수 있다.

- textarea 태그 - 여러줄의 텍스트를 입력할 수 있는 태그이다. `<textarea cols="30" rows="10"></textarea>`와 같은 형식으로 사용하며, cols와 rows는 텍스트 영역의 너비와 높이를 지정해준다.

- fieldset 태그 - 여러 입력 양식을 그룹으로 묶는 태그이다. `<fieldset><legend>그룹이름</legend><input type="text" name="name"><input type="text" name="name"></fieldset>`와 같은 형식으로 사용한다. `legend`태그는 그룹의 이름을 지정해주는 태그이다.

- button 태그 - 버튼을 삽입하는 태그이다. `<button>전송</button>`와 같은 형식으로 사용한다.

---

## 보일러 플레이트

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 본문내용 -->
  </body>
</html>
```

해당 코드는 모든 html 파일의 기본 형태이다. 이러한 형태를 보일러 플레이트(boilerplate)라고 한다.

1. `<!DOCTYPE html>`: 현재 document의 형식이 HTML5 문서임을 선언
2. `<html lang="ko">`: 문서의 루트 요소, lang 속성으로 언어 지정(ko=한국어). <span style="color: #aaa">만약, 쿠팡 같은 페이지가 lang이 en으로 설정되어 있다면 우리가 접속할때 번역 여부를 물어본다.</span>
3. `<head>`: 메타데이터 영역
   - `meta charset="UTF-8"`: 문자 인코딩 방식 지정
   - `meta viewport`: 반응형 웹을 위한 뷰포트 설정, content 속성으로 뷰포트의 너비와 초기 확대 배율을 지정한다.
   - `title`: 브라우저 탭에 표시되는 제목 <span style="color: #aaa"><del>(현재 페이지의 title은 HTML | 툰로그)</del></span>
4. `<body>`: 실제 화면에 표시되는 콘텐츠 영역
5. 주석 `<!-- 본문내용 -->`: 개발자용 설명문 (화면에 표시되지 않음)

보일러플레이트 형식 외에 html의 head태그 내에 다양한 태그들이 있는데, 하나씩 알아보자.

- `meta` - 메타데이터 지정, 오픈그래프 등과 같은 메타데이터를 지정할 때도 사용한다.
- `link` - 외부 리소스 연결, rel(relation) 속성으로 리소스의 종류를 지정한다.
- `script` - [자바스크립트](/docs/javascript/index.html) 추가
- `style` - [CSS](/docs/css/index.html) 추가

## 스타일시트

스타일시트는 크게 인라인, 내부, 외부 방식이 있다.

- 인라인 방식 - 태그 내에 style 속성을 사용하는 방식

  ```html
  <p style="color: red;">텍스트</p>
  ```

- 내부 방식 - head태그 내에 style태그를 사용하는 방식

  ```html
  <head>
    <style>
      body {
        background-color: #f0f0f0;
      }
    </style>
  </head>
  ```

- 외부 방식 - 외부 파일을 불러와 사용하는 방식

외부 스타일시트는 스타일 시트를 별도로 생성해서 link태그의 href 속성을 사용해 불러오는 것으로, [CSS](/docs/css/index.html) 파일을 별도로 생성해서 사용하는 것이 일반적이다.

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

## 스크립트

스크립트 또한 스타일시트와 마찬가지로 인라인, 내부, 외부 방식이 있다.

- 인라인 방식 - 태그 내에 script 속성을 사용하는 방식, [on 이벤트 핸들러](/docs/javascript/index.html) 들을 사용할 수 있다.
- 내부 방식 - head태그 내에 script 태그를 사용하는 방식
- 외부 방식 - 외부 파일을 불러와 사용하는 방식

외부 스크립트는 스크립트를 별도로 생성해서 script태그의 src 속성을 사용해 불러오는 것으로, [Javascript](/docs/javascript/index.html) 파일을 별도로 생성해서 사용하는 것이 일반적이다.

```html
<script src="script.js"></script>
```
