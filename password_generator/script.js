
generatepassword = (len, upper, lower, nums, syms) => {

    const lowercase = 'abcdefghijklmnopqrstuvxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=<>?/:";[]{}|~`';

    let allowed = "";
    let password = "";

    allowed += lower ? lowercase : '';
    allowed += nums ? numbers : '';
    allowed += syms ? symbols : '';
    allowed += upper ? uppercase : '';

    if (len <= 0) {
        return `password cannot be 0 character`;
    }
    if(allowed.length === 0){
        return `password must contain aleast one character`;
    }

    for (let i = 0; i < len; i++) {
        const Ranindex = Math.floor(Math.random() * allowed.length);
        password += allowed[Ranindex];
        
    }

    return password;
}

const passwordlength = 10;
const uppercase = true;
const lowercase = true;
const numbers = true;
const symbols = true;

const password = generatepassword(passwordlength, uppercase, lowercase, numbers, symbols);

console.log(`generated password : ${password}`);