var deleteNode = function(root, key) {
    if (!root) return root;
  
    if (root.val === key) {
      if (!root.left) return root.right;
      if (!root.right) return root.left;
  
      let leftmost = root.right;
      while (leftmost.left) leftmost = leftmost.left;
      leftmost.left = root.left;
  
      return root.right;
    }
  
    if (root.val < key) root.right = deleteNode(root.right, key);
    if (root.val > key) root.left = deleteNode(root.left, key);
  
    return root;
  };
///one liner:

  deleteNode = (root, key)=> {if (!root) return root;if (root.val === key) {if (!root.left) return root.right;if (!root.right) return root.left;let leftmost = root.right;while (leftmost.left) leftmost = leftmost.left;leftmost.left = root.left;return root.right;}if (root.val < key) root.right = deleteNode(root.right, key);if (root.val > key) root.left = deleteNode(root.left, key);return root;};