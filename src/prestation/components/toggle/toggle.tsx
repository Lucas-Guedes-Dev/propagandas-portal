import React from 'react';
import { Switch, Input, Slider, Container, Label } from './style';

interface ToggleProps {
    isChecked: boolean;
    onCheckedChange: () => void;
    text: string;
}

const Toggle: React.FC<ToggleProps> = (props) => {
    return (
        <Container>
            <Label>
                {props.text}
            </Label>
            <Switch>
                <Input type="checkbox" checked={props.isChecked} onChange={props.onCheckedChange} />
                <Slider className="slider" />
            </Switch>
        </Container>
    );
};

export default Toggle;