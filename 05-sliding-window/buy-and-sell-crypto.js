class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxDiff = 0;
        let diff = 0;
        for (let buy = 0; buy < prices.length - 1; buy++) {
            for (let sell = buy + 1; sell < prices.length; sell++) {
                diff = prices[sell] - prices[buy];
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
        }
        return maxDiff;
    }
}
