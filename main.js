const { app, BrowserWindow } = require('electron');
const path = require('path');

const APP_FILE = 'index_inline_edit_fixed_import_pbfix_filtergrid_screen_scrollbar_addmove_dup_rcd_faildef_fiximport.html';

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  const appFilePath = path.join(__dirname, APP_FILE);
  win.loadFile(appFilePath);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
