function duplicateEncode(word){
    let smWord = word.toLowerCase()
    let result = '';
    for(let x = 0; x< smWord.length; x++){
        if(smWord.indexOf(smWord[x]) !== smWord.lastIndexOf(smWord[x])){
            result += ')'
        }else{
            result += '('
        }
    }
    return result
}
console.log(duplicateEncode("(( @"))