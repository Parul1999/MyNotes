export const getApiCall = async (url, token) => {
    const headers = { 'authorization': token }
    return (await fetch(url, { headers ,method:'GET' })
        .then(response => response.json())
        .then(json => {
            return new Promise((resolve, reject) => {
                return resolve(json)
            })
        }
        ))
}

export const postApiCall = async (url, requestdata, token) => {
    const headers = { 'authorization': token }
    const body = requestdata
    return (await fetch(url, { headers, body:JSON.stringify(body) ,method:'POST'})
        .then(response => response.json())
        .then(json => {
            return new Promise((resolve, reject) => {
                return resolve(json)
            })
        }
        ))

}


export const postAuthCall = async (url, requestdata) => {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    const Method = {}
    const body = requestdata
    return(await fetch(url, { method:'POST', body:JSON.stringify(body) })
    // .then(response => response.json())
    .then(json => {

        return new Promise((resolve, reject) => {
            return resolve(json)
        })
    }
    ))


}
