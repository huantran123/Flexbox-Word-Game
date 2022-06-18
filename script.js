$(document).ready(function(){
  var $char = $('.char');
  var $checkBtn = $('.submit-btn');
  var $replayBtn = $('.replay-btn');
  var $charList = $('.selected-chars');
  var $result = $('.result');
  var $rows = $('.rows');
  var charList = [];
  var result = 'GREEN';
  var $header = $('h1');

  var handleCharClick = function(event) {
    if (event.target.style.backgroundColor === 'rgb(43, 146, 107)') {
      return;
    }
    $(event.target).css({"background": "#2b926b", "border": "1px solid #fff", "color": "#fff", "font-weight": "700"});
    charList.push(event.target.innerText);
    $charList.html(charList.join(''));
  }

  var reloadPage = function() {
    location.reload(true);
  }

  var checkResult = function() {
    if (charList.join('') === result) {
      $result.html("CONGRATULATION! YOU'RE CORRECT!")
      $result.css('color', '#40a032');
    } else {
      $result.html("INCORRECT! PLAY AGAIN!");
      $result.css('color', '#ba2222');
    }
  }

  $char.on('click', handleCharClick);
  $replayBtn.on('click', reloadPage);
  $checkBtn.on('click', checkResult);
});