let n=prompt("Enter the n value"),
   rem=0,
   rev=0;

    while(n>0){

    rem=n%10;
    rev=(rev*10)+rem;
    c=n-rem;
    n=c/10;

   }
   console.log('The reverse number:' ,rev);  