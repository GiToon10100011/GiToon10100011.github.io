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
# 원격 저장소 연결 확인 (fetch/push 주소 출력)
# git remote -r          → 원격 저장소의 브랜치 목록
# git remote update      → 원격 저장소 정보 업데이트
# git remote remove origin → 원격 저장소 연결 제거
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
git clone --depth=1 (url)          # 최신 커밋 1개만 받아오기 (속도 빠름)
git clone --branch 브랜치명 (url)  # 특정 브랜치만 clone
git clone --single-branch (url)    # 지정한 브랜치 하나만 받아옴 (기본은 전체)
```

| **플래그** | **의미** |
| --------- | ------- |
| `--depth=N` | 최근 N개의 커밋 히스토리만 받아옴. 대형 레포지토리를 빠르게 받을 때 사용 |
| `--branch 브랜치명` | 특정 브랜치만 clone |
| `--single-branch` | 지정한 브랜치 하나만 받아옴 (기본은 전체) |

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
  git branch              # 로컬 브랜치 목록 (현재 브랜치에 * 표시)
  git branch 새브랜치명   # 브랜치 생성 (전환은 하지 않음)
  git branch -v           # 각 브랜치의 최신 커밋 해시 + 메시지도 표시
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-r` / `--remotes` | 원격 브랜치만 표시 |
  | `-a` / `--all` | 로컬 + 원격 브랜치 모두 표시 |
  | `-v` / `--verbose` | 각 브랜치의 최신 커밋 해시 + 메시지도 표시 |
  | `-m` / `--move` | 현재 브랜치 이름 변경 |
  | `-M` | 강제로 이름 변경 (`--move --force`) |
  | `-d` / `--delete` | 브랜치 삭제 (이미 merge된 브랜치만) |
  | `-D` | 강제 삭제 (`--delete --force`, merge 안 해도 됨) |

  > ⚠️ 주의해야할 점은 일반 `git branch -d`를 사용하면 원격상에서 브랜치가 삭제되지 않는다. 원격상에서도 브랜치를 삭제하고 싶다면 `git push origin -d (브랜치 이름)`을 사용해야 한다.

  ```bash
  # 로컬상에서 브랜치 삭제
  git branch -d (브랜치 이름)
  # merge 안 된 브랜치 강제 삭제
  git branch -D (브랜치 이름)
  # 원격상에서 브랜치 삭제
  git push origin -d (브랜치 이름)
  # 브랜치 이름 변경
  git branch -m 새이름
  ```

<h3 id="add" class="hidden-header">add</h3>

- `add` - 변경된 파일을 Staging Area(대기장소)에 올리는 작업이다. 바로 GitHub에 올라가는 게 아니라 커밋 전 중간 체크포인트 역할을 한다.

  ```bash
  git add .                               # 현재 경로의 변경된 파일 전부 추가
  git add 파일명                          # 특정 파일만 추가
  git add 파일1 파일2 파일3               # 여러 파일 (띄어쓰기로 구분)
  git add src/index.html styles/main.css  # 경로 포함
  git add *.js                            # 특정 확장자 전부
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-A` / `--all` | 삭제된 파일 포함 모든 변경사항 추가 |
  | `-p` / `--patch` | 파일의 변경 부분을 하나씩 확인하면서 선택적으로 추가 |
  | `-n` / `--dry-run` | 실제로 추가하지 않고 어떤 파일이 추가될지 미리 보기 |

  Git의 3단계 흐름: **로컬 폴더 → Staging Area → Remote Repository(GitHub)**

  > 👉 로그인 기능과 회원가입 기능을 동시에 작업했는데 커밋을 따로 하고 싶을 때: `git add src/login.js` → `git commit -m "feat: 로그인"` → `git add src/signup.js` → `git commit -m "feat: 회원가입"`처럼 파일 단위로 add해서 커밋을 분리할 수 있다.

<h3 id="status" class="hidden-header">status</h3>

- `status` - 현재 브랜치의 상태를 확인할 수 있다.

  ```bash
  git status
  ```

  - `-s`를 붙이면 간단한 상태를 확인할 수 있다.

  ```bash
  git status -s
  ```

  `git status -s` 출력에서 각 기호의 의미:

  | **표시** | **의미** |
  | ------- | ------- |
  | `U` | Untracked — Git이 추적하지 않는 새 파일 |
  | `M` | Modified — 기존 파일이 수정됨 |
  | `A` | Added — 스테이징된 새 파일 |
  | `D` | Deleted — 삭제된 파일 |

