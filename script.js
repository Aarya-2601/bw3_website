const modal=document.getElementById("modal");
const modalContent=document.getElementById("modalContent");
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const introSound = document.getElementById("introSound");

// enterBtn.addEventListener("click", () => {

//     // Prevent multiple clicks
//     enterBtn.disabled = true;

//     // Play sound
//     introSound.currentTime = 0;

//     introSound.play().catch(error => {
//         console.log("Audio could not play:", error);
//     });

//     // Small delay so the sound starts
//     setTimeout(() => {
//         intro.classList.add("lift");
//     }, 150);

// });

const episodes={
problem:{
kicker:"SEASON 1 · EPISODE 1",
title:"AI is Dumb",
html:`
<p class="lead">Your model worked yesterday. You changed something today. Now you have no idea what happened.</p>
<div class="episode-grid">
<div class="info-box"><h2>The problem</h2><p>AI development creates huge numbers of checkpoints, experiments, datasets and configurations. The latest checkpoint tells you where you are — not how you got there.</p></div>
<div class="info-box"><h2>The question</h2><p><strong>What changed between these two AI states?</strong></p><p>And if the new version is worse, can we reliably understand why and return to the old state?</p></div>
</div>
<h2>The classic engineering moment</h2><div class="big-meme">"I ONLY CHANGED ONE THING."<small>💀</small></div>`},
why:{
kicker:"SEASON 1 · EPISODE 2",
title:"Let's be honest...",
html:`
<h2>We already have Git, so why make AI-Git?!</h2><p>Developers can inspect commits, compare changes, branch, merge and return to an earlier state.</p>
<h2>But AI is more than source code.</h2>
<div class="episode-grid">
<div class="info-box"><h3>Model checkpoints</h3><p>Large binary states that evolve during training.</p></div>
<div class="info-box"><h3>Experiments</h3><p>Training configurations, metrics and model states change together.</p></div>
<div class="info-box"><h3>Reproducibility</h3><p>You need to know exactly which state produced a result.</p></div>
<div class="info-box"><h3>Comparison</h3><p>AI Git focuses on understanding checkpoint-to-checkpoint evolution.</p></div>
</div>
<h2>The idea</h2><p class="lead">Give AI systems a history — not just a latest version.</p>`},
checkpoints:{
kicker:"SEASON 1 · EPISODE 3",
title:"Fine...tell me about your project",
html:`
<p>A checkpoint is a snapshot of an AI model at a particular point in its evolution.</p>
<div class="checkpoint-flow">
<div class="cp"><strong>v1</strong>Initial model</div><div class="arrow">→</div>
<div class="cp"><strong>v2</strong>After training</div><div class="arrow">→</div>
<div class="cp diff"><strong>v3</strong>Something changed</div><div class="arrow">→</div>
<div class="cp"><strong>v4</strong>Fixed model</div>
</div>
<h2>What AI Git adds</h2><div class="info-box"><p>Instead of treating every checkpoint as an isolated file, AI Git gives you a way to reason about the evolution between checkpoints.</p></div>`},
architecture:{
kicker:"SEASON 1 · EPISODE 4",
title:"Nobody cares how Git Works",
html:`
<p>Replace these placeholder nodes with your team's exact architecture. The page is deliberately built so the diagram can become interactive.</p>
<div class="architecture">
<div class="arch-row"><div class="arch-node">AI / User</div><div class="arch-arrow">→</div><div class="arch-node">AI Git API</div></div>
<div class="arch-row" style="margin:25px 0"><div class="arch-arrow">↓</div></div>
<div class="arch-row"><div class="arch-node">Checkpoint Manager</div><div class="arch-arrow">→</div><div class="arch-node">Diff / Comparison Engine</div><div class="arch-arrow">→</div><div class="arch-node">Metadata</div></div>
<div class="arch-row" style="margin:25px 0"><div class="arch-arrow">↓</div></div>
<div class="arch-row"><div class="arch-node">Checkpoint Storage</div></div>
</div>
<h2>Make this your real architecture</h2><p>Use the architecture card on the homepage as the entry point to explain data flow, storage, comparison and retrieval.</p>`},
code:{
kicker:"SEASON 1 · EPISODE 5",
title:"How We Made It",
html:`
<p>This is a presentation-friendly code viewer. Replace the sample with your real implementation.</p>
<div class="code-window"><div class="code-top">checkpoint_diff.py</div><pre><code><span class="keyword">def</span> compare_checkpoints(old, new):
    old_state = load_checkpoint(old)
    new_state = load_checkpoint(new)

    changes = {}

    <span class="keyword">for</span> name <span class="keyword">in</span> old_state:
        <span class="keyword">if</span> name <span class="keyword">in</span> new_state:
            <span class="keyword">if</span> old_state[name] != new_state[name]:
                changes[name] = <span class="string">"changed"</span>

    <span class="keyword">return</span> changes</code></pre></div>`},
progress:{
kicker:"SEASON 3 · OUR JOURNEY",
title:"Previously on AI Git...",
html:`
<p>Turn your actual project progress into a story. Replace the dates and milestones below with your real work.</p>
<div class="timeline">
<div class="event"><h3>DAY 01 · The Idea</h3><span>We identified the problem.</span></div>
<div class="event"><h3>DAY 07 · First Prototype</h3><span>Core project structure came alive.</span></div>
<div class="event"><h3>DAY 14 · Checkpoint Storage</h3><span>First working checkpoint pipeline.</span></div>
<div class="event"><h3>DAY 21 · Comparison</h3><span>We started exposing what changed.</span></div>
<div class="event"><h3>DAY 30 · Demo Ready</h3><span>The system became something we could show.</span></div>
</div>`},
demo:{
kicker:"SEASON FINALE",
title:"AI Git: The Demo",
html:`<div class="info-box"><h2>Now show the real thing.</h2><p>This section is intentionally simple so you can transition from the cinematic website into your actual live product.</p><ol><li>Create or select a checkpoint.</li><li>Create a second checkpoint.</li><li>Change the model state.</li><li>Run the comparison.</li><li>Show exactly what AI Git found.</li></ol></div><div class="big-meme" style="margin-top:30px">THE AI HAS A HISTORY.<small>🚀</small></div>`}
};

