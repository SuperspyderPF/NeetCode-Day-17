const buildTree = (s, e) => {
    if (!s.length || !e.length) return null;
    
    let x=new TreeNode(s[0]),y = e.indexOf(s[0]);
    
    x.left=buildTree(s.slice(1, y + 1), e.slice(0, y));
    x.right = buildTree(s.slice(y + 1), e.slice(y + 1));
    return x;
  }

  ///one line : 
  buildTree=(s,e)=>{if (!s.length || !e.length) return null;let x=new TreeNode(s[0]),y = e.indexOf(s[0]);x.left=buildTree(s.slice(1, y + 1), e.slice(0, y));x.right = buildTree(s.slice(y + 1), e.slice(y + 1));return x;}
    
    
    
    
   
