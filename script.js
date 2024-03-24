      function SendEmail() 
      {
          let name=document.getElementById("name").value;
          let email=document.getElementById("email").value;
          let message=document.getElementById("message").value;

          let body ="Name: " + name + "<br/> Email: " + email + "<br/> Message:  <br/>" + message;

          Email.send({
            SecureToken : "2d46953f-64e7-4440-aac9-e92b0e988a42 ",
            To : 'shraddhathorbole15@gmail.com',
            From : "shraddhathorbole15@gmail.com",
            Subject : "Contact Form Submission!",
            Body : body
          }).then(
            message => alert(message)
          );
      }
