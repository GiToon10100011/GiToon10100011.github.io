```js
{
  function Exam() {
    kor = 1;
    eng = 2;
    math = 3;
  }

  console.log("===Exam1===");
  let exam1 = Exam(); //일반 함수 호출
  console.log(exam1.kor, window.kor); //Cant read property Error, 1

  console.log("===Exam2===");
  //function Exam의 형식을 가진 인스턴스를 생성한다는 뜻
  let exam2 = new Exam(); //함수로 인스턴스 생성
  console.log(exam2.kor, window.kor); //undefined, 1

  //브라우저에서 실행되면 전역객체는 window, node기반의 환경이라면 global이 전역객체가 된다.
}

{
  function Exam() {
    this.kor = 30;
    console.log(this.kor);
  }

  Exam(); //전역객체에 kor이라는 속성을 확장시킴
  new Exam(); //인스턴스의 kor을 참조
}

{
  function Exam() {
    this.kor = 10;
    this.eng = 22;
    this.math = 30;

    this.total = function () {
      return this.kor + this.eng + this.math;
    };

    this.avg = function () {
      return this.total() / 3;
    };
  }

  var exam = new Exam();
  console.log(exam.total());
  console.log(exam.avg());
}

var exam = new Exam(1, 2, 3);
function Exam(kor, eng, math)

{
  let ar1 = [];
  console.log(ar1.aaa());
  Array.prototype.aaa = function () {
    console.log("aaa");
  };

  let ar2 = [];
  console.log(ar1.aaa());
}
```

## this 속성

