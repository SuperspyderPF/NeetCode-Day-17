var nextPermutation = function(N) {
    const swap = (a, b) => [N[a],N[b]] = [N[b],N[a]]
    let len = N.length - 1, i, j
    for (i = len - 1; N[i] >= N[i+1];) i--
    for (let k = i+1; len > k; k++, len--) swap(k,len)
    if (~i) {
        for (j = i + 1; N[i] >= N[j];) j++
        swap(i,j)
    }
};


///one line:
nextPermutation=x=>{var swap = (a, b) => [x[a],x[b]] = [x[b],x[a]],len = x.length - 1, i, j;for(i=len-1;x[i]>= x[i+1];)i--;for(k=i+1;len>k;k++,len--)swap(k,len); if(~i){for(j=i+1;x[i]>=x[j];)j++;swap(i,j);}}