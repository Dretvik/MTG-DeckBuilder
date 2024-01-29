updateView();
function updateView() {
    app.innerHTML = /*HTML*/`
        <div>
            <h1>Ellie's Magic The Gathering DeckBuilder</h1>
            <div id="mainPageContainer">
                <button class="showButtons">Show deck in progress</button>
                <button class="showButtons">Generate random deck</button>
                <button 
                    class="showButtons">Show all cards</button>
                <div id="cardDivContainer">
                    <div class="cardDivs">
                        <h2>Deck in progress</h2>
                        <input 
                            placeholder="Search for cards"
                            type="text" 
                            class="cardSearchInputs">
                        <button class="searchButtons">Search</button>
                        <hr>
                        <div class="cardDisplayDivs" id="cardDisplayDiv1"></div>
                    </div>
                    <div class="cardDivs">
                        <h2>Browse cards</h2>
                        <input
                            placeholder="Search for cards" 
                            type="text" 
                            class="cardSearchInputs">
                        <button class="searchButtons">Search</button>
                        <hr>
                        <div class="cardDisplayDivs" id="cardDisplayDiv2"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}