function sparkles() {
    let sparklesDiv = document.getElementsByClassName('sparkles')[0];
    let inputCb = document.getElementById('cb');
    let nullbase;
    let numberOfSparkles = 12;
    let degree;
    for (let i = 0; i < 12; i++) {
        nullbase = i - 1;
        degree = (360 / numberOfSparkles) * nullbase;
        sparklesDiv.innerHTML += '<div class="sparkle sparkle-' + i + '" style="transform: rotate(' + degree + 'deg) translateY(-15px) scaleY(0)"></div>';
    }
    let sparkle = document.getElementsByClassName('sparkle');
    inputCb.addEventListener('click', function() {
        var nBase;
        var deg;
        var numberOfSparkles = 12;
        if (inputCb.checked) {
            for (let j = 0; j < 12; j++) {
                nBase = j - 1;
                deg = (360 / numberOfSparkles) * nBase;
                sparkle[j].style.cssText = 'transform: rotate(' + deg + 'deg) translateY(-50px) scaleY(1); opacity: 0; transition: .5s ease-in-out';
            }
        } else {
            for (let j = 0; j < 12; j++) {
                nBase = j - 1;
                deg = (360 / numberOfSparkles) * nBase;
                sparkle[j].style.cssText = 'transform: rotate(' + deg + 'deg) translateY(-15px) scaleY(0)';
            }
        }
    });
}
sparkles()
