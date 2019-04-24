import React from 'react';

import Icon from '../Icon/Icon';
import './Button.scss';

type ButtonProps = {
    buttonType: string;
    iconType: string;
    svgName: string;
    buttonText?: string;
};

const Button = (props: ButtonProps) => {
    return (
        <button className={'btn ' + props.buttonType}>
            <Icon svgName={props.svgName} iconType={props.iconType} />
            <span>{props.buttonText}</span>
        </button>
    );
};

export default Button;
