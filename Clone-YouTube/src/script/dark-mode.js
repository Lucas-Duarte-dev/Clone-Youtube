const user = document.querySelector('#user');
const contain = document.querySelector('.contain-toogle');
const html = document.querySelector('html');

/** getComputedStyle serve para pegar todos componentes de estilo da página 
 * getPropertyValue serve para pegar o valor da propriedade, nesse caso pegar o valor da propriedade de estilo.
*/
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);


const inintialColor = {
    primaryColor: getStyle(html, '--primary-color'),
    secundaryColor: getStyle(html, '--secondary-color'),
    borderColor: getStyle(html, '--border-color'),
    bgColor: getStyle(html, '--bg-color'),
    toogleBg: getStyle(html, '--toogle-bg'),
    inputColor: getStyle(html, '--input-color'),
    buttonColor: getStyle(html, '--button-color'),
    burgerColor: getStyle(html, '--burger-color'),
    textColor: getStyle(html, '--text-color'),
    bgHover: getStyle(html, '--bg-hover'),
    divisorIcon: getStyle(html, '--divisor-icon'),
    bgBurger: getStyle(html, '--bg-burger'),

}


const darkMode = {
    primaryColor: '#303030fe',
    secundaryColor: '#555555',
    borderColor: '#888888',
    bgColor: '#181818',
    toogleBg: '#777777',
    inputColor: '#111111',
    buttonColor: '#333333',
    burgerColor: '#ffffff',
    textColor: '#ffffff',
    bgHover: 'rgba(255, 255, 255, 0.1)',
    divisorIcon: '#555',
    bgBurger: 'rgba(255, 255, 255, 0.2)',

}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

function changeColor(colors) {
    console.log(colors)
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

contain.addEventListener('click', (e) => {
    e.target.classList.toggle('dark')
    e.target.className === "contain-toogle dark" ? changeColor(darkMode) : changeColor(inintialColor)
})

user.addEventListener('click', (e) => {
    if (e.target.id === 'person') {
        user.classList.toggle('actived');
    }
});

