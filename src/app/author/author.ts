export class Author {

  /**
   * The author's id
   */
  id: number;

  /**
   * The author's name
   */
  name: string;

  /**
   * Fecha de nacimiento del autor. Estamos utilizando de tipo  string.
   */
  birthDate: any;

  /**
   * The location of the author's profile picture
   */
  image: string;

  /**
   * A brief description of the author's life
   */
  description: string;

  constructor(
    id: number,
    name: string,
    birthDate: any,
    image: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.image = image;
    this.description = description;
  }
}
