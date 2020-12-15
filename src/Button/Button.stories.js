import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import palette from '../color/palette';
import Button from './Button';

export default {
    title: 'Design System|EvenTech/Button',
    component: Button,
    decorators: [withKnobs],
}

export const evenTechBtn = () => {
    const color = text('color', palette.primary);
    const btnText = text('btnText', 'EvenTech Button System');
    const size = text('size', 'popup');
    return <Button
                color={color}
                btnText={btnText}
                size={size} />
}

evenTechBtn.story = {
    name: "default"
}

export const standard1 = () =>
    <Button btnText={""} size={'standard1'} />

export const standard2 = () =>
    <Button btnText={"웨비나 개설, 240x48"} size={'standard2'} />

export const etc1 = () => 
    <Button btnText={""} size={'etc1'} />

export const etc2 = () =>
    <Button btnText={"로그인-시작하기 버튼, 280x48"} size={"etc2"} />

export const popup = () =>
    <Button btnText={"팝업 삽입 버튼, 616x48"} size={"popup"} />


