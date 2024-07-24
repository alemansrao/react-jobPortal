# Jobs Portal

A comprehensive jobs portal built using React and Vite. This project allows users to view, add, edit, and delete jobs. It also includes a 404 page for non-existent routes.

## Features

- View jobs
- Add jobs
- Edit existing jobs
- Delete jobs
- 404 Page for non-existent routes

## Built With

- **Frontend:**
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/) - A fast build tool and development server.
  - [react-router-dom](https://reactrouter.com/) - For layouts, pages, and data loaders.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
  - [Toastify](https://fkhadra.github.io/react-toastify/) - To display notifications.

- **Backend:**
  - [json-server](https://www.npmjs.com/package/json-server) - A full fake REST API.

> This project is inspired by a YouTube tutorial.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

   Open your terminal and run:
   ```bash
   git clone https://github.com/alemansrao/react-jobPortal.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd jobs-portal
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

### Running the Project

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server. You can now open your browser and visit `http://localhost:3000` to see the application in action.

2. **Run the JSON server:**

   In a separate terminal, run:
   ```bash
   npm run server
   ```

   This will start the JSON server on `http://localhost:4000`.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create a `dist` directory with the production build of your project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Special thanks to the YouTube tutorial that inspired this project.
- Thanks to the authors of the various libraries used in this project.

