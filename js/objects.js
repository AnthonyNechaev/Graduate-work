'use strict';

let sym = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og";
let manyNames = "Водород Гелий Литий Бериллий Бор Углерод Азот Кислород Фтор Неон Натрий Магний Алюминий Кремний Фосфор Сера Хлор Аргон Калий Кальций Скандий Титан Ванадий Хром Марганец Железо Кобальт Никель Медь Цинк Галлий Германий Мышьяк Селен Бром Криптон Рубидий Стронций Иттрий Цирконий Ниобий Молибден Технеций Рутений Родий Палладий Серебро Кадмий Индий Олово Сурьма Теллур Йод Ксенон Цезий Барий Лантан Церий Празеодим Неодим Прометий Самарий Европий Гадолиний Тербий Диспрозий Гольмий Эрбий Тулий Иттербий Лютеций Гафний Тантал Вольфрам Рений Осмий Иридий Платина Золото Ртуть Таллий Свинец Висмут Полоний Астат Радон Франций Радий Актиний Торий Протактиний Уран Нептуний Плутоний Америций Кюрий Берклий Калифорний Эйнштейний Фермий Менделевий Нобелий Лоуренсий Резерфордий Дубний Сиборгий Борий Хассий Мейтнерий Дармштадтий Рентгений Коперниций Нихоний Флеровий Московий Ливерморий Теннессин Оганесон";
let manyMasses = "1,01 4 6,94 9,01 10,81 12,01 14,01 16 19 20,18 22,99 24,31 26,98 28,09 30,97 32,06 35,45 39,95 39,1 40,08 44,96 47,88 50,94 52 54,94 55,85 58,93 58,69 63,55 65,38 69,72 72,59 74,92 78,96 79,9 83,8 85,47 87,62 88,91 91,22 92,91 95,94 98 101,07 102,91 106,42 107,87 112,41 114,82 118,69 121,75 127,6 126,9 131,29 132,91 137,33 138,91 140,12 140,91 144,24 145 150,36 151,96 157,25 158,93 162,5 164,93 167,26 168,93 173,04 174,97 178,49 180,95 183,85 186,21 190,2 192,22 195,08 196,97 200,59 204,38 207,2 208,98 209,98 209,99 222 223 226,03 227,03 232,04 231,04 238,04 237,05 244 243 247 247 251 252 257 258 255 260 267 268 272 278 276 282 281 286 285 290 289 289 293 294 295";
let classList = "s s s s p p p p p p s s p p p p p p s s d d d d d d d d d d p p p p p p s s d d d d d d d d d d p p p p p p s s f f f f f f f f f f f f f f d d d d d d d d d d p p p p p p s s f f f f f f f f f f f f f f d d d d d d d d d d p p p p p p";

let symbols = sym.split(" ");
let names = manyNames.split(" ");
let masses = manyMasses.split(" ");
let classes = classList.split(" ");

let groups = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
let periods = [1,2,3,4,5,6,7];

let elements = [];
let fElems = [];
for (let i = 1; i <= names.length; i++) {
    if((i >= 57 && i <= 70)||(i >= 89 && i <= 102)){
        let metal = {
            number: i,
            mass: masses[i-1],
            name: names[i-1],
            symbol: symbols[i-1],
            group: classes[i-1]
        };
        fElems.push(metal);
    } else {
        let elem = {
            number: i,
            mass: masses[i-1],
            name: names[i-1],
            symbol: symbols[i-1],
            group: classes[i-1]
        };
        elements.push(elem);
    }
};

let allElems = [...elements, ...fElems];
let randomId = Math.floor((Math.random() * 118));
let task = allElems[randomId];

let selectedDiv;
function highlight(elem) {
    if (selectedDiv) { 
      selectedDiv.classList.remove('highlight');
    }
    selectedDiv = elem;
    selectedDiv.classList.add('highlight');
  };
  let points = 0;
const app = Vue.createApp({
    data(){
        return {
            elements,
            fElems,
            groups,
            periods,
            task,
            points
        }
    },
    methods: {
        clickElem(event){
            let elem = event.target.closest('div');
            if (!elem) return;
            if(elem.id != (this.task.number)) return;
            highlight(elem);
            this.points++;

            console.log(this.points);
            console.log(this.task);
            this.randomId = Math.floor((Math.random() * 118));
            this.task = allElems[this.randomId];
            console.log(this.task);
        },
        
    }
}).mount("#app");