export const COGITO_RESPONSE1 = {
    doc: [
        {
            content: [
                {
                    text: {
                        value:
                            'Mittente: Parri Marzia \r\nVIA MONTEGRAPPA 32 57023 Pecino (LI)\r\n\r\n \r\n \r\nSpett.le: ITAS MUTUA \r\nP.ZA DELLE DONNE LAVORATRici 2, 38123 TRENTO (TN) \r\n\r\n\r\nOggetto: Disdetta polizza assicurativa \r\nContraente: Parri Marzia\r\nNumero polizza: 2H/M12358626 \r\n\r\n17 DIC. 2019 JUCCINI: LOVA \r\n\r\n\r\nCon la presente si dà formale disdetta della polizza in oggetto, e/o eventuali sostituzioni, per la sua scadenza del 16/01/2020. \r\nQuanto sopra con riferimento sia alle condizioni di polizza che alle norme di legge vigenti. \r\nDistinti saluti. \r\n\r\nParri Marzia\r\n \r\nCecina, 9.12.19 \r\n\r\n\r\nPostaraccomandata \r\nPosteitaliane \r\n09.12.2019 15.49 Euro 005.40 \r\n100153783860132 \r\n38121 \r\n32040 57029 CEST (1) \r\n\r\n\r\n15378388603-2 \r\nRUM \r\nMitt:PARRI MARZIA \r\nVIA MONTEGRAPPA 32\r\n57023 COCINA (LI) \r\n\n',
                        mimetype: 'text/plain',
                        charset: 'UTF-8',
                    },
                },
            ],
            metadata: [
                {
                    a: [
                        {
                            name: 'language',
                            value: 'Italian',
                        },
                    ],
                },
            ],
            boundaries: [
                {
                    b: [
                        {
                            s: 0,
                            e: 61,
                        },
                        {
                            s: 71,
                            e: 143,
                        },
                        {
                            s: 150,
                            e: 245,
                        },
                        {
                            s: 250,
                            e: 276,
                        },
                        {
                            s: 283,
                            e: 411,
                        },
                        {
                            s: 414,
                            e: 506,
                        },
                        {
                            s: 509,
                            e: 525,
                        },
                        {
                            s: 530,
                            e: 542,
                        },
                        {
                            s: 547,
                            e: 562,
                        },
                        {
                            s: 569,
                            e: 682,
                        },
                        {
                            s: 689,
                            e: 768,
                        },
                    ],
                    name: 'sentence',
                    set: '_converter_',
                },
            ],
            knowledge: [
                {
                    type: [
                        {
                            ad: [
                                {
                                    name: 'CATEGORY_ID',
                                    scope: 'KNOWLEDGE',
                                },
                                {
                                    name: 'COMPOUND',
                                    type: 'INTEGER',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'SCORE',
                                    type: 'FLOAT',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'path',
                                    scope: 'CONTEXTUAL',
                                },
                                {
                                    name: 'prefLabel',
                                    scope: 'CONTEXTUAL',
                                },
                            ],
                            fullname: '/Category',
                            name: 'Category',
                        },
                    ],
                    descriptor: [
                        {
                            name: '00.01.00',
                            label: '00.01.00',
                            type: '/Category',
                            a: [
                                {
                                    name: 'CATEGORY_ID',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'COMPOUND',
                                    value: '80',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SCORE',
                                    value: '80',
                                    type: 'FLOAT',
                                },
                                {
                                    name: 'path',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '00.01.00',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '40',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 150,
                            e: 188,
                        },
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '40',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 283,
                            e: 411,
                        },
                    ],
                    name: 'CATEGORIZATION',
                },
                {
                    type: [
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/DISDETTA@contraente',
                                    name: 'DISDETTA@contraente',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/DISDETTA@dataScadenza',
                                    name: 'DISDETTA@dataScadenza',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/DISDETTA@numeroPolizza',
                                    name: 'DISDETTA@numeroPolizza',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@dataMail',
                                    name: 'MAIL@dataMail',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@mittente',
                                    name: 'MAIL@mittente',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@oggetto',
                                    name: 'MAIL@oggetto',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@spettabile',
                                    name: 'MAIL@spettabile',
                                },
                            ],
                            fullname: '/Field',
                            name: 'Field',
                        },
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'contraente',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/DISDETTA@contraente',
                                        },
                                        {
                                            name: 'dataScadenza',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/DISDETTA@dataScadenza',
                                        },
                                        {
                                            name: 'numeroPolizza',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/DISDETTA@numeroPolizza',
                                        },
                                    ],
                                    fullname: '/Template/DISDETTA',
                                    name: 'DISDETTA',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'dataMail',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@dataMail',
                                        },
                                        {
                                            name: 'mittente',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@mittente',
                                        },
                                        {
                                            name: 'oggetto',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@oggetto',
                                        },
                                        {
                                            name: 'spettabile',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@spettabile',
                                        },
                                    ],
                                    fullname: '/Template/MAIL',
                                    name: 'MAIL',
                                },
                            ],
                            fullname: '/Template',
                            name: 'Template',
                        },
                    ],
                    descriptor: [
                        {
                            name: '0',
                            label: 'Marzia Parri',
                            type: '/Template/DISDETTA',
                            a: [
                                {
                                    name: 'contraente',
                                    type: 'POINTER',
                                    refName: 'Marzia Parri',
                                    refType: '/Field/DISDETTA@contraente',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Marzia Parri',
                                },
                            ],
                        },
                        {
                            name: 'Marzia Parri',
                            type: '/Field/DISDETTA@contraente',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: '16-Gen-2020',
                            type: '/Template/DISDETTA',
                            a: [
                                {
                                    name: 'dataScadenza',
                                    type: 'POINTER',
                                    refName: '16-Gen-2020',
                                    refType: '/Field/DISDETTA@dataScadenza',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '16-Gen-2020',
                                },
                            ],
                        },
                        {
                            name: '16-Gen-2020',
                            type: '/Field/DISDETTA@dataScadenza',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/DISDETTA',
                            a: [
                                {
                                    name: 'numeroPolizza',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/DISDETTA@numeroPolizza',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '2H/M12358626',
                                },
                            ],
                        },
                        {
                            name: '2H/M12358626',
                            type: '/Field/DISDETTA@numeroPolizza',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '0',
                            label: '9-Dic-2019',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'dataMail',
                                    type: 'POINTER',
                                    refName: '9-Dic-2019',
                                    refType: '/Field/MAIL@dataMail',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '9-Dic-2019',
                                },
                            ],
                        },
                        {
                            name: '9-Dic-2019',
                            type: '/Field/MAIL@dataMail',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'Marzia Parri',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'mittente',
                                    type: 'POINTER',
                                    refName: 'Marzia Parri',
                                    refType: '/Field/MAIL@mittente',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Marzia Parri',
                                },
                            ],
                        },
                        {
                            name: 'Marzia Parri',
                            type: '/Field/MAIL@mittente',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '3',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: 'PARRI MARZIA',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'mittente',
                                    type: 'POINTER',
                                    refName: 'PARRI MARZIA',
                                    refType: '/Field/MAIL@mittente',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'PARRI MARZIA',
                                },
                            ],
                        },
                        {
                            name: 'PARRI MARZIA',
                            type: '/Field/MAIL@mittente',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '3',
                            label: 'Oggetto: Disdetta',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'oggetto',
                                    type: 'POINTER',
                                    refName: 'Oggetto: Disdetta',
                                    refType: '/Field/MAIL@oggetto',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Oggetto: Disdetta',
                                },
                            ],
                        },
                        {
                            name: 'Oggetto: Disdetta',
                            type: '/Field/MAIL@oggetto',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '4',
                            label: 'Oggetto: Disdetta polizza assicurativa',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'oggetto',
                                    type: 'POINTER',
                                    refName: 'Oggetto: Disdetta polizza assicurativa',
                                    refType: '/Field/MAIL@oggetto',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Oggetto: Disdetta polizza assicurativa',
                                },
                            ],
                        },
                        {
                            name: 'Oggetto: Disdetta polizza assicurativa',
                            type: '/Field/MAIL@oggetto',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '5',
                            label: 'ITAS',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'ITAS',
                                },
                                {
                                    name: 'spettabile',
                                    type: 'POINTER',
                                    refName: 'ITAS',
                                    refType: '/Field/MAIL@spettabile',
                                },
                            ],
                        },
                        {
                            name: 'ITAS',
                            type: '/Field/MAIL@spettabile',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '22',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Parri Marzia',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Marzia Parri',
                            type: '/Field/MAIL@mittente',
                            s: 10,
                            e: 22,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '71',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '91',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'ITAS',
                                    type: 'STRING',
                                },
                            ],
                            name: 'ITAS',
                            type: '/Field/MAIL@spettabile',
                            s: 81,
                            e: 85,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '150',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '188',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Oggetto: Disdetta polizza assicurativa',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Oggetto: Disdetta polizza assicurativa',
                            type: '/Field/MAIL@oggetto',
                            s: 150,
                            e: 188,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '150',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '188',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Oggetto: Disdetta',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Oggetto: Disdetta',
                            type: '/Field/MAIL@oggetto',
                            s: 150,
                            e: 167,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '191',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '215',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Parri Marzia',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Marzia Parri',
                            type: '/Field/DISDETTA@contraente',
                            s: 203,
                            e: 215,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '191',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '215',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Parri Marzia',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Marzia Parri',
                            type: '/Field/MAIL@mittente',
                            s: 203,
                            e: 215,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '217',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '245',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '2H/M12358626',
                                    type: 'STRING',
                                },
                            ],
                            name: '2H/M12358626',
                            type: '/Field/DISDETTA@numeroPolizza',
                            s: 233,
                            e: 245,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100205892',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '283',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '411',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '16/01/2020',
                                    type: 'STRING',
                                },
                            ],
                            name: '16-Gen-2020',
                            type: '/Field/DISDETTA@dataScadenza',
                            s: 400,
                            e: 410,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '530',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '542',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Parri Marzia',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Marzia Parri',
                            type: '/Field/MAIL@mittente',
                            s: 530,
                            e: 542,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100205892',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '547',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '562',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '9.12.19',
                                    type: 'STRING',
                                },
                            ],
                            name: '9-Dic-2019',
                            type: '/Field/MAIL@dataMail',
                            s: 555,
                            e: 562,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '711',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '728',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'PARRI MARZIA',
                                    type: 'STRING',
                                },
                            ],
                            name: 'PARRI MARZIA',
                            type: '/Field/MAIL@mittente',
                            s: 716,
                            e: 728,
                        },
                        {
                            a: [
                                {
                                    name: 'contraente',
                                    type: 'POINTER',
                                    refName: 'Marzia Parri',
                                    refType: '/Field/DISDETTA@contraente',
                                    s: 203,
                                    e: 215,
                                },
                            ],
                            name: '0',
                            label: 'Marzia Parri',
                            type: '/Template/DISDETTA',
                        },
                        {
                            a: [
                                {
                                    name: 'dataScadenza',
                                    type: 'POINTER',
                                    refName: '16-Gen-2020',
                                    refType: '/Field/DISDETTA@dataScadenza',
                                    s: 400,
                                    e: 410,
                                },
                            ],
                            name: '1',
                            label: '16-Gen-2020',
                            type: '/Template/DISDETTA',
                        },
                        {
                            a: [
                                {
                                    name: 'numeroPolizza',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/DISDETTA@numeroPolizza',
                                    s: 233,
                                    e: 245,
                                },
                            ],
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/DISDETTA',
                        },
                        {
                            a: [
                                {
                                    name: 'dataMail',
                                    type: 'POINTER',
                                    refName: '9-Dic-2019',
                                    refType: '/Field/MAIL@dataMail',
                                    s: 555,
                                    e: 562,
                                },
                            ],
                            name: '0',
                            label: '9-Dic-2019',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'mittente',
                                    type: 'POINTER',
                                    refName: 'Marzia Parri',
                                    refType: '/Field/MAIL@mittente',
                                    s: 10,
                                    e: 22,
                                },
                                {
                                    name: 'mittente',
                                    type: 'POINTER',
                                    refName: 'Marzia Parri',
                                    refType: '/Field/MAIL@mittente',
                                    s: 203,
                                    e: 215,
                                },
                                {
                                    name: 'mittente',
                                    type: 'POINTER',
                                    refName: 'Marzia Parri',
                                    refType: '/Field/MAIL@mittente',
                                    s: 530,
                                    e: 542,
                                },
                            ],
                            name: '1',
                            label: 'Marzia Parri',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'mittente',
                                    type: 'POINTER',
                                    refName: 'PARRI MARZIA',
                                    refType: '/Field/MAIL@mittente',
                                    s: 716,
                                    e: 728,
                                },
                            ],
                            name: '2',
                            label: 'PARRI MARZIA',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'oggetto',
                                    type: 'POINTER',
                                    refName: 'Oggetto: Disdetta',
                                    refType: '/Field/MAIL@oggetto',
                                    s: 150,
                                    e: 167,
                                },
                            ],
                            name: '3',
                            label: 'Oggetto: Disdetta',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'oggetto',
                                    type: 'POINTER',
                                    refName: 'Oggetto: Disdetta polizza assicurativa',
                                    refType: '/Field/MAIL@oggetto',
                                    s: 150,
                                    e: 188,
                                },
                            ],
                            name: '4',
                            label: 'Oggetto: Disdetta polizza assicurativa',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'spettabile',
                                    type: 'POINTER',
                                    refName: 'ITAS',
                                    refType: '/Field/MAIL@spettabile',
                                    s: 81,
                                    e: 85,
                                },
                            ],
                            name: '5',
                            label: 'ITAS',
                            type: '/Template/MAIL',
                        },
                    ],
                    name: 'EXTRACTION',
                },
                {
                    type: [
                        {
                            ad: [
                                {
                                    name: 'SCORE',
                                    type: 'FLOAT',
                                    scope: 'DOCUMENT',
                                },
                            ],
                            fullname: '/Domain',
                            name: 'Domain',
                        },
                        {
                            type: [
                                {
                                    fullname: '/Entity/KNOWN CONCEPTS',
                                    name: 'KNOWN CONCEPTS',
                                },
                                {
                                    fullname: '/Entity/ORGANIZATIONS',
                                    name: 'ORGANIZATIONS',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'ALIAS',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'NAME',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SEX',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SURNAME',
                                            scope: 'CONTEXTUAL',
                                        },
                                    ],
                                    fullname: '/Entity/PEOPLE',
                                    name: 'PEOPLE',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'ALIAS',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'GEOREF',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                    ],
                                    fullname: '/Entity/PLACES',
                                    name: 'PLACES',
                                },
                            ],
                            fullname: '/Entity',
                            name: 'Entity',
                        },
                    ],
                    descriptor: [
                        {
                            name: 'Marzia Parri',
                            type: '/Entity/PEOPLE',
                            a: [
                                {
                                    name: 'ALIAS',
                                    value: 'Parri Marzia',
                                },
                                {
                                    name: 'NAME',
                                    value: 'Marzia',
                                },
                                {
                                    name: 'SEX',
                                    value: 'F',
                                },
                                {
                                    name: 'SURNAME',
                                    value: 'Parri',
                                },
                            ],
                        },
                        {
                            name: 'Cecina',
                            type: '/Entity/PLACES',
                            a: [
                                {
                                    name: 'GEOREF',
                                    value: 'provincia di Livorno/Toscana/Italia/Europa',
                                },
                                {
                                    name: 'SYNCON',
                                    value: '16505545',
                                },
                            ],
                        },
                        {
                            name: 'comune di Trento',
                            type: '/Entity/PLACES',
                            a: [
                                {
                                    name: 'ALIAS',
                                    value: 'TN',
                                },
                                {
                                    name: 'ALIAS',
                                    value: 'TRENTO',
                                },
                                {
                                    name: 'GEOREF',
                                    value: 'provincia di Trento/Trentino Alto Adige/Italia/Europa',
                                },
                                {
                                    name: 'SYNCON',
                                    value: '16507278',
                                },
                            ],
                        },
                        {
                            name: 'law',
                            type: '/Domain',
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '6.1',
                                    type: 'FLOAT',
                                },
                            ],
                        },
                        {
                            name: 'business and commercial law',
                            type: '/Domain',
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '1.2',
                                    type: 'FLOAT',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            name: 'Marzia Parri',
                            type: '/Entity/PEOPLE',
                            s: 10,
                            e: 22,
                        },
                        {
                            name: 'comune di Trento',
                            type: '/Entity/PLACES',
                            s: 132,
                            e: 138,
                        },
                        {
                            name: 'comune di Trento',
                            type: '/Entity/PLACES',
                            s: 140,
                            e: 142,
                        },
                        {
                            name: 'Marzia Parri',
                            type: '/Entity/PEOPLE',
                            s: 203,
                            e: 215,
                        },
                        {
                            name: 'Marzia Parri',
                            type: '/Entity/PEOPLE',
                            s: 530,
                            e: 542,
                        },
                        {
                            name: 'Cecina',
                            type: '/Entity/PLACES',
                            s: 547,
                            e: 553,
                        },
                    ],
                    name: 'SYNTHESIS',
                },
            ],
            status: {
                valid: true,
            },
            id: 'conv-d98839c3-9c05-4721-9f26-875b6966d7e9',
        },
    ],
}

