document.body.innerHTML = '<div id="like_button_container"></div>'
const addJS = (url, babel) => {
var tempJS = document.createElement('script')
tempJS.setAttribute('crossorigin', true)
if (babel) {
    tempJS.setAttribute('type', "text/babel")
    fetch(url).then((r) => r.text()).then((t) => {
        tempJS.textContent = t
    })
} else{
    tempJS.setAttribute('src', url)
}
document.body.appendChild(tempJS)
}
addJS('https://unpkg.com/react@16/umd/react.development.js')
addJS('https://unpkg.com/react-dom@16/umd/react-dom.development.js')
addJS('https://unpkg.com/babel-standalone@6/babel.min.js')
setTimeout(() => {// small delay to ensure this laods after react+babel
    // addJS('compiled.js') //this loads the compiled js from the jsx
    addJS('jsx.js', true)//this loads the uncompiled jsx. the babel script tag should compile it
}, 500)


var tempCSS = document.createElement('link')
tempCSS.setAttribute('rel', 'stylesheet')
tempCSS.setAttribute('type', 'text/css')
tempCSS.setAttribute('href', 'https://cheadman.com/urlchange/style.css')
document.body.appendChild(tempCSS)