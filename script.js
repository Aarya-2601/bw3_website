const modal=document.getElementById("modal");
const modalContent=document.getElementById("modalContent");

const enterBtn=document.getElementById("enterBtn");
const intro=document.getElementById("intro");
const introSound=document.getElementById("introSound");


enterBtn.addEventListener("click",()=>{

    enterBtn.disabled=true;

    introSound.currentTime=0;

    introSound.play().catch(()=>{});

    setTimeout(()=>{
        intro.classList.add("lift");
    },150);

});


const episodes={


problem:{

    kicker:"SEASON 1 · EPISODE 1",

    title:"Artificial Intelligence",

    html:`

<p class="lead">is dumb...</p>

<div class="episode-grid">

<div class="info-box">

<h2>Your problem</h2>

<img
src="assets/money.jpg"
alt="money"
class="episode-image"
>

</div>


<div class="info-box">

<h2>Our problem</h2>

<p>

1. Model checkpoints are snapshots of a model's state.

<br>


2. Train the model, change something, save another checkpoint.

<br>

3. Versions pile up, storage gets expensive, and tracking what actually changed is painful.

<br>

<img
src="assets/checkpoints.png"
alt="Checkpoints"
class="episode-image"
>



</p>

</div>

</div>


<h2>That one bro after he's caught in Git Blame</h2>

<div class="big-meme">

<img
src="assets/i-didnt-do-fucking-shit.gif"
alt="Git blame meme"
class="meme-gif"
>

</div>

`

},



why:{

    kicker:"SEASON 1 · EPISODE 2",

    title:"Let's be honest...",

    html:`

<h2>everyone prefers Git LFS & DVC</h2>

<div class="episode-grid">


<div class="info-box">

<h3>Git LFS</h3>


<img
src="assets/gitlfs_new.png"
alt="Git LFS"
style="height:300px"
>

</div>


<div class="info-box">

<h3>DVC</h3>


<img src="assets/dvc.png">

</div>


</div>


<h2>The idea</h2>

<p class="lead">

Combine everything into one so you don't have to jump between things.

</p>

<div class="big-meme">

<img
src="assets/trampoline-fitness.gif"
alt="Jumping Jhapak"
height="400px"
>

</div>

`

},



memes:{

    kicker:"SEASON 1 · BONUS EPISODE",

    title:"Because Our Cool Mentors",

    html:`

<h2>chose cooler mentees😎</h2>


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

<img
src="assets/zeher.png"
height="300px"
>

<img
src="assets/heart_touching.png"
height="300px"
>

</div>


<h2>Debugging At 2a.m.</h2>

<div class="big-meme">

<img
src="assets/hairpull.png"
class="meme-gif"
alt="Coding meme"
height="300px"
>

<img
src="assets/squinting.png"
height="300px"
>

<img
src="assets/smileinpain.png"
height="300px"
>

</div>


<div class="meme-ending">

<p>Through the errors.</p>

<p>Through the crying.</p>

<p>Through the countless ideas we had to abandon.</p>

<h3>WE SURVIVED.</h3>

<h1>
Thanks to the mentors who had to survive us 💀
</h1>

</div>

`

},



checkpoints:{

    kicker:"SEASON 2 · EPISODE 1",

    title:"Fine...",

    html:`

<h2>but what will you do?</h2>

<div class="cp diff">

<strong>
Store any type of files.
</strong>

<div class="cpimg">

Everything is converted to binary!
</div>
</div>

<div class="cp">

<strong>
Identify files by their content using hashing.
</strong>

<div class="cpimg">

<img
src="assets/double_hashing.gif"
alt="Double Hashing"
height="300px"
>

<br>

1. Handles hash collision

<br><br>

2. XXHash + SHA-256

<br><br>

3. OpenSSL's products

<br><br>

4. Faster lookups

</div>

</div>

<div class="cp diff">

<strong>Content Addressable Storage (CAS)</strong>

<div class="cpimg">

<br>

1. Same content but different file name

<br><br>

2.Eventually, only changed chunks need to be stored

<br>

</div>

</div>



<div class="cp">

<strong>Chunking</strong>

<div class="cpimg">

<br>

<img
src="assets/fastcdc.png"
height="300px"
>


</div>

</div>



<div class="cp diff">

<strong>
Double Storage and Metadata
</strong>

<div class="cpimg">

Local — SQLite:

tracks metadata about objects stored locally.

<br><br>

Remote — PostgreSQL + MinIO:

PostgreSQL manages centralized metadata,

while MinIO stores the actual binary objects.


</div>

</div>



<div class="cp">

<strong>
Building our own API
</strong>

<div class="cpimg">

<br>

<img
src="assets/storage.png"
height="300px"
>

<br>

1. Client ↔ server communication

<br>

2. MinIO Presigned URLs

<br>

3.Push, Pull and Clone


</div>

</div>



<div class="cp diff">

<strong>Website</strong>

<div class="cpimg">

<br>

<img
src="assets/website1.png"
height="300px"
>

<br>


</div>

</div>


</div>

`

},



/* SECOND ARCHITECTURE WINS */

architecture:{

    kicker:"SEASON 2 · EPISODE 2",

    title:"Nobody cares how it works",

    html:`

<div class="checkpoint-flow">


<a href="https://en.wikipedia.org/wiki/Content-addressable_storage" target="_blank" class="cp">

<strong>Content Addressing</strong>

SHA-256
</a>


<div class="right-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Content-addressable_storage" target="_blank" class="cp">

<strong>Whole-File CAS</strong>

Store & retrieve
</a>


<div class="right-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Data_deduplication" target="_blank" class="cp">

<strong>Deduplication</strong>

Same content → same object
</a>


<div class="right-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Cloud_storage" target="_blank" class="cp">

<strong>Remote CAS</strong>

Push / Pull / Clone
</a>


<div class="right-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Data_deduplication#Chunking" target="_blank" class="cp diff">

<strong>Chunk-Level CAS</strong>

FastCDC · Next
</a>


</div>



<h2>Our local architecture</h2>


<div class="architecture">


<div
style="
max-width:850px;
margin:30px auto;
text-align:center;
"
>


<a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank"
class="arch-node"
style="
width:260px;
margin:0 auto;
"
>

<strong>AI-Git CLI</strong>
</a>


<div class="down-arrow"></div>


<a href="https://git-scm.com/doc" target="_blank"
class="arch-node"
style="
width:260px;
margin:0 auto;
"
>

<strong>Git / VCS Layer</strong>
</a>


<div class="fork-container">
   <div class="fork-stem"></div>
   <div class="fork-arms" style="width: 300px;">
       <div class="fork-arm"></div>
       <div class="fork-arm"></div>
   </div>
</div>


<div
style="
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
align-items:start;
justify-items:center;
"
>


<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">

<a href="https://git-scm.com/book/en/v2/Git-Internals-Git-Objects" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>VCS Object Store</strong>

<small
style="
display:block;
margin-top:6px;
color:#888;
"
>

Blob / Tree / Commit

</small>
</a>
</div>


<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
<a href="https://en.wikipedia.org/wiki/Content-addressable_storage" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>AI-Git CAS</strong>
</a>

<div class="down-arrow"></div>

<a href="https://en.wikipedia.org/wiki/Data_storage" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>StorageManager</strong>
</a>

<div class="fork-container">
   <div class="fork-stem"></div>
   <div class="fork-arms" style="width: calc(50% + 7.5px);">
       <div class="fork-arm"></div>
       <div class="fork-arm"></div>
   </div>
</div>

<div
style="
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
width: 100%;
"
>

<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
<a href="https://en.wikipedia.org/wiki/Object_storage" target="_blank"
class="arch-node"
style="width:100%;"
>

<strong>ObjectStore</strong>

<small
style="
display:block;
margin-top:6px;
color:#888;
"
>

Physical CAS objects

</small>
</a>

<div class="down-arrow"></div>

<a href="https://en.wikipedia.org/wiki/Content-addressable_storage" target="_blank"
class="arch-node"
style="width:100%;"
>

<strong>CAS Objects</strong>
</a>
</div>

<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
<a href="https://en.wikipedia.org/wiki/Metadata" target="_blank"
class="arch-node"
style="width:100%;"
>

<strong>MetadataDB</strong>

<small
style="
display:block;
margin-top:6px;
color:#888;
"
>

Object metadata

</small>
</a>

<div class="down-arrow"></div>

<a href="https://www.sqlite.org/docs.html" target="_blank"
class="arch-node"
style="width:100%;"
>

<strong>SQLite</strong>
</a>
</div>

</div>
</div>

</div>

</div>


</div>



<h2>Local → Remote</h2>


<div class="architecture">


<div
style="
max-width:850px;
margin:30px auto;
text-align:center;
"
>


<a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank"
class="arch-node"
style="
width:260px;
margin:0 auto;
"
>

<strong>AI-Git CLI</strong>
</a>


<div class="down-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Data_storage" target="_blank"
class="arch-node"
style="
width:260px;
margin:0 auto;
"
>

<strong>StorageManager</strong>
</a>


<div class="fork-container">
   <div class="fork-stem"></div>
   <div class="fork-arms" style="width: 300px;">
       <div class="fork-arm"></div>
       <div class="fork-arm"></div>
   </div>
</div>


<div
style="
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
align-items:start;
justify-items:center;
"
>


<div>


<a href="https://en.wikipedia.org/wiki/Content-addressable_storage" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>Local CAS</strong>
</a>


<div class="down-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Object_storage" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>ObjectStore</strong>
</a>


<div class="down-arrow"></div>


<a href="https://www.sqlite.org/docs.html" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>SQLite</strong>

<small
style="
display:block;
margin-top:6px;
color:#888;
"
>

Local metadata

</small>
</a>


</div>



<div>


<a href="https://en.wikipedia.org/wiki/Cloud_storage" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>Remote CAS</strong>
</a>


<div class="down-arrow"></div>


<a href="https://en.wikipedia.org/wiki/API" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>Client API</strong>
</a>


<div class="down-arrow"></div>


<a href="https://en.wikipedia.org/wiki/Server_(computing)" target="_blank"
class="arch-node"
style="width:260px;"
>

<strong>Server</strong>
</a>


<div class="fork-container">
   <div class="fork-stem"></div>
   <div class="fork-arms" style="width: calc(50% + 7.5px);">
       <div class="fork-arm"></div>
       <div class="fork-arm"></div>
   </div>
</div>


<div
style="
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
"
>


<a href="https://www.postgresql.org/docs/" target="_blank"
class="arch-node"
style="width:100%;"
>

<strong>PostgreSQL</strong>

<small
style="
display:block;
margin-top:6px;
color:#888;
"
>

Metadata

</small>
</a>


<a href="https://min.io/docs/minio/linux/index.html" target="_blank"
class="arch-node"
style="width:100%;"
>

<strong>MinIO</strong>

<small
style="
display:block;
margin-top:6px;
color:#888;
"
>

Object storage

</small>
</a>


</div>


</div>


</div>


</div>


</div>


<p>

Our local CAS is working. The next step is extending it to the
remote layer before moving to chunk-level storage with FastCDC.

</p>

`

},



code:{

    kicker:"SEASON 2 · EPISODE 3",

    title:"c.o.d.e",

    html:`
<h2>
<s>
These are the only codes y'all CAN ask us questions about, understood?
</s>
</h2>


<div class="vscode-button-container">

<a
href="vscode://file/C:/Users/Keya/Desktop/AI-GIT"
class="open-vscode-btn"
>

<span>⌘</span>

OPEN PROJECT IN VS CODE

</a>

</div>

`

},



progress:{

    kicker:"SEASON 3 · OUR JOURNEY",

    title:"We did what we had to do...",

    html:`

<div class="timeline">

<div class="event">

<h3>
DAY 01 · Debated the direction to go ahead. Decided to start with building a normal standalone VCS
</h3>

<span></span>

</div>


<div class="event">

<h3>
DAY 07 · Studied git internals, started implementing commands.
</h3>

</div>


<div class="event">

<h3>
DAY 14 · Done with implementing init, add, status.
</h3>

</div>


<div class="event">

<h3>
DAY 21 · Comparison
</h3>

<span>
We started exposing what changed.
</span>

</div>


<div class="event">

<h3>
DAY 30 · Demo Ready
</h3>

<span>
The system became something we could show.
</span>

</div>

</div>

`

},



demo:{

    kicker:"SEASON FINALE",

    title:"AI Git: The Demo",

    html:`

<div class="info-box" style="padding: 0; overflow: hidden;">
    <video style="width: 100%; height: auto; display: block;" controls><source src="assets/dedupvideo.mp4" type="video/mp4"></video>
</div>
<div>
<img src="assets/image.png" height="700 px">
</div>

`

}


};



