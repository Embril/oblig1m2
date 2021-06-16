function updateViewInputPage(){
    document.getElementById('app').innerHTML = `
    <div id="Page">
        <div id="Navbar">
            <div id="Menu">☰</div>
            <div id="Logo">Dive-Logger</div>
            <div id="Right"></div>
        </div>
        <div id="Info">
            <div id="diveLog">
                <div id="DiveLogHead">Loggføring</div>
                <div id="DiveLogGrid">
                    <div id="InputArea">
                        <div id="inputHead">General:</div>
                        <div id="inputGrid">
                            <div id="innerGrid">
                                <input 
                                type="text" 
                                placeholder="Dive-Date" 
                                value="${model.inputs.loggInputPage.general.Dykkdato}" 
                                oninput="model.inputs.loggInputPage.general.Dykkdato=this.value" 
                                id="InputSpot"> 

                                <input 
                                value="${model.inputs.loggInputPage.general.Telefon}" 
                                oninput="model.inputs.loggInputPage.general.Telefon=this.value" 
                                id="InputSpot" 
                                type=textarea 
                                placeholder="Telefon"> <br>

                                <input 
                                value="${model.inputs.loggInputPage.general.Dykkerselskap}" 
                                oninput="model.inputs.loggInputPage.general.Dykkerselskap=this.value" 
                                id="InputSpot" 
                                type=textarea 
                                placeholder="Dykkeselskap">

                                <input 
                                value="${model.inputs.loggInputPage.general.adresse}" 
                                oninput="model.inputs.loggInputPage.general.adresse=this.value" 
                                id="InputSpot" 
                                type=textarea 
                                placeholder="Adresse"> <br>

                                <input 
                                value="${model.inputs.loggInputPage.general.Vessel}" 
                                oninput="model.inputs.loggInputPage.general.Vessel=this.value" 
                                id="InputSpot" 
                                type=textarea
                                placeholder="Vessel/Instalation">

                                <input 
                                value="${model.inputs.loggInputPage.general.Operator}" 
                                oninput="model.inputs.loggInputPage.general.Operator=this.value" 
                                id="InputSpot" 
                                type=textarea 
                                placeholder="Operatør">

                            </div>
                            <div id="stampSpotGrid">
                                <input 
                                value="${model.inputs.loggInputPage.general.Dykkdato}" 
                                oninput="model.inputs.loggInputPage.general.Dykkdato=this.value" 
                                id="stampSpot" 
                                type=textarea 
                                placeholder="Signed">
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div id="DiveLogGrid">
                <div id="InputArea">
                    <div id="inputHead">Type dykk:</div>
                    <div id="inputGrid">
                        <div id="innerGrid">
                            <input 
                            value="${model.inputs.loggInputPage.typedive.overflate}" 
                            oninput="model.inputs.loggInputPage.typedive.overflate=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Overflate"> 

                            <input 
                            value="${model.inputs.loggInputPage.typedive.Wetbell}" 
                            oninput="model.inputs.loggInputPage.typedive.Wetbell=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Wet Bell"> <br>

                            <input 
                            value="${model.inputs.loggInputPage.typedive.bellsat}" 
                            oninput="model.inputs.loggInputPage.typedive.bellsat=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Bell Sat - Scuba">

                            <input 
                            value="${model.inputs.loggInputPage.typedive.SurDo2}" 
                            oninput="model.inputs.loggInputPage.typedive.SurDo2=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="SurDO2"> <br>

                            <input 
                            value="${model.inputs.loggInputPage.typedive.Bellbounce}" 
                            oninput="model.inputs.loggInputPage.typedive.Bellbounce=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Bell bounce/TuP">

                            <input 
                            value="${model.inputs.loggInputPage.typedive.Breathingmix}" 
                            oninput="model.inputs.loggInputPage.typedive.Breathingmix=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Breathing mixture">

                        </div>
                        <div id="stampSpotGrid">
                            <input 
                            value="${model.inputs.loggInputPage.typedive.Other}" 
                            oninput="model.inputs.loggInputPage.typedive.Other=this.value" 
                            id="stampSpot" 
                            type=textarea
                            placeholder="Other">
                        </div>
                    </div>
                </div>
            </div>

            <div id="DiveLogGrid">
                <div id="InputArea">
                    <div id="inputHead">Surface dives:</div>
                    <div id="inputGrid">
                        <div oninput="" id="innerGrid">
                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.Leftsurface}" 
                            oninput="model.inputs.loggInputPage.surfacedies.Leftsurface=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Left surface at /hr"> 

                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.maxdepth}" 
                            oninput="model.inputs.loggInputPage.surfacedies.maxdepth=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Max depth"> <br>

                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.leftbottom}" 
                            oninput="model.inputs.loggInputPage.surfacedies.leftbottom=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Left bottom at /hr - Scuba">

                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.bottomtime}" 
                            oninput="model.inputs.loggInputPage.surfacedies.bottomtime=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Bottom time"> <br>

                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.leftlaststop}" 
                            oninput="model.inputs.loggInputPage.surfacedies.leftlaststop=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Left last stop at /hr">

                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.tabledepth}" 
                            oninput="model.inputs.loggInputPage.surfacedies.tabledepth=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Table depth">

                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.tabletime}" 
                            oninput="model.inputs.loggInputPage.surfacedies.tabletime=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Table time">
                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.chambertime}" 
                            oninput="model.inputs.loggInputPage.surfacedies.chambertime=this.value" 
                            id="InputSpot" 
                            type=textarea 
                            placeholder="Chamber time">
                        </div>
                        <div id="stampSpotGrid">
                            <input 
                            value="${model.inputs.loggInputPage.surfacedies.Decompressionscedule}" 
                            oninput="model.inputs.loggInputPage.general.Decompressionscedule=this.value" 
                            id="stampSpot" 
                            type=textarea 
                            placeholder="Decompression">
                        </div>
                    </div>
                </div>
            </div>

        <div id="bottomInnerGrid">
            <div id="Saturation">
                <div id="Container">
                    <div id="inputHead">Saturation dive:</div>
                    <div id="innerInputGrid">
                        <input 
                        value="${model.inputs.loggInputPage.saturationdive.leftsurface}" 
                        oninput="model.inputs.loggInputPage.saturationdive.leftsurface=this.value" 
                        id="bottomInputSpot" 
                        type=textarea 
                        placeholder="Overflate"> 

                        <input 
                        value="${model.inputs.loggInputPage.saturationdive.maxdepthsaturation}" 
                        oninput="model.inputs.loggInputPage.saturationdive.maxdepthsaturation=this.value" 
                        id="bottomInputSpot" 
                        type=textarea 
                        placeholder="Wet Bell"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.saturationdive.leftstoragedepth}" 
                        oninput="model.inputs.loggInputPage.saturationdive.leftstoragedepth=this.value" 
                        id="bottomInputSpot" 
                        type=textarea 
                        placeholder="Bell Sat - Scuba">

                        <input 
                        value="${model.inputs.loggInputPage.saturationdive.Backtostoragedepth}" 
                        oninput="model.inputs.loggInputPage.saturationdive.Backtostoragedepth=this.value" 
                        id="bottomInputSpot" 
                        type=textarea 
                        placeholder="SurDO2"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.saturationdive.saturationbottomtime}" 
                        oninput="model.inputs.loggInputPage.saturationdive.saturationbottomtime=this.value" 
                        id="bottomInputSpot" 
                        type=textarea 
                        placeholder="Bell bounce/TuP">
                    </div>
                </div>
            </div>

            <div id="Equipment">
                <div id="Container">
                    <div id="inputHead">Equipment:</div>
                    <div id="innerInputGrid">
                        <input 
                        value="${model.inputs.loggInputPage.Equipment.airstandard}" 
                        oninput="model.inputs.loggInputPage.Equipment.airstandard=this.value" 
                        id="bottomLongThinInputSpot" 
                        type=textarea 
                        placeholder="Air Standard"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.Equipment.mask}" 
                        oninput="model.inputs.loggInputPage.Equipment.mask=this.value" 
                        id="bottomLongThinInputSpot" 
                        type=textarea 
                        placeholder="Mask"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.Equipment.helmet}" 
                        oninput="model.inputs.loggInputPage.Equipment.helmet=this.value" 
                        id="bottomLongThinInputSpot" 
                        type=textarea 
                        placeholder="Helmet/Hat">
                    </div>
                </div>
            </div>

            <div id="Other">
                <div id="Container">
                    <div id="inputHead">Description of job:</div>
                    <div id="innerInputGrid">
                        <input 
                        value="${model.inputs.loggInputPage.description.workdescription}" 
                        oninput="model.inputs.loggInputPage.description.workdescription=this.value" 
                        id="bottomOtherInputSpot" 
                        type=textarea 
                        placeholder="Work description"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.description.remarks}" 
                        oninput="model.inputs.loggInputPage.description.remarks=this.value" 
                        id="bottomOtherInputSpot" 
                        type=textarea 
                        placeholder="Remarks"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.description.standbydiver}" 
                        oninput="model.inputs.loggInputPage.description.standbydiver=this.value" 
                        id="bottomOtherInputSpot" 
                        type=textarea 
                        placeholder="Standby diver">
                    </div>
                </div>
            </div>

            <div id="Sign">
                <div id="Container">
                    <div id="inputHead">Sign:</div>
                    <div id="innerInputGrid">
                        <input 
                        value="${model.inputs.loggInputPage.sign.Supervisor}" 
                        oninput="model.inputs.loggInputPage.sign.Supervisor=this.value" 
                        id="bottomLongThinInputSpot" 
                        type=textarea 
                        placeholder="Diving Supervisor"><br> 

                        <input 
                        value="${model.inputs.loggInputPage.sign.signsupervisor}" 
                        oninput="model.inputs.loggInputPage.sign.signsupervisor=this.value" 
                        id="bottomLongThinInputSpot" 
                        type=textarea 
                        placeholder="Signed by diving supervisor"> <br>

                        <input 
                        value="${model.inputs.loggInputPage.sign.Signdate}" 
                        oninput="model.inputs.loggInputPage.sign.Signdate=this.value" 
                        id="bottomLongThinInputSpot" 
                        type=textarea 
                        placeholder="Sign date"><br>

                        <input 
                        value="${model.inputs.loggInputPage.sign.stamp}" 
                        oninput="model.inputs.loggInputPage.sign.stamp=this.value" 
                        id="bottomOtherInputSpot" 
                        type=textarea 
                        placeholder="Stamp">
                    </div>
                </div>
            </div>
            <div id="buttonContainer">
                <button id="saveClear">Clear</button>
            </div>
            <div id="buttonContainer">
                <button onclick="addLogg(); goToDisplayPage()" id="saveClear">Save</button>
            </div>

        </div>
    </div>
        <div id="Footer">Her kommer footer</div>
    `;
}
