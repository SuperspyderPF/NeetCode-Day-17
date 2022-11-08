lowestCommonAncestor = (s, j, z)=>{
    if(!s || s.val == j.val || s.val == z.val) return s;
    
    let left = lowestCommonAncestor(s.left, j, z);
    let right = lowestCommonAncestor(s.right, j, z);

    return (left && right) ? s : left || right;
};

///one line: 
lowestCommonAncestor=(s,j,z)=>{if(!s||s.val==j.val||s.val==z.val) return s;let left=lowestCommonAncestor(s.left,j,z),right=lowestCommonAncestor(s.right,j,z);return(left&&right)?s:left||right;}