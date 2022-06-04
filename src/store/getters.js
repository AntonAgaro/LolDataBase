export function getChampions(state) {
    return state.champions;
}

export function getChampion(state) {
    return function (id) {
        if (state.champions) {
            return state.champions[id];
        }
    }
}