import React, {Component} from 'react';

class Hello extends Component {
    static defaultProps = {
        name: 'no name',
    };
    render() {
        const {color, isSpecial, name} = this.props;
        return (
            <div style={color}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

// function Hello({color, name, isSpecial}) {
//     return (
//     <div style={{
//         color: color
//     }}>
//         {isSpecial && <b>*</b>}
//         Hello World {name}
//     </div>
//     );
// }

// Hello.defaultProps = {
//     name: 'no name'
// }

export default Hello;

