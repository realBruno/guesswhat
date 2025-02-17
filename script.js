function generate_password() {
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;
    const length = document.getElementById("range_input").value;
    let password = '';
    
    const display_length = document.getElementById("display_length");
    display_length.innerHTML = `${length}`;
    
    


    // i'll use a bunch of ifs because i have no clue on how to do that more efficiently
    if (uppercase && lowercase && numbers && special) {
        for (let i = 0; i < length; i++) {
            let char = parseInt(Math.random() * 92) + 33;
            password += String.fromCharCode(char);
        }
    }
    else if (uppercase && lowercase && numbers) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (122 - 48 - 1)) + 48;
            if (48 <= char && char <= 57 || // number
                65 <= char && char <= 90 || // uppercase
                97 <= char && char <= 122) {   // lower
                password += String.fromCharCode(char);
                i++
            }
        }
    }
    else if (uppercase && lowercase && special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (126 - 33 - 1)) + 33;
            if (33 <= char && char <= 47 || 58 <= char && char <= 64 ||
                91 <= char && char <= 96 || 123 <= char && char <= 126 || // special
                65 <= char && char <= 90 || // uppercase
                97 <= char && char <= 122) {   // lower
                password += String.fromCharCode(char);
                i++
            }
        }
    }
    else if (lowercase && numbers && special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (126 - 33 - 1)) + 33;
            if (33 <= char && char <= 47 || 58 <= char && char <= 64 ||
                91 <= char && char <= 96 || 123 <= char && char <= 126 || // special
                48 <= char && char <= 57 || // number
                97 <= char && char <= 122) { // lower
                password += String.fromCharCode(char);
                i++
            }
        }
    }
    else if (uppercase && numbers && special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (90 - 33 - 1)) + 33;
            if (33 <= char && char <= 47 || 58 <= char && char <= 64 || 91
                <= char && char <= 96 || 123 <= char && char <= 126 || // special
                65 <= char && char <= 90 || // upper
                48 <= char && char <= 57) { // number
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (uppercase && lowercase) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (122 - 65 - 1)) + 65;
            if (65 <= char && char <= 90 || // upper
                97 <= char && char <= 122) { // lower
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (uppercase && numbers) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (90 - 48 - 1)) + 48;
            if (65 <= char && char <= 90 || // upper
                48 <= char && char <= 57) { // number
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (uppercase && special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (90 - 33 - 1)) + 33;
            if (65 <= char && char <= 90 || // upper
                33 <= char && char <= 47 || 58 <= char && char <= 64 ||
                91 <= char && char <= 96 || 123 <= char && char <= 126 // special
            ) {
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (lowercase && numbers) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (122 - 48 - 1)) + 48;
            if (97 <= char && char <= 122 || // lower
                48 <= char && char <= 57) { // number
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (lowercase && special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (122 - 33 - 1)) + 33;
            if (97 <= char && char <= 122 || // lower
                33 <= char && char <= 47 || 58 <= char && char <= 64 ||
                91 <= char && char <= 96 || 123 <= char && char <= 126 // special
            ) {
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (numbers && special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (126 - 33 - 1)) + 33;
            if (48 <= char && char <= 57 || // number
                33 <= char && char <= 47 || 58 <= char && char <= 64 ||
                91 <= char && char <= 96 || 123 <= char && char <= 126 // special
            ) {
                password += String.fromCharCode(char);
                i++;
            }
        }
    }
    else if (uppercase) {
        for (let i = 0; i < length; i++) {
            let char = parseInt(Math.random() * (90 - 65 - 1)) + 65;
            password += String.fromCharCode(char);
        }
    }
    else if (lowercase) {
        for (let i = 0; i < length; i++) {
            let char = parseInt(Math.random() * (122 - 97 - 1)) + 97;
            password += String.fromCharCode(char);
        }
    }
    else if (numbers) {
        for (let i = 0; i < length; i++) {
            let char = parseInt(Math.random() * (57 - 48 - 1)) + 48;
            password += String.fromCharCode(char);
        }
    }
    else if (special) {
        for (let i = 0; i < length;) {
            let char = parseInt(Math.random() * (126 - 33 - 1)) + 33;
            if (33 <= char && char <= 47 || 58 <= char && char <= 64 ||
                91 <= char && char <= 96 || 123 <= char && char <= 126 // special
            ) {
                password += String.fromCharCode(char);
                i++;
            }
        }
    }

    const show_password = document.getElementById("show_password");
    show_password.textContent = password;

    const checkboxes = document.querySelectorAll("input");
    let flag = 1;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            flag = 0;
            break;
        }
    }
    if (flag) {
        document.getElementById("uppercase").checked = true;
        return generate_password();
    }
}

// calls the function so a random password is shown when page loads
generate_password();

function copy_to_clipboard() {
    // checks if user is under http and alert that copy button may not work   
    if (window.location.protocol === 'http:') {
        Toastify({
            text: "Copy button may not work under HTTP",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "transparent",
                color: "white"
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }

    // gets the password and copies it
    const text = document.getElementById("show_password");
    navigator.clipboard.writeText(text.innerHTML);

    // changes button content from "Copy" to "Copied!"
    const copy_button = document.getElementById("copy");
    copy_button.innerHTML = "Copied!"

    // delay of 1.5 seconds before changing back to "Copy"
    setTimeout(function () {
        copy_button.innerHTML = "Copy";
    }, 1500);
}