function fibonacciGenerator (n) {
        var array = [0,1];

        if(n === 1 || n ===2){
            if(n==1){
                array = [0];
            }
            
        }else{
            
            for (var i = 0; i < n-2; i ++){
                 array.push(array[i]+array[i+1]);
            }
            
        }
        
        
        return array
    }