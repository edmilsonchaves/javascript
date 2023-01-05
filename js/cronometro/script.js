
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

function iniciar(){
    cron = setInterval(() => {timer()}, tempo)

}

function pausar() {
    clearInterval(cron)

    
}

function limpar(){
    clearInterval(cron)

    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("cronometro").innerText = "00:00:00"

}

function timer(){

    ss++;

    if (ss == 60){
        ss = 0;
        mm++;
    
    } if(mm == 60){
        mm = 0;
        hh++;
    }
    
    var formato = (hh < 10 ? '0'+ hh : hh) + ':' + (mm < 10 ? '0'+ mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById("cronometro").innerText = formato


}