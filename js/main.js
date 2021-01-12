const searchHero = document.getElementById('enterHeros');
const searchName = document.getElementById('name');
const appendInfo = document.getElementById('info-append');


//submit the search hero Term
searchHero.addEventListener('submit',submitName);

//Submit the searh heros
function submitName(e){
    e.preventDefault();
    getCharacters(searchName.value)
    .then(data => {
        console.log(data.data.results[0])
      const info =  data.data.results[0];
        appendInfo.innerHTML = `
        <div class="row">
          <div class="col s12 m5">
            <div class="card">
              <div class="card-image">
                <img src="${info.thumbnail.path}.${info.thumbnail.extension}" />
                <span class="card-title">${info.name}</span>
              </div>
            </div>
          </div>
          <div class="col s12 m7">
            <h5>${info.name}'s Info</h5>
            <p>
             ${info.description}
            </p>
            <button class="btn grey darken-4 get-btn" onclick="clickComics(${info.id})">
              get Comics
            </button>
            <button class="btn grey darken-3 get-btn" onclick="clickEvents(${info.id})">
              get Events
            </button>
            <button class="btn grey darken-2 get-btn" onclick="clickCreators(${info.id})">
              get Creators
            </button>
            <button class="btn grey darken-1 get-btn" onclick="clickStories(${info.id})">
              get Stories
            </button>
          </div>
        </div>
        
        `;
    })
    .catch(err => console.log(err))

}

    //click to get Comics
    function clickComics(id){
        getComics(id)
        .then(data => console.log(data))
    }

    //click to get events
    function clickEvents(id){
        console.log(id)
    }

    //clik to get Creators
    function clickCreators(id){
        console.log(id)
    }


    //click to get stories
    function clickStories(id){
        console.log(id)
    }






    //Slider
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicators: false
    });