function openEpisode(id){

    const e=episodes[id];

    if(!e)return;

    modalContent.innerHTML=`

<div class="episode">

<div class="episode-kicker">
${e.kicker}
</div>

<h1>
${e.title}
</h1>

${e.html}

</div>

`;

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow="hidden";

}



function closeModal(){

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow="auto";

    document.body.classList.remove(
        "presentation-mode"
    );

}



function goHome(){

    closeModal();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



function startPresentation(){

    document.body.classList.add(
        "presentation-mode"
    );

    openEpisode("problem");

    toast(
        "Presentation mode — press ESC to exit"
    );

}



function toast(message){

    const t=document.getElementById("toast");

    t.textContent=message;

    t.classList.add("show");

    setTimeout(()=>{

        t.classList.remove("show");

    },2500);

}



document.addEventListener(
    "keydown",
    e=>{

        if(e.key==="Escape"){

            closeModal();

        }


        if(
            e.key==="ArrowRight" &&
            modal.classList.contains("open")
        ){

            const ids=[

                "problem",

                "why",

                "memes",

                "checkpoints",

                "architecture",

                "code",

                "progress",

                "demo"

            ];


            const title=
                modalContent
                .querySelector("h1")
                ?.textContent;


            const current=
                ids.find(

                    id=>
                    episodes[id].title===title

                );


            const currentIndex=
                ids.indexOf(current);


            const next=

                ids[
                    (
                        currentIndex+1
                    )
                    %
                    ids.length
                ];


            openEpisode(next);

        }

    }
);



window.addEventListener(
    "scroll",
    ()=>{

        document
        .querySelector(".navbar")
        .classList
        .toggle(
            "scrolled",
            scrollY>40
        );

    }
);



modal.addEventListener(
    "click",
    e=>{

        if(e.target===modal){

            closeModal();

        }

    }
);