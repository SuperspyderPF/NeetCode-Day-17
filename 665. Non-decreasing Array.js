function checkPossibility(n,jz = 0){
    for(i = 0; i< n.length - 1; i++)  if (n[i] > n[i + 1]) if(jz++ || n[i - 1] > n[i + 1] && n[i] > n[i + 2]) return false
    return true
  }


  //one line: 
  checkPossibility=(n,jz = 0)=>{for(i=0;i<n.length-1;i++)if(n[i]>n[i+1])if(jz++||n[i-1]>n[i+1]&&n[i]>n[i + 2])return false;return true }