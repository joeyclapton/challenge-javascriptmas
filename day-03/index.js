const faveFoods = {
    breakfast: 'yogurt with honey and cereals 🍯',
    lunch: 'meat with salad 🥗',
    supper: 'risotto with wine 🍷'
}

const getMealsTemplate = ({breakfast, lunch, supper}) => {
    return `
        <p>
            For breakfast, i like <span class="breakfast">${breakfast}</span>, for lunch, i love <span class="lunch">${lunch}</span>, and for supper,
            i want usually want <span class="supper">${supper}</span>.
        </p>
    `
}

const render = () => {
    const { breakfast, lunch, supper } = faveFoods;
    const sectionDOM = document.getElementById('meals');
    
    sectionDOM.innerHTML = getMealsTemplate({breakfast, lunch, supper});
}

render();