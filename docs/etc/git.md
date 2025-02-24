---
layout: home-with-toc
title: "Git"
date: 2025-06-17 17:00:00 +0900
categories: Coding
parent: ETC.
---

# Git

> Git 명령어를 모아둔 페이지.

`git`을 로컬 컴퓨터에서 사용하기 위해서는 `git bash`를 설치해야한다.

`working directory - staging area - git repository` 순으로 데이터가 저장된다.

- `working directory` : 현재 작업하고 있는 로컬 컴퓨터 내 루트 디렉토리
- `staging area` : git에 커밋하기 전 단계로 커밋을 할 데이터를 모아두는 곳
- `git repository` : 실제 버전 관리를 하기 위해 커밋을 한 데이터들이 저장되는 곳

`github`은 나의 로컬 컴퓨터에 커밋된 데이터를 내가 아닌 협업 개발자들도 같이 공유해서 사용할 수 있도록 만들어진 `git`의 원격 저장소이다.

협업 프로젝트를 할 때는 레포지토리에 브랜치로 작업을 나누어 진행한다.

✅ bash에서는 명령어를 한꺼번에 사용하는 방법이 있다.

```bash
git add . && git commit -m "커밋 메시지" && git push origin main
```

파워쉘환경에서는 다음과 같이 작성한다.

```bash
git add .; git commit -m "커밋 메시지"; git push origin main
```

이러면 순차적으로 명령어를 한번에 실행할 수 있다.

---

## 레포지토리

레포지토리는 프로젝트의 저장소이다. 프로젝트의 모든 버전을 저장하고 관리한다.

로컬 공간과 Git의 레포지토리를 연결하기 위해서는 2가지 방법이 있다.

참고로, 레포지토리를 private으로 설정하면 흔히 말하는 잔디(commit)이 채워지지 않는다.

1. 초기화

```bash
git init
# 새로운 Git 저장소 초기화
git remote add origin <레포지토리 URL>
# 원격 저장소 연결
git remote -v
# 원격 저장소 연결 확인
git add .
# 모든 파일을 스테이징
git commit -m "커밋 메시지"
# 커밋 생성
git branch -M main
# 현재 브랜치를 main으로 이름 변경, -M은 -m을 force로 사용한 것과 같다. -m은 이름을 지정하는 것이다.
git push -u origin main
# 원격 저장소에 푸시
# -u (--set-upstream)는 로컬 브랜치와 원격 브랜치를 연결하여 추적 관계를 설정
# 이후 git push/pull 시 브랜치 지정 없이 사용 가능
```

아니면 다음의 빌트인 repo 추가 git 스크립트 사용

```bash
echo "# test123" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/GiToon10100011/test123.git
git push -u origin main
```

2. 복사

```bash
git clone (url)
```

아예 최초가 아니고 기존의 레포지토리를 로컬상으로 가져오고 싶다면 클론을 사용하면 된다.

보통 레포지토리에는 해당 저장소가 어떤 프로젝트인지 명시하는지 알 수 있도록 `readme.md` 파일을 제작한다.

## 명령어

```bash
git -v
```

위의 명령어를 통해 git의 버전을 확인할 수 있다(값이 나오냐 안나오냐에 따라 설치여부도 알 수 있다).

<h3 id="branch" class="hidden-header">branch</h3>

- `branch` - 레포지토리의 브랜치목록을 확인할 수 있다.

  ```bash
  git branch
  ```

  - `-r`를 붙이면 원격 브랜치를 확인할 수 있다.
  - `-a`를 붙이면 모든 브랜치를 확인할 수 있다.
  - `-d`를 붙이면 브랜치를 삭제할 수 있다.

    > ⚠️ 주의해야할 점은 일반 `git branch -d`를 사용하면 원격상에서 브랜치가 삭제되지 않는다. 원격상에서도 브랜치를 삭제하고 싶다면 `git push origin -d (브랜치 이름)`을 사용해야 한다.

    ```bash
    # 로컬상에서 브랜치 삭제
    git branch -d (브랜치 이름)
    # 원격상에서 브랜치 삭제
    git push origin -d (브랜치 이름)
    ```

<h3 id="status" class="hidden-header">status</h3>

- `status` - 현재 브랜치의 상태를 확인할 수 있다.

  ```bash
  git status
  ```

  - `-s`를 붙이면 간단한 상태를 확인할 수 있다.

  ```bash
  git status -s
  ```

<h3 id="commit" class="hidden-header">commit</h3>

