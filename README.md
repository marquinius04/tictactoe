# Tic-tac-toe

Tic-Tac-Toe game built with **Angular 21**. This project demonstrates the use of reactive state management and modern web aesthetics to provide a polished user experience.

## 🚀 Live demo
https://tictactoe-orpin-beta.vercel.app/

## ✨ Features

*   **Reactive state with signals**: Built entirely using Angular Signals for efficient, granular updates and optimized performance.
*   **Modern UI/UX**: 
    *   Custom-designed interface with a "sunken" board effect using CSS inset shadows.
    *   Consistent visual language with a dedicated custom favicon and logo.
*   **Smooth animations**:
    *   Dynamic entry animations for game symbols (X and O).
    *   Coordinated exit transitions using modern Angular animation triggers.
*   **Responsive Logic**: Automatic detection of victory conditions and draw scenarios with an interactive overlay.

## 🛠️ Technologies used

*   **Framework**: Angular 21 (Standalone Components)
*   **Styling**: CSS
*   **Icons**: Google Material Symbols and CSS for the circles.
*   **Deployment**: Vercel

## 📦 Installation and setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/marquinius04/tictactoe.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/` to see the application in action.

4.  **Build for production**:
    ```bash
    ng build
    ```

## 📝 Project structure

```
.
├── src/app/
│   ├── game.ts             # Core service: Game rules and state logic
│   ├── grid/               # Board component: UI and move handling
│   ├── victory-sign/       # Result overlay: Win/Draw announcements
│   ├── app.ts              # Main application shell
│   └── app.config.ts       # Global providers and configurations
└── README.md               # Project documentation
```
