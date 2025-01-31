---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div class="welcome-section">
  <h1>{{ site.title }}에 오신 것을 환영합니다! 🌱</h1>
  <p class="intro-text">{{ site.description }}</p>
  
  <div class="featured-posts">
    <h2>추천 포스팅 ✨</h2>
    
    <!-- 하이라이트 포스트 1 -->
    <div class="featured-post">
      <a href="/docs/react/components">
        <div class="post-thumbnail">
        </div>
        <h3>React 컴포넌트 마스터하기</h3>
        <p class="post-excerpt">함수형 컴포넌트와 클래스형 컴포넌트의 차이점을 심층 분석</p>
      </a>
    </div>

    <!-- 하이라이트 포스트 2 -->
    <div class="featured-post">
      <a href="/docs/css/layout">
        <div class="post-thumbnail">
        </div>
        <h3>CSS 레이아웃 완벽 가이드</h3>
        <p class="post-excerpt">Flexbox와 Grid를 활용한 현대적 레이아웃 설계 기법</p>
      </a>
    </div>

  </div>

  <div class="cta-buttons">
    <a href="/docs/html/index" class="btn">HTML 알아보기</a>
    <a href="/docs/css/index" class="btn">CSS 알아보기</a>
    <a href="/docs/javascript/index" class="btn">JavaScript 알아보기</a>
    <a href="/docs/react/index" class="btn">React 알아보기</a>
  </div>
</div>

<style>
.welcome-section {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
}

.intro-text {
  font-size: 1.2rem;
  color: #c9d1d9;
  line-height: 1.6;
  margin: 2rem 0;
}

.featured-posts {
  background: rgba(26, 115, 232, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  border: 1px solid rgba(26, 115, 232, 0.2);
}

.featured-post {
  background: rgba(6, 95, 212, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  transition: transform 0.2s;
}

.featured-post:hover {
  transform: translateY(-3px);
}

.post-thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.post-excerpt {
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-top: 0.5rem;
}

.recent-posts {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(26, 115, 232, 0.1);
}

.cta-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;
}

.post-date {
  color: #aaa;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin: 0 1rem;
  background: rgba(0, 27, 61, 0.59);
  color: white!important;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s;
}

.btn:hover {
  background:rgb(12, 51, 102);
  transform: translateY(-1px);
}
</style>
