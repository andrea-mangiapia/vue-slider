// Descrizione:
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

var app = new Vue({
    el: '#root',
    data: {
        currentElement: 0,
        intervalImage: null,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
    },

    methods: {
        showNextElement() {
            // Mostra immmagine successiva solo SE non supero la lunghezza dell'array - 1
            // ALTRIMENTI se sono a fine array torno all'inizio dell'array
            if (this.currentElement < this.slides.length - 1) {
                this.currentElement++;
            } else {
                this.currentElement = 0;
            }
        },

        showPreviousElement() {
            // Mostra immagine precedente solo S è maggiore di 0
            // ALTRIMENTI se sono all'inizio dell'array ricomincia dalla lunghezza dell'array - 1
            if (this.currentElement > 0) {
                this.currentElement--;
            } else {
                this.currentElement = this.slides.length - 1;
            }
        },
           
        currentActiveElement(elementIndex) {
            // l' elemento correntemente attivo diventa uguale all'indice dell'immmagine cliccato
            this.currentElement = elementIndex;
        },
    },

    mounted() {
        this.intervalImage = setInterval(this.showNextElement, 2000);
    }
})