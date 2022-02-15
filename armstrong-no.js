let n=prompt("Enter the n value"),
    sum=0,
    rem=0;
     temp=n;
    while(n>0){
        rem=n%10;
        sum=sum+(rem*rem*rem);
        c=n-rem;
        n=c/10;
    } if(sum==temp){
        console.log('The number is armstrong');
    }else{
        console.log('The number is not  armstrong');

    }