- `commit` - 파일의 변경사항을 저장하는 작업이다.

  ```bash
  git commit -m "커밋 메시지"
  ```

  만약 바로 직전의 커밋 메시지를 수정하고 싶다면 다음과 같이 작성한다.

  ```bash
  git commit --amend -m "수정할 커밋 메시지"
  ```

  만약 이미 푸시한 커밋이었다면 amend를 사용하고 강제로 저장소에 푸시해야한다. `git push --force`

<h3 id="push" class="hidden-header">push</h3>

- `push` - 로컬상에서 일어난 변동사항을 원격 저장소에 업로드하는 작업이다.

  ```bash
  git push
  ```

  `git push`는 현재 브랜치의 변경사항을 연결된 원격 브랜치(upstream branch)에 푸시한다. 업스트림이란 로컬 브랜치와 원격 브랜치 간의 연결 관계를 의미한다.

  main 브랜치의 경우:

  - `git clone`으로 저장소를 복제할 때 자동으로 업스트림이 설정된다
  - `git init`으로 새 저장소를 만들 때는 첫 push 시 `-u` 옵션을 사용하는데, 이것이 바로 초기 설정 과정이다:
    ```bash
    git push -u origin main  # 저장소 초기화 시 사용했던 이 명령어가 업스트림을 설정한다
    ```

  새로운 브랜치를 만들 때는 수동으로 업스트림을 설정해야 한다:

  ```bash
  git push -u origin feature  # feature 브랜치의 업스트림을 origin/feature로 설정
  ```

  한번 업스트림을 설정하면 이후에는 `git push`만으로도 설정된 원격 브랜치로 푸시할 수 있다. 하지만 어느 브랜치로 푸시되는지 명시적이지 않을 수 있다.

  ```bash
  git push origin main
  ```

  `git push origin main`은 명시적으로 로컬의 main 브랜치를 원격의 main 브랜치로 푸시한다. 협업 시에는 이처럼 명시적인 방식을 사용하는 것이 실수를 방지할 수 있어 더 안전하다.

<h3 id="fetch" class="hidden-header">fetch</h3>

- `fetch` - 클라우드 공간에서 일어난 변동사항을 로컬상에 업데이트 해주는 작업이다.

  ```bash
  git fetch origin (브랜치 이름)
  ```

  ```bash
  # 모든 변동사항을 가져오기
  git fetch --all
  ```

<h3 id="pull" class="hidden-header">pull</h3>

- `pull` - 클라우드 공간에서 일어난 변동사항을 로컬상에 가져오는 작업이다.

  ```bash
  git pull origin main
  ```

<h3 id="checkout" class="hidden-header">checkout</h3>

- `checkout` - 브랜치로 이동 혹은 특정 커밋으로 이동하는 작업이다.

  ```bash
  git checkout (브랜치 이름)
  ```

  - 특정 커밋으로 이동하고 싶다면 커밋 해시를 사용하면 된다.

  ```bash
  git checkout (커밋 해시)
  ```

  ✅ checkout 명령어를 통해 특정 파일만을 현재 브랜치로 가져올 수도 있다.

  ```bash
  git checkout (가져올 파일이 있는 브랜치 이름) -- (파일 경로)
  ```

  사용 예시:

  ```bash
  git checkout feature-detail -- src/components/Detail.js src/components/List.js
  ```

  위의 명령어는 `feature-detail` 브랜치에서 `src/components/Detail.js`와 `src/components/List.js` 파일을 가져오는 명령어이다. 이처럼 파일을 여러개 가져올 수도 있다.

  이때, 주의해야할 점은 다른 팀원이 만든 새로운 브랜치를 처음으로 가져오거나 가져오고자 하는 브랜치가 로컬상에서 존재하지 않는 경우 오류가 발생한다. 이때는 다음과 같이 작성한다.

  ```bash
  git fetch
  git checkout -b feature-detail origin/feature-detail
  ```

  위의 명령어는 `feature-detail` 브랜치를 가져오는 명령어이다.

  이때, `origin/feature-detail`은 원격 저장소에 있는 `feature-detail` 브랜치를 의미한다.

<h3 id="branch-upload" class="hidden-header">브랜치 생성하기</h3>

