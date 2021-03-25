const compact = (arr) => {
    // [ {}, {}, null, {}, undefined ]

    if(! Array.isArray(arr) ) {
        throw new TypeError('we expect an array');
    }
    
    return arr.filter(Boolean);
}

export default compact;