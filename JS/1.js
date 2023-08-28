function jfun1(){

  var name=form1.Name.value;
  var des=form1.Designation.value;
  var email=form1.Email.value;

            //alert(name)
            if(name=="" || des=="" || email=="")
            {
                alert("all fields Required!!!")
                form1.Name.focus();
                return false;
            }
            else
            {
                alert("Go next!!!");
                return true;   
            }
}

