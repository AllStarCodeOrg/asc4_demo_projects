var allowedKeys = {
  77: 'm',
  65: 'a',
  72: 'h',
  68: 'd',
  73: 'i',
};

var secret = ['m', 'a', 'h', 'd', 'i'];

var secretPosition = 0;

document.addEventListener('keydown', function(e) {
  console.log('e.keyCode is: ', e.keyCode);
  var key = allowedKeys[e.keyCode];
  var requiredKey = secret[secretPosition];

  console.log('key: ', key, '\n requiredKey: ', requiredKey);

  if (key == requiredKey) {

    secretPosition++;
    if (secretPosition == secret.length)
      activateCheats();
  } else
    secretPosition = 0;
});

function activateCheats() {
  window.open('https://imgur.com/AtdPCwy');


}
