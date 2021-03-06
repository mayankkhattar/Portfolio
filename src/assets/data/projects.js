import { v4 as uuidv4 } from 'uuid';
import BurgerImg from '../images/burgermaker.jpg';
import comingSoonImg from '../images/coming-soon3.png';
import CloudManagementImg from '../images/cyber-bg.png';
import NetflixImg from '../images/Netflix.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Cloud Management App',
    // eslint-disable-next-line prettier/prettier
    desc:
    'A cloud management web app using React.js and Tailwind CSS',
    img: CloudManagementImg,
    path: 'https://cloud-management-app.netlify.app',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'Netflix-Clone',
    // eslint-disable-next-line prettier/prettier
    desc:
    'A Netflix-Clone(Frontend  Only) using React.js and Tailwind CSS(In production not completed)',
    img: NetflixImg,
    path: 'https://netflix-team-mk.netlify.app/',
    target: '_blank',
  },
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
