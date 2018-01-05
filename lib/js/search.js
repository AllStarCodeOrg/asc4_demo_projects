function searchingWord(word){
    let re = new RegExp(word);

    let projects = Project.all.filter(x=>{
        //find any project with the word
        
        for(let i of Object.values(x)){
            if(typeof i === "string"){
                if (i.match(re)){
                    return true;
                }
            }
        }
    })

    return projects;
}