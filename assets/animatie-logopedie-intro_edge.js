/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted16',
                            type: 'image',
                            rect: ['425px', '580px', '113px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted16.svg",'0px','0px']
                        },
                        {
                            id: 'Pasted8',
                            type: 'image',
                            rect: ['-21px', '284px', '846px', '541px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted8.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Pasted7',
                            type: 'image',
                            rect: ['-510px', '356px', '846px', '243px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted7.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'Pasted6',
                            type: 'image',
                            rect: ['-209px', '552px', '1137px', '326px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Pasted9',
                            type: 'image',
                            rect: ['-7px', '204px', '92px', '244px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted9.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Pasted5',
                            type: 'image',
                            rect: ['-111px', '564px', '989px', '283px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted5.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Gemeente',
                            type: 'image',
                            rect: ['162px', '312px', '400px', '374px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted10.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Pasted4',
                            type: 'image',
                            rect: ['-160px', '438px', '1465px', '116px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted4.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Koe',
                            type: 'image',
                            rect: ['39px', '605px', '113px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted11.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Kip',
                            type: 'image',
                            rect: ['252px', '539px', '74px', '67px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted12.svg",'0px','0px','40%','40%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Pasted14',
                            type: 'image',
                            rect: ['574px', '502px', '0px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted14.svg",'0px','0px']
                        },
                        {
                            id: 'Pasted19',
                            type: 'image',
                            rect: ['-27px', '4px', '377px', '243px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted19.svg",'0px','0px']
                        },
                        {
                            id: 'Pasted23',
                            type: 'image',
                            rect: ['47px', '170px', '237px', '244px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted23.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '320px', '452px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid195",
                            "height",
                            0,
                            1500,
                            "linear",
                            "${Pasted9}",
                            '243px',
                            '244px'
                        ],
                        [
                            "eid73",
                            "height",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Kip}",
                            '67px',
                            '94px'
                        ],
                        [
                            "eid7",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted4}",
                            '-11px',
                            '-160px'
                        ],
                        [
                            "eid140",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Pasted8}",
                            '541px',
                            '541px'
                        ],
                        [
                            "eid179",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Pasted7}",
                            '538px',
                            '356px'
                        ],
                        [
                            "eid62",
                            "width",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Koe}",
                            '74px',
                            '113px'
                        ],
                        [
                            "eid34",
                            "top",
                            435,
                            1065,
                            "easeOutBounce",
                            "${Pasted14}",
                            '502px',
                            '162px'
                        ],
                        [
                            "eid222",
                            "scaleY",
                            435,
                            1065,
                            "easeOutBounce",
                            "${Pasted23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Pasted5}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted9}",
                            '-151px',
                            '-7px'
                        ],
                        [
                            "eid121",
                            "top",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted8}",
                            '500px',
                            '284px'
                        ],
                        [
                            "eid33",
                            "height",
                            435,
                            1065,
                            "easeOutBounce",
                            "${Pasted14}",
                            '0px',
                            '152px'
                        ],
                        [
                            "eid176",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Kip}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35",
                            "left",
                            435,
                            1065,
                            "easeOutBounce",
                            "${Pasted14}",
                            '655px',
                            '574px'
                        ],
                        [
                            "eid221",
                            "scaleX",
                            435,
                            1065,
                            "easeOutBounce",
                            "${Pasted23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Pasted6}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            1500,
                            "linear",
                            "${Pasted9}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted7}",
                            '-796px',
                            '-510px'
                        ],
                        [
                            "eid178",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Pasted6}",
                            '552px',
                            '333px'
                        ],
                        [
                            "eid231",
                            "height",
                            1500,
                            0,
                            "easeOutBounce",
                            "${Stage}",
                            '452px',
                            '452px'
                        ],
                        [
                            "eid224",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${Stage}",
                            '320px',
                            '320px'
                        ],
                        [
                            "eid215",
                            "height",
                            435,
                            0,
                            "easeOutBounce",
                            "${Pasted23}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid60",
                            "height",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Koe}",
                            '45px',
                            '70px'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Koe}",
                            '605px',
                            '380px'
                        ],
                        [
                            "eid157",
                            "top",
                            213,
                            1287,
                            "easeOutBounce",
                            "${Pasted16}",
                            '580px',
                            '150px'
                        ],
                        [
                            "eid184",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Gemeente}",
                            '510px',
                            '312px'
                        ],
                        [
                            "eid170",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Pasted7}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid152",
                            "scaleX",
                            500,
                            0,
                            "easeOutQuad",
                            "${Pasted7}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Kip}",
                            '252px',
                            '717px'
                        ],
                        [
                            "eid223",
                            "left",
                            435,
                            1065,
                            "linear",
                            "${Pasted23}",
                            '47px',
                            '46px'
                        ],
                        [
                            "eid214",
                            "width",
                            435,
                            0,
                            "easeOutBounce",
                            "${Pasted23}",
                            '237px',
                            '237px'
                        ],
                        [
                            "eid173",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Pasted8}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${Pasted8}",
                            '-373px',
                            '115px'
                        ],
                        [
                            "eid145",
                            "left",
                            500,
                            1000,
                            "easeOutQuad",
                            "${Pasted8}",
                            '115px',
                            '-21px'
                        ],
                        [
                            "eid74",
                            "top",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Kip}",
                            '539px',
                            '316px'
                        ],
                        [
                            "eid185",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Pasted9}",
                            '405px',
                            '204px'
                        ],
                        [
                            "eid213",
                            "top",
                            435,
                            0,
                            "easeOutBounce",
                            "${Pasted23}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid75",
                            "width",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Kip}",
                            '74px',
                            '103px'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted5}",
                            '431px',
                            '-111px'
                        ],
                        [
                            "eid210",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${Pasted4}",
                            '438px',
                            '438px'
                        ],
                        [
                            "eid211",
                            "top",
                            1500,
                            0,
                            "easeOutQuad",
                            "${Pasted4}",
                            '438px',
                            '438px'
                        ],
                        [
                            "eid174",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Gemeente}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid36",
                            "width",
                            435,
                            1065,
                            "easeOutBounce",
                            "${Pasted14}",
                            '0px',
                            '198px'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted6}",
                            '-379px',
                            '-209px'
                        ],
                        [
                            "eid177",
                            "background-size",
                            0,
                            0,
                            "linear",
                            "${Pasted4}",
                            [40,40],
                            [40,40],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid141",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${Pasted8}",
                            '846px',
                            '846px'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Koe}",
                            '-199px',
                            '39px'
                        ],
                        [
                            "eid187",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${Pasted5}",
                            '564px',
                            '354px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${Gemeente}",
                            '425px',
                            '734px'
                        ],
                        [
                            "eid153",
                            "left",
                            500,
                            1000,
                            "easeOutQuad",
                            "${Gemeente}",
                            '734px',
                            '162px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Animatie%20logopedie%20intro_edgeActions.js");
})("EDGE-1576005");
