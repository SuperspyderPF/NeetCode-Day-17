canJump=(n,t = n.length-1)=>{for(let ni=t;ni>=0;ni--) if(ni+n[ni]>=t) t = ni;return t === 0;}