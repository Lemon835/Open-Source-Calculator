let num = "";
let prevnum = "";
let mode = "";

function ChangeNumber(Value){
    num += Value

    if(mode == "Add"){
        document.getElementById("Display").textContent = prevnum + " + " + num
    }
    if(mode == "Remove"){
        document.getElementById("Display").textContent = prevnum + " - " + num
    }
    if(mode == ""){
        document.getElementById("Display").textContent = num
    }
}

function Add(){
    mode = "Add"
    prevnum = num
    num = ""
    document.getElementById("Display").textContent = prevnum + " + "
}

function Remove(){
    mode = "Remove"
    prevnum = num
    num = ""
    document.getElementById("Display").textContent = prevnum + " - "
}

function Set(){
    if(mode == "Add"){
        let newnum = Number(num) + Number(prevnum)
        document.getElementById("Display").textContent = newnum
        
        num = newnum
        prevnum = ""
        mode = ""
    }
    if(mode == "Remove"){
        let newnum = Number(prevnum) - Number(num)
        document.getElementById("Display").textContent = newnum
        
        num = newnum
        prevnum = ""
        mode = ""
    }
}

function Clear(){
    num = ""
    prevnum = ""
    mode = ""
    document.getElementById("Display").textContent = ""
}