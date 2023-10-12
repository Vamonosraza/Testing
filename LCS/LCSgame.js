let lcs = '';

document.getElementById("lcsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const word1 = document.getElementById("word1").value;
    const word2 = document.getElementById("word2").value;
    lcs = longestCommonSubsequence(word1, word2);
    const scsLength = word1.length + word2.length - lcs.length;
    const scs = findShortestLCS(word1, word2, lcs);

    document.getElementById('showLCSButton').setAttributeNS('data-lcs', lcs);
    document.getElementById('shortLCSButton').setAttributeNS('data-scs', scs);
});

document.getElementById('shortLCSButton').addEventListener('click', function() {
    const scs = this.getAttributeNS('data-scs');
    displayResults('SCS: ' + scs);
});

document.getElementById('showLCSButton').addEventListener('click', function() {
    const lcs = this.getAttributeNS('data-lcs');
    displayResults('LCS: ' + lcs);
});   

function displayResults(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
}



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

function findShortestLCS(str1, str2) { // shortest LCS available
    let result = '';
    let i = 0, j = 0, k = 0;
    while (k < lcs.length){
        while (str1[i] != lcs[k]) {
            result += str1[i];
            i++;
        }
        while (str2[j] != lcs[k]) {
            result += str2[j];
            j++;
        }

        result += lcs[k];
        i++;
        j++;
        k++;
    }

    result += str1.substring(i) + str2.substring(j);
    return result;
}
