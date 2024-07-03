import { Item } from './app/shared/models/Item';
import { Tag } from './app/shared/models/tag';

export const sample_items: any[] = [
  {
    id:'1',
    name: 'Montreal Sleeved Dress in Black',
    price: 249,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/item-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Long Sleeve Pleated Midi Dress in Wine',
    price: 85,
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/item-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Finley Maxi Dress in Black',
    price: 155,
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/item-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Ladder Trim Detail Raglan Sleeve Blouse in Black',
    price: 55,
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/item-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Pointelle Sparkle Over Top in Silver',
    price: 130,
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/item-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Ramie High Neck Button Blouse in Khaki',
    price: 60,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'7',
    name: 'Knoxx Belted Melton Jacket in Grape',
    price: 299,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-7.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'8',
    name: 'Emry Tweed Jacket in Black Check',
    price: 99,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-8.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'9',
    name: 'Funnel Neck Wrap Coat in Black',
    price: 60,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-9.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'10',
    name: 'Ava Wide Leg Suit Pant',
    price: 53,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-10.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'11',
    name: 'Margot Wide Leg Pants in Ivory',
    price: 60,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-11.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'12',
    name: 'Rose Adagio Skirt in Black',
    price: 179,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-12.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'13',
    name: 'Gabriella Asymmetric Jumpsuit in Navy',
    price: 189,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-13.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'14',
    name: 'Asher Side Stripe Jumpsuit in Black',
    price: 60,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/item-14.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 14 },
  { name: 'Dresses', count: 3 },
  { name: 'Tops', count: 3 },
  { name: 'Jackets & Coats', count: 3 },
  { name: 'Pants', count: 2 },
  { name: 'Skirts', count: 1 },
  { name: 'Jumpsuits & Playsuits', count: 1 },
]