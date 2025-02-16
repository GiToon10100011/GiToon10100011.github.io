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

<h3 id="push" class="hidden-header">push</h3>

- `push` - 로컬상에서 일어난 변동사항을 클라우드 공간에 업로드하는 작업이다.

  ```bash
  git push origin main
  ```

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

### ⚠️ 깃 폴더 지정 취소

```bash
rm -r .git
```

### 특정 파일 및 폴더를 레포지토리에서 삭제

```bash
git rm -r --cached -r (파일 이름 또는 폴더 이름)
```

## 기타 팁

여러 명령어를 한번에 실행하고 싶다면 다음과 같이 작성하면 된다.

```bash
git add . && git commit -m "커밋 메시지" && git push origin main
```

`git add .` | staging area에 모든 파일을 추가 (`.`은 현재 디렉토리를 의미하며, 현재 디렉토리의 모든 파일을 의미.)
`git commit -m "커밋 메시지"` | 커밋 메시지를 작성하고 커밋을 생성
`git push origin main` | 원격 저장소에 푸시

파워쉘 환경에서는 다음과 같이 작성하면 된다.

```bash
git add .; git commit -m "커밋 메시지"; git push origin main
```

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

### .gitignore

.gitignore 파일은 레포지토리에서 무시할 파일을 지정하는 파일이다. 업로드하고 싶지 않은 폴더 및 파일명을 .gitignore파일에 추가하면 된다.

보통 환경변수 파일인 `.env` 파일과 용량이 큰 node_modules 폴더를 업로드 방지하기 위해 사용한다.

```bash
# .gitignore
.env
node_modules
```
