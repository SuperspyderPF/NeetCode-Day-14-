function maxSubArray(n,s =0, sol = -Infinity) {
    for(let i=0;i<n.length;i++) s = Math.max(n[i], s + n[i]), sol = Math.max(s, sol)
    return sol
};