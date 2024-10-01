function menu () {
    const dynamicContent = `
    <style>
    #menu {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        background: black;
        height: 6vh;
        width: 100%;
        margin: 0;
        padding: 0;
        justify-content: stretch;
    }
    
    #menu a:hover {
        background: rgb(53, 53, 53);
        cursor: pointer;
    }
    #menu a {
        color: orange;
        background: black;
        border: solid orange;
        border-width: 0 0.1vw 0.1vw 0;
    }
    #menu #home {
        max-width: 70px;
        display: flex;
        width: 0;
        flex-grow: 1;
        border: solid orange;
        border-width: 0 0.1vw 0.1vw 0;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 2vh;
        height: 100%;
    }
    </style>

    <div id="menu">
    <a href="index.html" id="home">Home</a>  
    <div class="dropdown">
        <a href="campaigns.html" class="dropbtn">Campaigns</a>
        <div class="dropdown-content">
            <a href="/campaigns.html#birdsrest">Bird's Rest</a>
            <a href="/campaigns.html#maidens">The Coalition of Get Maidens and Gold</a>
        </div>
    </div>    
    <div class="dropdown">
        <a class="dropbtn" href="gods.html">Gods</a>
        <div class="dropdown-content">
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#elder-deities">Elder Deities</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#aeros">Aeros</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#aecor">Aecor</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#skog">Skog</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#ignis">Ignis</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#frig">Frig</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#mercurius">Mercurius</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#kunser">Kunser</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#krieg">Krieg</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#dolus">Dolus</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#sophos">Sophos</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#congeria">Congeria</a>
            <a href="https://bodiszabolcs.github.io/theworldofarv.github.io/gods.html#aevum">Aevum</a>
        </div>
    </div>    
    <!-- <div class="dropdown">
        <a class="dropbtn" href="#">Arch Dragons</a>
        <div class="dropdown-content">
            <a href="#">Brievis</a>
            <a href="#">Zollog</a>
            <a href="#">Glacio</a>
            <a href="#">Syre</a>
            <a href="#">Sol</a>
            <a href="#">Luna</a>
            <a href="#">Skaad</a>
            <a href="#">Rakash</a>
        </div>
    </div>    -->
    <div class="dropdown">
        <a href="figures.html" class="dropbtn">Historical Figures</a>
        <div class="dropdown-content">
            <a href="#">Elonias</a>
            <a href="#">Ivo Merkin</a>
            <a href="#">Upuk Ushac</a>
            <a href="#">Lanubi</a>
            <a href="#">Avio, the Mad</a>
            <a href="#">Hrundyr</a>
        </div>
    </div>  
    <div class="dropdown">
        <a href="events.html" class="dropbtn">Historical Events</a>
        <div class="dropdown-content">
            <a href="/events.html#worldcreation">Creation of the World</a>
            <a href="/events.html#wardragons">The War Aginst the Dragons</a>
            <a href="/events.html#warmagic">The War on Magic</a>
            <a href="/events.html#pirate">The Great Pirate Era</a>
        </div>
    </div>    
    <div class="dropdown">
        <a class="dropbtn">Groups/Organizations</a>
        <div class="dropdown-content">
            <a href="#">Headless Snakes</a>
            <a href="#">Children of the Night</a>
            <a href="#">The Ebony Knives</a>
            <a href="#">The Lanubian Monks</a>
        </div>
    </div>    
    <div class="dropdown">
        <a class="dropbtn">Rules</a>
    </div> 
</div>
    `;
    return dynamicContent;
}