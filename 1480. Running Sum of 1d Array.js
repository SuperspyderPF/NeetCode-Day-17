var runningSum = function(nums) {
    //loop through nums[i], 0<=i<nums.length-1  
     //insert nums[i]+nums[i+1] into temp variable
     //insert temp into num[i+1]
    for(let i=0; i<nums.length-1; i++){
      let temp=nums[i]+nums[i+1]; 
      nums[i+1]=temp; 
    }
     //return updated nums with running sum
     return nums;    
  };


  //one line: 
  runningSum=n=>{for(i=0;i<n.length-1;i++){var t=n[i]+n[i+1];n[i+1]=t;}return n}