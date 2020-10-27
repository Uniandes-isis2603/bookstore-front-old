import { Author } from '../author/author';
import { Book } from './book';

export class BookDetail extends Book {
    authors: Author[];
}