- `checkout` 명령어에 `-b` 플래그를 붙이면 새로운 브랜치를 생성하고 이동할 수 있다.

  ```bash
  git checkout -b (브랜치 이름)
  ```

  브랜치를 분업할때 이름은 보통 `feature-"기능"`과 같은 형태의 제목으로 작성한다.

  이때, 로컬상에서 만든 브랜치를 원격 저장소에도 업데이트하기 위해서 다음과 같이 작성한다.

  ```bash
  git push origin -u (브랜치 이름)
  ```

  이때, `-u` 플래그는 `--set-upstream` 플래그로, 로컬 브랜치와 원격 브랜치를 연결하는 역할을 한다.

  ⭐️ 이보다 더 간단하게 브랜치를 생성하고 원격에 업로드하는 방법이 있다.

  ```bash
  git checkout -b (생성할 브랜치 이름)
  git push --set-upstream origin (생성할 브랜치 이름)
  ```

<h3 id="log" class="hidden-header">log</h3>

- `log` - 커밋 해시는 커밋 메시지 옆에 있는 해시 값으로, git log 명령어를 사용하면 확인할 수 있다.

  ```bash
  git log
  ```

<h3 id="reflog" class="hidden-header">reflog</h3>

- `reflog` - 커밋 히스토리를 확인할 수 있다.

  ```bash
  git reflog
  ```

<h3 id="merge" class="hidden-header">merge</h3>

- `merge` - 브랜치를 병합하는 작업이다.

  ```bash
  git merge (브랜치 이름)
  ```

  이때 주의해야할 점은, 병합을 진행하고자 하는 브랜치로 `checkout` 하고 병합을 진행해야 한다는 것이다.

  👉 예를 들어, `main` 브랜치에서 `feature` 브랜치를 병합하고 싶다면, `main` 브랜치로 `checkout` 하고 병합을 진행해야 한다.

<h3 id="reset" class="hidden-header" style>reset</h3>

- `reset` - 커밋 히스토리를 초기화하는 작업이다.

  ```bash
  git reset (커밋 해시)
  ```

<h3 id="diff" class="hidden-header" style>diff/h3>

- `diff` - 현재 브랜치와 다른 브랜치끼리의 차이점을 비교할 수 있다.

  ```bash
  git diff (브랜치 이름)
  ```

<h3 id="stash" class="hidden-header" style>stash</h3>

- `stash` - 작업 중인 내용을 임시로 저장하는 작업이다.

  ```bash
  git stash
  ```

  실수로 현재 작업중인 디렉토리와 원격상의 디렉토리가 달라 커밋이 맞지 않게 되면 `stash`를 통해 임시로 현재 내용을 저장하여 원격 저장소를 `pull`한 후 임시저장 해둔 내용을 다시 `apply` 할 수 있다.

  ```bash
  git stash apply
  ```

  또는, 임시저장한 내용을 삭제하고 싶다면 다음과 같이 작성한다.

  ```bash
  git stash pop
  ```

### ⚠️ 깃 폴더 지정 취소

```bash
rm -r .git
```

### 특정 파일 및 폴더를 레포지토리에서 삭제

```bash
git rm -r --cached -r (파일 이름 또는 폴더 이름)
```

---

## 커스텀 명령어 사용하기

```bash
git config --global alias.(커스텀 명령어 이름) (실제 실행될 명령어)
```

> bash는 alias를 사용하여 커스텀 명령어를 만들 수 있다. 

사용예시: 

```bash
git config --global alias.acp "git add . && git commit -m 'update' && git push origin main"
```

위와 같이 alias를 선언하고 이후에는 `git acp` 명령어를 사용하면 된다. 허나, 해당 명령어를 사용하게 되면 커밋 메시지를 오직 `update`로 설정해야한다. 

물론 사용할때 

```bash
git acp "커밋 메시지"; git push
```
위와 같이 사용하면 되긴 하지만, 아무래도 좀 불편하다. 

`git` 명령어는 기본적으로 매우 정적으로, 동적으로 사용하기 위해 `shell 스크립트`의 변수를 사용할 수 있다. 

```bash
git config --global alias.acp '!git add . && git commit -m "$1" && git push;'
```

위와 같이 작성하면 된다. 

⚠️ **주의사항**

1. `!`접두사를 반드시 추가해야 shell 명령어로 인식한다. 

2. 전체 명령어를 작은 따옴표로 감싸줘야한다. 

3. `shell 스크립트`이므로, 반드시 `&&`를 사용하여 명령어를 구분한다.

이때, shell 스크립트의 변수를 사용할때 명령어 뒤에 파라미터를 넣어서 사용한다.

```bash
git acp "커밋 메시지"
```

`$1`은 커스텀 명령어를 사용할때 첫번째 파라미터를 의미한다. 만약 복수의 파라미터를 사용하고 싶다면 `$2, $3 ...` 등과 같이 `$n`의 형태로 사용할 수 있다.

