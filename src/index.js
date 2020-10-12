import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// // class Welcome extends React.Component {
// //   render() {
// //     return <h1>Hello, {this.props.name}</h1>;
// //   }
// // }

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       <div>
//       {Welcome({name:"Tom"})}
//       </div>
//     </div>

//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) module.hot.accept();