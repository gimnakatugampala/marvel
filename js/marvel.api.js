//Creaditendials
const publickey = '48342c5f372aa81b8cd704e870424c46';
const hash  = 'a2f024a0b57719f14d611e3c9c4e71df';

//fetch all characters
async function getCharacters(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publickey}&hash=${hash}`);
    const chraracters = res.json();

    return chraracters;
}


//fetch all Comics
async function getComics(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publickey}&hash=${hash}`);
    const comics = res.json();

    return comics;
}

//fetch all Creators
async function getCreators(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/creators?ts=1&apikey=${publickey}&hash=${hash}`);
    const creators = res.json();

    return creators;
}

//fetch all Events
async function getEvents(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/events?ts=1&apikey=${publickey}&hash=${hash}`);
    const events = res.json();

    return events;
}

//fetch all Series
async function getSeries(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/series?ts=1&apikey=${publickey}&hash=${hash}`);
    const series = res.json();

    return series;
}


//fetch all Stories
async function getStories(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/stories?ts=1&apikey=${publickey}&hash=${hash}`);
    const stories = res.json();

    return stories;
}