document.addEventListener("DOMContentLoaded", function() {
    var buttons, i;

    buttons = document.getElementsByClassName('page-button-play');
    for(i=0; i<buttons.length; i++) buttons[i].addEventListener('click', siteButtonPlay);

    buttons = document.getElementsByClassName('page-button-subscribe');
    for(i=0; i<buttons.length; i++) buttons[i].addEventListener('click', siteButtonSubscribe);

    // console.log("Buttons configured", buttons);

    function siteButtonPlay(e) {
        relay('INCLUDE game/loader.js');
        relay('PLAY');
    }

    function siteButtonSubscribe(e) {
        document.location.href = 'site/subscribe.html';
    }

});
