//Creaditendials
const publickey = '48342c5f372aa81b8cd704e870424c46';
const hash  = 'a2f024a0b57719f14d611e3c9c4e71df';

//fetch all characters
async function getCharacters(name){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publickey}&hash=${hash}&name=${name}`);
    const chraracters = res.json();

    return chraracters;
}

//Fetch all omis of the id
async function getComics(id){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}/comic?ts=1&apikey=${publickey}&hash=${hash}`);
    const comics = res.json();

    return comics;
}