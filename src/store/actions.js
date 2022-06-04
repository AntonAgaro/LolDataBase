export async function fetchChampions(context) {
    const data = await fetch('https://ddragon.leagueoflegends.com/cdn/12.10.1/data/ru_RU/champion.json');
    const json = await data.json()
    console.log(json.data)
    context.commit('getChampions', json.data);
}