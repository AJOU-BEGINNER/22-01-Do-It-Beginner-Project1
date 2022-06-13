<!DOCTYPE html>
<html lang="ko">

    <head>
        <!-- Webpage Title -->
        <title>로그인 페이지 | 두잇 초급반</title>

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous">

        <!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous"></script>

        <!-- 구글폰트 -->
        <link href="https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap" rel="stylesheet">

        <script type="text/javascript">

            $(document).ready(function () {
                showReview();
            });

            function makeReview() {
                $.ajax({
                    type: "POST",
                    url: "/review",
                    data: {sample_give:'샘플데이터'},
                    success: function (response) {
                        alert(response["msg"]);
                        window.location.reload();
                    }
                })
            }

            function showReview() {
                $.ajax({
                    type: "GET",
                    url: "/review?sample_give=샘플데이터",
                    data: {},
                    success: function (response) {
                        alert(response["msg"]);
                    }
                })
            }
        </script>
    </head>
    <body>
        <div class="container">
                <div class="rectangle1">
                    <div class="icon">
                        <div class="vector"></div>
                        <div class="vector1"></div>
                        <div class="vector2"></div>
                        <h4 class="memo">AJOU Memo</h4>
                        <div>
                        <div class="ellipse11"></div>
                        <div class="ellipse12"></div>
                        <div class="ellipse13"></div>
                        </div>
                    </div>
                </div>
            <h3 class="free">자유게시판</h3>
            <div class="rectangle14"><h3 class="register">등록하기</h3></div>
            <div class="rectangle4">
                <div><h5 class="date">12/18</h5><h5 class="word">아주 비기너 참여하시는 .. </h5><h5 class="writer">익명</h5></div>
                <div class="line1"><h5 class="date">12/18</h5><h5 class="word">아주 비기너 참여하시는 .. </h5><h5 class="writer">익명</h5></div>
                <div class="line2"><h5 class="date">12/18</h5><h5 class="word">아주 비기너 참여하시는 .. </h5><h5 class="writer">강보영</h5></div>
                <div class="line3"><h5 class="date">12/18</h5><h5 class="word">아주 비기너 참여하시는 .. </h5><h5 class="writer">익명</h5></div>
                <div class="line4"><h5 class="date">12/18</h5><h5 class="word">아주 비기너 참여하시는 .. </h5><h5 class="writer">익명</h5></div>
                <div class="line5"><h5 class="date">12/18</h5><h5 class="word">아주 비기너 참여하시는 .. </h5><h5 class="writer">익명</h5></div>
            </div>
            <div class="rectangle103"><h5 class="number">1</h5></div>
            <div class="rectangle6"><h5 class="number">2</h5></div>
            <div class="rectangle7"><h5 class="number">3</h5></div>
            <div class="rectangle8"><h5 class="number">4</h5></div>
            <div class="rectangle9"><h5 class="number">5</h5></div>
            <div class="rectangle10"><h5 class="number">6</h5></div>
            <div class="rectangle11"><h5 class="number">7</h5></div>
            <div class="rectangle12"><h5 class="number">8</h5></div>
            <div class="rectangle13"><h5 class="number">9</h5></div>
        </div>
    </body>
</html>

# 22-01-Do-It-Project1
2022년도 1학기 아주대학교 중앙동아리 Do-It 에서 진행하는 FE - 초급  스터디 관리 레포입니다.

# 🤗 Welcome !! AJOU BEGINNER

<div align=center>

[![CONTRIBUTORS](https://img.shields.io/badge/contributors-30-green.svg?style=flat-square)](https://github.com/AJOU-BEGINNER/P-1)

<a href="https://github.com/AJOU-BEGINNER/22-01-Do-It-Beginner-Project1/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AJOU-BEGINNER/22-01-Do-It-Beginner-Project1" />
</a>

</div>

## 🧑🏻‍💻 Introduce

안녕하세요, 소프트웨어학과 16학번 **[jin-Pro](https://github.com/jin-Pro)** 입니다. <br/>
아주대학교 학생들을 위한 웹 풀스택 스터디입니다. <br/>
22년 1학기 총 40명의 학생들이 참여하였으며 <br/>
총 1학기간 1번의 프로젝트가 진행됩니다. <br/>
모두 무난하게 수료하시길 기원합니다. <br/>
화이팅!! 👍

---

## 🔥 Goal

우리는 FE - 초급 스터디를 통해

- 웹 동작 흐름
- HTTP 통신
- JavaScript를 통한 DOM 동작 방법
- SPA , MPA

학습을 하여 성장할 계획입니다! 🔥 🔥

---

## 🎸 기타

혹시 저희 스터디를 관리하는 [저장소](https://github.com/AJOU-BEGINNER/22-01-Do-It-Beginner-Project1)로 인하여 <br/>
문제 발생시 [연락망](https://velog.io/@jinpro)으로 연락 주시면 감사하겠습니다. <br/>
저장소를 찾아주셔서 감사합니다. 🙇🏻 <br/>

---

## 참고

- [디자인 및 기획서](https://www.figma.com/file/FMcTfiuDucOpEs2j6fh3XL/2022-Ajou-Beginner-Project-1-1?node-id=0%3A1)

- [Figma 사용법](https://slash-amaranthus-65c.notion.site/Figma-c1dead5d929d44498e94641f8058e10d)

- [프로젝트 조건](https://luxuriant-oboe-e56.notion.site/Project-1-b6b267051f0e47b8ae4f295e6a457a74)

- [Git 사용법](https://github.com/code-squad/codesquad-docs/blob/master/codereview/README.md)

---

## 스터디 순서

1. Git 사용법을 참고하여 repo를 clone 받습니다.
2. Figma 사용법을 확인하여 기획서를 확인합니다.
3. 디자인 및 기획서를 보고 학습 계획 및 개발 계획을 세웁니다.
4. 프로젝트 조건을 따르면서 학습 및 개발을 진행합니다.
