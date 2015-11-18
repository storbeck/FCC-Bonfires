function add(x) { 
    var args = Array.prototype.slice.call(arguments, 0); 
    if (x + 0 === x) { 
        if (args.length === 2) { 
            return args[0] + args[1]; 
        } else { 
            return function(y) { 
                return x + y; 
            }; 
            
        } 
        
    } 
    
} 

add(2,3);
