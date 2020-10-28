function sendMessage() 
{
	
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (  firstname == "" || lastname == "" || email == "" || message == "") 
	{
		var message = "Please complete the form.";
		alert(message);
		return false;
		
	} else 
		{
			var message = "Thank you " + firstname + " " + lastname + " " + email + ", we received your message.";
		
			document.getElementById("messageForm".reset);
		
			alert(message);
			ev.preventDefault();
			return false;
		}
}