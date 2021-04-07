// Liskov Substitution Principle - Принцип подстановки Лискова

class Component {
    isComponent = true
/*    
    render(){
        return `<div>Component</div>`
    }
*/    
}

class ComponentWithTemplate extends Component{   
    render(){
        return `<div>Component</div>`
    }  
}
class HigherOrderComponent extends Component{   
    render(){
        return `<div>Component</div>`
    }  
}

class HeaderComponent extends ComponentWithTemplate {
    onInit(){}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit(){}
}

class HOC extends HigherOrderComponent {
    render(){
        throw new Error('Render is impossible here')
    }
    wrapComponent(component){
        component.wrapper = true
        return component
    }
}

function renderComponent(component){
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
//renderComponent(new HOC())

// $ node 3_LiskovSubstitutionPrinciple/index.js