function generate_password()
{   
    const length = document.getElementById("range_input").value;
    let password = '';

    for (let i = 0; i < length; i++)
    {
        let char = parseInt(Math.random() * 92 + 33) // generates a random number between 0 and 126;
        password += String.fromCharCode(char);
        
    }
    const show_password = document.getElementById("show_password");
    show_password.textContent = password;
}

// calls the function so a random password is shown when page loads
generate_password(); 

function copy_to_clipboard()
{
    // checks if user is under http and alerts s/he that copy button may not work   
    if (window.location.protocol === 'http:')
    {
        Toastify({
            text: "Copy button may not work under HTTP",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    // gets the password and copies it
    const text = document.getElementById("show_password");
    navigator.clipboard.writeText(text.innerHTML);
    
    // changes button content from "Copy" to "Copied!"
    const copy_button = document.getElementById("copy");
    copy_button.innerHTML = "Copied!"

    // delay of 1.5 seconds before changing back to "Copy"
    setTimeout(function ()
    {
        copy_button.innerHTML = "Copy";
    }, 1500);
}