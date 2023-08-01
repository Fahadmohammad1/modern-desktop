## Live Links

Frontend : [https://modern-desktop.vercel.app]

Github : [https://github.com/Fahadmohammad1/modern-desktop]

### Website Details

- This is a PC Builder website made by Next Js, where a user can build their dream PC by choosing their favorite components. Also, users can filter components by category and see details of every single component available on the website.

### Navbar

- There is a drop-down menu of categories.
- The user can choose a category to see all the components of that particular category.
- There are also login and PC Builder buttons. By clicking on the PC Builder button, the user will navigate to the PC Builder page.

### Home Page (Static Site Generation - SSG)

- There are six random featured products available on the home page.
- The products will be changed after every refresh.
- By clicking on the product card the user can see the details of every single product.
- There are also six featured categories. The user can see available products in a particular category.

### PC Builder Page (Server Side Rendering - SSR)

- A user can select their favorite components to build their dream PC on this page.
- By clicking on the choose button, the user will navigate to the products page of that particular category.

- Example: If a user clicks the choose button for 'CPU, he will navigate to the page where all the CPUs are available.

* There is an 'Add to Builder' button on every product. By clicking on the 'Add to Builder' button, the user will again navigate to the PC Builder page, and the chosen product will show below the category. Also, after selection, the choose button will replace the cancel button. 

* By clicking on the cancel button, the selection will be canceled.
* A Complete Build button will appear after selecting at least five products.
