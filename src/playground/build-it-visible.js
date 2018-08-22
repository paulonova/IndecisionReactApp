
let visibility = false;

const onShowDetails = () => {
    visibility = !visibility;
    render();
}

const render = () =>{

    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onShowDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>
        {visibility && (
            <div>
                <p>Hey. These are some details you can now see!</p>
            </div>
        )}
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
}    

render();


