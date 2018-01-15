// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://eric11eca.github.io/img/lucy/lucy-2.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-4.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-8.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-16.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-32.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-64.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-128.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-256.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-512.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-1024.jpg",
        "http://eric11eca.github.io/img/lucy/lucy-2048.jpg",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