<h3 id="commit" class="hidden-header">commit</h3>

- `commit` - 파일의 변경사항을 저장하는 작업이다.

  ```bash
  git commit -m "커밋 메시지"
  git commit -am "커밋 메시지"   # add + commit 동시 (새 파일 Untracked는 제외)
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-m "메시지"` | 커밋 메시지 인라인으로 작성 |
  | `-a` / `--all` | 추적 중인 파일 전부 자동으로 add 후 commit (새 파일은 제외) |
  | `--amend` | 가장 최근 커밋 수정 (메시지 변경 또는 파일 추가) |
  | `--no-edit` | `--amend`와 함께 사용. 메시지는 그대로 두고 파일만 수정할 때 |

  만약 바로 직전의 커밋 메시지를 수정하고 싶다면 다음과 같이 작성한다.

  ```bash
  git commit --amend -m "수정할 커밋 메시지"
  # 메시지는 그대로 두고 파일만 추가하고 싶을 때
  git add 빠진파일 && git commit --amend --no-edit
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

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-u` / `--set-upstream` | 로컬 브랜치와 원격 브랜치를 연결. 이후 `git push`만 써도 됨 |
  | `-f` / `--force` | 강제 push. 원격 기록을 덮어씀 (위험, 팀 작업 시 금지) |
  | `--force-with-lease` | 강제 push인데 원격에 내가 모르는 변경이 있으면 거부. `-f`보다 안전 |
  | `-d` / `--delete` | 원격 브랜치 삭제: `git push origin -d 브랜치명` |
  | `--tags` | 태그도 함께 push |

  > ⚠️ rebase 후 히스토리가 달라졌을 때는 `-f` 대신 `--force-with-lease` 사용. 팀 공유 브랜치(`main`, `dev`)에는 강제 push 절대 금지.

<h3 id="fetch" class="hidden-header">fetch</h3>

- `fetch` - 클라우드 공간에서 일어난 변동사항을 로컬상에 업데이트 해주는 작업이다. `pull`과 달리 실제로 파일을 내려받지 않고 정보만 업데이트한다. 브랜치가 안 보일 때 먼저 실행해보기.

  ```bash
  git fetch origin (브랜치 이름)
  ```

  ```bash
  # 모든 변동사항을 가져오기
  git fetch --all
  # 원격에서 삭제된 브랜치를 로컬 목록에서도 제거
  git fetch --prune
  git fetch -p           # 위와 동일
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--all` | 등록된 모든 원격 저장소 정보 업데이트 |
  | `--prune` / `-p` | 원격에서 삭제된 브랜치를 로컬 목록에서도 제거 |

<h3 id="pull" class="hidden-header">pull</h3>

- `pull` - 클라우드 공간에서 일어난 변동사항을 로컬상에 가져오는 작업이다. `fetch` + `merge`를 한 번에 실행하는 것과 같다.

  ```bash
  git pull origin main
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--rebase` | merge 대신 rebase 방식으로 pull (커밋 히스토리가 깔끔해짐) |
  | `--no-rebase` | 기본 merge 방식 (기본값) |
  | `--ff-only` | Fast-forward만 허용. 충돌 가능성 있으면 pull 거부 |
  | `--depth=N` | 최근 N개 커밋만 받아옴 |

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

<h3 id="switch" class="hidden-header">switch</h3>

- `switch` - 브랜치 전환 전용 명령어. Git 2.23부터 도입되어 `checkout`의 브랜치 전환 기능만 분리했다.

  ```bash
  git switch 브랜치명          # 브랜치 전환
  git switch -c 새브랜치명     # 브랜치 생성 + 전환
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-c` / `--create` | 브랜치 생성 후 전환 |
  | `-C` | 같은 이름 브랜치가 있어도 강제로 생성 후 전환 |
  | `--detach` | detached HEAD 상태로 전환 (특정 커밋에 직접 붙이기) |

  > 👉 `git switch`는 브랜치 전환 전용이고, `git checkout`은 파일 복원도 겸하기 때문에 헷갈리기 쉽다. 최신 버전에서는 `switch` 사용 권장.

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

