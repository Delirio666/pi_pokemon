const getApiInfo = async() =>{
    const apiUrl = await axios.get('http://localhost...')
    const apiInfo = await apiUrl.data.map(e =>{
        return {
            name: e.name,
            ocupattion: e.ocupattion.map(e => e)
        }
    })
    return apiInfo
}
