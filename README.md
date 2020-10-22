# React Starter Kit

### What's in here?
There are two basic html pages that have React code in them (`hello_world.html` and `like_button.html`). These files give you a glimpse of what React code looks like. You don't need to go through the setup below to view them - just open them in your browser :)

Then, there's the `demo/` folder, which has a demo of draggable elements. That folder was created using `create-react-app` (a software that makes creating simple-ish React apps easy). See the setup below for how to run the React "app" (page) created in this folder.

### Setup Demo
##### Go to the demo folder
```
cd /path/to/reacthelloworld/demo
```
##### Install Node.js and npm
You can download them [here][1] or google instructions on how to install them from the command line.
##### Install create-react-app
```
npm install create-react-app
```
##### Install react-draggable
We will be using the [react_draggable] library to create react webapps with draggable elements. See the demo [here][0]. (It's better to use well-maintained, feature-full, open-source libraries rather than write your own code, wherever possible. Don't re-invent the wheel!)
```sh
npm install react-draggable
```

### Run Demo
```
npm start
```

If you get an error at this point, try deleting `package-lock.json` and then running `npm install`.

[react_draggable]: https://www.npmjs.com/package/react-draggable
[0]: http://strml.github.io/react-draggable/example/
[1]: https://nodejs.org/en/
