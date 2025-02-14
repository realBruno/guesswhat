function generate_password()
{   
    const length = document.getElementById("range_input").value;
    let password = '';

    for (let i = 0; i < length; i++)
    {
        let char = parseInt(Math.random() * 94 + 32) // generates a random number between 0 and 126;
        password += String.fromCharCode(char);
    }
    const show_password = document.getElementById("show_password");
    show_password.textContent = password;

     return password;
}

function copy_to_clipboard()
{
    const text = document.getElementById("show_password");

    navigator.clipboard.writeText(text.innerHTML);
}