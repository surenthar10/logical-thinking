let n=prompt("Enter n value in prime or not"),
flag=0;

for(i=2;i<=n/2;i++){
    if(n%i==0){
        flag=1;
    }
}
if(flag==0){
    console.log('The number is prime');
}else{
    console.log('The number is not  prime');
 
}


// prime no with in range


let n1=prompt("Enter n1 value in prime range");

for(i=2;i<=n1;i++){
    let a=0;
    for(j=2;j<i/2;j++){
        if(i%j==0){
            a=1;
        }
    }
  if(a==0){
        console.log('The prime number is:', i);
  }
}