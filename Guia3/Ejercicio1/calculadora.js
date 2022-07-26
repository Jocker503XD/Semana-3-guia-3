//Decalracion de variables
var ope=0, val, res=0, lst=0;

function valor(opera){
    val=document.getElementById("pant").value;
    console.log(val);
    console.log(res);
    document.getElementById("pant").value = "";
    switch(opera){
        case 1:
            ope=1;
            res += parseFloat(val);
            break;
        case 2:
            ope=2; 
            res=val;
            break;
        case 3:
            ope=3; 
            if(res==0){
               res++; 
            }
            res *= val;
            break;
        case 4:
            ope=4; 
            if(res==0){
                res++;
            }
            res /= val;
            break;
        case 5:
            ope=5; 
            if(res==0){
                res++;
            }
            res %= val;
            break;
        case 6:
            ope=6; 
            res = "1/"+val;
            break;
            case 7:
                ope=7; 
                res = Math.sqrt(val);
                break;
            case 8:
                ope=8; 
                res = Math.pow(val,2);
                break;


    }
}

function num(ope){
  document.getElementsByName("pant")[0].value += ope;
}

function respuesta(){
    if(ope==0){
        alert("dijite una ecuacion");
    }else{
        lst = document.getElementById("pant").value;
        document.getElementById("pant").value = "";
        switch(ope){
            case 1:
                res += parseFloat(lst);
                break;
            case 2:
                res -= parseFloat(lst);
                break;
            case 3:
                res *= parseFloat(lst);
                break;
            case 4:
                res /= parseFloat(lst);
                break;
            case 5:
                res %= parseFloat(lst);
                break;
            case 6:
                res = "1/"+parseFloat(lst);
                break;
           case 7:
                    res += Math.sqrt(parseFloat(lst));
                    break;
         case 8:
                    res += Math.pow(parseFloat(lst),2);
                    break

        }
        document.getElementById("pant").value = res;
    }
}

function limpiar(){
    document.getElementById("pant").value = "";
    res=0;
    val=0;
    lst=0;
}