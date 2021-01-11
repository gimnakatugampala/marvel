const searchHero = document.getElementById('enterHero');
const searchName = document.getElementById('name');

//submit the search hero Term

getCharacters()
.then(data => console.log(data))




    //Slider
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicators: false
    });
