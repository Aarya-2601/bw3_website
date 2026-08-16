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
<p>1. Model checkpoints are snapshots of a model's state.
<br>2. They contain huge collections of tensor weights and other metadata.
<br>3. Train the model, change something, save another checkpoint.
<img src="assets/checkpoints.png" alt="Checkpoints" class="episode-image">
<br>4. Now you've got another massive file sitting next to the old one.
<br>5. It's too big...
<br>6. Versions pile up, storage gets expensive, and tracking what actually changed is painful.
<br><b>7. That's where AI-Git comes in.
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
    <p>Designed specifically for data and ML workflows
    <br>Have to run both git and DVC commands
    <br>Introduces another workflow and another layer to manage
    <br>No deduplication=Local cache bloat
    <br><b>Also hates to see us coming</b>
    </p>
    <img src="assets/dvc.png"></div>
</div>
<h2>The idea</h2><p class="lead">Combine everything into one so you don't have to jump between things.</p>
<img class=",big-meme" src="assets/trampoline-fitness.gif" alt="Jumping Jhapak" height="400px">`},
memes:{
    kicker:"SEASON 1 · BONUS EPISODE",
    title:"Because Our Cool Mentors",
    html:`
        <h2>choose cooler mentees&#128526;</h2>

        <h2>Display of our creativity</h2>

        <div class="big-meme">
            <img
                src="assets/makefile.png"
                class="meme-gif"
                alt="Mentor meme"
                height="300px"
            >
            <img
                src="assets/ppt2.png"
                class="meme-gif"
                alt="Mentor meme"
                height="300px"
            >
            <img
                src="assets/blog.png"
                class="meme-gif"
                alt="Mentor meme"
                height="300px"
            >
        </div>

        <h2>When we tell our mentors we want to quit</h2>
        <div class="big-meme">

            <img 
                src="assets/utried.png"
                class="meme-gif"
                alt="Coding meme"
                height="300px"
            >
            <img src="assets/zeher.png" height="300px">
            <img src="assets/heart_touching.png" height="300px">
        </div>


        <h2>Debugging At 2a.m.</h2>
        <div class="big-meme">
            <img 
                src="assets/hairpull.png"
                class="meme-gif"
                alt="Coding meme"
                height="300px"
            >
            <img src="assets/squinting.png" height="300px">
            <img src="assets/smileinpain.png" height="300px">

        </div>


        <div class="meme-ending">
            <p>Through the errors.</p>
            <p>Through the crying.</p>
            <p>Through the countless ideas we had to abandon.</p>
            <h3>WE SURVIVED.</h3>
            <h1>Thanks to the mentors who had to survive us 💀</h1>

        </div>

    `
},
checkpoints:{
kicker:"SEASON 2 · EPISODE 1",
title:"Fine...",
html:`
<h2>but what will you do?</h2>
<div class=".checkpoint-flow">
<div class="cp"><strong>Identify files by their content using hashing.</strong><div class="cpimg"><img src="assets/double_hashing.gif" alt="Double Hashing" height=300px><br>1. Handles hash collision<br><br>2. XXHash + SHA-256<br><br>3. OpenSSL's products<br><br>4. Faster lookups</div></div>
<div class="cp diff"><strong>Deduplication</strong><div class="cpimg"><br>1. Same content but different file name<br><br>2.Eventually, only changed chunks need to be stored<br></div></div>
<div class="cp"><strong>Chunking</strong><div class="cpimg"><br><img src="assets/fastcdc.png" height=300px><br>FastCDC</div></div>
<div class="cp diff"><strong>Double Storage and Metadata</strong><div class="cpimg"><br><b>Local — SQLite:</b>
    tracks metadata about objects stored locally.
    <br>
    Object ID, size, type and creation time.

    <br><br>

    <b>ObjectStore:</b>
    stores the actual bytes in the local CAS.

    <br><br>

    <b>Remote — PostgreSQL + MinIO:</b>
    PostgreSQL manages centralized metadata,
    while MinIO stores the actual binary objects.

    <br></div></div>
<div class="cp"><strong>Building our own API</strong><div class="cpimg"><br><img src= "assets/storage.png" height=300px><br>1. Client ↔ server communication<br>2. MinIO Presigned URLs<br> 3.Push, Pull and Clone <br> 4. Remote object transfer</div></div>
<div class="cp diff"><strong>Website</strong><div class="cpimg"><br><img src= "assets/website1.png" height=300px><br>GitHub-like Interface (image is ai generated)</div></div>
`},
architecture:{
kicker:"SEASON 2 · EPISODE 2",
title:"Nobody cares how it works",
html:`
<h2>only the LYs do...</h2>
<div class="checkpoint-flow">
<div class="cp"><strong>Double Hashing<br>OpenSSL</strong>Initial model</div><div class="arrow">→</div>
<div class="cp"><strong>Deduplication</strong>After training</div><div class="arrow">→</div>
<div class="cp diff"><strong>Chunking using FastCDC</strong>Something changed</div><div class="arrow">→</div>
<div class="cp"><strong>v4</strong>Fixed model</div>
</div>
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
title:"The part that we don't understand",
html:`
<h2>Thanks to ChatGPT, we know we don't</h2>
<h2><s>These are the only codes y'all CAN ask us questions about, understood?</s></h2>
    <div class="vscode-button-container">

    <a
        href="vscode://file/C:/Users/Keya/Desktop/AI-GIT"
        class="open-vscode-btn"
    >
        <span>⌘</span>
        OPEN PROJECT IN VS CODE
    </a>`},
progress:{
kicker:"SEASON 3 · OUR JOURNEY",
title:"We did what we had to do...",
html:`

<div class="event"><h3>DAY 01 · Debated the direction to go ahead. Decided to start with building a normal standalone VCS</h3><span></span></div>
<div class="event"><h3>DAY 07 · Studied git internals, started implementing commands.</span></div>
<div class="event"><h3>DAY 14 · Done with implementing init, add, status.</span></div>
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
