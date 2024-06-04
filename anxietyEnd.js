const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore


if (mostRecentScore >= 0 && mostRecentScore <=17) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have no - mild depression. Your feelings and thoughts are consistent with normal mood fluctuations in everyday life. Symptoms are persistent, but they don’t control you. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}

if (mostRecentScore > 17 && mostRecentScore <=24) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have mild - moderate depression. Patients with mild to moderate anxiety have more frequent and persistent symptoms, but everyday life is not severely affected. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}

if (mostRecentScore > 24 && mostRecentScore <=56) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have moderate - severe depression. Patients with moderate to severe depression have debilitating symptoms that impact everyday life. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}
