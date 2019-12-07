const MyApp = ({name, animal, breed}) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ]); 
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt Me!'),
        React.createElement('MyApp', { name: 'Luna', animal: 'Dog', breed: 'Havanese'}),
        React.createElement('MyApp', { name: 'Pepper', animal: 'Bird', breed: 'Havanese'}),
        React.createElement('MyApp', { name: 'Doid', animal: 'Cat', breed: 'Havanese'})
    ])
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));