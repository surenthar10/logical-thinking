let m1= +prompt("Enter the m1 mark"),
     m2=+prompt("Enter the m2 mark"),
     m3=+prompt("Enter the m3 mark"),
     m4=+prompt("Enter the m4 mark"),
     m5=+prompt("Enter the m5 mark");

    total=m1+m2+m3+m4+m5;

    mark=total/5;

    if(mark>=60){
        console.log('The mark is A grade');

    }else if(mark>=50){
        console.log('The mark is b grade');
    
    }else if(mark>=40){
        console.log('The mark is c grade');
    }else{
        console.log('fail');
    }
