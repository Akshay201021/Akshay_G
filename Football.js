document.addEventListener("DOMContentLoaded", function() {
    // Check if the subtitle is already populated
    if (!document.querySelector(".card-subtitle").hasAttribute("data-populated")) {
        const subtitle = document.querySelector(".card-subtitle");
        const subtitleText = "In football, the winner is the team that has scored more points at the end of the game. There are multiple ways to score in a football game. The touchdown (TD), worth six points, is the most valuable scoring play in American football. A touchdown is scored when a live ball is advanced into, caught in, or recovered in the opposing team's end zone.[50] The scoring team then attempts a try or conversion, more commonly known as the point(s)-after-touchdown (PAT), which is a single scoring opportunity. A PAT is most commonly attempted from the two- or three-yard line, depending on the level of play. If a PAT is scored by a place kick or drop kick through the goal posts, it is worth one point, typically called the extra point. If it is scored by what would normally be a touchdown it is worth two points, typically called the two-point conversion. In general, the extra point is almost always successful, while the two-point conversion is a much riskier play with a higher probability of failure; accordingly, extra point attempts are far more common than two-point conversion attempts.[62] A field goal (FG), worth three points, is scored when the ball is place kicked or drop kicked through the uprights and over the crossbars of the defense's goalposts. After a PAT attempt or successful field goal, the scoring team must kick the ball off to the other team.[66] A safety is scored when the ball carrier is tackled in his own end zone. Safeties are worth two points, which are awarded to the defense.[50] In addition, the team that conceded the safety must kick the ball to the scoring team via a free kick.[67]";

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