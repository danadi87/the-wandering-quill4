![The Wandering Quill Logo](public/Logo.png)

# The Wandering Quill - The library of your dreams

## Description

The website is designed as a library to find gems of literature.<br>
Users can search through the book list and put the books they like as favourites, add them to a Cart, edit them, or from the Favourites or Cart pages, delete them too.<br>
You can also Add new books for sale.

## Tech stack

Built with React JS, CSS, HTML, updating to a Backend server.
Deployed in Netlify and Vercel

## Design

The website is designed keeping the main elements in focus, so it's easier to understand the user interface.

## Features

- **Responsive Design**: The website is fully responsive, providing all features across all devices and screen sizes.
- **CRUD**: The website offers users all the CRUD operations, by being able to Add new books, updating them, adding books to favorites and cart and deleting them.
- **Page Not Found**: Navigating to any invalid link the website will give a Page Not Found.</br>
  <img src="./src/assets/imagesReadme/notFound.png" alt="Page Not Found" width="400"/></br>

## How to run the project

Click on the link to load the page in the browser.
_(https://the-wandering-quill.netlify.app/)_

## How to Navigate through the website

- HomePage: On loading the site, the user lands on the HomePage.</br>
  <img src="" alt="Homepage" width="500"/></br>
  </br>It is built of below sections</br>

  - Navbar: This is fixed website header & does not change during the navigation.
    <img src="./src/assets/imagesReadme/Navbar.png" alt="favourites" width="600"/></br>
    Contents:

    - This holds the website Logo, and the name of the Library, which is clickable and takes you to the homepage.
    - My Favourites with a counter, which will take you to the list of Favourites, where you can delete them or add to Cart.
    - My Cart, with a counter, also here you can delete books from your cart or add them as Favourites.

    <img src="./src/assets/imagesReadme/Favourites.png" alt="favourites" width="400"/></br>

  - Sidebar: This is also fixed and has a Searchbox where you can filter by name of the book and also different bottoms that will filter by genre
  - Homepage: This section displays the contents of the BookList. If using the filter the results will apear here and also any other bottoms like Favourites, Cart or Add a Book.
    If clicking in any book it will appear the Book Detail, where you can Add to Favourites, Add to Cart or Edit
  - Footer: This is fixed website footer & does not change during the navigation. Contents:

    - gitHub Logo along with gitHub repository of the project.
    - About Us, the story of the library.
    - Add a Book, where you can add the book that you want to sell.

      <img src="./src/assets/imagesReadme/AddBook.png" alt="Add Book" width="200"/></br>

</br>
  The website has below features.

- Search: The books can be search on the Book name.
- Filter: The books can be filtered by Genre

  <img src="./src/assets/imagesReadme/Search&Filter.png" alt="Search&Filter" width="150"/></br>

The BookList is built of Book Cards. Every Card is built of below sections.

- Image: A huge image of the book cover for clear view.
- Book Info: title, author, short description and price are displayed.

- Book Details: Clicking on the Card loads the Homepage section with the Book Details. </br>
  <img src="" alt="Book Details" width="500"/></br>
  The Book Details is built of below.

  - Image: A small image of the book cover.
  - Book Info: Below the image, the book's title, favourites botton, cart botton and Edit Book botton. Below that you'll find the Author, a detailed description of the book, it's genre, the number of pages, the Publish year and the price.
  - When clicking Edit Book, you will be taken to a form with the book details already prefilled where you can edit the book.

    <img src="./src/assets/imagesReadme/EditBook.png" alt="Edit Book" width="200"/></br>

<!-- ## Mobile Version

- Fully responsive with Toobar with easy menu access.</br>
  <img src="src/assets/readMeImgs/mobile-version.jpg" alt="Mobile Version" width="200"/></br> -->

## Local Deployment and Run Instructions

- Git Clone the project with 'git clone https://github.com/danadi87/the-wandering-quill4'.
- Install the libraries with 'npm install'.
- Run the project locally with 'npm run dev'.
