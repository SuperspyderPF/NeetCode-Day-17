var searchMatrix = function(matrix, target) {        
    let row = 0, col = matrix[0].length-1
    while(row <= matrix.length-1 && col >= 0) {
        if(matrix[row][col] == target) return true;
        else if (target > matrix[row][col]) row++;
        else col--;
    }
    return false;
}


//one line: 
searchMatrix=(s,e)=>{let x=0,y=s[0].length-1;while(x<=s.length-1&&y>=0){if(s[x][y]==e)return true;else if(e>s[x][y])x++;else y--;}return false;}