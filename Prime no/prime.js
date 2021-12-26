// prime Number;

var n =prompt("enter a number");
n = parseInt(n);
{
    for(i=2; i<=n; i++){
        if(n % i == 0){
            flsg =1;
            break;
        }
    }
    if(flag == 0){
        alert(n +"prime-number");
    }else{
        alert(n +"Non-Prime");
    }
}