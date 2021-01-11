//Creaditendials
const publickey = '48342c5f372aa81b8cd704e870424c46';
const hash  = 'd41d8cd98f00b204e9800998ecf8427e';

//fetch all characters
async function getCharacters(){
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publickey}&hash=${hash}`);
    const chraracters = res.json();

    return chraracters;
}