<h3 id="restore" class="hidden-header">restore</h3>

- `restore` - `git checkout --`의 파일 복원 기능만 분리해 나온 최신 명령어. 파일 되돌리기 전용이다.

  ```bash
  git restore 파일명                    # 워킹 디렉토리의 변경사항 취소 (마지막 커밋으로 복원)
  git restore .                         # 현재 경로의 모든 변경사항 취소
  git restore --staged 파일명           # 스테이징 취소 (add 취소, 파일 변경은 유지)
  git restore --staged .                # 스테이징 전부 취소
  git restore --source=브랜치명 파일명  # 다른 브랜치의 특정 파일 가져오기
  git restore --source=HEAD~2 파일명    # 2커밋 전 시점의 파일로 복원
  git restore --source=커밋해시 파일명  # 특정 커밋 시점으로 복원
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--staged` | 스테이징 취소 (`git reset HEAD -- 파일명`과 동일한 역할) |
  | `--worktree` | 워킹 디렉토리만 복원 (기본값) |
  | `--source=<커밋/브랜치>` | 어떤 시점/브랜치의 파일로 복원할지 지정 |
  | `-p` / `--patch` | 변경 부분을 하나씩 확인하면서 선택적으로 복원 |

  명령어 정리:

  | **상황** | **명령어** |
  | ------- | --------- |
  | 파일 변경 취소 | `git restore 파일명` |
  | add 취소 | `git restore --staged 파일명` |
  | 커밋 취소 | `git reset HEAD~1` |
  | 특정 파일만 과거 상태로 | `git restore --source=커밋해시 파일명` |

  > 👉 `git checkout -- 파일명`과 `git restore 파일명`은 결과가 동일하다. Git 2.23 이후부터 checkout의 파일 복원 역할을 restore가 대체하므로 최신 프로젝트에서는 restore 사용 권장.

  > ⚠️ `git restore 파일명`은 복구가 불가능하므로 신중하게 사용할 것.

<h3 id="log" class="hidden-header">log</h3>

- `log` - 커밋 해시는 커밋 메시지 옆에 있는 해시 값으로, git log 명령어를 사용하면 확인할 수 있다.

  ```bash
  git log
  git log --graph --oneline     # 브랜치 흐름을 그래프로, 한 줄씩 (가장 많이 씀)
  git log --oneline -10         # 최근 10개만 한 줄씩
  git log --all                 # 모든 브랜치의 커밋 표시
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--graph` | 브랜치 흐름을 ASCII 그래프로 표시 |
  | `--oneline` | 커밋 해시 + 메시지를 한 줄로 출력 |
  | `--all` | 모든 브랜치의 커밋 표시 |
  | `-N` | 최근 N개 커밋만 출력 (예: `-10`) |
  | `--author="이름"` | 특정 작성자의 커밋만 필터 |
  | `--since="2주 전"` | 특정 날짜 이후 커밋만 |
  | `-p` | 각 커밋의 변경 내용(diff)도 함께 출력 |
  | `--stat` | 변경된 파일 수와 라인 수 요약 표시 |

  `git log --graph --oneline` 예시 — merge 후:

  ```
  *   f1e2a3b Merge branch 'feature'
  |\
  | * 3d4e5f6 fix: bug fix
  * | 9c8d7e6 update docs
  ```

  rebase 후:

  ```
  * 7d8e9f0 feat: add feature
  * 3d4e5f6 fix: bug fix
  * 9c8d7e6 update docs
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
  git merge --no-ff (브랜치 이름)    # 항상 머지 커밋 생성 (Fast-forward 방지)
  git merge --abort                   # 충돌 상태에서 머지 취소
  git merge --continue                # 충돌 해결 후 머지 계속
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--no-ff` | no fast-forward: 항상 머지 커밋을 남김 (히스토리 추적 용이) |
  | `--ff-only` | Fast-forward만 가능한 경우에만 머지 (불가능하면 오류) |
  | `--squash` | 상대 브랜치 커밋을 하나로 합쳐서 스테이징 (커밋은 직접 해야 함) |
  | `--abort` | 충돌 발생 시 머지 자체를 취소하고 이전 상태로 복원 |
  | `--continue` | 충돌 해결 후 머지 계속 진행 |

  이때 주의해야할 점은, 병합을 진행하고자 하는 브랜치로 `checkout` 하고 병합을 진행해야 한다는 것이다.

  👉 예를 들어, `main` 브랜치에서 `feature` 브랜치를 병합하고 싶다면, `main` 브랜치로 `checkout` 하고 병합을 진행해야 한다.

