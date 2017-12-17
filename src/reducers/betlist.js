export default (state = {
    betlist: []
}, action) => {
    switch (action.type) {
        case 'FETCH_BETLIST':
            return {
                ...state,
                betlist: action.betlist
            }
        case 'FILTER_MADE_DATETIME':
            return {
                ...state,
                betlist: {
                    filter:{
                        madeDatetime: action.madeDatetime
                    }
                }
            }
        default:
            return state
    }
}