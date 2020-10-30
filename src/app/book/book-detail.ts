import { Author } from '../author/author';
import { Review } from '../review/review';
import { Book } from './book';

export class BookDetail extends Book {
    authors: Author[];
    reviews: Review[];
}
