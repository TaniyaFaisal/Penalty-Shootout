var possibleRuns = [0,1]; 

var team1= {
    name:'Real Madrid',
    runs: [],
    score: 0
};
var team2= {
    name:'Huesca',
    runs: [],
    score: 0
};

var turn;
window.onload = ()=>{
    selectTurn(); 
    updateButtonText(); 
    updateScore(); 
    updateNames();
}

var selectTurn = ()=>{
    turn = Math.round(Math.random())+1;
    console.log(turn);
}

var updateButtonText = ()=>{
    var button = document.getElementById("strike-button");
    console.log(button);
    var result = document.getElementById("result");
    var btn1= document.getElementById("btn1")
    result.style.visibility = "";
    
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove(); 
        btn1.textContent="Try Again"
        result.textContent = team1.score === team2.score? `It is a draw`:`${team1.score>team2.score?team1.name:team2.name} Wins`;
    }else{
        turn = turn===1?2:1;
    }
    button.textContent = `${turn===1?team1.name:team2.name} Strike`;
}

var updateScore =()=>{
    
    document.getElementById("team-1-score").textContent = team1.score;
     document.getElementById("team-2-score").textContent = team2.score;
     updateRuns();
}

var updateRuns=()=>{
var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
team1.runs.forEach((run,index)=>{
    run === 1 ? teamOneRunsElement[index].style.backgroundColor = "#135813" :teamOneRunsElement[index].style.backgroundColor = "#d00c0c";
});
team2.runs.forEach((run,index)=>{
    run === 1 ? teamTwoRunsElement[index].style.backgroundColor = "#135813" : teamTwoRunsElement[index].style.backgroundColor = "#d00c0c";

});
}

var updateNames=()=>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var handleStrikeButtonClick = ()=>{
    var run = possibleRuns[Math.floor(Math.random()*possibleRuns.length)];
    if(turn ===1){
        team1.runs.push(run);
        team1.score = calculateScore(team1.runs);
        console.log(team1.score);
    }
    else{
        team2.runs.push(run);
        team2.score = calculateScore(team2.runs);
        console.log(team2.score);
    }
    updateButtonText();
    updateScore();

}
var calculateScore = (runs)=>{
    return runs.map(run=>{
        return run;
    }).reduce((total,run)=>total+run,0);
};