import { BookDetail } from '../book-detail';

export const BOOKS: BookDetail[] = [
  {
    id: 1,
    name: 'Harry Potter y la piedra filosofal',
    isbn: '9786073193894',
    description:
      'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de Magia y Hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las artes oscuras. Se convertirá en el campeón escolar de Quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!',
    image:
      'https://storage.googleapis.com/catalogo-libros/extralarge/a0c88d28-0edf-4fd5-c903-609ec30d57d3_imagen.jpg',
    publishingDate: '26/06/1997',
    editorial: { id: 1, name: 'SALAMADRA' },
    authors: [
      {
        id: 1,
        name: 'J. K. Rowling',
        birthDate: '31/07/1965',
        image:
          'https://static1.mujerhoy.com/www/multimedia/202007/20/media/cortadas/jk-rowling-polemica-transfobia-k0TB-U110849049600hyD-624x936@MujerHoy.jpg',
        description:
          'Joanne Rowling​, quien escribe bajo los seudónimos J. K. Rowling​ y Robert Galbraith, es una escritora, productora de cine y guionista inglesa, conocida por ser la autora de la serie de libros Harry Potter, que han superado los quinientos millones de ejemplares vendidos.​',
      },
    ],
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        source: 'Excelente',
        description:
          'Es un libro de aventuras que te transporta y saca de la realidad. Estoy ansioso de poder adquirir el siguiente libro de la saga.',
        book: null,
      },
    ],
  },
  {
    id: 2,
    name: 'El resplandor',
    isbn: '9789588789774',
    description:
      'REDRUM. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Danny tenía cinco años. Y a esa edad pocos niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: REDRUM? MURDER, asesinato. Pero su padre necesitaba aquel trabajo en el hotel. Danny sabía que su madre pensaba en el divorcio y que su padre se obsesionaba con algo muy malo, tan malo como la muerte y el suicidio. Sí, su padre necesitaba aceptar la propuesta de cuidar de aquel hotel de lujo de más de cien habitaciones, aislado por la nieve durante seis meses. Hasta el deshielo iban a estar solos.',
    image:
      'https://storage.googleapis.com/catalogo-libros/extralarge/1d177faf-5584-f100-f40c-541c750b2397_imagen.jpg',
    publishingDate: '28/01/1977',
    editorial: { id: 2, name: 'DEBOLSILLO' },
    authors: [
      {
        id: 2,
        name: 'Stephen King',
        birthDate: '21/09/1947',
        image: 'https://imagessl.casadellibro.com/img/autores/292.jpg',
        description:
          'Stephen Edwin King, más conocido como Stephen King y ocasionalmente por su pseudónimo Richard Bachman, es un escritor estadounidense de novelas de terror, ficción sobrenatural, misterio, ciencia ficción y literatura fantástica.',
      },
    ],
    reviews: [
      {
        id: 2,
        name: 'Juan Higuera',
        source: 'Bueno',
        description: 'Es un buen libro.',
        book: null,
      },
    ],
  },
  {
    id: 3,
    name: 'La naranja mecánica',
    isbn: '9789584259554',
    description:
      'La naranja mecánica, publicada en 1962, sitúa la acción en el futuro cercano de la década de 1970. Burgess narra la historia de cuatro adolescentes, o nadsats, tal como se llaman en la jerga creada por el autor. El protagonista, Alex, y sus amigos o drugos, viven en un mundo de crueldad y destrucción. Tras la brutal violación a la mujer de un escritor, Alex es detenido y llevado a un centro de rehabilitación, donde será elegido para participar en un novedoso y drástico experimento que pretende que aborrezca la violencia. Una vez reinsertado en la sociedad, el tratamiento tendrá consecuencias impredecibles. La naranja mecánica fue llevada al cine con gran éxito por Stanley Kubrick.',
    image:
      'https://storage.googleapis.com/catalogo-libros/extralarge/827459fd-eb34-1ac0-7cdf-593feb3c0414_imagen.jpg',
    publishingDate: '02/09/1962',
    editorial: { id: 3, name: 'BOOKET' },
    authors: [
      {
        id: 3,
        name: 'Anthony Burgess',
        birthDate: '25/02/1917',
        image:
          'https://trabalibros.com/rs/12066/4886d523-1977-4fa1-ab24-df1b609c897c/7cf/filename/anthony-burgess.jpg',
        description:
          'John Anthony Burgess Wilson fue un escritor y compositor inglés, quién realizó una prolífica obra literaria y musical, siendo generalmente conocido por la novela A Clockwork Orange en 1962, la cual se hizo famosa por la película homónima de Stanley Kubrick en 1971.',
      },
    ],
    reviews: [
      {
        id: 3,
        name: 'Leonardo Bedoya',
        source: 'Malo',
        description: 'No dispone de un buen argumento.',
        book: null,
      },
    ],
  },
  {
    id: 4,
    name: 'Veinte mil leguas de viaje submarino',
    isbn: '9786287514454',
    description:
      'Combinar con calamares gigantes, sobrevivir a un terrible remolino, navegar bajo los hielos de la Antártida... ¿Hay mayor aventura? El biólogo Aronnax y sus amigos lo descubrirán a bordo del Nautilus, el submarino del misterioso capitán Nemo. Los clásicos de Julio Verne a una cuidada edición actualizada, ilustrada y adaptada. ',
    image:
      'https://storage.googleapis.com/catalogo-libros/extralarge/bcee8496-4d9a-b517-7e7c-61bb60a6088a_imagen.jpg',
    publishingDate: '01/06/1870',
    editorial: { id: 4, name: 'MOLINO' },
    authors: [
      {
        id: 4,
        name: 'Julio Verne',
        birthDate: '08/02/1828',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg/1200px-F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg',
        description:
          'Jules Gabriel Verne, conocido en los países hispanohablantes como Julio Verne, fue un escritor, poeta y dramaturgo francés célebre por sus novelas de aventuras y por su profunda influencia en el género literario de la ciencia ficción.',
      },
    ],
    reviews: [
      {
        id: 4,
        name: 'Emily Arias',
        source: 'Excelente',
        description: 'El mejor libro que he conocido.',
        book: null,
      },
    ],
  },
  {
    id: 5,
    name: 'Viaje sentimental',
    isbn: '9788412064414',
    description:
      'Viaje sentimental describe los viajes de un intelectual desconcertado a través de Rusia, Persia, Ucrania y el Cáucaso durante el periodo de la Revolución rusa. Valioso documento histórico por su relato de primera mano de los acontecimientos durante el periodo de 1917-1922, es también una importante obra literaria experimental, una memoria en forma de novela. A veces lírica, perturbadora, irónica y erudita, es un libro singular de una de las voces más reconocibles e influyentes de la literatura rusa del siglo XX. En cuanto memoria o crónica de la Revolución rusa y de la Primera Guerra Mundial, Viaje sentimental se construye de manera atípica por un testigo que, afortunadamente para nosotros, no tiene ninguna pretensión de imparcialidad. La mayoría de la materia narrativa no la compone la narración de la experiencia, sino más bien digresiones teóricas y críticas para iluminar la historia con la verdad: errática, digresiva y aberrante, como los hechos que cambiaron la historia del siglo XX.',
    image:
      'https://storage.googleapis.com/catalogo-libros/extralarge/384c0064-8d5b-072e-d195-5f73540d1619_imagen.jpg',
    publishingDate: '01/01/1972',
    editorial: { id: 5, name: 'CAPITÁN SWING LIBROS' },
    authors: [
      {
        id: 5,
        name: 'Viktor Shklovski',
        birthDate: '24/01/1893',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sklovsky.jpg/220px-Sklovsky.jpg',
        description:
          'Víktor Borísovich Shklovski​ fue un crítico, escritor y panfletista ruso y soviético. Presentó algunos conceptos básicos de la teoría del formalismo, obras de arte de carácter tradicional y un conjunto de técnicas utilizadas sobre el mismo autor.',
      },
    ],
    reviews: [
      {
        id: 5,
        name: 'Mario Hernandez',
        source: 'Excelente',
        description: 'Un buen libro.',
        book: null,
      },
    ],
  },
  {
    id: 6,
    name: 'El giro',
    isbn: '9789584299109',
    description:
      'Hace cerca de seiscientos años, en 1417, un humanista italiano emprendió un viaje para visitar conventos alemanes en busca de manuscritos antiguos. En uno de ellos descubrió el único ejemplar que había sobrevivido de una obra escrita en el siglo primero antes de Cristo, De rerum natura, un poema filosófico de Tito Lucrecio Caro que desarrollaba una visión materialista del mundo, destinada a liberar al hombre del temor a los dioses. Lo copió y regresó con él a Italia, donde la difusión de sus “peligrosas ideas” fue una de las fuentes del giro cultural del Renacimiento, que iba a dar lugar al cambio ideológico del que surgió el mundo moderno.',
    image:
      'https://storage.googleapis.com/catalogo-libros/extralarge/654c1bd1-bff1-8d2b-a4c9-61e6c78aa73e_imagen.jpg',
    publishingDate: '19/09/2011',
    editorial: { id: 6, name: 'CRITICA' },
    authors: [
      {
        id: 6,
        name: 'Stephen Greenblatt',
        birthDate: '07/11/1943',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/A13mv+tt1mL._SX450_.jpg',
        description:
          'Stephen Jay Greenblatt es un historiador literario, y autor estadounidense. Es el titular de la Cátedra John Cogan de la Universidad de Humanidades en la Universidad de Harvard. Es el editor general de The Norton Shakespeare y el editor general y colaborador de la Antología Norton de la Literatura inglesa.',
      },
    ],
    reviews: [
      {
        id: 6,
        name: 'Maria Cruz',
        source: 'Bueno',
        description: 'Un buen libro.',
        book: null,
      },
    ],
  },
];