<h3 id="rebase" class="hidden-header">rebase</h3>

- `rebase` - 현재 브랜치의 커밋들을 다른 브랜치 끝에 직렬로 재배치하는 작업이다.

  ```bash
  git rebase main              # 현재 브랜치를 main 위로 재배치
  git rebase --abort           # 리베이스 취소, 이전 상태로 복원
  git rebase --continue        # 충돌 해결 후 리베이스 계속
  git rebase --skip            # 현재 충돌 커밋을 건너뜀
  git rebase -i HEAD~3         # 최근 3개 커밋을 인터랙티브 모드로 편집
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-i` / `--interactive` | 인터랙티브 모드. 커밋 순서 변경, 합치기, 메시지 수정 등 가능 |
  | `--abort` | 리베이스 중단 + 이전 상태로 복원 |
  | `--continue` | 충돌 해결 후 다음 단계 진행 |
  | `--skip` | 현재 충돌 커밋을 건너뜀 |

  **rebase vs merge 비교:**

  | **방식** | **히스토리** | **머지 커밋** | **특징** |
  | ------- | ----------- | ----------- | ------- |
  | `merge` | 갈래 형태 | 생김 | 히스토리가 복잡해지지만 작업 흐름 보존 |
  | `rebase` | 일직선 | 없음 | 히스토리가 깔끔하나 커밋 해시가 바뀜 |

  > ⚠️ 공유된 원격 브랜치(`main`, `dev`)에는 rebase 사용 자제. 본인만 사용하는 feature 브랜치에서만 권장.

  **인터랙티브 모드 (`git rebase -i`):**

  PR 올리기 전 커밋 정리, 메시지 수정, 커밋 합치기 등에 사용. 실행하면 에디터가 열리고 커밋 목록이 나온다.

  ```
  pick a1b2c3d feat: 로그인 화면 UI
  pick e4f5g6h fix: 버튼 색상 수정
  pick i7j8k9l chore: 콘솔 로그 삭제
  ```

  각 줄 맨 앞의 명령어를 바꿔서 커밋을 편집한다:

  | **명령어** | **약자** | **의미** |
  | --------- | ------- | ------- |
  | `pick` | `p` | 그대로 사용 (기본값) |
  | `reword` | `r` | 커밋 메시지만 수정 |
  | `edit` | `e` | 커밋 내용(파일)도 수정 |
  | `squash` | `s` | 바로 위 커밋과 합치기 (합친 메시지 편집 가능) |
  | `fixup` | `f` | 바로 위 커밋과 합치기 (내 메시지는 버림) |
  | `drop` | `d` | 이 커밋 삭제 |

  rebase -i로 히스토리를 변경하면 원격과 달라져 일반 push가 거부된다. 이때는:

  ```bash
  git push --force-with-lease origin 브랜치명
  ```

  > ⚠️ `--force-with-lease`는 원격에 내가 모르는 커밋이 없을 때만 강제 push. 팀 공유 브랜치에는 절대 사용 금지.

<h3 id="reset" class="hidden-header" style>reset</h3>

- `reset` - 커밋 히스토리를 초기화하는 작업이다.

  ```bash
  git reset              # 스테이징 에리어에 올라간 파일 전부 내리기
  git reset 파일명       # 특정 파일만 스테이징 취소
  git reset (커밋 해시)  # 해당 커밋 시점으로 되돌리기
  git reset HEAD~1       # 가장 최근 커밋 1개 취소 (파일 변경사항은 유지)
  git reset HEAD~N       # 최근 N개 커밋 취소
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--soft` | 커밋만 취소, 스테이징 + 파일 변경은 유지 |
  | `--mixed` | (기본값) 커밋 + 스테이징 취소, 파일 변경은 유지 |
  | `--hard` | 커밋 + 스테이징 + 파일 변경 전부 취소 (복구 불가, 주의) |

  > ⚠️ `--hard` 플래그는 파일 변경사항까지 전부 날리므로 복구가 불가능하다. 신중하게 사용할 것.

<h3 id="diff" class="hidden-header" style>diff/h3>

