'use strict';

console.log('App is running');

//JSX - Javascript XML

//Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" - "No Options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in order',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renserFormSubmit();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renserFormSubmit();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById("app");

var renserFormSubmit = function renserFormSubmit() {
    var counter = 0;
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options: ' + ' ' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What shoul I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: counter++ },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renserFormSubmit();
