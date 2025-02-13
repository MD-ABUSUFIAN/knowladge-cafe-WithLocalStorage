const getLocalStorage=()=>{
    const getLs=localStorage.getItem("bookMark")
    if(getLs){
        return JSON.parse(getLs)
    }
    return[]
}

const saveLocalAStorage=(data)=>{
    const convert=JSON.stringify(data)
    localStorage.setItem('bookMark',convert)
}

const addLocalStorage=(id)=>{
    const checkLs=getLocalStorage();
    checkLs.push(id)
    saveLocalAStorage(checkLs)
}
const removeLocalStorage=id=>{
    const getData=getLocalStorage();
    const filter=getData.filter(data=>data!==id)
    if(filter){
        saveLocalAStorage(filter)
    }
}

export {addLocalStorage,getLocalStorage,removeLocalStorage};