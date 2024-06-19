function compareTime(string1 , string2){
    const a = new Date(string1);
    const b = new Date(string2);
    return a.getTime() > b.getTime()
}

module.exports=compareTime;