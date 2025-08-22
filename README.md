# Developer Wallpaper Generator

A modern, interactive developer wallpaper that showcases your skills and technologies with a sleek design.

## Features

- **Personalized Header**: Features your name prominently (Projoy Naidu)
- **Technology Showcase**: Displays code examples for multiple technologies:
  - HTML, CSS, JavaScript
  - Tailwind CSS, MongoDB, Express.js
  - GitHub integration
- **Interactive Elements**:
  - Create Public/Private Repository buttons
  - Technology icons with hover effects
- **Information Cards**:
  - Scrollable resource cards
  - Search functionality
  - Infinite scroll loading
- **Responsive Design**: Works on various screen sizes
- **Visual Appeal**:
  - Gradient backgrounds
  - Syntax-highlighted code examples
  - Floating elements with subtle animations
  - Professional color scheme

## Technologies Used

- HTML5
- CSS3 (with modern features like gradients, backdrop-filter)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Segoe UI, Fira Code)

## How to Use

1. **Save as Wallpaper**:
   - Copy the entire HTML code
   - Paste into a text editor and save with `.html` extension
   - Open in a web browser
   - Take a screenshot and set as your desktop wallpaper

2. **Customization**:
   - Edit the `developer-name` element to change the name
   - Modify code examples in the tech panels
   - Adjust colors in the CSS variables
   - Add or remove technologies as needed

3. **Interactive Features**:
   - Use the search bar to filter information cards
   - Scroll through cards to load more content
   - Click repository buttons to simulate repo creation

## File Structure

```
developer-wallpaper/
├── index.html          # Main HTML file with all code
├── README.md           # This documentation file
└── (screenshot).png    # Example screenshot of the wallpaper
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

> **Note:** Some CSS features like `backdrop-filter` may not work in older browsers.

## Customization Options

1. **Change Name**: Edit the content of the element with class `developer-name`
2. **Add Technologies**: Duplicate and modify one of the tech-panel divs
3. **Modify Colors**: Edit the CSS variables and gradient values
4. **Update Code Examples**: Replace the code in any of the code divs
5. **Add New Cards**: Extend the `cardData` array in the JavaScript section

## Future Enhancements

Potential features to add:

1. **GitHub API Integration**: Connect to real GitHub account
2. **Local Storage**: Save preferences and customizations
3. **Export Options**: Direct screenshot capture
4. **Theme Switcher**: Light/dark mode toggle
5. **More Technologies**: Additional tech panels and examples

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests with improvements.

---

*Designed for developers who want to showcase their skills in a visually appealing way.*