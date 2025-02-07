function getTOCNodes(master) {
  var nodes = Array.prototype.slice.call(master.getElementsByTagName("*"), 0);
  var tocNodes = nodes.filter(function (elem) {
    return elem.tagName == "A";
  });
  return tocNodes;
}
function getHeaderNodes(master) {
  var nodes = Array.prototype.slice.call(master.getElementsByTagName("*"), 0);
  var headerNodes = nodes.filter(function (elem) {
    return (
      elem.tagName == "H1" ||
      elem.tagName == "H2" ||
      elem.tagName == "H3" ||
      elem.tagName == "H4" ||
      elem.tagName == "H5" ||
      elem.tagName == "H6"
    );
  });
  return headerNodes;
}

var title = document.getElementsByClassName("post-title")[0];
var titleY = window.pageYOffset + title.getBoundingClientRect().top;

var article = document.getElementsByClassName("post-article")[0];
var articleY = window.pageYOffset + article.getBoundingClientRect().top;

var toc = document.getElementsByClassName("toc")[0];

var headerNodes = getHeaderNodes(article);
var tocNodes = getTOCNodes(toc);

var before = undefined;

document.addEventListener(
  "scroll",
  function (e) {
    if (window.scrollY >= articleY - 60) {
      toc.style.cssText = "position: fixed; top: 60px;";
    } else {
      toc.style.cssText = "";
    }

    // 현재 스크롤 위치 계산을 위한 값들
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var offset = 100; // 여유 공간

    var current = null;
    // 모든 헤더를 순회하면서 현재 위치 찾기
    for (var i = 0; i < headerNodes.length; i++) {
      var headerTop =
        headerNodes[i].getBoundingClientRect().top + window.pageYOffset;
      if (scrollPosition >= headerTop - offset) {
        current = headerNodes[i];
      } else {
        break;
      }
    }

    // 현재 활성화된 TOC 항목 찾기
    if (current) {
      var currentId = current.id;
      var currentA = tocNodes.filter(function (tocNode) {
        return tocNode.getAttribute("href") === "#" + currentId;
      })[0];

      if (currentA) {
        // 이전 활성화 항목이 있다면 제거
        if (before && before !== currentA) {
          before.classList.remove("toc-active");
        }

        // 새로운 항목 활성화
        currentA.classList.add("toc-active");
        before = currentA;
      }
    } else {
      // 활성화된 헤더가 없을 경우 이전 활성화 제거
      if (before) {
        before.classList.remove("toc-active");
      }
    }
  },
  { passive: true }
);