- `diff` - 현재 브랜치와 다른 브랜치끼리의 차이점을 비교할 수 있다.

  ```bash
  git diff                        # 스테이징 전 변경사항 확인
  git diff --staged               # 스테이징된 변경사항 확인 (add는 됐지만 커밋 전)
  git diff (브랜치 이름)          # 현재 브랜치와 다른 브랜치 비교
  git diff 브랜치A 브랜치B        # 두 브랜치 간 차이 비교
  git diff 커밋해시A 커밋해시B    # 두 커밋 간 차이 비교
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `--staged` / `--cached` | 스테이징된 내용과 최근 커밋의 차이 |
  | `--stat` | 변경된 파일 목록과 라인 수만 요약 출력 |
  | `--name-only` | 변경된 파일명만 출력 |

<h3 id="stash" class="hidden-header" style>stash</h3>

- `stash` - 작업 중인 내용을 임시로 저장하는 작업이다.

  ```bash
  git stash
  ```

  실수로 현재 작업중인 디렉토리와 원격상의 디렉토리가 달라 커밋이 맞지 않게 되면 `stash`를 통해 임시로 현재 내용을 저장하여 원격 저장소를 `pull`한 후 임시저장 해둔 내용을 다시 적용할 수 있다.

  ```bash
  git stash pop     # 가장 최근 stash를 꺼내서 적용 + stash 목록에서 제거
  git stash apply   # 가장 최근 stash를 적용하되 목록에 남김
  git stash list    # stash 목록 확인
  git stash drop    # 가장 최근 stash 삭제 (적용 없이)
  git stash clear   # stash 목록 전부 삭제
  ```

  | **플래그** | **의미** |
  | --------- | ------- |
  | `-m "메시지"` | stash에 이름 붙이기 (나중에 구분하기 좋음) |
  | `-u` / `--include-untracked` | Untracked 파일(새로 생성한 파일)도 함께 stash |
  | `stash@{N}` | N번째 stash 지정 (예: `git stash pop stash@{2}`) |

  > ✅ `pop`과 `apply`의 차이: `pop`은 적용 후 목록에서 제거, `apply`는 적용해도 목록에 남음. 재사용할 필요 없으면 `pop` 사용 권장.

  > ✅ 브랜치를 잘못 골랐는데 이미 작업을 해버렸을 때: `git stash` → `git switch 올바른브랜치` → `git stash pop`

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
git config --local alias.acp '!f() { git add . && git commit -m "$1" && git push; }; f'
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

⚠️ 만일 다른 사람이 있다던가 데이터 리셋이 필요한 경우, <mark style="background: #D2B3FFA6;">관리자 모드</mark>에서 다음과 같이 설정을 초기화할 수 있다.

```bash
git config --global --unset credential.helper
git config --system --unset credential.helper
```

<mark style="background: #BBFABBA6;">일반모드</mark>에서

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

## 브랜치 전략

팀 프로젝트에서 일반적으로 쓰는 브랜치 구조이다. 역할에 따라 브랜치를 나눠두면 배포 버전과 개발 중인 코드가 섞이지 않는다.

| **브랜치** | **용도** |
| --------- | ------- |
| `main` | 실제 배포 버전 |
| `dev` | 통합 개발 브랜치 |
| `feat/기능명` | 새로운 기능 개발 |
| `release/버전` | 릴리즈 준비 (버그 수정, 스타일 정리) |
| `hotfix/이슈` | 배포 후 긴급 수정 |

---

## PR 병합 방식

GitHub에서 PR을 병합할 때 3가지 방식 중 선택할 수 있다. 커밋 기록이 어떻게 남는지와 잔디(commit) 반영 여부가 다르다.

| **방식** | **설명** | **커밋 기록** | **잔디** |
| ------- | ------- | ----------- | ------- |
| **Merge Commit** | 일반 머지. PR을 그대로 병합 + 머지 커밋 추가 | 복잡해짐 | ✅ 심김 |
| **Squash and Merge** | PR의 모든 커밋을 하나로 합쳐 병합 | 깔끔 (1커밋) | ❌ 안 심길 수 있음 |
| **Rebase and Merge** | PR 커밋을 main 뒤에 재배치 후 병합 | 커밋 보존 + 깔끔 | ✅ 잘 심김 |

보통 <mark style="background: #BBFABBA6;">로컬 feature 브랜치에서만 rebase</mark>를 쓰고, 원격 main은 merge 방식으로 합친다. 다만 팀 컨벤션에 따라 다르다.

---

## Issue 연동

### 커밋에 이슈 번호 연결

```bash
git commit -m "Fix: 점수 계산 로직 수정 #42"
```

커밋 메시지에 `#이슈번호`를 포함하면 GitHub에서 해당 이슈와 자동으로 연결된다.

