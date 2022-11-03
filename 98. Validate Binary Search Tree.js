function DFS (n, mi, ma) {
    if (!n) return true
    if (n.val <= mi || n.val >= ma) return false
    return DFS(n.left, mi, n.val) && DFS(n.right, n.val, ma)
}

 isValidBST = (root) => DFS(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)