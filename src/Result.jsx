import {useState} from 'react';

export default function Result({drink}) {
    return (
        <paragraph>
            Your best drink is {drink.name}
        </paragraph>
    )
}