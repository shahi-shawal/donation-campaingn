const getToLs = ()=>{
    const getData = localStorage.getItem("Data");
    if (getData) {
        return JSON.parse(getData)
    }
    else{
        return[];
    }
}

const saveToLs = (id)=>{
    const savedata= getToLs();
    savedata.push(id)
    const savedatas = JSON.stringify(savedata)
    localStorage.setItem("Data",savedatas)

}




export {getToLs, saveToLs}