function where(collection, source) {

    return collection.filter(function(element) {
        return Object.keys(source).every(function(s) {
            return (element[s] === source[s]);
        });
    });
}


where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Romeo", last: "Capulet" })
