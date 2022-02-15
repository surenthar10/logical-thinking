let  gender=prompt("Enter the gender"),

    age=prompt("Enter the age");

    if((gender=='male')&&(age>=23)){
        console.log('The male is marriage eligibility');
    }
    else if((gender=='female')&&(age>=21)){
        console.log('The female is marriage eligibility');
    }
    else{
        console.log('Not marriage eligibility');
    }