function fun(){
    let fname = document.getElementById('fname').value;
    console.log(fname);

    let uname = document.getElementById('uname').value;
    console.log(uname);

    let email = document.getElementById('email').value;
    console.log(email);

    let number = document.getElementById('number').value;
    console.log(number);

    let pass = document.getElementById('pass').value;
    console.log(pass);

    let pass1 = document.getElementById('pass1').value;
    console.log(pass1);

    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);

    let hobbies = [];
    let checkbox = document.getElementsByName('hobby');
    for (let i=0; i<checkbox.length; i++){
        if(checkbox[i].checked){
            hobbies.push(checkbox[i].value);
        }
    }
    console.log(hobbies);

}