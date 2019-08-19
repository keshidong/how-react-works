const e = React.createElement;

const App = () => {
    return e('div', null, React.createElement('span', null, 'hello world!'))
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);
