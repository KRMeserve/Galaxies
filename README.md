# Galaxies
---
[Galaxies Site](https://explore-galaxies.herokuapp.com/)
---
## Summary

A look into the wonders of the universe from the comfort of your home. 

This site was designed to showcase the galactic wonders of our universe, and the ability to add to an ever-increasing list of discovered galaxies to view. Each galaxy is displayed with an image and some quick and interesting facts pertaining to that galaxy. 

---

## Technologies Used 

The front-end was built entirely with HTML, CSS, JavaScript, and React. 

The back-end was built on Ruby-on-Rails with a PostgreSQL database.

The site is hosted on Heroku. 

---

## Approach Taken

We started with the back-end framework provided with Ruby-on-Rails and worked to get a basic CRUD app up and running as quickly as possible, due to the tight deadline. Once that was completed, we worked primarily within React and CSS to tweak and add addition functionality to the site. 

Rick focused on getting the routes properly set up within Ruby-on-Rails, conceptualizing the extended features of the site, and provided the frameworks for the site's styling and overall design. 

Kyle built out the core React codebase (including toggle states, multiple components, and the passing of data from one component to another), created and styled the landing page, and finalized the CSS throughout the site. 

---
## Unsolved Problems

The focus of the last day(s) of this project were focused on the image carousel, which unforunately was not polished enough to have fully functional in our final product. We hope to return to this in the future to iron out the bugs caused by incomplete connections to the state of our Galaxies.js page. 

When on the show page from the carousel, the 'back' button will not take you back to the carousel. This is simply a toggle state change that will be made once the carousel is working. 

The images load slowly due to their size. Neither of us had the prior knowledge or time to compress the images without losing their quality to reduce the load time. 

--- 

## Future/Potential Additions

Adding an info-link to the title of the galaxy that will redirect to a NASA page with more information. This may include linking to an astronomy-based API with more data on the galaxies to showcase. 

We would always like to have more galaxies in our database. Feel free to add some to our site if it's missing your favorite!
