var pivotIndex = function (nums, reducer = (a, b) => a + b) {
    for (index = 0; index < nums.length; index++) if ( nums.slice(0, index).reduce(reducer, 0) === nums.slice(index+1, nums.length).reduce(reducer, 0)) return index 
    return -1
        
			
		
    
};


function pivotIndex(n,r=(a,b)=>a+b){{for(i=0;i<n.length;i++)if(n.slice(0,i).reduce(r,0)===n.slice(i+1,n.length).reduce(r,0))return i}return -1}
    
    
