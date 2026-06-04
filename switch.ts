// switch

let food = 2;
"Enter your choice:"
console.log("1. PIZZA");
console.log("2. BURGER");
console.log("3. BIRYANI");
console.log("4. SHAWARNA");
console.log("5. EXIT");


switch (food) {
    case 1:
        console.log("food : PIZZA \nprize : 170 \n");
        break;
    case 2:
        console.log("food : BURGER \nprize : 149 \n");
        break;
    case 3:
        console.log("food : BIRYANI \nprize : 160 \n");
        break;
    case 4:
        console.log("food : SHAWARNA \nprize : 120 \n");
        break;
    case 5:
        console.log("EXIT");
        break;
    default:
        console.log("Enter a valid choice...");
        break;
    
}

console.log("EXITING TH APPLICATION....")