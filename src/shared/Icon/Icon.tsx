import React from 'react';

import './Icon.scss';

type IconProps = {
    iconType: string;
    svgName: string;
};

const Icon = (props: IconProps) => {
    return (
        <svg className={'icon ' + props.iconType}>
            <use href={'img/icons.svg#icon-' + props.svgName} />
        </svg>
    );
};

export default Icon;
