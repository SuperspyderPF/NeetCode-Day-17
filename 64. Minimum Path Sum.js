var minPathSum = function(g) {
    var m=g[0].length,n=g.length;
    for(i=1;i<n;i++){
        g[i][0]+=g[i-1][0];
    }
    for(j=1;j<m;j++){
        g[0][j]+=g[0][j-1]
    }
    for(i=1;i<n;i++){
        for(j=1;j<m;j++){
            g[i][j]+=Math.min(g[i-1][j], g[i][j-1])
        }
    }
    return g[n-1][m-1]
}

///one line:
minPathSum=g=>{var m=g[0].length,n=g.length;for(i=1;i<n;i++){g[i][0]+=g[i-1][0];}for(j=1;j<m;j++){g[0][j]+=g[0][j-1];}for(i=1;i<n;i++){for(j=1;j<m;j++){g[i][j]+=Math.min(g[i-1][j], g[i][j-1]);}}return g[n-1][m-1];}