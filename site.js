// https://www.w3schools.com/charsets/ref_html_utf8.asp

const Localization = {
    _dictionaries: {
        'en': {
            title: 'Ayudante de Filo de la Salvaci&oacuten',
            created_by: 'Creado por',

            // 4th Encounter
            encounter_4: '4to Encuentro',
            dissection_tool: 'Herramienta de Disecci&oacuten',
            reset: 'Reiniciar',
            left: 'Izquierdo',
            middle: 'Medio',
            right: 'Derecho',
            inside: 'Adentro',
            outside: 'Pared',
            circle: 'C&iacuterculo',
            square: 'Cuadrado',
            triangle: 'Tri&aacutengulo',
            sphere: 'Cir-Cir',
            cube: 'Cua-Cua',
            pyramid: 'Tri-Tri',
            cylinder: 'Cir-Cua',
            prism: 'Cua-Tri',
            cone: 'Tri-Cir',
            steps_to_solve: 'Pasos para resolver',
            dissect: 'Diseccionar',
            from: 'en',
            agarrar: 'Agarrar',
            ponerlo: 'y ponerlo'
        },

        'es': {
            title: 'Ayudante de Filo de la Salvaci&oacuten',
            created_by: 'Creado por',

            // 4th Encounter
            encounter_4: '4to Encuentro',
            dissection_tool: 'Herramienta de Disecci&oacuten',
            reset: 'Reiniciar',
            left: 'Izquierdo',
            middle: 'Medio',
            right: 'Derecho',
            inside: 'Adentro',
            outside: 'Pared',
            circle: 'C&iacuterculo',
            square: 'Cuadrado',
            triangle: 'Tri&aacutengulo',
            sphere: 'Cir-Cir',
            cube: 'Cua-Cua',
            pyramid: 'Tri-Tri',
            cylinder: 'Cir-Cua',
            prism: 'Cua-Tri',
            cone: 'Tri-Cir',
            steps_to_solve: 'Pasos para resolver',
            dissect: 'Diseccionar',
            from: 'en',
            agarrar: 'Agarrar',
            ponerlo: 'y ponerlo'
      }
    },

    dictionary: null,

    Initialize: function () {
        const lang = this._getLang();
        const dictionary = this._dictionaries[lang];

        $("[data-localize]").each(function () {
            const language = $(this).data('localize');
            $(this).html(dictionary[language]);
        });

        this.dictionary = dictionary;
    },

    _getLang: function () {
        const supportedLanguages = ['en', 'es'];

        for (let i = 0; i < navigator.languages.length; i++) {
            if (supportedLanguages.indexOf(navigator.languages[i]) != -1) {
                return navigator.languages[i];
            }
        }

        return 'en';
    }
}

$(function () {
    Localization.Initialize();

    $('.se-btn-group button').on('click', function () {
        const button = $(this);
        const group = button.closest('.se-btn-group');
        const wasSelected = button.hasClass('btn-light');

        group.find('button').removeClass('btn-light');
        group.find('button').addClass('btn-dark');

        button.toggleClass('btn-dark', wasSelected);
        button.toggleClass('btn-light', !wasSelected);
    });
});