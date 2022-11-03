var findTarget = function(root, k)  {
    // push all values to array using dfs 
    const result = [];
    if (root === null) return result;
    
    const queue = [root];
    
    while (queue.length !== 0) {
        const row = queue.length;
        const cur = queue.pop();
        
        if (cur.right != null) queue.push(cur.right);
        if (cur.left != null) queue.push(cur.left);
        
        
        result.push(cur.val)
    }
	//from here its pretty much like 2 sum
    for(let i=0;i<result.length;i++) for(let j=i+1;j<result.length;j++) if(result[i]+result[j]===k) return true
    return false 
};