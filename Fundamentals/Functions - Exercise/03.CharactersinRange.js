function charactersInRange(char1,char2){
      
    let starChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));
    let result = [];

    for(let i = starChar + 1;i < endChar;i++){
       result.push(String.fromCharCode(i));

    }

    console.log(result.join(' '));
} 
charactersInRange('a','d');