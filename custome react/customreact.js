
function customRender (reactElement, Container) 
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.hrref)

    // domElement.setAttribute('target', reactElement.props.target)

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]) ;
        console.log(prop);
        
    }

    Container.appendChild(domElement)
}

const reactElement = 
{
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visite google'
}

const mainContainer = document.querySelector('#root') ;

customRender (reactElement, mainContainer)