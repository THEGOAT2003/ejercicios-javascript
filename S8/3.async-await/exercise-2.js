/*async function getCharacters () {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await res.jason()
    console.log(characters);
    
}*/

const getCharacters = async () => {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await result.json()
    console.log(characters);

}
getCharacters()