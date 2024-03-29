
    var button = document.getElementById("CAL");


 function BUTTON_CLICK(){

    button.innerHTML="Loading...."; 
 }

 function RUN_CAL()
{   
    
   
    var APR = document.getElementsByName("APR") [0].value; //ask for apr from user
    var DEBT = document.getElementsByName("DEBT") [0].value; //ask for total debt from user
    var YEARS = document.getElementsByName("YEARS") [0].value; //ask for total years from user
    var result=document.getElementById('results');

    var DEBTS=DEBT; //crate a second debt value as a constant - aka inital debt
    var TOTALINT=0;
    var TIMER = 1; //this will represent the current month
    var PAYMENT=0; //this will hold the value for each months calculated  payment 
    var MONTHS=(YEARS*12); //total number of months. Used for the while loop [see while loop]
    var YEAR=(TIMER/12); //holds value for the year based of the current month
    var PRINC=Math.round(DEBT/YEARS/12); //constant, monthly principal payment
    var FULL=0; //this will hold the calculated total monthly paymnet [intrest+princ]
    var GRANDTOTAL=0; //accumulated total payments

    result.innerHTML="";//clear the results elelment


    //you can use ${var} to insert variables into a string
    result.textContent += '--------------------\r\n'+YEARS+' Year Fixed Mortgage at '+(APR*100).toPrecision(5)+'% APR\r\nTotal Debt: $'+DEBT+'\r\nPrincipal Monthly Payment: $'+PRINC+'\r\n--------------------\r\n'; //.toPrecision() sets the number of dec points to display
    
//Calculation Loop//
    while (TIMER!=MONTHS+1)
    { //while the currentmonth [TIMER] does not equal the total number of months [MONTHS], do the loop (a 1 is added so that month 1 = 1 and not 0)
        if (TIMER==MONTHS) {PRINC=DEBT}; //if its the last month make princ the total debt
        PAYMENT = Math.round((DEBT*APR/12)); //calculate new intrest amount
        YEAR = Math.ceil(TIMER/12);    //Current year by taking current month [TIMER] div by 12

        FULL = Math.round(PAYMENT+PRINC);  //calculate total payment
        DEBT=Math.round(DEBT-PRINC);   //calulate new debt by subtracting principal payment from debt
        GRANDTOTAL +=FULL //add payment to total paymnets

        //Print Results
        result.textContent  +=  '\r\n Year: '+ YEAR;
        result.textContent  +=  '\r\n Month: '+ (TIMER-(12*YEAR)+12); //calculates the month of year based off totsl month and years
        result.textContent  +=  '\r\n Intrest: $'+ PAYMENT;
        result.textContent  +=  '\r\n Principle: $'+ PRINC;
        result.textContent  +=  '\r\n Total Payment: $'+ FULL;
        result.textContent  +=  '\r\n Remaining Debt: $'+  DEBT;
        result.textContent  +=  '\r\n Total Months: '+ TIMER;
        result.textContent  +=  '\r\n Grand Total: '+ GRANDTOTAL;
        result.textContent  +=  '\r\n ------------------------';


        //prepar for next loop
    
        TOTALINT=Math.round(TOTALINT+PAYMENT)
        TIMER +=1 //add 1 to TIMER to increment month
    }
    button.innerHTML="Calculate"; /*set button text back to normal*/
    result.scrollIntoView({behavior: "smooth"}); /*this scrolls to the results and does it smoothly. This doesnt work in Safari*/
    
}

