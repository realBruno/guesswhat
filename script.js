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

generate_password();

function copy_to_clipboard()
{
    const text = document.getElementById("show_password");
    navigator.clipboard.writeText(text.innerHTML);
    
    // change button content from "Copy" to "Copied!"
    const copy_button = document.getElementById("copy");
    copy_button.innerHTML = "Copied!"

    // delay of 1.5 seconds before changing back to "Copy"
    setTimeout(function ()
    {
        copy_button.innerHTML = "Copy";
    }, 1500);
}