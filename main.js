const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'assets/icon.png'),
  });

  mainWindow.loadFile('index.html');

  // Define a custom menu
  const customMenu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        { label: 'New Task', click: () => console.log('New Task Clicked') },
        { type: 'separator' },
        { label: 'Exit', role: 'quit' },
      ],
    },
    {
      label: 'Help',
      submenu: [{ label: 'About', click: () => console.log('About Clicked') }],
    },
  ]);

  // Set the custom menu
  Menu.setApplicationMenu(customMenu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});