### PR 머지 시 이슈 자동 닫기

```bash
git commit -m "Fixes #42: 점수 계산 문제 해결"
# Fixes / Closes / Resolves 모두 가능
```

> 커밋만으로는 이슈가 닫히지 않는다. **PR이 머지될 때** 닫히며, 기본 브랜치에만 적용된다.

---

## PR 템플릿

`.github/PULL_REQUEST_TEMPLATE.md` 파일에 양식을 저장해두면 PR을 생성할 때 자동으로 본문이 채워진다.

```md
# Pull Request

## Issue Number
resolves #

## 요약
<!-- 무엇을, 왜 수정했는지 -->

## PR 유형
- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] 코드 리팩토링
- [ ] 문서 수정
- [ ] 빌드/패키지 수정

## 변경사항 상세 설명

## 스크린샷 및 데모

## PR Checklist
- [ ] 커밋 메시지 컨벤션에 맞게 작성했습니다.
- [ ] 변경 사항에 대한 테스트를 했습니다.
- [ ] 브랜치가 최신 dev 브랜치와 병합 가능합니다.
```

---

## 템플릿 레포지토리

PR, Issues, Wiki, Projects, Actions 설정을 매번 새 레포마다 추가하기 귀찮다면 **템플릿 레포지토리**를 만들어 재사용할 수 있다. 폴더 구조(예: Next.js 기본 세팅)도 함께 포함시킬 수 있어, 새 프로젝트를 시작할 때 같은 세팅을 반복하지 않아도 된다.

---

## ‼️ Git 최대 파일 용량 초과

> 레포지토리에 용량이 너무 큰 파일을 올리게 되면 레포지토리 용량이 초과되어 오류가 발생할 수 있다.

이러한 오류는 상당히 성가셔서, `git reset head` 명령어를 통해 최근 커밋을 초기화하고 다시 커밋을 진행하는 방법을 사용한다.

만약 커밋이 여러번 된 상태라면 `git reset HEAD~n` 명령어를 통해 n번째 커밋 상태로 되돌리고 다시 커밋을 진행할 수 있다.

---

## 자주 쓰는 명령어 한눈에 보기

```bash
# 초기 설정
git config --global user.name "이름"
git config --global user.email "이메일"
git config --list

# 연동
git init
git clone <주소>
git clone --depth=1 <주소>             # 빠른 clone
git remote add origin <주소>
git remote -v                           # 연동 확인

# 작업 흐름
git status
git add .
git commit -m "메시지"
git commit -am "메시지"                 # add + commit 동시
git push origin main
git pull origin main

# 브랜치
git branch                             # 목록
git branch -a                          # 원격 포함 전체
git switch 브랜치명                    # 전환
git switch -c 새브랜치명               # 생성 + 전환
git branch -d 브랜치명                 # 삭제
git push origin -d 브랜치명            # 원격 브랜치 삭제

# 임시 저장
git stash
git stash pop
git stash list

# 병합
git merge 브랜치명
git merge --no-ff 브랜치명
git rebase main
git rebase -i HEAD~3                   # 커밋 편집

# 되돌리기
git restore 파일명                     # 파일 변경 취소
git restore --staged 파일명            # add 취소
git reset HEAD~1                       # 커밋 취소 (파일 유지)
git reset --hard HEAD~1                # 커밋 + 파일 변경 전부 취소
git stash                              # 변경사항 임시 저장 후 초기화

# 확인
git log --graph --oneline
git diff --staged
git reflog                             # 모든 동작 기록
git fetch --all                        # 원격 정보 새로고침

# 파일 관리
git rm --cached -r 파일명              # Git 추적에서만 제거
```

> [gitignore 템플릿 생성기](https://www.toptal.com/developers/gitignore) — 프로젝트에 맞는 `.gitignore`를 자동으로 만들어준다.