export const COGITO_RESPONSE_ENG_1 = {
    doc: [
        {
            content: [
                {
                    text: {
                        value:
                            'From: Thomas Alva,\r\n\r\n44th Street, Wembley\r\n\r\nDate: 11/04/2021\r\n\r\nTo: ITAS MUTUA,\r\n\r\nWembley Central\r\n\r\nSubject: Insurance Cancellation\r\n\r\nDear ITAS MUTUA,\r\n\r\nPlease accept this letter as a formal request for cancelling my non-life insurance policy 2H/M12358626 and its expiry date is 16/01/2020, with immediate effect. I request you to stop all charges and debits as well as related to the payments. I can produce receipts of all premium paid during the tenure of this policy.\r\n\r\nI at this moment request to cancel and return the premium I have paid earlier. This cancellation request should be processed within 30 days from the date of this letter.\r\n\r\nI request you to send a cancellation confirmation letter related to the policy. Please treat the matter as urgent and process it at the earliest.\r\n\r\nYours Sincerely,\r\n\r\nThomas Alva.',
                        mimetype: 'text/plain',
                    },
                },
            ],
            metadata: [
                {
                    a: [
                        {
                            name: 'language',
                            value: 'English',
                        },
                    ],
                },
            ],
            boundaries: [
                {
                    b: [
                        {
                            s: 0,
                            e: 18,
                        },
                        {
                            s: 22,
                            e: 42,
                        },
                        {
                            s: 46,
                            e: 62,
                        },
                        {
                            s: 66,
                            e: 81,
                        },
                        {
                            s: 85,
                            e: 100,
                        },
                        {
                            s: 104,
                            e: 135,
                        },
                        {
                            s: 139,
                            e: 155,
                        },
                        {
                            s: 159,
                            e: 319,
                        },
                        {
                            s: 320,
                            e: 400,
                        },
                        {
                            s: 401,
                            e: 477,
                        },
                        {
                            s: 481,
                            e: 559,
                        },
                        {
                            s: 560,
                            e: 650,
                        },
                        {
                            s: 654,
                            e: 733,
                        },
                        {
                            s: 734,
                            e: 799,
                        },
                        {
                            s: 803,
                            e: 819,
                        },
                        {
                            s: 823,
                            e: 835,
                        },
                    ],
                    name: 'sentence',
                    set: '_converter_',
                },
            ],
            knowledge: [
                {
                    type: [
                        {
                            ad: [
                                {
                                    name: 'CATEGORY_ID',
                                    scope: 'KNOWLEDGE',
                                },
                                {
                                    name: 'COMPOUND',
                                    type: 'INTEGER',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'SCORE',
                                    type: 'FLOAT',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'path',
                                    scope: 'CONTEXTUAL',
                                },
                                {
                                    name: 'prefLabel',
                                    scope: 'CONTEXTUAL',
                                },
                            ],
                            fullname: '/Category',
                            name: 'Category',
                        },
                    ],
                    descriptor: [
                        {
                            name: '00.01.00',
                            label: '00.01.00',
                            type: '/Category',
                            a: [
                                {
                                    name: 'CATEGORY_ID',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'COMPOUND',
                                    value: '80',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SCORE',
                                    value: '80',
                                    type: 'FLOAT',
                                },
                                {
                                    name: 'path',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '00.01.00',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '20',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 104,
                            e: 135,
                        },
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '60',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 159,
                            e: 477,
                        },
                    ],
                    name: 'CATEGORIZATION',
                },
                {
                    type: [
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@contractor',
                                    name: 'CANCELLATION@contractor',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@expirationDate',
                                    name: 'CANCELLATION@expirationDate',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@policyNumber',
                                    name: 'CANCELLATION@policyNumber',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@respectable',
                                    name: 'MAIL@respectable',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@sender',
                                    name: 'MAIL@sender',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@subject',
                                    name: 'MAIL@subject',
                                },
                            ],
                            fullname: '/Field',
                            name: 'Field',
                        },
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'contractor',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@contractor',
                                        },
                                        {
                                            name: 'expirationDate',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@expirationDate',
                                        },
                                        {
                                            name: 'policyNumber',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@policyNumber',
                                        },
                                    ],
                                    fullname: '/Template/CANCELLATION',
                                    name: 'CANCELLATION',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'respectable',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@respectable',
                                        },
                                        {
                                            name: 'sender',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@sender',
                                        },
                                        {
                                            name: 'subject',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@subject',
                                        },
                                    ],
                                    fullname: '/Template/MAIL',
                                    name: 'MAIL',
                                },
                            ],
                            fullname: '/Template',
                            name: 'Template',
                        },
                    ],
                    descriptor: [
                        {
                            name: '0',
                            label: 'Thomas Alva',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Thomas Alva',
                                    refType: '/Field/CANCELLATION@contractor',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Thomas Alva',
                                },
                            ],
                        },
                        {
                            name: 'Thomas Alva',
                            type: '/Field/CANCELLATION@contractor',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '2',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'Jan-16-2020',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'expirationDate',
                                    type: 'POINTER',
                                    refName: 'Jan-16-2020',
                                    refType: '/Field/CANCELLATION@expirationDate',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Jan-16-2020',
                                },
                            ],
                        },
                        {
                            name: 'Jan-16-2020',
                            type: '/Field/CANCELLATION@expirationDate',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '2H/M12358626',
                                },
                            ],
                        },
                        {
                            name: '2H/M12358626',
                            type: '/Field/CANCELLATION@policyNumber',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '0',
                            label: 'ITAS',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'ITAS',
                                },
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'ITAS',
                                    refType: '/Field/MAIL@respectable',
                                },
                            ],
                        },
                        {
                            name: 'ITAS',
                            type: '/Field/MAIL@respectable',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'MUTUA',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'MUTUA',
                                },
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'MUTUA',
                                    refType: '/Field/MAIL@respectable',
                                },
                            ],
                        },
                        {
                            name: 'MUTUA',
                            type: '/Field/MAIL@respectable',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: 'Thomas Alva',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Thomas Alva',
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Thomas Alva',
                                    refType: '/Field/MAIL@sender',
                                },
                            ],
                        },
                        {
                            name: 'Thomas Alva',
                            type: '/Field/MAIL@sender',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '2',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '3',
                            label: 'Subject: Insurance',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Subject: Insurance',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Insurance',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: 'Subject: Insurance',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '4',
                            label: 'Subject: Insurance Cancellation',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Subject: Insurance Cancellation',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Insurance Cancellation',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: 'Subject: Insurance Cancellation',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '18',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Thomas Alva',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Thomas Alva',
                            type: '/Field/CANCELLATION@contractor',
                            s: 6,
                            e: 17,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '18',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Thomas Alva',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Thomas Alva',
                            type: '/Field/MAIL@sender',
                            s: 6,
                            e: 17,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '66',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '81',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'ITAS',
                                    type: 'STRING',
                                },
                            ],
                            name: 'ITAS',
                            type: '/Field/MAIL@respectable',
                            s: 70,
                            e: 74,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '66',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '81',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'MUTUA',
                                    type: 'STRING',
                                },
                            ],
                            name: 'MUTUA',
                            type: '/Field/MAIL@respectable',
                            s: 75,
                            e: 80,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '104',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '135',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Subject: Insurance Cancellation',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Subject: Insurance Cancellation',
                            type: '/Field/MAIL@subject',
                            s: 104,
                            e: 135,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '104',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '135',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Subject: Insurance',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Subject: Insurance',
                            type: '/Field/MAIL@subject',
                            s: 104,
                            e: 122,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '159',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '319',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '2H/M12358626',
                                    type: 'STRING',
                                },
                            ],
                            name: '2H/M12358626',
                            type: '/Field/CANCELLATION@policyNumber',
                            s: 249,
                            e: 261,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100205892',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '159',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '319',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '16/01/2020',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Jan-16-2020',
                            type: '/Field/CANCELLATION@expirationDate',
                            s: 285,
                            e: 295,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '823',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '835',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Thomas Alva',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Thomas Alva',
                            type: '/Field/CANCELLATION@contractor',
                            s: 823,
                            e: 834,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '823',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '835',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Thomas Alva',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Thomas Alva',
                            type: '/Field/MAIL@sender',
                            s: 823,
                            e: 834,
                        },
                        {
                            a: [
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Thomas Alva',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 6,
                                    e: 17,
                                },
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Thomas Alva',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 823,
                                    e: 834,
                                },
                            ],
                            name: '0',
                            label: 'Thomas Alva',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'expirationDate',
                                    type: 'POINTER',
                                    refName: 'Jan-16-2020',
                                    refType: '/Field/CANCELLATION@expirationDate',
                                    s: 285,
                                    e: 295,
                                },
                            ],
                            name: '1',
                            label: 'Jan-16-2020',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                    s: 249,
                                    e: 261,
                                },
                            ],
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'ITAS',
                                    refType: '/Field/MAIL@respectable',
                                    s: 70,
                                    e: 74,
                                },
                            ],
                            name: '0',
                            label: 'ITAS',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'MUTUA',
                                    refType: '/Field/MAIL@respectable',
                                    s: 75,
                                    e: 80,
                                },
                            ],
                            name: '1',
                            label: 'MUTUA',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Thomas Alva',
                                    refType: '/Field/MAIL@sender',
                                    s: 6,
                                    e: 17,
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Thomas Alva',
                                    refType: '/Field/MAIL@sender',
                                    s: 823,
                                    e: 834,
                                },
                            ],
                            name: '2',
                            label: 'Thomas Alva',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Insurance',
                                    refType: '/Field/MAIL@subject',
                                    s: 104,
                                    e: 122,
                                },
                            ],
                            name: '3',
                            label: 'Subject: Insurance',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Insurance Cancellation',
                                    refType: '/Field/MAIL@subject',
                                    s: 104,
                                    e: 135,
                                },
                            ],
                            name: '4',
                            label: 'Subject: Insurance Cancellation',
                            type: '/Template/MAIL',
                        },
                    ],
                    name: 'EXTRACTION',
                },
            ],
            status: {
                valid: true,
            },
            id: 'conv-1618152556770',
        },
    ],
}

