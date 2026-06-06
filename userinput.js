let username;

document.getElementById("submit-btn").onclick=function(){
    username = document.getElementById("input").value;
    console.log(username);
    document.getElementById("heading").textContent = `Hello ${username}`
}

