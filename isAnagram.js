function isAnagram (arr1,arr2) {
        if (arr1.length !== arr2.length){
                    return false;
        }  
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}

        for(let char of arr1){
                frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
        }
        console.log(frequencyCounter1);
        for(let char of arr2){
                frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
        }
        console.log(frequencyCounter2);

        for(let key in frequencyCounter1){
                if(!(key in frequencyCounter2)){
                        return false;
                }
                if(frequencyCounter2[key] !== frequencyCounter1[key]){
                        return false;
                }
        }
        return true;
}


isAnagram("talia","taila")