export const COGITO_RESPONSE_ENG_2 = {
    doc: [
        {
            content: [
                {
                    text: {
                        value:
                            'From: Rakesh Sharma\r\nKarol Bagh Delhi\r\n\r\nDate: 07.03.19\r\n\r\nTo: Insurance Corporation of IndiaDelhi\r\n\r\nSub: Cancellation of LIC Policy No. 2H/M12358626\r\n\r\nDear Sir,\r\n\r\nI, Rakesh Sharma, am writing this letter for formally submit my request to cancel my Life Insurance Policy (Policy No. 2H/M12358626). The effective date of cancelling the policy is 08.03.19. Therefore, please stop debiting all the charges for the same and return all the unused premium to the address mentioned above.\r\n\r\nI would appreciate if you could send me the confirmation of cancellation of the policy within 30 days of receiving this letter. If there is any query on the same, please feel free to get in touch with me at 9898989898.\r\n\r\nLooking forward for your response.\r\nSincerely,\r\nRakesh Sharma',
                        mimetype: 'text/plain',
                    },
                },
            ],
            metadata: [
                {
                    a: [
                        {
                            name: 'language',
                            value: 'English',
                        },
                    ],
                },
            ],
            boundaries: [
                {
                    b: [
                        {
                            s: 0,
                            e: 37,
                        },
                        {
                            s: 41,
                            e: 55,
                        },
                        {
                            s: 59,
                            e: 98,
                        },
                        {
                            s: 102,
                            e: 150,
                        },
                        {
                            s: 154,
                            e: 163,
                        },
                        {
                            s: 167,
                            e: 300,
                        },
                        {
                            s: 301,
                            e: 357,
                        },
                        {
                            s: 358,
                            e: 484,
                        },
                        {
                            s: 488,
                            e: 615,
                        },
                        {
                            s: 616,
                            e: 706,
                        },
                        {
                            s: 710,
                            e: 744,
                        },
                        {
                            s: 746,
                            e: 771,
                        },
                    ],
                    name: 'sentence',
                    set: '_converter_',
                },
            ],
            knowledge: [
                {
                    type: [
                        {
                            ad: [
                                {
                                    name: 'CATEGORY_ID',
                                    scope: 'KNOWLEDGE',
                                },
                                {
                                    name: 'COMPOUND',
                                    type: 'INTEGER',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'SCORE',
                                    type: 'FLOAT',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'path',
                                    scope: 'CONTEXTUAL',
                                },
                                {
                                    name: 'prefLabel',
                                    scope: 'CONTEXTUAL',
                                },
                            ],
                            fullname: '/Category',
                            name: 'Category',
                        },
                    ],
                    descriptor: [
                        {
                            name: '00.01.00',
                            label: '00.01.00',
                            type: '/Category',
                            a: [
                                {
                                    name: 'CATEGORY_ID',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'COMPOUND',
                                    value: '120',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SCORE',
                                    value: '120',
                                    type: 'FLOAT',
                                },
                                {
                                    name: 'path',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '00.01.00',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '120',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 167,
                            e: 484,
                        },
                    ],
                    name: 'CATEGORIZATION',
                },
                {
                    type: [
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@contractor',
                                    name: 'CANCELLATION@contractor',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@expirationDate',
                                    name: 'CANCELLATION@expirationDate',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@policyNumber',
                                    name: 'CANCELLATION@policyNumber',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@respectable',
                                    name: 'MAIL@respectable',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@sender',
                                    name: 'MAIL@sender',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@subject',
                                    name: 'MAIL@subject',
                                },
                            ],
                            fullname: '/Field',
                            name: 'Field',
                        },
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'contractor',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@contractor',
                                        },
                                        {
                                            name: 'expirationDate',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@expirationDate',
                                        },
                                        {
                                            name: 'policyNumber',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@policyNumber',
                                        },
                                    ],
                                    fullname: '/Template/CANCELLATION',
                                    name: 'CANCELLATION',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'respectable',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@respectable',
                                        },
                                        {
                                            name: 'sender',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@sender',
                                        },
                                        {
                                            name: 'subject',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@subject',
                                        },
                                    ],
                                    fullname: '/Template/MAIL',
                                    name: 'MAIL',
                                },
                            ],
                            fullname: '/Template',
                            name: 'Template',
                        },
                    ],
                    descriptor: [
                        {
                            name: '0',
                            label: 'Rakesh Sharma',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/CANCELLATION@contractor',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Rakesh Sharma',
                                },
                            ],
                        },
                        {
                            name: 'Rakesh Sharma',
                            type: '/Field/CANCELLATION@contractor',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '3',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'Aug-3-1919',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'expirationDate',
                                    type: 'POINTER',
                                    refName: 'Aug-3-1919',
                                    refType: '/Field/CANCELLATION@expirationDate',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'Aug-3-1919',
                                },
                            ],
                        },
                        {
                            name: 'Aug-3-1919',
                            type: '/Field/CANCELLATION@expirationDate',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '2H/M12358626',
                                },
                            ],
                        },
                        {
                            name: '2H/M12358626',
                            type: '/Field/CANCELLATION@policyNumber',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '2',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '0',
                            label: 'Insurance Corporation of IndiaDelhi',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Insurance Corporation of IndiaDelhi',
                                },
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'Insurance Corporation of IndiaDelhi',
                                    refType: '/Field/MAIL@respectable',
                                },
                            ],
                        },
                        {
                            name: 'Insurance Corporation of IndiaDelhi',
                            type: '/Field/MAIL@respectable',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'Rakesh Sharma',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Rakesh Sharma',
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/MAIL@sender',
                                },
                            ],
                        },
                        {
                            name: 'Rakesh Sharma',
                            type: '/Field/MAIL@sender',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '3',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: '2H/M12358626',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: '2H/M12358626',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '3',
                            label: 'Sub: Cancellation',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Sub: Cancellation',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Sub: Cancellation',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: 'Sub: Cancellation',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '4',
                            label: 'Sub: Cancellation of LIC',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Sub: Cancellation of LIC',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Sub: Cancellation of LIC',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: 'Sub: Cancellation of LIC',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '19',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Rakesh Sharma',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Rakesh Sharma',
                            type: '/Field/CANCELLATION@contractor',
                            s: 6,
                            e: 19,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '19',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Rakesh Sharma',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Rakesh Sharma',
                            type: '/Field/MAIL@sender',
                            s: 6,
                            e: 19,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '81203',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '59',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '98',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Insurance Corporation of IndiaDelhi',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Insurance Corporation of IndiaDelhi',
                            type: '/Field/MAIL@respectable',
                            s: 63,
                            e: 98,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '102',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '150',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Sub: Cancellation of LIC',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Sub: Cancellation of LIC',
                            type: '/Field/MAIL@subject',
                            s: 102,
                            e: 126,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '102',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '150',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Sub: Cancellation',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Sub: Cancellation',
                            type: '/Field/MAIL@subject',
                            s: 102,
                            e: 119,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '102',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '150',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Policy No. 2H/M12358626',
                                    type: 'STRING',
                                },
                            ],
                            name: '2H/M12358626',
                            type: '/Field/CANCELLATION@policyNumber',
                            s: 127,
                            e: 150,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '102',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '150',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Policy No. 2H/M12358626',
                                    type: 'STRING',
                                },
                            ],
                            name: '2H/M12358626',
                            type: '/Field/MAIL@subject',
                            s: 127,
                            e: 150,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '167',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '300',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Rakesh Sharma',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Rakesh Sharma',
                            type: '/Field/CANCELLATION@contractor',
                            s: 170,
                            e: 183,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '167',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '300',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Rakesh Sharma',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Rakesh Sharma',
                            type: '/Field/MAIL@sender',
                            s: 170,
                            e: 183,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '167',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '300',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Policy No. 2H/M12358626',
                                    type: 'STRING',
                                },
                            ],
                            name: '2H/M12358626',
                            type: '/Field/CANCELLATION@policyNumber',
                            s: 275,
                            e: 298,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100205892',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '301',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '357',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '08.03.19',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Aug-3-1919',
                            type: '/Field/CANCELLATION@expirationDate',
                            s: 348,
                            e: 356,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '758',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '771',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Rakesh Sharma',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Rakesh Sharma',
                            type: '/Field/CANCELLATION@contractor',
                            s: 758,
                            e: 771,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '758',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '771',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Rakesh Sharma',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Rakesh Sharma',
                            type: '/Field/MAIL@sender',
                            s: 758,
                            e: 771,
                        },
                        {
                            a: [
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 6,
                                    e: 19,
                                },
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 170,
                                    e: 183,
                                },
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 758,
                                    e: 771,
                                },
                            ],
                            name: '0',
                            label: 'Rakesh Sharma',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'expirationDate',
                                    type: 'POINTER',
                                    refName: 'Aug-3-1919',
                                    refType: '/Field/CANCELLATION@expirationDate',
                                    s: 348,
                                    e: 356,
                                },
                            ],
                            name: '1',
                            label: 'Aug-3-1919',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                    s: 127,
                                    e: 150,
                                },
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                    s: 275,
                                    e: 298,
                                },
                            ],
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'Insurance Corporation of IndiaDelhi',
                                    refType: '/Field/MAIL@respectable',
                                    s: 63,
                                    e: 98,
                                },
                            ],
                            name: '0',
                            label: 'Insurance Corporation of IndiaDelhi',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/MAIL@sender',
                                    s: 6,
                                    e: 19,
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/MAIL@sender',
                                    s: 170,
                                    e: 183,
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'Rakesh Sharma',
                                    refType: '/Field/MAIL@sender',
                                    s: 758,
                                    e: 771,
                                },
                            ],
                            name: '1',
                            label: 'Rakesh Sharma',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: '2H/M12358626',
                                    refType: '/Field/MAIL@subject',
                                    s: 127,
                                    e: 150,
                                },
                            ],
                            name: '2',
                            label: '2H/M12358626',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Sub: Cancellation',
                                    refType: '/Field/MAIL@subject',
                                    s: 102,
                                    e: 119,
                                },
                            ],
                            name: '3',
                            label: 'Sub: Cancellation',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Sub: Cancellation of LIC',
                                    refType: '/Field/MAIL@subject',
                                    s: 102,
                                    e: 126,
                                },
                            ],
                            name: '4',
                            label: 'Sub: Cancellation of LIC',
                            type: '/Template/MAIL',
                        },
                    ],
                    name: 'EXTRACTION',
                },
            ],
            status: {
                valid: true,
            },
            id: 'conv-1618153186844',
        },
    ],
}

