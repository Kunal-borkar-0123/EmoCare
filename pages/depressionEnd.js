const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore

if (mostRecentScore >= 0 && mostRecentScore <=9) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have minimal depression. Your feelings and thoughts are consistent with normal mood fluctuations in everyday life. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}

if (mostRecentScore > 9 && mostRecentScore <=18) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have mild depression. Patients with mild depression have symptoms that impact them for several days, and may interfere with day to day activities. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}

if (mostRecentScore > 18 && mostRecentScore <=29) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have moderate depression. Patients with moderate depression have symptoms that last from several days to weeks, and interfere with daily life. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}

if (mostRecentScore > 29 && mostRecentScore <=63) {
    document.getElementById("result").innerHTML = ("Your score is " + mostRecentScore + ". " + "A score of " + mostRecentScore + " indicates that you may have severe depression. Patients with severe depression have symptoms that last several months. Symptoms interfere with daily life and other people around you have noticed. We suggest speaking to your primary care physician to follow up with the results with this survey, or if you have any lingering questions or concerns.");
}