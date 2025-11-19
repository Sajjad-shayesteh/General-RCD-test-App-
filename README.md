# General RCD Test App

This repository now includes a minimal Electron wrapper so you can produce a Windows `.exe` installer for the existing web app.

## Prerequisites
- Node.js 18+ and npm installed.
- Windows build host (for producing `.exe`). The repository can be prepared on any platform, but the `dist-win` build target must run on Windows.

## Development
To open the app in an Electron shell for development:

```bash
npm install
npm run start
```

## Build a Windows .exe
From a Windows environment:

```bash
npm install
npm run dist-win
```

The installer (`General RCD Test App Setup x64.exe`) will be emitted in the `dist/` directory. You can run the generic `npm run dist` command to build for the current platform.

## Files included in the build
The Electron packaging configuration bundles:
- `main.js` and `preload.js` (Electron entry point)
- `index_inline_edit_fixed_import_pbfix_filtergrid_screen_scrollbar_addmove_dup_rcd_faildef_fiximport.html` (existing single-page app)
- Supporting libraries: `jspdf.umd.min.js`, `jspdf.plugin.autotable.js`, `xlsx.full.min.js`, and `rcd-data.js`

If you add more assets, update the `build.files` section in `package.json` so they are included in the installer.
