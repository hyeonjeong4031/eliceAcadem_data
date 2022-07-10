# 2week-test

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="tset.css"/>
    <script src="test.js"></script>
    <link href="//font.elice.io/EliceDigitalBaeum.css" rel="stylesheet">
</head>
<body>
    <div>
        <header>
            <h1><a href="#" class="a">엘리스 레이서 소개</a></h1>
            <nav>
                <ul class="navi">
                    <li id="one"><a href="#" class="a">프로필</a></li>
                    <li id="two"><a href="https://biochemicaldeveloper.tistory.com" target="_blank" class="a">블로그 바로가기</a></li>
                    <li id="three"><a href="https://www.instagram.com/p/Cc8FxKfLNaK/?igshid=YmMyMTA2M2Y=" target="_blank" class="a">인스타 바로가기</a></li>
                </ul>
            </nav>
        </header>

    
        <main>
            <div id="four">
                <section>
                    <img src="photo.jpeg">
                    <p>⚪️ 프로필사진</p>
                </section>
            </div>
            <div id="five">
                <section>
                    <h2>⚪️  프로필</h2>
                    
                    <span
                    style="background-color: rgb(116, 152, 138); padding: 0 5px; cursor: pointer"
                    onclick="
                    this.style.display = 'none';
                    document.querySelector('#five').style.display = 'inline' 
                    document.querySelector('#five').innerHTML = 
                     '<ul>';
                        '<li>이름: 남현정</li>';
                        '<li>상태메세지: 화이팅</li>';
                        '<li>대학교: 엘리스대학교</li>';
                            '</ul> ';
                    "
                  >
                    더보기
                  </span>
                   >
                            
                    
                    

                </section>

            </div>
            <div>
                <section>
                    <h2>⚪️ 트랙 수강 소감 한줄평</h2>

                    <p>  어렵습니다.. 다크모드 구현해보려고 해도 색이 잘 안나오고, 자기소개 토글 넣으려고 해도 구현이 안됩니다... 먼저 제출하고 주말동안 유지보수 해볼게요🥹 인스타 하시는분은 맞팔해요🫶</p>
                </section>
            </div>
        </main>
    
        <footer>
            <div>
                <p>2주차 과제 제출</p>
                
                
            </div>
        </footer>
        <input
        type="button"
        value="night"
        onclick="
        if(this.value === 'night') {
          document.querySelector('div').style.backgroundColor = 'black';
          document.querySelector('section').style.backgroundColor = 'black';
          document.querySelector('footer').style.backgroundcolor = 'blck';
          let pElem = document.querySelectorAll('div');
          console.log(pElem);
          for (let i = 0; i < pElem.length; i++) {
              pElem[i].style.backgroundColor = 'black';
            }
            this.value = 'day'
        } else if (this.value === 'day') {
            document.querySelector('div').style.backgroundColor = 'rgb(152, 192, 192)';
            document.querySelector('body').style.color = 'none';
            document.querySelector('section').style.backgroundColor = 'rgb(152, 192, 192)';
            document.querySelector('footer').style.backgroundColor = 'rgb(245, 245, 245';
          let pElem = document.querySelectorAll('div');
          for (let i = 0; i < pElem.length; i++) {
            pElem[i].style.backgroundColor = 'rgb(152, 192, 192)';
          }
          this.value = 'night'
        }
      "
      />
    </div>
</body>
</html>
