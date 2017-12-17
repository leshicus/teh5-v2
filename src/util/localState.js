export const getLocalState = ()=> {
    try {
        let state = localStorage.getItem('state')
        if (state === null)
            return undefined

        return JSON.parse(state)
    } catch (e) {
        return undefined
    }
}

export const saveLocalState = (state)=> {
    try {
        const str = JSON.stringify(state)
        localStorage.setItem('state', str)
    } catch (e) {

    }
}