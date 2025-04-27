
 To-Do List App

![image](https://github.com/user-attachments/assets/92d885eb-0b28-4f9d-921a-8082921679e8)
![image](https://github.com/user-attachments/assets/3745ce23-0eae-4b27-a0ec-3aee6e9b1cc2)
![image](https://github.com/user-attachments/assets/1ca23c30-1535-4d94-b680-a76391a56f9f)


A simple yet elegant cross-platform to-do list application built with Electron. This app allows users to manage their tasks efficiently with features like light/dark mode toggling, task persistence, and smooth animations.



 Features

- Task Management: Add and delete tasks with ease.
- Light/Dark Mode: Toggle between light (`☀️`) and dark (`🌙`) themes.
- Persistent Storage: Tasks are saved locally using `localStorage`, so they persist even after closing the app.
- Smooth Animations: Fade-in and fade-out animations enhance the user experience.
- Modern UI: Rounded corners, consistent styling, and intuitive design.



 Prerequisites

Before running the app, ensure you have the following installed on your system:

- Node.js: Download and install from [https://nodejs.org/](https://nodejs.org/).
- npm (Node Package Manager): Comes bundled with Node.js.



 Installation

1. Clone the repository:
   bash
   git clone https://github.com/your-username/todo-electron-app.git
   cd todo-electron-app
   

2. Install dependencies:
   bash
   npm install
   

3. Start the app:
   bash
   npm start
   



 File Structure

The project is organized as follows:


todo-electron-app/
├── main.js           Main process file for Electron
├── preload.js        Preload script for secure context isolation
├── renderer.js       Renderer process logic (UI interactions)
├── index.html        HTML structure of the app
├── style.css         Stylesheet for the app
├── package.json      Project metadata and dependencies
└── README.md         Documentation file




 Usage

 Adding Tasks
1. Enter a task in the input field.
2. Click the "Add Task" button or press `Enter` to add the task to the list.

 Deleting Tasks
- Click the red delete button (`✖️`) next to a task to remove it.

 Toggling Themes
- Click the theme toggle button (`☀️` or `🌙`) in the top-right corner to switch between light and dark modes.



 Customization

You can customize the app by modifying the following files:

- `style.css`: Update colors, fonts, and other styles to match your preferences.
- `renderer.js`: Modify the app's behavior, such as adding new features or animations.



 Packaging the App

To package the app for distribution, use a tool like [`electron-builder`](https://www.electron.build/) or [`electron-packager`](https://github.com/electron/electron-packager).

1. Install `electron-builder`:
   bash
   npm install electron-builder --save-dev
   

2. Add a build script to `package.json`:
   json
   "scripts": {
     "start": "electron .",
     "build": "electron-builder"
   }
   

3. Build the app:
   bash
   npm run build
   

This will generate distributable files for Windows, macOS, and Linux.



 Contributing

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   bash
   git checkout -b feature-name
   
3. Commit your changes:
   bash
   git commit -m "Add feature or fix bug"
   
4. Push your changes to GitHub:
   bash
   git push origin feature-name
   
5. Open a pull request on the original repository.



 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



 Acknowledgments

- Inspired by modern to-do apps with minimalistic designs.
- Built using Electron, HTML, CSS, and JavaScript.



 Contact

For questions, feedback, or support, feel free to reach out:

- GitHub: (https://github.com/dabasil101)
- Email: your-alexbasilxbix@gmail.com
