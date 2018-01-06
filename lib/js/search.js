function searchingWord(word, flag = false){
    let re = new RegExp(word.toLowerCase());

    let projects = Project.all.filter(x=>{
        //find any project with the word
        if(flag){
            if (x.team[0].cohort===word){
                return true;
            }
        }else{
            for(let i of Object.values(x)){
                if(typeof i === "string"){
                    if (i.toLowerCase().match(re)){
                        return true;
                    }
                }
            }
        }
    })

    return projects;
}

$(function() {
    $('input').keypress(function(e) {
        // Enter pressed?
        let word = $("#search").val();
        if(e.which == 13 && word.length>0) {
            //clearing container
            $("#giantContainer").empty();
            let projects = searchingWord(word)
            
            if(projects.length === 0){
                $("#giantContainer").append('<div class="nope">No results found</div>')
            }else{
                projects.forEach(x=>bobTheBuilder(x));
            }

            $("#search").val("");
        }
    });
});

function cohortSelect(){
    let word = $("#by_cohort").val();
    $("#giantContainer").empty();
    
    if(word != "All"){
        searchingWord(word, true).forEach(x=>bobTheBuilder(x));
    }else{
        searchingWord("").forEach(x=>bobTheBuilder(x));
    }
}