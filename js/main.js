const searchHero = document.getElementById('enterHeros');
const searchName = document.getElementById('name');
const appendInfo = document.getElementById('info-append');



//submit the search hero Term
searchHero.addEventListener('submit',submitName);

//Submit the searh heros
function submitName(e){
    e.preventDefault();
    if(searchName.value !== ''){
        getCharacters(searchName.value)
        .then(data => {
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
                <button class="btn grey darken-2 get-btn" onclick="clickSeries(${info.id})">
                  get Series
                </button>
                <button class="btn grey darken-1 get-btn" onclick="clickStories(${info.id})">
                  get Stories
                </button>
              </div>
            </div>
            
            `;
        })
        .catch(err => console.log(err))
    }else{
        alert('Please Enter  Name')

    }

}

    //click to get Comics
    function clickComics(id){
        getComics(id)
        .then(data => {
            const comics = data.data.results;
            let output = '';
            comics.forEach(comic =>{
              output += `  <div class="container">
                            <div class="card">
                            <div class="card-image">
                            <img class="materialboxed" width="100%" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
                            <span class="card-title">${comic.title}</span>
                            </div>
                            </div>
                            </div>`
            })
            const appendOutput = document.getElementById('appendOutput').innerHTML = output;
        })
        .catch(err => console.log(err))
    }


     //lik to get all the events
     function clickEvents(id){
        getEvents(id)
        .then(data => {
            const events = data.data.results;
            let output = '';
            events.forEach(event =>{
              output += `  <div class="container">
              <div class="card">
              <div class="card-image">
              <img class="materialboxed" width="100%" src="${event.thumbnail.path}.${event.thumbnail.extension}" />
                <span class="card-title">${event.title}</span>
              </div>
              <div class="card-content">
                <p>${event.description}</p>
              </div>
              <ul class="collection">
                <li class="collection-item">Start Date : ${event.start}</li>
                <li class="collection-item">End Date : ${event.end}</li>
              </ul>
            </div>
            </div>`
            })
            const appendOutput = document.getElementById('appendOutput').innerHTML = output;
        })
    }

    //click to get series
    function clickSeries(id){
        getSeries(id)
        .then(data => {
            const series = data.data.results;
            let output = '';
            series.forEach(serie =>{
              output += `  <div class="container">
                            <div class="card">
                            <div class="card-image">
                            <img class="materialboxed" width="100%" src="${serie.thumbnail.path}.${serie.thumbnail.extension}" />
                            <span class="card-title">${serie.title}</span>
                            <span class="card-title">End Year : ${serie.endYear}</span>
                            </div>
                            </div>
                            </div>`
            })
            const appendOutput = document.getElementById('appendOutput').innerHTML = output;
        })
    }



    //click to get stories
    function clickStories(id){
        getStories(id)
        .then(data => {
            const stories = data.data.results;
            let output = '';
            stories.forEach(story =>{
              output += `  <div class="container">
                            <div class="card">
                            <div class="card-image">
                            <img class="materialboxed" width="100%" src="${story.thumbnail == null ? './img/null_thumnail.png': story.thumbnail.path.story.thumbnail.extension}" />
                            <span class="card-title">${story.title}</span>
                            </div>
                            </div>
                            </div>`
            })
            const appendOutput = document.getElementById('appendOutput').innerHTML = output;
        })
    }

   


    //Slider
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicators: false
    });

    //meterial Box
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems,{});
