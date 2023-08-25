// const  container=document.createElement("h1")
// container.innerHTML="I am VV JAGADEESH coming from react"
// const root=document.getElementById("root")
// root.appendChild(container)

// const heading=React.createElement("h1",{id:"title"}," I am vv Jagadeesh from React")
// const heading1=React.createElement("h2",{},"I am second element")
// const container=React.createElement("div",{id:"container"},[heading,heading1])
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)

{/* create this by React.createElement
 <div class="root">
<div id="container">
    <ul class="links">
        <li><a href="">item-1</a></li>
        <li><a href="">item-2</a></li>
        <li><a href="">item-3</a></li>
        <li><a href="">item-4</a></li>
        <li><a href="">item-5</a></li>
    </ul>
</div>
</div> */}
const rootDiv = React.createElement('div', { className: 'root' },
    React.createElement('div', { id: 'container' },
        React.createElement('ul', { className: 'links' },
            React.createElement('li', null,
                React.createElement('a', { href: '' }, 'item-1')
            ),
            React.createElement('li', null,
                React.createElement('a', { href: '' }, 'item-2')
            ),
            React.createElement('li', null,
                React.createElement('a', { href: '' }, 'item-3')
            ),
            React.createElement('li', null,
                React.createElement('a', { href: '' }, 'item-4')
            ),
            React.createElement('li', null,
                React.createElement('a', { href: '' }, 'item-5')
            )
        )
    )
);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(rootDiv)