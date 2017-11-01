document.addEventListener("DOMContentLoaded", function() {

    // Event Listeners
    each('page-button-play', function(button) { button.addEventListener('click', siteButtonPlay)});
    each('page-button-subscribe', function(button) { button.addEventListener('click', siteButtonSubscribe)});
    each('toggle-page-menu', function(button) { button.addEventListener('click', togglePageMenu)});

    
    
    // Functions

    function siteButtonPlay(e) {
        relay('INCLUDE game/loader.js');
        relay('PLAY');
    }

    function siteButtonSubscribe(e) {
        document.location.href = 'site/contribute.html';
    }

    function togglePageMenu(e) {
        document.body.classList.toggle('menu');
    }

    function each(className, callback) {
        var elements = document.getElementsByClassName(className);
        for(var i=0; i<elements.length; i++) 
            callback(elements[i]); // .addEventListener('click', siteButtonPlay);
    }
});
