document.addEventListener("DOMContentLoaded", function() {
    // Check if the subtitle is already populated
    if (!document.querySelector(".card-subtitle").hasAttribute("data-populated")) {
        const subtitle = document.querySelector(".card-subtitle");
        const subtitleText = "A game consists of a sequence of points played with the same player serving, and is won by the first side to have won at least four points with a margin of two points or more over their opponent. Normally the server's score is always called first and the receiver's score second. Score calling in tennis is unusual in that (except in tie-breaks) each point has a corresponding call that is different from its point value. The current point score is announced orally before each point by the umpire, or by the server if there is no umpire. For instance, if the server has won three points so far in the game, and the non-server has won one, the score is 40–15. When both sides have won the same number of points within a given game—i.e., when each side has won one, or two, points—the score is described as 15 all and 30 all, respectively. However, if each player has won three points, the score is called as deuce, not 40 all. From that point on in the game, whenever the score is tied, it is described as deuce regardless of how many points have been played.";
        const createWord = (text, index) => {
            const word = document.createElement("span");
            word.textContent = `${text} `;
            word.classList.add("card-subtitle-word");
            return word;
        };

        const addWord = (text, index) => {
            setTimeout(() => {
                const word = createWord(text, index);
                subtitle.appendChild(word);
                // Trigger reflow to ensure transition is applied
                void word.offsetWidth;
                word.style.opacity = 1;
                word.style.transform = "translateY(0%)";
            }, index * 20);
        };

        subtitleText.split(" ").forEach(addWord);

        // Set attribute to mark subtitle as populated
        subtitle.setAttribute("data-populated", "true");
    }
});
function goToHomePage(){


 window.location.href="index.html";

}