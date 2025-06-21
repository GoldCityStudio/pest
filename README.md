# Dr Pest Control Company Website

A modern, responsive website for Dr Pest Control Company Ltd, a Hong Kong-based professional pest control service provider. This website replicates the design and functionality of the original site at https://drpest-hk.com/.

## Features

### 🎨 Design & Layout
- **Modern, Professional Design**: Clean and professional layout with a green color scheme
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Bilingual Support**: Chinese (Traditional) and English language options
- **Accessibility**: WCAG compliant with proper focus states and screen reader support

### 🧭 Navigation
- **Sticky Header**: Navigation stays at the top when scrolling
- **Dropdown Menus**: Comprehensive dropdown navigation for all service categories
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth anchor link navigation

### 🛍️ E-commerce Features
- **Product Showcase**: Featured products with pricing and descriptions
- **Shopping Cart**: Add to cart functionality with local storage
- **Product Categories**: Organized product listings by category
- **Sale Badges**: Visual indicators for products on sale

### 📞 Contact & Forms
- **Contact Form**: Functional contact form with validation
- **Social Media Links**: Integration with Facebook, WhatsApp, and WeChat
- **Company Information**: Complete business details and contact information

### 🎯 Services Highlighted
- **Green Pest Control**: Environmentally friendly pest control methods
- **Residential Services**: Home pest control solutions
- **Commercial Services**: Business and office pest management
- **Disinfection Services**: Professional cleaning and disinfection
- **Specialized Treatments**: Bed bugs, termites, rodents, and more

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: Interactive functionality and form handling
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Noto Sans TC for Chinese text support

## Key Sections

### 1. Header
- Company logo and branding
- Language switcher (Chinese/English)
- Government procurement card notice
- Sticky navigation with dropdown menus

### 2. Hero Section
- Main headline with company tagline
- Call-to-action buttons
- Professional pest control messaging

### 3. Featured Products
- Product cards with images and pricing
- Add to cart functionality
- Sale badges and product descriptions

### 4. Services Overview
- Service cards with icons
- Brief descriptions of each service
- Hover effects and animations

### 5. About Section
- Company history and expertise
- Service highlights and specializations
- Professional credentials

### 6. Contact Section
- Contact form with validation
- Company contact information
- Social media integration

### 7. Footer
- Company information
- Service categories
- Product categories
- Copyright and legal information

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance Features

- **Lazy Loading**: Images load as they come into view
- **Optimized CSS**: Efficient styling with minimal redundancy
- **Minimal JavaScript**: Lightweight interactive features
- **Fast Loading**: Optimized for quick page load times

## Accessibility Features

- **Skip Links**: Keyboard navigation support
- **Focus States**: Clear focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects user's motion preferences

## Installation & Usage

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Development**: Use a local server for development (recommended)

### Local Development Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors
The website uses a green color scheme that can be easily customized by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4CAF50;
    --primary-dark: #45a049;
    --secondary-color: #333;
    --accent-color: #FF5722;
}
```

### Content
- Update company information in `index.html`
- Modify product listings and pricing
- Change contact details and social media links
- Update service descriptions and features

### Images
Replace placeholder images with actual product and company photos:
- Product images: Update `src` attributes in product cards
- Company images: Replace placeholder images in about section
- Logo: Add company logo to header section

## SEO Features

- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Tags**: Optimized title and description tags
- **Alt Text**: Descriptive alt text for all images
- **Structured Data**: Ready for schema markup implementation
- **Fast Loading**: Optimized for search engine ranking factors

## Future Enhancements

- **E-commerce Integration**: Full shopping cart and checkout system
- **Blog Section**: Pest control tips and company news
- **Online Booking**: Appointment scheduling system
- **Customer Reviews**: Testimonials and rating system
- **Multi-language**: Full English version implementation
- **CMS Integration**: Content management system for easy updates

## License

This project is created for educational and demonstration purposes. The design and content are based on the original Dr Pest Control Company website.

## Support

For questions or support regarding this website template, please refer to the documentation or contact the development team.

---

**Note**: This is a static website template. For production use, consider implementing a backend system for form handling, database integration, and content management. 