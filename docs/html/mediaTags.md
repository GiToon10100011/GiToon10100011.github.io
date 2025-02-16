---
layout: post-with-comments
title: 미디어 태그
date: 2024-05-27 17:31:00 +0900
categories: etc
parent: HTML
---

# 미디어

html4까지는 웹에서 멀티미디어를 직접 재생할 수 없어 플러그인 프로그램을 연결해서 사용했는데 html5 웹 표준 이후에는 웹 브라우저에서 직접 멀티미디어를 재생할 수 있게 됐으며 크롬, ms 엣지 등에서는 플래시 플레이어를 차단시키는 기능도 등장했다. 이러한 이유로 미디어 태그는 웹 표준에 맞추어 사용되어야 한다.

html5에 와서는 멀티미디어 웹 표준화가 이루어져 플러그인 프로그램 없이 웹 브라우저 자체에서 멀티미디어 재생이 가능해졌으나, 브라우저마다 재생할 수 있는 멀티미디어 파일 종류가 달라 여러 종류의 파일 형식을 지정해줘야 한다.

<span style="color: yellowgreen">src 속성</span>을 사용해 미디어 파일을 지정하며, `img, audio, video, iframe` 등이 있다.

참고로 컴퓨터 로컬 스토리지에 저장된 미디어파일 뿐만아니라 파일 호스팅 url또한 사용할 수 있다. 이를 활용하여 닷홈으로 도메인 무료 호스팅, filezilla나 다른 FTP 프로그램을 찾아서 연결하면 파일 업로드 후 웹 브라우저에서 직접 미디어 파일을 재생할 수 있다.

<del style="color: #aaa;">웹사이트의 경우, 호스팅 시 css, js 등 html파일과 함께 올려야 제대로 작동한다. </del>

---

## img 태그

img 태그는 외부 파일을 불러와 사용하는 것이 일반적이다. `<img src="image.jpg" alt="이미지 설명">`와 같은 형태로 사용되며 <span style="color: yellowgreen">alt속성</span>은 이미지를 불러올 수 없을때 대체 텍스트를 의미한다. <span style="color: #aaa">(청각장애인들을 위해서기도 함)</span>

img태그와 video태그 둘다 width와 height속성을 사용해 너비와 높이를 조절할 수 있다.

---

## audio & video 태그

audio 태그는 오디오 파일을 재생하는 태그이다. `<audio src="audio.mp3" controls></audio>`와 같은 형태로 사용된다.
video 태그는 비디오 파일을 재생하는 태그이다. `<video src="video.mp4" controls></video>`와 같은 형태로 사용된다.

video태그에는 동영상이 플레이되기 전 사용자에게 보여질 썸네일을 지정해주는 <span style="color: yellowgreen">poster속성</span> 또한 존재한다.

두 태그 모두 `preload(페이지가 로드될 때 비디오파일이 같이 로드할 것인가의 여부), autoplay, loop, muted, controls`와 같은 속성들이 존재한다.

<del style="color: #aaa;"> audio나 video태그는 실제로는 실무에서 많이 안쓰인다고 한다. imdb가 올라가고, 트래픽에 따라 부가되는 서버 임대료가 커지기 때문이다. 대신 비디오 파일을 썸네일로 사용하는 방법을 사용한다.
</del>

---

## source 태그

미디어 태그는 정석으로 사용하기 위해서는 src속성이 아닌 <span style="color: red">미디어 태그 내에서 source태그를 사용</span>하여 type속성으로 확장자를 지정하는 것이 좋다.

<span style="color: #aaa;"> type은 video/ogg, video/mp4, video/webm과 같이 형식을 지정해주면 된다. </span>

```html
<audio muted>
  <source src="Kalimba.mp3" type="audio/mp3" />
</audio>
```

또한 source 태그에는 이말고도 codecs속성을 사용해 코덱을 지정할 수 있다.

- 코덱 - 오디오 파일을 압축하고 압축을 푸는 기술(인코더+디코더)
- 인코딩 - 원본 파일을 컴퓨터 파일로 받아올 수 있도록 해주는 프로세스
- 디코딩 - 컴퓨터에서 플레이어로 불러올 수 있도록 원본 파일로 변환하는 프로세스

코덱 중 H.264는 MP4, V9코덱은 WEBM 파일을 지원하며, V9 코덱이 무료면서 화질, 용량 확보에 유리하여 최근 브라우저에서는 대부분 V9 코덱을 사용한다.

```html
<video src="video.mp4" controls>
  <source src="video.webm" type="video/webm" codecs="vp9" />
</video>
```

✅ 이미지와 비디오 태그의 비율을 유지하여 화면에 표시하기

<span id="object-fit"></span>

```css
.video {
  object-fit: cover;
}
.img {
  object-fit: cover;
}
```

`object-fit` 이라는 스타일 속성을 이용해 [background-size](/docs/css/backgroundStyles.html#background-size)와 같은 효과를 낼 수 있다.

---

## track 태그

track 태그는 비디오 파일에 자막을 지정할 때 사용된다. `<track src="subtitles.vtt" kind="subtitles" srclang="ko" label="한국어">`와 같은 형태로 사용된다.

`.vtt(Video Text Track)`라는 확장자는 모든 브라우저에서 공식적으로 지원하는 자막 파일 형식으로, 자막 정보와 시간 정보를 함께 담고 있다.

track태그의 속성들을 살펴보면 다음과 같다.

- `kind` - 자막 타입(subtitles, captions, descriptions, chapters, metadata)
- `srclang` - 자막 언어
- `label` - 자막 이름, 자막이 여러개일 경우 자막을 식별하기 위한 제목
- `captions` - 캡션(청각장애인들을 위한 자막)
- `descriptions` - 비디오 컨텐츠에 관한 설명, 화면에는 표시되지 않음.
- `chapters` - 챕터, 비디오 탐색을 위한 창 제목, 화면에는 표시되지 않음.
- `metadata` - 메타데이터, 비디오 파일에 대한 정보, 화면에는 표시되지 않음.
- `default` - 자막 기본 설정, 자막이 여러개일 경우 기본 자막을 해당 속성을 통해 설정

---

## iframe 태그

> iframe태그는 외부 문서를 사용할 때 사용된다. `<iframe src="https://www.google.com"></iframe>`와 같은 형태로 사용된다.
