const flatten = (root) => {
    if(root == null) return null;
    if(root.left == null && root.right == null) return root;
    
    const leftTail = flatten(root.left);
    const rightTail = flatten(root.right);
    if(leftTail != null){
      leftTail.right = root.right;
      root.right = root.left;
      root.left = null;
    } 
   
   return rightTail != null ? rightTail : leftTail;
   }


//one line: 
flatten=s=>{if(s == null) return null;if(s.left == null && s.right == null) return s;var e = flatten(s.left),x = flatten(s.right);if(e != null){e.right = s.right;s.right = s.left;s.left = null;}return x != null ? x : e;}
    
    
    
    
    
