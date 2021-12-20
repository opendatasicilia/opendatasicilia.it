//Credits: bbeckford at https://stackoverflow.com/a/41267747

const truncateStringToWord = (str, length) => {
    if(str.length <= length){
        // provided string already short enough
        return(str);
    }
    // cut string down but keep 1 extra character so we can check if a non-word character exists beyond the boundary
    str = str.substr(0, length+1);
    // cut any non-whitespace characters off the end of the string
    if (/[^\s]+$/.test(str)){
        str = str.replace(/[^\s]+$/, "");
    }
    // cut any remaining non-word characters
    str = str.replace(/[^\w]+$/, "");
    var ellipsis = str.length > 0 ? '...' : '';
    return(str + ellipsis);
}

export default truncateStringToWord