function updateViewDisplayPage(){
    document.getElementById('app').innerHTML = `
    <div id="Page">
        <div id="Navbar">
            <div id="Menu">☰</div>
            <div id="Logo">Dive-Logger</div>
            <div id="Right"><button onclick="goToInputPage()">Nytt innlegg</button></div>
        </div>
        <div id="Info">

                ${createLogHtml()}



            </div>
        <div id="Footer">Her kommer footer</div>
    </div>
    `;
}

function createLogHtml(){
    let html = '';
    for(let i = 0; i < model.loggDisplayPage.diveLog.length; i++){
        let option = model.loggDisplayPage.diveLog[i];
        html += `
            <div id="box" style="float: left">
                <div> Dive date: ${option.general.Dykkdato}</div> </br>
                <div> Dykkeselskap: ${option.general.Dykkerselskap}</div></br>
                <div> Air standard: ${option.Equipment.airstandard}</div></br>
                <div> Max depth: ${option.surfacedies.maxdepth}</div></br>
                <div> Bottom time: ${option.surfacedies.bottomtime}</div></br>
                <div> Supervisor signed? : ${option.sign.signsupervisor}</div>
                <button id="knapp" onclick="removeFromArray(${i})">Delete</button>
                <button id="endreKnapp" onclick="changeInArrayDisplay(${i})">Change</button>

            </div>
            `;
    }
    return html;
}