
const model = {
    app: {
        currentPage: 'writeLog', // addOption
    },
    inputs: {
        loggInputPage: //inputs på loggførings siden
            {
            general: {
                Dykkdato: '',
                Dykkerselskap: '',
                adresse: '',
                Telefon: '',
                Vessel: '',
                Operator: '',
            },
            typedive: {
                overflate: '',
                Wetbell: '',
                bellsat: '',
                SurDo2: '',
                Bellbounce: '',
                Breathingmix: '',
                Other:'',
                },
            surfacedies: {
                Leftsurface: '',
                maxdepth: '',
                leftbottom: '',
                bottomtime: '',
                leftlaststop: '',
                tabledepth: '',
                tabletime: '',
                chambertime: '',
                Decompressionscedule: '',
                },
            saturationdive: {
                leftsurface: '',
                maxdepthsaturation: '',
                leftstoragedepth: '',
                Backtostoragedepth: '',
                saturationbottomtime: '',
                },
            Equipment: {
                airstandard: '',
                mask: '',
                helmet: '',
                },
            description: {
                workdescription: '',
                remarks: '',
                standbydiver: '',
                },
            sign: {
                Supervisor: '',
                signsupervisor: '',
                Signdate: '',
                stamp:'',
                },
            },

        loggDisplayPage: {  //inputs på display siden
            sortBy: 'default',
        },
    },
    loggDisplayPage: { //display siden
        diveLog: [
            {
                general: {
                    Dykkdato: '07.06.2021',   //vises på display siden
                    Dykkerselskap: 'Robert dykk og undervanns service', //vise på display siden
                    adresse: '',
                    Telefon: '40140414',
                    Vessel: '',
                    Operator: '',
                },
                typedive: {
                    overflate: '', //vises på display siden
                    Wetbell: '',
                    bellsat: '',
                    SurDo2: '',
                    Bellbounce: '',
                    Breathingmix: '',
                    Other:'',
                },
                surfacedies: {
                    Leftsurface: '',
                    maxdepth: '40m',   //vises på display siden
                    leftbottom: '',
                    bottomtime: '10 Min', //vises på display siden
                    leftlaststop: '',
                    tabledepth: '',
                    tabletime: '',
                    chambertime: '',
                    Decompressionscedule: '',
                },
                saturationdive: {
                    leftsurface: '',
                    maxdepthsaturation: '',
                    leftstoragedepth: '',
                    Backtostoragedepth: '',
                    saturationbottomtime: '',
                },
                Equipment: {
                    airstandard: 'Nitrox O2', //vises på display siden
                    mask: '',
                    helmet: '',
                },
                description: {
                    workdescription: '',
                    remarks: '',
                    standbydiver: '',
                },
                sign: {
                    Supervisor: '',
                    signsupervisor: 'yes', //vises på display siden
                    Signdate: '',
                    stamp:'',   //vises på display siden
                },
            },
        ]
    },
    sortByCategories: [ //sorterings alt. 
        {id: 1, name:'dato', },
        {id: 2, name:'Signed', },
        {id: 3, name:'breathing mixture', },
        {id: 4, name:'decompression scedule used', },
        {id: 5, name:'supervisor', },
        {id: 6, name:'stand by diver', },
    ],
};
