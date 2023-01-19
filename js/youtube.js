

// 2. This code loads the IFrame Player API code asynchronously.
//이 섹션의 코드는 IFrame Player API JavaScript 코드를 로드합니다. 예에서는 코드를 비동기식으로 가져오도록 DOM 수정을 사용하여 API 코드를 다운로드합니다. 비동기식 다운로드를 사용하도록 설정하는 <script> 태그의 async 속성은 이 스택 오버플로 답변에 설명된 것처럼 아직 일부 최신 브라우저에서는 지원되지 않습니다.
// script 요소를 생성해서 tag변수에 할당
let tag = document.createElement('script');
//Iframe Player API JavaScript 코드를 로드한다. 외부자바스크립트 라이브러리 받아오기
tag.src = "https://www.youtube.com/iframe_api";

// script의 첫번째를 가져와서 firstScriptTag 변수에 할당
let firstScriptTag = document.getElementsByTagName('script')[0];
/* firstScriptTag.parentNode  부모에게 요청하여 
script중에 처음으로 써줘라 */
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)

/* onYouTubeIframeAPIReady 함수는 플레이어 API 코드가 다운로드되는 
즉시 실행됩니다. 코드에서 이 부분이 삽입한 동영상 플레이어를 참조하는 
전역 변수 player를 정의하며 함수가 동영상 플레이어 개체를 구성합니다. 
 중요함!! = 절대로 다르게 지정하면 안됨 */
// let player;
function onYouTubeIframeAPIReady() {
  // player 클래스라고 수정하지 않아도 괜찮다
  // player = new YT.Player('player', {
  new YT.Player('player', {
    // 우리가 지정할 곳 height,width 는 빼도 된다.
    // height: '360',
    // width: '640',
    videoId: 'An6LvWQuj_8', /* 최초 재생할 유튜브 영상 ID */
    // PlayVars: 영상을 재생하기 위한 여러가지 변수들
    playerVars:{
      autoplay: true,         //자동 재생 유무
      loop: true,             //반복 재생 유무
      playlist:'An6LvWQuj_8'  //loop:true이면 반복 재생할 유튜브 영상 ID 목록  
    },
    events: {
      //영상이 준비되었을 때, 동영상이 플레이되는 상황을 event라는 매개변수로 넘겨줌
      'onReady': function(event){
        event.target.mute(); //음소거
      }
    }
  });
}
/* 
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
 */