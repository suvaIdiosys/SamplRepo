
function handleSubmit(event) {
    event.preventDefault();
    

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const adrs = document.getElementById('adrs').value;
    const gender = document.getElementsByName('gender');
    const lang = document.getElementsByName('chk-lang');
    const dob = document.getElementById("dob").value;

        
    const fnameError = document.getElementById("fname_error");
    const lnameError = document.getElementById("lname_error");
    const addressError = document.getElementById("address_error");
    const emailError = document.getElementById("email_error");
    const contactError = document.getElementById('contact_error');
    const genderError = document.getElementById('gender_error');
    const langError = document.getElementById('lang_error');
    const dobError = document.getElementById("dob_error");
    

     fnameError.textContent="";
     lnameError.textContent="";
     addressError.textContent="";
     emailError.textContent="";
     contactError.textContent="";
     genderError.textContent="";
     langError.textContent="";
     dobError.textContent="";

     

    let isValid = true;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Validate each field
    if (fname === "") {
        fnameError.textContent = "Please enter your name properly.";
        isValid = false;
    }
    if (lname === "") {
        lnameError.textContent = "Please enter your name properly.";
        isValid = false;
    }
    if (adrs === "") {
        addressError.textContent = "Please enter your address.";
        isValid = false;
    }
    if (email === "" ||!email.includes("@") || !validRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (contact === "" || contact.length !=10) {
        contactError.textContent = "Please enter a valid contact number.";
        isValid = false;
        }
        if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
            genderError.textContent = "Please select your gender."; 
            isValid = false;
            }
        if (!lang[0].checked && !lang[1].checked && !lang[2].checked) {
                    langError.textContent = "Please select at least one language.";
                    isValid = false;
                    }
            if (dob === "") {
                        dobError.textContent = "Please select your date of birth.";
                        isValid = false;
                        }
                        
                        
let Language=""  
    
const obj ={
    "First Name": fname,
    "Last Name": lname,
    "Address": adrs,
    "Email": email,
    "Contact": contact,
    "Gender": gender[0].checked?"Male":gender[1].checked?"Female":"Other",
    "Language":getLanguage(),
    "Date of Birth": dob
    }
    function getLanguage()
        {
           for(let i=0;i<3;i++)
            {
                if(lang[i].checked)
                    {
                        Language+=lang[i].value+", ";
                        console.log(Language);
                    }
            }
            return Language
        }
    
    console.log(obj);


    // output

    const fnameOutput = document.getElementById("fname_output");
    const lnameOutput = document.getElementById("lname_output");
    const addressOutput = document.getElementById("address_output");
    const emailOutput = document.getElementById("email_output");
    const contactOutput = document.getElementById("contact_output");
    const genderOutput= document.getElementById("gender_output");
    const langOutput= document.getElementById("lang_output");
    const dobOutput= document.getElementById("dob_output");
    
    if(isValid)
        {
     fnameOutput.textContent=obj["First Name"];
     lnameOutput.textContent=obj["Last Name"];
     addressOutput.textContent=obj["Address"];
     emailOutput.textContent=obj["Email"];
     contactOutput.textContent=obj["Contact"];
     genderOutput.textContent=obj["Gender"];
     langOutput.textContent=obj["Language"];
     dobOutput.textContent=obj["Date of Birth"];
     
        }
    



    return isValid;
}