하지만, `git config --global`로 `alias`를 설정한다면, 다른 기기에서는 적용되지 않는다. 이러한 경우를 방지하기 위해서는 따로 `.gitconfig` 파일을 만들어 레포지토리에 업로드 하여 `alias` 사용을 용이하게 하자. 

```bash
# .gitconfig
[alias]
  acp = "!git add . && git commit -m "$1" && git push;"
```

위와 같이 작성하면 된다. 

이를 응용하여, git 명령어 뿐만 아니라, 커스텀 bash 스크립트를 제작하여 더 많은 기능을 사용할 수 있다. 

---

## 설정

```bash
git config --list
```

위의 명령어를 통해 현재 설정을 확인할 수 있다.

초기 설정

```bash
git config --global user.name "이름"
git config --global user.email "이메일"
```

컴퓨터에 Git 계정 초기 설정을 해두는 명령어이다.

`--global` 플래그를 통해 전역 설정을 할 수 있다. 전역 설정은 모든 레포지토리에 적용된다.

⚠️ 만일 다른 사람이 있다던가 데이터 리셋이 필요한 경우, <span style="color: violet;">관리자 모드</span>에서 다음과 같이 설정을 초기화할 수 있다.

```bash
git config --global --unset credential.helper
git config --system --unset credential.helper
```

<span style="color: yellowgreen;">일반모드</span>에서

```bash
git config --local --unset credential.helper
git config --unset --global user.name
git config --unset --global user.email
```

위의 명령어를 통해 설정을 초기화할 수 있다.

<i style="color: #aaa;">만약 그래도 안되면 제어판에서 자격증명을 제거하고 다시 설정을 해보자.</i>

---

### .gitignore

.gitignore 파일은 레포지토리에서 무시할 파일을 지정하는 파일이다. 업로드하고 싶지 않은 폴더 및 파일명을 .gitignore파일에 추가하면 된다.

보통 환경변수 파일인 `.env` 파일과 용량이 큰 node_modules 폴더를 업로드 방지하기 위해 사용한다.

```bash
# .gitignore
.env
node_modules
```

---

### 협업환경 설정

#### 브랜치 보호

협업환경에서는 실수로 메인 브랜치(최종 프로덕트)에 업로드하지 않기위해 브랜치를 보호해야한다. 이는 브랜치설정을 통해 보호할 수 있다.

```
레포지토리의 settings에서 branches탭의 add classic branch protection rule을 추가한다.

이때, branch name pattern에 보호할 브랜치를 선택하고,

- Require a pull request before merging 체크
- lock branch 체크
- do not allow bypassing the above settings 체크

```

이렇게 설정하면 메인 브랜치에 업로드하지 않기 위해 풀 리퀘스트를 생성해야한다.

#### 풀 리퀘스트하기

완성된 데이터를 병합하고 싶다면 풀 리퀘스트를 생성해야한다.

Pull requests탭에서 New pull request를 클릭한다.

이때, base repository에 병합이 완료될 브랜치를 선택하고, compare repository에 병합할 브랜치를 선택한다.

PM은 pull request 알림을 보고 코드 리뷰를 진행하고 Review changes를 클릭한다.

`Request Changes` | 리뷰 후 수정사항을 요청할 수 있다. (거절)
`Approve` | 리뷰 후 병합을 진행할 수 있다. (승인)
`Comment` | 리뷰 후 코멘트를 남길 수 있다. (추가내용)

PM이 Approve를 했다면 이후에 Merge Pull Request를 클릭하여 병합을 진행한다.

마지막으로 PM이 confirm merge를 클릭하여 병합을 완료한다.

⚠️ 이때, 팀원들이 여러명이 갑자기 Pull Request를 하게 되면 conflict가 발생할 수 있으므로 Github에서 지시하는 Command Line을 통해 해결해야한다.

---

## ‼️ Git 최대 파일 용량 초과

> 레포지토리에 용량이 너무 큰 파일을 올리게 되면 레포지토리 용량이 초과되어 오류가 발생할 수 있다.

이러한 오류는 상당히 성가셔서, `git reset head` 명령어를 통해 최근 커밋을 초기화하고 다시 커밋을 진행하는 방법을 사용한다.

만약 커밋이 여러번 된 상태라면 `git reset HEAD~n` 명령어를 통해 n번째 커밋 상태로 되돌리고 다시 커밋을 진행할 수 있다.
