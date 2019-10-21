// Number of stars on display
const numStars = 100;

// Star display
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

// Random x, y based on the size of the window
function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

// Letter bounce
var text = document.querySelector('h1');

text.addEventListener('mouseover', onMouseOver);

function onMouseOver(event) {
    var trg = event.target;
    if (trg.tagName.toLowerCase() === 'span') {
        var tl = new TimelineLite();

        tl.to(trg, .1, {
            yPercent: 20,
            scale: 0.7,
            ease: Bounce.easeInOut
        });
        tl.to(trg, .2, {
            yPercent: -30,
            scale: 1.2,
            ease: Bounce.easeInOut
        });
        tl.to(trg, .2, {
            yPercent: 0,
            scale: 1,
            ease: Bounce.easeInOut
        });
    }
}