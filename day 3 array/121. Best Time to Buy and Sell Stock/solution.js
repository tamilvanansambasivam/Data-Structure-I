function maxProfit(prices) {
    let maxProfit = 0;
    for(let buy=0;buy<prices.length;buy++){
        for (let sell = buy+1; sell < prices.length; sell++) {
            let profit=prices[sell]-prices[buy];
            maxProfit=Math.max(maxProfit, profit)
            
        }
    }
    return maxProfit
}
//this program run successfully in my computer 
//but it does not accepted because Time Limit Exceed(TLE) error is occur

//time complexity : O(n^2)
//space complexity: O(1)