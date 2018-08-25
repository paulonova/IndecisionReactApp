
console.log('App is running');

//JSX - Javascript XML

//Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" - "No Options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in order',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);
    if(option){
        app.options.push(option);
        e.target.elements.option.value= '';
        renserFormSubmit();
    }    
}

const onRemoveAll = () => {
    app.options=[];
    renserFormSubmit();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
    
};



const appRoot = document.getElementById("app");

const renserFormSubmit = () => {
    let counter = 0;
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' + ' ' : 'No Options'}</p>            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What shoul I do?</button>
            <button onClick={onRemoveAll}>Remove</button>
            
            <ol>
                {
                    app.options.map((option) => <li key={counter++}>{option}</li>)
                }                 
            </ol>
            
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
           
        </div>);

        ReactDOM.render(template, appRoot);
}

renserFormSubmit();

 