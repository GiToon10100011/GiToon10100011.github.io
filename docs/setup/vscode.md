---
layout: post
title: "VSCode"
date: 2025-02-09 21:34:00 +0900
categories: Coding
parent: Setups
---

# VSCode

> VSCode 초기설정 방법을 정리한 페이지.

# Extensions

- `Better Comments`: 주석을 더 보기 좋게 색상화하는 확장
- `Project Manager`: 프로젝트 관리를 쉽게 해주는 확장
- `VSCode Color`: 색상 피커와 편집기를 제공하는 확장
- `HTML End Tag Labels`: HTML 종료 태그에 레이블을 표시하는 확장
- `HTML Tag Wrap`: HTML 태그로 텍스트를 감싸주는 확장
- `GitLens`: Git 기능을 강화하는 확장
- `HTML CSS Support`: HTML과 CSS 지원 기능 강화
- `Original Obsidian Theme`: Obsidian 테마
- `Fira Code Nerd Font`: Fira Code Nerd 폰트 지원
- `Prettier`: 코드 포맷터
- `Figma`: Figma 통합 기능
- `Auto Close Tag`: HTML/XML 태그 자동 닫기
- `Auto Rename Tag`: HTML/XML 태그 자동 이름 변경
- `Code Runner`: 코드 실행기
- `GitHub Theme`: GitHub 테마
- `Live Sass`: SASS 실시간 컴파일러
- `Turbo JS`: JavaScript 성능 최적화 도구
- `FontAwesome Autocomplete`: Font Awesome 자동완성
- `Better C++ Syntax`: C++ 구문 강조 개선
- `Auto Filename`: 파일 이름 자동완성
- `Peacock`: 워크스페이스 색상 테마 관리
- `Python Indent`: Python 들여쓰기 지원
- `Gutter Preview`: 이미지 미리보기
- `LeetCode`: LeetCode 문제 풀이 지원
- `Noctis Theme`: Noctis 테마
- `Monokai Pro`: Monokai Pro 테마
- `Docker`: Docker 통합 도구
- `Korean Language Pack`: 한국어 언어 팩
- `PowerShell`: PowerShell 개발 도구
- `Color Highlight`: 색상 코드 하이라이트
- `Obsidian Theme`: Obsidian 테마
- `Indent Rainbow`: 들여쓰기 레인보우 효과
- `GraphQL`: GraphQL 지원
- `Material Icon Theme`: Material 아이콘 테마
- `Live Server`: 실시간 서버
- `Synthwave Theme`: Synthwave 테마
- `React/JS Snippets`: React/JS 코드 스니펫
- `Obsidian Theme`: Obsidian 테마
- `Fira Code`: Fira Code 폰트 지원
- `Background`: VSCode 배경 이미지 설정
- `HTML to CSS Autocompletion`: HTML to CSS 자동완성
- `Auto Import`: 자동 임포트
- `Styled Components`: styled-components 지원
- `FontAwesome Gallery`: Font Awesome 갤러리
- `PDF Viewer`: PDF 뷰어
- `Error Lens`: 인라인 에러 표시
- `IntelliCode Examples`: IntelliCode API 사용 예제
- `IntelliCode`: IntelliCode AI 지원
- `Colonize`: 세미콜론 자동 추가
- `Styled Variables`: styled-components 전역 변수 자동완성
- `Material Theme`: Material 테마

# Settings

VSCode의 주요 설정:

1. Enable Preview 기능 비활성화
2. Tab Size를 2로 설정 (업계 표준)
3. Word Wrap 활성화 - 긴 줄 자동 줄바꿈
4. Mouse Wheel Zoom 활성화 - 마우스 휠로 확대/축소 가능
5. Auto Save 설정
   - After Delay로 설정
   - Delay 값을 500ms로 지정
6. Emmet 설정
   - Variables에 lang:ko 추가하여 한국어 지원

아니면 아래의 json파일을 settings.json에 추가하면 된다.

