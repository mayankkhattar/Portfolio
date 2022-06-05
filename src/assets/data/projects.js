import { v4 as uuidv4 } from 'uuid';
import BurgerImg from '../images/burgermaker.avif';
import comingSoonImg from '../images/coming-soon3.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Burger Builder',
    // eslint-disable-next-line prettier/prettier
    desc:
    'The burger builder is pretty self-explanatory, it’s an application that allows a user to build a custom burger from a set of ingredients. Once they have created a burger, they can “checkout” and then keep track of their previous orders.',
    img: BurgerImg,
    path: 'https://react-my-burger-76392.web.app/',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'Coming Soon',
    // eslint-disable-next-line prettier/prettier
    desc:
      'Coming Soon',
    img: comingSoonImg,
    path: '#',
  },
  {
    id: uuidv4(),
    name: 'Coming Soon',
    // eslint-disable-next-line prettier/prettier
    desc:
      'Coming Soon',
    img: comingSoonImg,
    path: '#',
  },
];

export default projects;
