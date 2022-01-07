import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

//image="../../src/assets/img/pass-stache.png"

const itemData = [
  {
    img: 'https://raw.githubusercontent.com/andydhpkp/pass-stache/main/public/img/home-screenshot.png',
    title: 'Pass-Stashe',
    description: '(Group Project) HTML/CSS/Javascript/mysql2/...',
    link: 'https://thawing-temple-09016.herokuapp.com/',
    git: 'https://github.com/andydhpkp/pass-stache',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://raw.githubusercontent.com/GarciaE89/text-me-today/main/assets/img/tmt.jpg',
    title: 'Text-Me-Today',
    description: '(Group Project) SMS Text API',
    link: 'https://garciae89.github.io/text-me-today/index.html',
    git: 'https://github.com/GarciaE89/text-me-today',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/budget_tracker/main/public/img/bt.jpg',
    title: 'Budget-Tracker PWA',
    description: 'PWA Offline App',
    link: 'https://afternoon-falls-07596.herokuapp.com/',
    git: 'https://github.com/jondagamkd/budget_tracker',
  },
  {
    img: 'https://user-images.githubusercontent.com/74579301/148487809-6083de14-c2da-4c74-89c1-e97c996d9b7b.png',
    title: 'Gametradez',
    description: 'E-Commerce Game Website',
    link: 'https://protected-anchorage-01372.herokuapp.com/',
    git: 'https://github.com/GarciaE89/gametradez',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/fantastic_umbrella/main/public/assets/img/umbrella.jpg',
    title: 'Fantastic Umbrella API',
    description: 'Experiemental Backend Database API',
    link: 'https://github.com/jondagamkd/fantastic_umbrella',
    git: 'https://github.com/jondagamkd/fantastic_umbrella',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/employee_tracker/main/assets/img/employee_tracker.jpg',
    title: 'Employee Tracker',
    description: 'Backend test API for mySQL2',
    link: 'https://github.com/jondagamkd/employee_tracker',
    git: 'https://github.com/jondagamkd/employee_tracker',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/note_taker/main/public/assets/img/noteTaker.jpg',
    title: 'Note Taker',
    description: 'Note taking API with working Database',
    link: 'https://desolate-taiga-67985.herokuapp.com/',
    git: 'https://github.com/jondagamkd/note_taker',
  },
];

//src={require(`../../assets/small/${category}/${i}.jpg`)}
const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <p>
      A sample of my work.
    </p>
    <div className="flex-row">
    <ImageList sx={{ width: 1000, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Link href={item.link}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          </Link>
          <Link href={item.git}>
          <ImageListItemBar
            title={item.title}
            subtitle={item.description}
            actionIcon={
              
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <GitHubIcon />
              </IconButton>
              
            }
          />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  </div>
);

export default Portfolio;