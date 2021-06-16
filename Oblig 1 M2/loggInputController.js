function goToDisplayPage() {
    model.app.currentPage = 'display';
    updateView();
}

function addLogg(){
    if (model.inputs.loggInputPage.general.Dykkdato == '') {
        alert ('Fyll inn dato');
    }
    else {model.loggDisplayPage.diveLog.unshift({
        general: {
            Dykkdato: model.inputs.loggInputPage.general.Dykkdato,
            Dykkerselskap: model.inputs.loggInputPage.general.Dykkerselskap,
            adresse: model.inputs.loggInputPage.general.adresse,
            Telefon: model.inputs.loggInputPage.general.Telefon,
            Vessel: model.inputs.loggInputPage.general.Vessel,
            Operator: model.inputs.loggInputPage.general.Operator,
        },

        typedive: {
            overflate: model.inputs.loggInputPage.typedive.overflate,
            Wetbell: model.inputs.loggInputPage.typedive.Wetbell,
            bellsat: model.inputs.loggInputPage.typedive.bellsat,
            SurDo2: model.inputs.loggInputPage.typedive.SurDo2,
            Bellbounce: model.inputs.loggInputPage.typedive.Bellbounce,
            Breathingmix: model.inputs.loggInputPage.typedive.Breathingmix,
            Other: model.inputs.loggInputPage.typedive.Other,
        },
        surfacedies: {
            Leftsurface: model.inputs.loggInputPage.surfacedies.Leftsurface,
            maxdepth: model.inputs.loggInputPage.surfacedies.maxdepth,
            leftbottom: model.inputs.loggInputPage.surfacedies.leftbottom,
            bottomtime: model.inputs.loggInputPage.surfacedies.bottomtime,
            leftlaststop: model.inputs.loggInputPage.surfacedies.leftlaststop,
            tabledepth: model.inputs.loggInputPage.surfacedies.tabledepth,
            tabletime: model.inputs.loggInputPage.surfacedies.tabletime,
            chambertime: model.inputs.loggInputPage.surfacedies.chambertime,
            Decompressionscedule: model.inputs.loggInputPage.surfacedies.Decompressionscedule,
        },
        saturationdive: {
            leftsurface: model.inputs.loggInputPage.saturationdive.leftsurface,
            maxdepthsaturation: model.inputs.loggInputPage.saturationdive.maxdepthsaturation,
            leftstoragedepth: model.inputs.loggInputPage.saturationdive.leftstoragedepth,
            Backtostoragedepth: model.inputs.loggInputPage.saturationdive.Backtostoragedepth,
            saturationbottomtime: model.inputs.loggInputPage.saturationdive.saturationbottomtime,
        },
        Equipment: {
            airstandard: model.inputs.loggInputPage.Equipment.airstandard,
            mask: model.inputs.loggInputPage.Equipment.mask,
            helmet: model.inputs.loggInputPage.Equipment.helmet,
        },
        description: {
            workdescription: model.inputs.loggInputPage.description.workdescription,
            remarks: model.inputs.loggInputPage.description.remarks,
            standbydiver: model.inputs.loggInputPage.description.standbydiver,
        },
        sign: {
            Supervisor: model.inputs.loggInputPage.sign.Supervisor,
            signsupervisor: model.inputs.loggInputPage.sign.signsupervisor,
            Signdate: model.inputs.loggInputPage.sign.Signdate,
            stamp: model.inputs.loggInputPage.sign.stamp,
        }
    });
    model.inputs.loggInputPage.general.Dykkdato = '';
    model.inputs.loggInputPage.general.Dykkerselskap = '';
    model.inputs.loggInputPage.general.adresse = '';
    model.inputs.loggInputPage.general.Telefon = '';
    model.inputs.loggInputPage.general.Vessel = '';
    model.inputs.loggInputPage.general.Operator = '';

    model.inputs.loggInputPage.typedive.overflate = '';
    model.inputs.loggInputPage.typedive.Wetbell = '';
    model.inputs.loggInputPage.typedive.bellsat = '';
    model.inputs.loggInputPage.typedive.SurDo2 = '';
    model.inputs.loggInputPage.typedive.Bellbounce = '';
    model.inputs.loggInputPage.typedive.Breathingmix = '';
    model.inputs.loggInputPage.typedive.Other = '';

    model.inputs.loggInputPage.surfacedies.Leftsurface = '';
    model.inputs.loggInputPage.surfacedies.maxdepth = '';
    model.inputs.loggInputPage.surfacedies.leftbottom = '';
    model.inputs.loggInputPage.surfacedies.bottomtime = '';
    model.inputs.loggInputPage.surfacedies.leftlaststop = '';
    model.inputs.loggInputPage.surfacedies.tabledepth = '';
    model.inputs.loggInputPage.surfacedies.tabletime = '';
    model.inputs.loggInputPage.surfacedies.chambertime = '';
    model.inputs.loggInputPage.surfacedies.Decompressionscedule = '';

    model.inputs.loggInputPage.saturationdive.leftsurface = '';
    model.inputs.loggInputPage.saturationdive.maxdepthsaturation = '';
    model.inputs.loggInputPage.saturationdive.leftstoragedepth = '';
    model.inputs.loggInputPage.saturationdive.Backtostoragedepth = '';
    model.inputs.loggInputPage.saturationdive.saturationbottomtime = '';

    model.inputs.loggInputPage.description.workdescription = '';
    model.inputs.loggInputPage.description.remarks = '';
    model.inputs.loggInputPage.description.standbydiver = '';

    model.inputs.loggInputPage.Equipment.airstandard = '';
    model.inputs.loggInputPage.Equipment.mask = '';
    model.inputs.loggInputPage.Equipment.helmet = '';

    model.inputs.loggInputPage.sign.Supervisor = '';
    model.inputs.loggInputPage.sign.signsupervisor = '';
    model.inputs.loggInputPage.sign.Signdate = '';
    model.inputs.loggInputPage.sign.stamp = '';

    updateView();

}}



// function vote(index){
//     let option = model.options[index];
//     if(!option.voteCount){
//         option.voteCount = 0;   
//     }
//     option.voteCount++;
//     updateView();
// }