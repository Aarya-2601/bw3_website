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
title:"Artificial Intelligence",
html:`
<p class="lead">is dumb...</p>
<div class="episode-grid">
<div class="info-box"><h2>Your problem</h2><p>1. There's a lot of money in the field of AI today
<br>2. You want to make A LOT OF money in your lives
<br>3. You cannot earn easily because AI & ML models, and their datasets are hard to store
<br><b>4. We wanna make you money
</p>
<img src="assets/money.jpg" alt="money" class="episode-image">
</div>
<div class="info-box"><h2>Our problem</h2>
<p>1. Model checkpoints contain large collections of tensor weights..
<br>2. What's a checkpoint?
<br>3. When something changes... it gets triggered
<img src="assets/matrix.png" alt="Matrix" class="episode-image">
<br>4. It gets stored from scratch again
<br>5. It's too big...
<br>6. Cannot revert, cause we are not in the picture yet!
<br><b>7. We wanna make you money
</p>
</div>
</div>
<h2>That one bro after he's caught in Git Blame</h2><div>
<img    class=".big-meme"
        src="assets/i-didnt-do-fucking-shit.gif"
        alt="Git blame meme"
        class="meme-gif"
    ></div>`},
why:{
kicker:"SEASON 1 · EPISODE 2",
title:"Let's be honest...",
html:`
<h2>everyone prefers Git LFS & DVC</h2>
<div class="episode-grid">
<div class="info-box"><h3>Git LFS</h3>
    <p>Works on the familiar Git architecture
    <br>Points to large files, and saves text files as they are
    <br>Opaque objects = zero deduplication
    <br><b>Takes a tonne of money for 5GB storage</b>
    <br><b>Hates to see us coming</b></p>
    <img src="assets/gitlfs.png" alt="Git LFS" style="height: 325px"></div>
<div class="info-box"><h3>DVC</h3>
    <p>Splits workflow
    <br>Have to run both git and DVC commands
    <br>Bottlenecks
    <br>No deduplication=Local cache bloat
    <br><b>Also hates to see us coming</b>
    </p>
    <img src="assets/dvc.png"></div>
</div>
<h2>The idea</h2><p class="lead">Combine everything into one so you don't have to jump between things.</p>
<img class=",big-meme" src="assets/trampoline-fitness.gif" alt="Jumping Jhapak" height="400px">`},
checkpoints:{
kicker:"SEASON 2 · EPISODE 1",
title:"Fine...",
html:`
<h2>but what will you do?</h2>
<div class=".checkpoint-flow">
<div class="cp"><strong>Double Hashing</strong><br><img src="assets/double_hashing.gif" alt="Double Hashing" height=200px><br><br>1. Handles hash collision<br>2. XXHash + SHA-256<br>3. OpenSSL's products<br>4. Faster lookups</div>
<div class="cp diff"><strong>Deduplication</strong><br><img src="assets/fastCDC.gif" width=400px><br><br>1. Same content but different file name<br>2. Fixed-size chunking vs CDC (CAS)<br>3.Saves redundancy of space<br></div>
<div class="cp"><strong>Chunking</strong><br><img src="assets/deduplication.png"><br>FastCDC</div>
<div class="cp diff"><strong>Double Data-tracking</strong><br><b>MinIO:</b> the "dumb" database<br>helps in object-style storage<br><br><b>PostgreSQL:</b> relational database<br>helps in storing repository structure</div>
<div class="cp"><strong>Building our own API</strong><br>1. What is an API?<br>2. MinIO Presigned URLs<br> 3.Push, Pull and Clone</div>
<div class="cp diff"><strong>Website</strong><br>GitHub-like Interface</div>
`},
architecture:{
kicker:"SEASON 2 · EPISODE 2",
title:"Nobody cares how Git Works",
html:`
<div class="checkpoint-flow">
<div class="cp"><strong>Double Hashing<br>OpenSSL</strong>Initial model</div><div class="arrow">→</div>
<div class="cp"><strong>Deduplication</strong>After training</div><div class="arrow">→</div>
<div class="cp diff"><strong>Chunking using FastCDC</strong>Something changed</div><div class="arrow">→</div>
<div class="cp"><strong>v4</strong>Fixed model</div>
</div>
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
kicker:"SEASON 2 · EPISODE 3",
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
title:"We did what we had to do...",
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