export const COGITO_RESPONSE_ENG_3 = {
    doc: [
        {
            content: [
                {
                    text: {
                        value:
                            'From: Mr. David Filed\r\n45/3 Good Avenues\r\nVinton 46899\r\n\r\nTo: Mr.Brown \r\nCancellation Department\r\n\r\nLife Care Insurance Company\r\n\r\nVinton 76635\r\n\r\nDate: 27 May, 2014\r\n\r\nSubject: Cancellation of Life Insurance Policy 4H/M12758920\r\n\r\nDear Mr.Brown,\r\n\r\nPlease consider this letter as a formal request regarding my decision of cancellation of life insurance policy (Policy No.: 4H/M12758920). Hence, stop all debits or charges for premium payments. The effective date of policy cancellation is 05/02/2014. Furthermore, do not charge my bank account for any monthly premium payments.\r\n\r\nYou are requested to take all the necessary actions at the earliest and also send me a written confirmation that clearly state the cancellation of my policy has been accepted and are into effect. I also request a refund for unused premiums, within 30 days from the receipt of this letter along with the written confirmation of this cancellation.\r\n\r\nKindly check all the details of my premiums and refund of any unused amount of my policy premium. Your prompt action on my request to get the cancellation of life insurance policy done at your earliest convenience is anticipated.\r\n\r\nFeel free to contact me for further clarifications if required.\r\n\r\nYours Sincerely,\r\n\r\nMr. David Filed\r\n\r\n45/3 Good Avenues\r\n\r\nVinton 46899',
                        mimetype: 'text/plain',
                    },
                },
            ],
            metadata: [
                {
                    a: [
                        {
                            name: 'language',
                            value: 'English',
                        },
                    ],
                },
            ],
            boundaries: [
                {
                    b: [
                        {
                            s: 0,
                            e: 54,
                        },
                        {
                            s: 58,
                            e: 96,
                        },
                        {
                            s: 100,
                            e: 127,
                        },
                        {
                            s: 131,
                            e: 143,
                        },
                        {
                            s: 147,
                            e: 165,
                        },
                        {
                            s: 169,
                            e: 228,
                        },
                        {
                            s: 232,
                            e: 246,
                        },
                        {
                            s: 250,
                            e: 388,
                        },
                        {
                            s: 389,
                            e: 444,
                        },
                        {
                            s: 445,
                            e: 501,
                        },
                        {
                            s: 502,
                            e: 578,
                        },
                        {
                            s: 582,
                            e: 777,
                        },
                        {
                            s: 778,
                            e: 927,
                        },
                        {
                            s: 931,
                            e: 1028,
                        },
                        {
                            s: 1029,
                            e: 1160,
                        },
                        {
                            s: 1164,
                            e: 1227,
                        },
                        {
                            s: 1231,
                            e: 1247,
                        },
                        {
                            s: 1251,
                            e: 1266,
                        },
                        {
                            s: 1270,
                            e: 1287,
                        },
                        {
                            s: 1291,
                            e: 1303,
                        },
                    ],
                    name: 'sentence',
                    set: '_converter_',
                },
            ],
            knowledge: [
                {
                    type: [
                        {
                            ad: [
                                {
                                    name: 'CATEGORY_ID',
                                    scope: 'KNOWLEDGE',
                                },
                                {
                                    name: 'COMPOUND',
                                    type: 'INTEGER',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'SCORE',
                                    type: 'FLOAT',
                                    scope: 'DOCUMENT',
                                },
                                {
                                    name: 'path',
                                    scope: 'CONTEXTUAL',
                                },
                                {
                                    name: 'prefLabel',
                                    scope: 'CONTEXTUAL',
                                },
                            ],
                            fullname: '/Category',
                            name: 'Category',
                        },
                    ],
                    descriptor: [
                        {
                            name: '00.01.00',
                            label: '00.01.00',
                            type: '/Category',
                            a: [
                                {
                                    name: 'CATEGORY_ID',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'COMPOUND',
                                    value: '200',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SCORE',
                                    value: '200',
                                    type: 'FLOAT',
                                },
                                {
                                    name: 'path',
                                    value: '00.01.00',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '00.01.00',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '60',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 169,
                            e: 228,
                        },
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '80',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 250,
                            e: 578,
                        },
                        {
                            a: [
                                {
                                    name: 'SCORE',
                                    value: '60',
                                    type: 'FLOAT',
                                },
                            ],
                            name: '00.01.00',
                            type: '/Category',
                            s: 931,
                            e: 1160,
                        },
                    ],
                    name: 'CATEGORIZATION',
                },
                {
                    type: [
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@contractor',
                                    name: 'CANCELLATION@contractor',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@expirationDate',
                                    name: 'CANCELLATION@expirationDate',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/CANCELLATION@policyNumber',
                                    name: 'CANCELLATION@policyNumber',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@respectable',
                                    name: 'MAIL@respectable',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'ESYNCON',
                                            scope: 'CONTEXTUAL',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@sender',
                                    name: 'MAIL@sender',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'COUNT',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_BEGIN',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'SENTENCE_END',
                                            type: 'INTEGER',
                                            scope: 'DOCUMENT',
                                        },
                                        {
                                            name: 'TEXT',
                                            type: 'STRING',
                                            scope: 'DOCUMENT',
                                        },
                                    ],
                                    fullname: '/Field/MAIL@subject',
                                    name: 'MAIL@subject',
                                },
                            ],
                            fullname: '/Field',
                            name: 'Field',
                        },
                        {
                            type: [
                                {
                                    ad: [
                                        {
                                            name: 'contractor',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@contractor',
                                        },
                                        {
                                            name: 'expirationDate',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@expirationDate',
                                        },
                                        {
                                            name: 'policyNumber',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/CANCELLATION@policyNumber',
                                        },
                                    ],
                                    fullname: '/Template/CANCELLATION',
                                    name: 'CANCELLATION',
                                },
                                {
                                    ad: [
                                        {
                                            name: 'respectable',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@respectable',
                                        },
                                        {
                                            name: 'sender',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@sender',
                                        },
                                        {
                                            name: 'subject',
                                            type: 'POINTER',
                                            scope: 'CONTEXTUAL',
                                            constraint: '/Field/MAIL@subject',
                                        },
                                    ],
                                    fullname: '/Template/MAIL',
                                    name: 'MAIL',
                                },
                            ],
                            fullname: '/Template',
                            name: 'Template',
                        },
                    ],
                    descriptor: [
                        {
                            name: '0',
                            label: 'David Filed',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'David Filed',
                                    refType: '/Field/CANCELLATION@contractor',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'David Filed',
                                },
                            ],
                        },
                        {
                            name: 'David Filed',
                            type: '/Field/CANCELLATION@contractor',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '2',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'May-2-2014',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'expirationDate',
                                    type: 'POINTER',
                                    refName: 'May-2-2014',
                                    refType: '/Field/CANCELLATION@expirationDate',
                                },
                                {
                                    name: 'prefLabel',
                                    value: 'May-2-2014',
                                },
                            ],
                        },
                        {
                            name: 'May-2-2014',
                            type: '/Field/CANCELLATION@expirationDate',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: '4H/M12758920',
                            type: '/Template/CANCELLATION',
                            a: [
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '4H/M12758920',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                },
                                {
                                    name: 'prefLabel',
                                    value: '4H/M12758920',
                                },
                            ],
                        },
                        {
                            name: '4H/M12758920',
                            type: '/Field/CANCELLATION@policyNumber',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '2',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '0',
                            label: 'Mr.Brown',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Mr.Brown',
                                },
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'Mr.Brown',
                                    refType: '/Field/MAIL@respectable',
                                },
                            ],
                        },
                        {
                            name: 'Mr.Brown',
                            type: '/Field/MAIL@respectable',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '1',
                            label: 'David Filed',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'David Filed',
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'David Filed',
                                    refType: '/Field/MAIL@sender',
                                },
                            ],
                        },
                        {
                            name: 'David Filed',
                            type: '/Field/MAIL@sender',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '2',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '2',
                            label: '4H/M12758920',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: '4H/M12758920',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: '4H/M12758920',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: '4H/M12758920',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '3',
                            label: 'Subject: Cancellation',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Subject: Cancellation',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Cancellation',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: 'Subject: Cancellation',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                        {
                            name: '4',
                            label: 'Subject: Cancellation of Life Insurance Policy',
                            type: '/Template/MAIL',
                            a: [
                                {
                                    name: 'prefLabel',
                                    value: 'Subject: Cancellation of Life Insurance Policy',
                                },
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Cancellation of Life Insurance Policy',
                                    refType: '/Field/MAIL@subject',
                                },
                            ],
                        },
                        {
                            name: 'Subject: Cancellation of Life Insurance Policy',
                            type: '/Field/MAIL@subject',
                            a: [
                                {
                                    name: 'COUNT',
                                    value: '1',
                                    type: 'INTEGER',
                                },
                            ],
                        },
                    ],
                    annotation: [
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '21',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'David Filed',
                                    type: 'STRING',
                                },
                            ],
                            name: 'David Filed',
                            type: '/Field/CANCELLATION@contractor',
                            s: 10,
                            e: 21,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '0',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '21',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'David Filed',
                                    type: 'STRING',
                                },
                            ],
                            name: 'David Filed',
                            type: '/Field/MAIL@sender',
                            s: 10,
                            e: 21,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '58',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '70',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Mr.Brown',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Mr.Brown',
                            type: '/Field/MAIL@respectable',
                            s: 62,
                            e: 70,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '169',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '228',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Subject: Cancellation of Life Insurance Policy',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Subject: Cancellation of Life Insurance Policy',
                            type: '/Field/MAIL@subject',
                            s: 169,
                            e: 215,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '169',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '228',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'Subject: Cancellation',
                                    type: 'STRING',
                                },
                            ],
                            name: 'Subject: Cancellation',
                            type: '/Field/MAIL@subject',
                            s: 169,
                            e: 190,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '169',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '228',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '4H/M12758920',
                                    type: 'STRING',
                                },
                            ],
                            name: '4H/M12758920',
                            type: '/Field/CANCELLATION@policyNumber',
                            s: 216,
                            e: 228,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '169',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '228',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '4H/M12758920',
                                    type: 'STRING',
                                },
                            ],
                            name: '4H/M12758920',
                            type: '/Field/MAIL@subject',
                            s: 216,
                            e: 228,
                        },
                        {
                            a: [
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '250',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '388',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '4H/M12758920',
                                    type: 'STRING',
                                },
                            ],
                            name: '4H/M12758920',
                            type: '/Field/CANCELLATION@policyNumber',
                            s: 374,
                            e: 386,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100205892',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '445',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '501',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: '05/02/2014',
                                    type: 'STRING',
                                },
                            ],
                            name: 'May-2-2014',
                            type: '/Field/CANCELLATION@expirationDate',
                            s: 490,
                            e: 500,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '1251',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '1266',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'David Filed',
                                    type: 'STRING',
                                },
                            ],
                            name: 'David Filed',
                            type: '/Field/CANCELLATION@contractor',
                            s: 1255,
                            e: 1266,
                        },
                        {
                            a: [
                                {
                                    name: 'ESYNCON',
                                    value: '100215627',
                                },
                                {
                                    name: 'SENTENCE_BEGIN',
                                    value: '1251',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'SENTENCE_END',
                                    value: '1266',
                                    type: 'INTEGER',
                                },
                                {
                                    name: 'TEXT',
                                    value: 'David Filed',
                                    type: 'STRING',
                                },
                            ],
                            name: 'David Filed',
                            type: '/Field/MAIL@sender',
                            s: 1255,
                            e: 1266,
                        },
                        {
                            a: [
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'David Filed',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 10,
                                    e: 21,
                                },
                                {
                                    name: 'contractor',
                                    type: 'POINTER',
                                    refName: 'David Filed',
                                    refType: '/Field/CANCELLATION@contractor',
                                    s: 1255,
                                    e: 1266,
                                },
                            ],
                            name: '0',
                            label: 'David Filed',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'expirationDate',
                                    type: 'POINTER',
                                    refName: 'May-2-2014',
                                    refType: '/Field/CANCELLATION@expirationDate',
                                    s: 490,
                                    e: 500,
                                },
                            ],
                            name: '1',
                            label: 'May-2-2014',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '4H/M12758920',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                    s: 216,
                                    e: 228,
                                },
                                {
                                    name: 'policyNumber',
                                    type: 'POINTER',
                                    refName: '4H/M12758920',
                                    refType: '/Field/CANCELLATION@policyNumber',
                                    s: 374,
                                    e: 386,
                                },
                            ],
                            name: '2',
                            label: '4H/M12758920',
                            type: '/Template/CANCELLATION',
                        },
                        {
                            a: [
                                {
                                    name: 'respectable',
                                    type: 'POINTER',
                                    refName: 'Mr.Brown',
                                    refType: '/Field/MAIL@respectable',
                                    s: 62,
                                    e: 70,
                                },
                            ],
                            name: '0',
                            label: 'Mr.Brown',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'David Filed',
                                    refType: '/Field/MAIL@sender',
                                    s: 10,
                                    e: 21,
                                },
                                {
                                    name: 'sender',
                                    type: 'POINTER',
                                    refName: 'David Filed',
                                    refType: '/Field/MAIL@sender',
                                    s: 1255,
                                    e: 1266,
                                },
                            ],
                            name: '1',
                            label: 'David Filed',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: '4H/M12758920',
                                    refType: '/Field/MAIL@subject',
                                    s: 216,
                                    e: 228,
                                },
                            ],
                            name: '2',
                            label: '4H/M12758920',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Cancellation',
                                    refType: '/Field/MAIL@subject',
                                    s: 169,
                                    e: 190,
                                },
                            ],
                            name: '3',
                            label: 'Subject: Cancellation',
                            type: '/Template/MAIL',
                        },
                        {
                            a: [
                                {
                                    name: 'subject',
                                    type: 'POINTER',
                                    refName: 'Subject: Cancellation of Life Insurance Policy',
                                    refType: '/Field/MAIL@subject',
                                    s: 169,
                                    e: 215,
                                },
                            ],
                            name: '4',
                            label: 'Subject: Cancellation of Life Insurance Policy',
                            type: '/Template/MAIL',
                        },
                    ],
                    name: 'EXTRACTION',
                },
            ],
            status: {
                valid: true,
            },
            id: 'conv-1618153204500',
        },
    ],
}

