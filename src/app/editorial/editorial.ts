/**
 * This class represents an editorial of the BookStore.
 * It contains all the information relevant to the editorial.
 */
export class Editorial {
  /**
   * The editorial's id
   */
  id: number;

  /**
   * The editorial's name
   */
  name: string;

  constructor(
    id: number,
    name: string
  ){
    this.id = id;
    this.name = name;
  }
}
