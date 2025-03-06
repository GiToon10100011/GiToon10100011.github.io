// 페이지 로드 시 세션 스토리지 확인
if (sessionStorage.getItem("secretPageAuth") === "true") {
  document.getElementById("content").style.display = "block";
  document.getElementById("password-form").style.display = "none";
}

// 확인 버튼 클릭 이벤트
document
  .getElementById("password-confirm-btn")
  .addEventListener("click", function () {
    const password = document.getElementById("password-input").value;
    if (password === "031003") {
      document.getElementById("content").style.display = "block";
      document.getElementById("password-form").style.display = "none";
      sessionStorage.setItem("secretPageAuth", "true");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  });

// Enter 키 이벤트 추가
document
  .getElementById("password-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("password-confirm-btn").click();
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    // 탑 버튼 요소 가져오기
    var topButton = document.getElementById("top-button");
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", function() {
      // 스크롤 위치가 300px 이상이면 버튼 표시, 아니면 숨김
      if (window.pageYOffset > 300) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    });
    
    // 버튼 클릭 이벤트 리스너 추가
    topButton.addEventListener("click", function() {
      // 부드럽게 맨 위로 스크롤
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
