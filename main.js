var curQues;

function checkAns(){
    if(qBanks[curQues].Ans.includes(document.getElementById("ans").value)){
        document.getElementById("note").innerHTML = "<span style='color:Green'>Correct</span>"
    }
    else{
        document.getElementById("note").innerHTML = "<span style='color:Red'>Wrong.</span> Correct Answer: " + qBanks[curQues].Ans
    }
}

function setQuestion(){
    curQues = Math.floor(Math.random()*qBanks.length)
    console.log(curQues)
    document.getElementById("ques").innerHTML = qBanks[curQues].Question
    document.getElementById("ans").value = ""
}

//