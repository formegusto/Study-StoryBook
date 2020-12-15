import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../color/palette';

type Props = {
    /** 색깔 변경에 쓰이는 요소 입니다. */
    color?: string,
    /** 버튼 안의 텍스트 입니다. */
    btnText: string,
    /** 버튼 사이즈 결정 요소 입니다. */
    size?: "standard1" | "standard2" | "etc1" | "etc2" | "popup",
}

/**
 * EvenTech Button
 * 
 * - color : Palette 에서 사용가능 색을 확인하세요. 
 */

function Button ({color, btnText, size} : Props) {
    return (
       <EvenTechBtn color={color!} size={size!}>
           {btnText}
       </EvenTechBtn> 
    );
}

type StyleProps = {
    color: string;
    size: "standard1" | "standard2" | "etc1" | "etc2" | "popup";
}

const EvenTechBtn = styled.button<StyleProps>`
    background: ${(props => props.color)};
    
    ${props => 
    props.size === "standard1" &&
    css`
        width:120px;
        height: 40px;
    `}
    ${props => 
    props.size ===  "etc1" &&
    css`
        width:136px;
        height: 40px;
    `}
    ${props => 
    props.size === "standard2" &&
    css`
        width:240px;
        height: 48px;
        border-radius: 4px;
    `}
    ${props => 
    props.size === "etc2" &&
    css`
        width:280px;
        height: 48px;
        border-radius: 4px;
    `}
    ${props => 
    props.size === "popup" &&
    css`
        width:616px;
        height: 48px;
    `}


    color: ${palette.white};
    cursor: pointer;
    outline: none;
    border: none;

    font-weight:500;
    font-size: 18px;
`

Button.defaultProps = {
    color: palette.primary,
    size: "default"
}

export default Button;