import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({children, size, color, outline, fullWidth}) {
    return (
        <button className={classNames('Button', size, color, {
            outline,
            fullWidth
        })}>{children}</button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: '#ffa8a8',
}


export default Button;

