function validateform(){  
    let first_name = document.myform.first_name.value ;  
    let last_name = document.myform.last_name.value; 
    let email_address = document.myform.email_address.value;  
    let password = document.myform.password.value;  
   
      
  
    if (first_name==null || first_name==""){  
        document.getElementById("first").innerText ="First name cannot be empty";
       return  false
    } 
    else if (last_name==null || last_name==""){  
      document.getElementById("last").innerHTML="Last name cannot be empty";
      return false

      } 
     else if (email_address==null || email_address==""){  
      document.getElementById("email").innerHTML ="Email name cannot be empty";
      return false

      } 
      else if( password == null || password =="" ){
        document.getElementById("password").innerHTML ="password name cannot be empty";
        return false
     
      }
      
       
    }  