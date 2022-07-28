function compute(){

    var principal= document.getElementById("principal").value
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);  //logic to convert the 'No of Years' into the actual year in the future.
    
    //parseInt is a function that parses a string argument and returns an integer.
      

      if(principal > 0){  //test if the amount number is positive
        var a = "If you deposit <mark>" +principal+",</mark><br>";
        var b = "at an interest rate of <mark>"+rate+"%,</mark><br>";
        var c = "You will receive an amount of <mark>"+interest+",</mark><br>";
        var d = "in the year <mark>"+year+"</mark>"; 
       
        document.getElementById("result").innerHTML=a+b+c+d;
      }
      else if( principal <=0){       
          alert("Enter a positive number");
          document.getElementById("principal").focus();
          return
      }
      else if( principal = ""){       
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return
      }
}


function updateRate(){ // alter contents of an HTML element as text string
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
} 