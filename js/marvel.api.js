//Creaditendials
const publickey = '48342c5f372aa81b8cd704e870424c46';
const hash  = 'a2f024a0b57719f14d611e3c9c4e71df';

//fetch all characters
async function getCharacters(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/events?ts=1&apikey=${publickey}&hash=${hash}`);
    const chraracters = res.json();

    return chraracters;
}