export const mailCustomerCancellation =
    'Dear customer <b>$customer</b>,\n' +
    'We regret your policy cancellation request. \n' +
    'We inform you that the cancellation process is complete, and that it will take effect from this date <b>$cancellationDate</b> for the policy <b>$policy</b>. \n' +
    'For any problem we remain at your disposal. \n' +
    '\n' +
    'Greetings, \n' +
    '<b>$company</b>\n'

export const mailOperationCancellation =
    'Hello,\n' +
    'we have received a cancellation request for the policy <b>$policy</b> from our policyholder <b>$customer</b> dated <b>$requestDate</b>.\n' +
    'The automated process has successfully completed the transaction with cancellation date <b>$cancellationDate</b> \n' +
    '\n' +
    'Greetings,\n' +
    'P&C Team.'

export const mailCustomerMissing =
    'Dear customer <b>$customer</b>,\n' +
    'we are sorry, but your request is missing important information, such as the policy number you want to cancel.\n' +
    'We kindly ask you to indicate which policy you want to cancel.\n' +
    'We will process the cancellation request as soon as possible\n' +
    '\n' +
    'Greetings, \n' +
    '<b>$company</b>\n'

export const mailOperationMissing =
    'Hello,\n' +
    'the customer <b>$customer</b> has requested the cancellation of the policy, without indicating which one it is\n' +
    'In our information systems we have found more policies associated with the contractor so we have requested confirmation of the policy number to be canceled.\n' +
    '\n' +
    'Greetings,\n' +
    'P&C Team.'

export const mailCustomerWrongAgency =
    'Dear customer <b>$customer</b>,\n' +
    'there is no active policy with you in our systems..\n' +
    'We are sorry but we are unable to process your request.\n' +
    '\n' +
    'Greetings, \n' +
    '<b>$company</b>\n'

export const mailOperationWrongAgency =
    'Hello,\n' +
    'customer <b>$customer</b> has requested a cancellation, but there is no active policy associated with that registry.\n' +
    'We have therefore informed the customer that we are unable to process the request.\n' +
    '\n' +
    'Greetings,\n' +
    'P&C Team.'
