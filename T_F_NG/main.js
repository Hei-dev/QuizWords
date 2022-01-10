var curQues;
var curvarient;
var curvarientStr;
var ans;

function checkAns(){
    checkRadios()

    console.log(curvarient)

    if(qBanks[curQues].Ans[curvarient]==ans){
        document.getElementById("note").innerHTML = "<span style='color:Green'>Correct</span>"
    }
    else{
        document.getElementById("note").innerHTML = "<span style='color:Red'>Wrong.</span> Correct Answer: " + qBanks[curQues].Ans[curvarient]
    }
}

function checkRadios(){
    if(document.getElementById("t").checked){
        ans = "T"
    }
    if(document.getElementById("f").checked){
        ans = "F"
    }
    if(document.getElementById("ng").checked){
        ans = "NG"
    }
}

function setQuestion(){
    curQues = Math.floor(Math.random()*qBanks.length)
    console.log(curQues)
    if(Math.floor(Math.random()*2)==1){
        curvarient = Math.floor(Math.random()*qBanks[curQues].Variant.length-1)+1
        curvarientStr = qBanks[curQues].Variant[curvarient]
        document.getElementById("ques").innerHTML = qBanks[curQues].Question.replace(curvarientStr,variants[curvarientStr])
    }
    else{
        curvarient = 0
        document.getElementById("ques").innerHTML = qBanks[curQues].Question
    }
    
    document.getElementById("topic").innerHTML = qBanks[curQues].Topic
    
    //document.getElementById("ans").value = ""
    document.getElementById("note").innerHTML = ""
}

//