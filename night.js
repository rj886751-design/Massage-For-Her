const body = document.getElementById("body");
const btn = document.getElementById("btn");
const yesBtn = document.getElementById("yes");


btn.addEventListener("mouseover", () => {
    
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    btn.style.position = "fixed"; 
    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";
});


yesBtn.addEventListener("click", () => {
    
    for (let i = 0; i < 100; i++) {
        setTimeout(createHeart, i * 1); 
    }

    
    yesBtn.innerHTML = "Real Baby Love You Jaan 💖";
    yesBtn.style.backgroundColor = "#2ecc71"; 
    yesBtn.style.color = "white";
    
    
    const audio = document.getElementById("song");
    if(audio) {
        audio.play().catch(e => console.log("Audio play blocked until user interacts"));
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💝";
    heart.style.position = "fixed";
    heart.style.fontSize = "21px";
    heart.style.pointerEvents = "none"; 
    heart.style.zIndex = "1000";

    
    const rect = yesBtn.getBoundingClientRect();
    heart.style.left = (rect.left + rect.width / 4) + "px";
    heart.style.top = rect.top + "px";

    document.body.appendChild(heart);

    
    const animationDuration = 20000 + Math.random() * 1000; // 2-3 
    
    heart.animate(
        [
            { transform: "translate(0, 0) scale(1)", opacity: 1 },
            { transform: `translate(${Math.random() * 5000 - 120}px, -${window.innerHeight}px) scale(0.5)`, opacity: 0 }
        ],
        {
            duration: animationDuration,
            easing: "ease-out"
        }
    );

    
    setTimeout(() => {
        heart.remove();
    }, animationDuration);
}