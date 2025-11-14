# KPI Tracker Frontend

## Overview
KPI Tracker is a React-based frontend application designed to help users track and manage their Work. The application features a clean and responsive user interface built with Tailwind CSS, providing a seamless experience across devices.

## Features
- **Dashboard**: A central hub for viewing and managing KPIs.
- **Chat Interface**: A chat panel for user interactions and feedback.
- **Navigation Bar**: Easy navigation between different sections of the application.
- **Responsive Design**: Built with Tailwind CSS for a modern look and feel.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For handling routing within the application.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd kpi-tracker-fe
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Folder Structure
```
kpi-tracker-fe
├── public
│   └── index.html
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components
│   │   ├── NavBar
│   │   │   └── NavBar.tsx
│   │   ├── Layout
│   │   │   └── MainLayout.tsx
│   │   ├── Dashboard
│   │   │   ├── Dashboard.tsx
│   │   │   ├── ChatPanel.tsx
│   │   │   ├── MessageList.tsx
│   │   │   ├── MessageItem.tsx
│   │   │   ├── PromptInput.tsx
│   │   │   └── KPIList.tsx
│   │   └── UI
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── pages
│   │   ├── DashboardPage.tsx
│   │   └── SettingsPage.tsx
│   ├── routes
│   │   └── AppRoutes.tsx
│   ├── services
│   │   ├── axiosConfig.ts
│   │   └── kpiService.ts
│   ├── hooks
│   │   └── useFetch.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── format.ts
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.