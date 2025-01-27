# Life Style Fun & Fitness

A modern, responsive fitness web application built with React, TypeScript, and Styled Components. The application provides a platform for users to explore fitness programs, join live classes, and manage their fitness journey.

![Life Style Fun & Fitness](screenshot.png)

## Features

- 🌓 Dark/Light theme support
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 🔒 Secure authentication system
- 🏋️‍♂️ Live fitness classes
- 💪 Personalized workout programs
- 🎯 Progress tracking

## Tech Stack

- React 18
- TypeScript
- Styled Components
- Framer Motion
- React Router
- Azure Static Web Apps

## Project Structure
src/
├── components/ # Reusable UI components
│ ├── Footer/ # Footer component and styles
│ ├── Hero/ # Hero section component
│ ├── Navbar/ # Navigation component
│ ├── Programs/ # Programs section
│ └── Services/ # Services section
├── context/ # React context providers
│ ├── ThemeContext.tsx # Theme management
│ └── PreferencesContext.tsx # User preferences
├── helpers/ # Utility functions and helpers
├── pages/ # Page components
├── styles/ # Global styles and theme
├── types/ # TypeScript type definitions
└── utils/ # Utility functions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/lifestyle-fitness.git
cd lifestyle-fitness
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_api_url_here
```

4. Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

### Running Tests

```bash
npm test           # Run unit tests
npm run test:a11y  # Run accessibility tests
```

## Code Organization

### Components
Each component follows a modular structure:
- Component file (e.g., `Component.tsx`)
- Styled components within the same file
- Tests in the same directory (e.g., `Component.test.tsx`)

### Context
Global state management using React Context:
- ThemeContext for dark/light theme
- PreferencesContext for user preferences

### Pages
Top-level components that represent different routes:
- Home
- About
- Live Classes
- Contact
- Login

### Styles
Theme configuration and global styles:
- Light/Dark theme support
- Responsive design
- Global CSS reset

## Deployment

The application is configured for deployment to Azure Static Web Apps. The deployment is automated through GitHub Actions.

To deploy manually:
```bash
npm run deploy
```

### Environment Variables

Required environment variables:
- `REACT_APP_API_URL`: Backend API URL
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Azure deployment token

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use functional components with hooks
- Write meaningful component and function names
- Include proper TypeScript types
- Add comments for complex logic
- Write tests for new features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Styled Components](https://styled-components.com/)
- Deployment platform: [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)
