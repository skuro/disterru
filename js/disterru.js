(function blink(){
    var changeImg = function (elem, replacement) {

        var current = elem.src;

        var constant = function(val) {
            return function() {return val;};
        };

        var lapse = function() {
            // studies show that on average the blink frequency is 17 per minute
            // see http://www.ncbi.nlm.nih.gov/pubmed/9399231
            return Math.floor(Math.random() * 3500 + 500); // max 3.5s, min 0.5s
        };

        var durations = [constant(100), lapse];

        var blinker = {
            current : current,
            next    : replacement
        };

        var round = 0;

        var execute = function() {
            var current = blinker.current;
            var next    = blinker.next;

            elem.src          = next;

            blinker.current  = next;
            blinker.next     = current;

            var nextLapseFn = durations[round];
            round = (round + 1) % 2;

            window.setTimeout(execute, nextLapseFn());
        };

        window.setTimeout(execute, 1000);

    };

    changeImg(document.getElementById("logo"), "/imgs/moru-oghitu.png");
})()
