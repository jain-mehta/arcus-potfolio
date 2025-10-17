# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for modern, responsive styling
- **Framer Motion** for smooth animations and transitions
- **EmailJS** integration for contact form functionality
- **Responsive Design** that works on all devices
- **Modern UI Components** with hover effects and micro-interactions
- **SEO Optimized** with proper meta tags and structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Toast Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository** (or use the files provided):
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:3000`

## ⚙️ EmailJS Setup

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Add an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`
4. **Get your API keys** from the EmailJS dashboard
5. **Update your `.env.local`** file with the actual values

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page with all sections
├── components/
│   ├── ContactForm.tsx      # Contact form with EmailJS integration
│   ├── Footer.tsx           # Footer component with social links
│   ├── MotionWrapper.tsx    # Reusable animation wrapper components
│   └── Navbar.tsx           # Navigation component with smooth scrolling
├── lib/
│   └── email.js             # EmailJS utility functions
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies and scripts
```

## 🎨 Customization

### Colors & Styling
- Edit `tailwind.config.js` to customize colors, fonts, and animations
- Modify `app/globals.css` for global styles and component classes

### Content
- Update personal information in `app/page.tsx`
- Replace placeholder images with your actual project screenshots
- Modify social links in `components/Footer.tsx`
- Update navigation items in `components/Navbar.tsx`

### Animations
- Customize animations in `components/MotionWrapper.tsx`
- Add new animation variants as needed
- Adjust timing and easing in Framer Motion components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop the `build` folder after running `npm run build`
- **GitHub Pages**: Use `next export` for static deployment
- **Custom Server**: Use `npm run build && npm start`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Prefetching**: Automatic prefetching of visible links
- **Minification**: SWC minification for smaller bundle sizes
- **Caching**: Optimized caching strategies

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup ready
- Optimized loading performance
- Accessible design patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Unsplash](https://unsplash.com/) for placeholder images

---

Built with ❤️ using Next.js 14 and modern web technologies.