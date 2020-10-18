# React Starter Kit

### Setup
After cloning this repo and cd-ing into the root, run these commands to install a JSX preprocessor.
```sh
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
```
(JSX is an HTML-like syntax that makes writing React code easier and less verbose.
In `hello_world.html`, we write JSX in-line in the HTML body; your browser can process JSX code, but it's slow. The preprocesser converts JSX code into JS code that's browser- and production-ready.)

To use the preprocessor, run:
```sh
npx babel --watch react --out-dir js_generated --presets react-app/prod
```
This command watches for new files in the `react/` folder, converts them to plain Javascript, and adds them to the `js_generated` folder.

In your HTML file, use script tags like `<script src="../path/to/file.js"></script>` at the bottom of your html body to refer to the processed JS file. (See the like_button.html example.)
