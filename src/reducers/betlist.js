export default (state = {
    betlist: []
}, action) => {
    switch (action.type) {
        case 'FETCH_BETLIST':
            return {
                ...state,
                betlist: action.betlist
            }

        default:
            return state
    }
}