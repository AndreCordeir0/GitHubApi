
export function convertDateToText(mes){
    if(!mes){
        return '';
    }
    let mensagem;
    switch(mes) {
        case "01":
            mensagem ="Jan"
            break;
        case "02":
            mensagem ="Feb"
            break;
        case "03":
            mensagem ="Mar"
            break;
        case "04":
            mensagem ="Apr"
            break;
        case "05":
            mensagem ="May"
            break;
        case "06":
            mensagem ="June"
            break;
        case "07":
            mensagem ="Jul"
            break;
        case "08":
            mensagem ="Aug"
            break;
        case "09":
            mensagem ="Sept"
            break;
        case "10":
            mensagem ="Oct"
            break;
        case "11":
            mensagem = "Nov";
            break;
        case "12":
            mensagem = "Dec";
            break;
    }
    return mensagem;
}