function openEpisode(id){

    const e = episodes[id];

    if(!e) return;

    modalContent.innerHTML = `
        <div class="episode">

            <div class="episode-kicker">
                ${e.kicker}
            </div>

            <h1>${e.title}</h1>

            ${e.html}

        </div>
    `;

    modal.classList.add("open");

    modal.setAttribute("aria-hidden","false");

    document.body.style.overflow = "hidden";

}
function closeModal(){

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden","true");

    document.body.style.overflow = "auto";

    // Always return to homepage
    document.body.classList.remove("presentation-mode");

}
function goHome(){window.scrollTo({top:0,behavior:"smooth"});closeModal()}
function startPresentation(){

    document.body.classList.add("presentation-mode");

    openEpisode("problem");

    toast("Presentation mode — press ESC to exit");

}
function toast(message){
  const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2500);
}
document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        closeModal();

    }


    if(
        e.key === "ArrowRight" &&
        modal.classList.contains("open")
    ){

        const ids = [
            "problem",
            "why",
            "checkpoints",
            "architecture",
            "code",
            "progress",
            "demo"
        ];

        const title =
            modalContent.querySelector("h1")?.textContent;

        const current =
            ids.find(
                id => episodes[id].title === title
            );

        const currentIndex =
            ids.indexOf(current);

        const next =
            ids[
                (currentIndex + 1) %
                ids.length
            ];

        openEpisode(next);

    }

});
window.addEventListener("scroll",()=>document.querySelector(".navbar").classList.toggle("scrolled",scrollY>40));
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});

// Optional: add your own intro audio file at assets/intro.mp3.
// The browser may block autoplay, so the sound is attempted only after user interaction.
document.querySelector(".presentation-btn").addEventListener("click",()=>{
  const audio=document.getElementById("introSound");
  if(audio.src){audio.play().catch(()=>{});}
});
