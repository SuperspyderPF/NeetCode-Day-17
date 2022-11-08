var isSymmetric = function(node1, node2) {
    if(node2 === undefined) {
        node2 = node1.right;
        node1 = node1.left;
    }
    if (node1 === null && node2 === null) return true;  
    if (node1 === null || node2 === null || node1.val !== node2.val) return false;
    return isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left);
};

//one line : 
isSymmetric=(r, x)=>{if(x===undefined){x=r.right;r=r.left;}if(r===null&&x===null)return true;if (r===null||x===null||r.val!== x.val)return false;return isSymmetric(r.left, x.right)&&isSymmetric(r.right, x.left);}
