import { Editorial } from '../editorial/editorial';

export class Book {
  /**
   * The book's id
   */
  id: number;

  /**
   * The book's name
   */
  name: string;

  /**
   * The book's ISBN
   */
  isbn: string;

  /**
   * A brief summary of the book
   */
  description: string;

  /**
   * The location of the book's image
   */
  image: string;

  /**
   * The book's publishing date
   */
  publishingdate: any;


  /**
   * The editorial of the book
   */
  editorial: Editorial;

  constructor(
    id: number,
    name: string, isbn: string,
    description: string,
    image: string,
    publishingdate: any,
    editorial: Editorial) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.image = image;
      this.publishingdate = publishingdate;
      this.editorial = editorial;
    }
}
