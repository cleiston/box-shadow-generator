const state = {'x-position': 3, 'y-position': 3, 'blur': 5, 'spread': 6, 'shadow-color': '#000000'}
const output = document.getElementById('output')
updateOutput()

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', inputChanged)
})

function inputChanged(e) {
    const name = e.target.name
    const value = e.target.value
    document.documentElement.style.setProperty(`--${name}`, value)
    setState(name, value)
}

function setState(name, value) {
    state[name] = value
    updateOutput()
}

function updateOutput() {
    output.innerHTML = `box-shadow: ${state["x-position"]}px ${state["y-position"]}px 
                    ${state.blur}px ${state.spread}px ${state["shadow-color"]};`
}