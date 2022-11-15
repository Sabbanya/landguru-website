window.onload = function () {

    let active1 = false;
    let active2 = false;
    let active3 = false;
    let active4 = false;
    document.getElementById("question1").onclick = function (){
        
        if(active1 == false){
            document.getElementById("otvet1").classList.remove("hidden");
            document.getElementById("otvet1").classList.add("visible");
            active1 = true;
        }
        else{
            document.getElementById("otvet1").classList.remove("visible");
            document.getElementById("otvet1").classList.add("hidden");
            active1 = false;
        }
    }
    document.getElementById("question2").onclick = function (){
        
        if(active2 == false){
            document.getElementById("otvet2").classList.remove("hidden");
            document.getElementById("otvet2").classList.add("visible");
            active2 = true;
        }
        else{
            document.getElementById("otvet2").classList.remove("visible");
            document.getElementById("otvet2").classList.add("hidden");
            active2 = false;
        }
    }
    document.getElementById("question3").onclick = function (){
        
        if(active3 == false){
            document.getElementById("otvet3").classList.remove("hidden");
            document.getElementById("otvet3").classList.add("visible");
            active3 = true;
        }
        else{
            document.getElementById("otvet3").classList.remove("visible");
            document.getElementById("otvet3").classList.add("hidden");
            active3 = false;
        }
    }

    document.getElementById("question4").onclick = function (){
        
        if(active4 == false){
            document.getElementById("otvet4").classList.remove("hidden");
            document.getElementById("otvet4").classList.add("visible");
            active4 = true;
        }
        else{
            document.getElementById("otvet4").classList.remove("visible");
            document.getElementById("otvet4").classList.add("hidden");
            active4 = false;
        }
    }
}