```json
{
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "workbench.colorTheme": "GitHub Dark Dimmed",
  "workbench.iconTheme": "material-icon-theme",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.mouseWheelZoom": true,
  "files.autoSaveDelay": 500,
  "files.autoSave": "afterDelay",
  "liveServer.settings.fullReload": true,
  "liveServer.settings.donotVerifyTags": true,
  "emmet.variables": {
    "lang": "ko"
  },
  "editor.rename.enablePreview": false,
  "workbench.editor.enablePreview": false,
  "liveSassCompile.settings.generateMap": false,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.bracketPairColorization.enabled": false,
  "workbench.sideBar.location": "right",
  "liveSassCompile.settings.showOutputWindowOn": "Error",
  "background.useDefault": false,
  "background.customImages": [".png", ".png", ".png"],
  "background.style": {
    "images": [],
    "background-size": "cover",
    "background-position": "center",
    "opacity": 0.1
  },
  "background.fullscreen": {
    "images": [],
    "opacity": 0.1,
    "size": "cover",
    "position": "center",
    "interval": 0
  },
  "background.enabled": false,
  "editor.tabCompletion": "on",
  "emmet.excludeLanguages": ["javascript"],
  "emmet.includeLanguages": {
    "markdown": "html",
    "javascript": "javascriptreact"
  },
  "[markdown]": {
    "editor.wordWrap": "on",
    "editor.quickSuggestions": {
      "comments": "on",
      "strings": "on",
      "other": "on"
    }
  },
  "emmet.showSuggestionsAsSnippets": true,
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "diffEditor.codeLens": true,
  "tabnine.experimentalAutoImports": true,
  "code-runner.executorMap": {
    "javascript": "node",
    "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
    "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "zig": "zig run",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "php": "php",
    "python": "python -u",
    "perl": "perl",
    "perl6": "perl6",
    "ruby": "ruby",
    "go": "go run",
    "lua": "lua",
    "groovy": "groovy",
    "powershell": "powershell -ExecutionPolicy ByPass -File",
    "bat": "cmd /c",
    "shellscript": "bash",
    "fsharp": "fsi",
    "csharp": "scriptcs",
    "vbscript": "cscript //Nologo",
    "typescript": "tsx",
    "coffeescript": "coffee",
    "scala": "scala",
    "swift": "swift",
    "julia": "julia",
    "crystal": "crystal",
    "ocaml": "ocaml",
    "r": "Rscript",
    "applescript": "osascript",
    "clojure": "lein exec",
    "haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
    "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
    "racket": "racket",
    "scheme": "csi -script",
    "ahk": "autohotkey",
    "autoit": "autoit3",
    "dart": "dart",
    "pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
    "d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
    "haskell": "runghc",
    "nim": "nim compile --verbosity:0 --hints:off --run",
    "lisp": "sbcl --script",
    "kit": "kitc --run",
    "v": "v run",
    "sass": "sass --style expanded",
    "scss": "scss --style expanded",
    "less": "cd $dir && lessc $fileName $fileNameWithoutExt.css",
    "FortranFreeForm": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran-modern": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran_fixed-form": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "sml": "cd $dir && sml $fileName",
    "mojo": "mojo run",
    "erlang": "escript",
    "spwn": "spwn build",
    "pkl": "cd $dir && pkl eval -f yaml $fileName -o $fileNameWithoutExt.yaml",
    "gleam": "gleam run -m $fileNameWithoutExt"
  },
  "explorer.confirmDelete": false,
  "workbench.settings.applyToAllProfiles": ["editor.fontFamily"],
  "udb.miDebuggerPathOverride": "/Users/tylerjon/Library/Application Support/Cursor/User/globalStorage/undo.udb/UDB-Individual-Evaluation/udb",
  "udb.showGettingStartedOnActivation": false,
  "explorer.confirmDragAndDrop": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

# Keybindings

`alt`를 누른 채로 클릭을 하면 커서를 여러개 놓을 수 있다.
`alt+shift+up/down`을 누르면 커서가 위치해있는 줄이 윗줄/아랫줄로 복사된다.
`alt+up/down`을 누르면 커서가 위치해있는 줄이 윗줄/아랫줄로 이동한다.



