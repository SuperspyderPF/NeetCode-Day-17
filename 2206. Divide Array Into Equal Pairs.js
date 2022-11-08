divideArray = (n, z = n.sort((a,b)=>a-b)) => {for(let i=0;i<z.length;i+=2) if(z[i] != z[i+1]) return false; return true }
