import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      nombre: 'Aquaman',
      bio:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941',
      casa: 'DC',
    },
    {
      nombre: 'Batman',
      bio:
        'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.png',
      aparicion: '1939',
      casa: 'DC',
    },
    {
      nombre: 'Capitán América',
      bio:
        'Sentidos, agilidad, velocidad y fuerza sobrehumanas. Gran habilidad con su escudo. Instinto de liderazgo, gran resistencia, inmune a gases y enfermedades, curación y regeneración acelerada. Genio táctico, artista marcial, acróbata experto.',
      img: 'assets/img/capitan-america.png',
      aparicion: '1941',
      casa: 'Marvel',
    },
    {
      nombre: 'Daredevil',
      bio:
        'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964',
      casa: 'Marvel',
    },
    {
      nombre: 'Flash',
      bio:
        'Flash (también conocido por su apodo "El Velocista Escarlata") es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad, reflejos sobrehumanos y la capacidad de violar algunas leyes de la física',
      img: 'assets/img/flash.png',
      aparicion: '1939',
      casa: 'DC',
    },
    {
      nombre: 'Hulk',
      bio:
        'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.png',
      aparicion: '1962',
      casa: 'Marvel',
    },
    {
      nombre: 'Iron Man',
      bio:
        'Armadura motorizada, le da fuerza y durabilidad sobrehumanas, vuelo y una gran variedad de armas. Rayos repulsores que se disparan desde las palmas de sus guantes. Proyector de haz único en su pecho, pernos de pulso, un generador de impulsos electromagnéticos y escudo de energía defensivo.',
      img: 'assets/img/iron-man.png',
      aparicion: '1963',
      casa: 'Marvel',
    },
    {
      nombre: 'Linterna Verde',
      bio:
        'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940',
      casa: 'DC',
    },
    {
      nombre: 'Mujer Maravilla',
      bio:
        'Es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega. En su tierra natal es conocida como la princesa Diana de Temiscira pero fuera de esta utiliza la identidad secreta de Diana Prince',
      img: 'assets/img/mujer-maravilla.png',
      aparicion: '1941',
      casa: 'DC',
    },
    {
      nombre: 'Spider-Man',
      bio:
        'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962',
      casa: 'Marvel',
    },
    {
      nombre: 'Superman',
      bio:
        'Superman, el último superviviente de Krypton, es sin lugar a dudas, uno de los superhéroes más poderosos jamás creados y un icono de la cultura popular. Entre sus poderes se cuenta la súper fuerza, invulnerabilidad, la capacidad de volar, visión calorífica, el aliento helado... Habilidades sin parangón que, sin embargo, no son las únicas del Hombre de Acero.',
      img: 'assets/img/superman.png',
      aparicion: '1938',
      casa: 'DC',
    },
    {
      nombre: 'Thor',
      bio:
        'Thor es el hijo de Odín, señor de los dioses de Asgard, y de Jord, que también es conocida como Gea, la más anciana diosa de la Tierra. Odín quería ser padre de un hijo cuyo poder derivase de la Tierra y de Asgard, así que se apareó con Jord. Odín creó una cueva en Noruega donde Jord dio a luz a Thor',
      img: 'assets/img/thor.png',
      aparicion: '1962',
      casa: 'Marvel',
    },
    {
      nombre: 'Wolverine',
      bio:
        'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres. Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974',
      casa: 'Marvel',
    },
  ];

  constructor() {
    console.log('Servicio listo para usar!!!');
  }

  getHeroes() {
    return this.heroes;
  }

  getHeroe(idx:number) {
    return this.heroes[idx];
  }

  buscarHeroe(termino: string): Heroe[]{
    let heroesArr: Heroe[] = [];

    for(let i=0; i<this.heroes.length; i++){
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
