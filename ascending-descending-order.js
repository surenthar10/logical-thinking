let  a=prompt("Enter the a value"),
     b=prompt("Enter the b value"),
     c=prompt("Enter the c value");

     if(a>b&&a>c){
         if(b>c){
             console.log('descending',a,b,c);
             console.log('ascending',c,b,a);
         }else{
            console.log('descending',a,c,b);
            console.log('ascending',b,c,a);
         }
     }
     if(b>c&&b>a){
         if(c>a){
             console.log('descending',b,c,a);
             console.log('ascending',a,c,b);
         }else{
            console.log('descending',b,a,c);
            console.log('ascending',c,a,b);
         }
     }
     if(c>a&&c>b){
         if(a>b){
             console.log('descending',c,a,b);
             console.log('ascending',b,a,c);
         }else{
            console.log('descending',c,b,a);
            console.log('ascending',a,b,c);
         }
     }