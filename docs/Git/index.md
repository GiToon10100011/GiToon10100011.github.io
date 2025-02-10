---
layout: home-with-toc
title: "Git"
date: 2025-06-17 17:00:00 +0900
categories: Coding
---

# Git

> Git 명령어를 모아둔 페이지.

`git`을 로컬 컴퓨터에서 사용하기 위해서는 `git bash`를 설치해야한다.

## 레포지토리

레포지토리는 프로젝트의 저장소이다. 프로젝트의 모든 버전을 저장하고 관리한다.

로컬 공간과 Git의 레포지토리를 연결하기 위해서는 2가지 방법이 있다.

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

## 명령어

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

파워쉘 환경에서는 다음과 같이 작성하면 된다.

```bash
git add .; git commit -m "커밋 메시지"; git push origin main
```

