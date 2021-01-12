//Creaditendials
const publickey = '48342c5f372aa81b8cd704e870424c46';
const hash  = 'a2f024a0b57719f14d611e3c9c4e71df';

//fetch all characters
async function getCharacters(name){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publickey}&hash=${hash}&name=${name}`);
    const chraracters = res.json();

    return chraracters;
}

//Fetch all comics of the id
async function getComics(id){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=${publickey}&hash=${hash}`);
    const comics = res.json();

    return comics;
}


//Fetch all Stories of the id
async function getStories(id){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}/stories?ts=1&apikey=${publickey}&hash=${hash}`);
    const stories = res.json();

    return stories;
}

//Fetch all Series of the id
async function getSeries(id){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}/series?ts=1&apikey=${publickey}&hash=${hash}`);
    const series = res.json();

    return series;
}


//Fetch all Events of the id
async function getEvents(id){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}/events?ts=1&apikey=${publickey}&hash=${hash}`);
    const events = res.json();

    return events;
}