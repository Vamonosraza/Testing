document.getElementById("lcsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const word1 = document.getElementById("word1").value;
    const word2 = document.getElementById("word2").value;
    const lcs = longestCommonSubsequence(word1, word2);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Longest Common Subsequence: " + lcs;
});

function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct LCS
    let i = m;
    let j = n;
    let lcs = [];
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs.unshift(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.join('');
}
