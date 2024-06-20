import React, { useState } from 'react';
import { AccordionStyled, AccordionHeader, AccordionContent, Button, ContainerTextHeader, ContainerIconChevron } from './style';
import { useNavigate } from 'react-router-dom';
import { LuPanelTopOpen } from "react-icons/lu";
import { useTheme } from 'styled-components';

interface ButtonProps {
    text: string;
    path: string;
}

interface AccordionProps {
    headerAccordion: string;
    buttons: ButtonProps[];
    defaultExpanded: boolean;
    menuExpanded: boolean;
}

const AccordionMenu: React.FC<AccordionProps> = (props) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(props.defaultExpanded);
    const theme = useTheme();

    const onButtonClicked = (path: string) => {
        navigate(path);
    };

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <AccordionStyled >
            <AccordionHeader disabled={props.menuExpanded} onClick={toggleAccordion}>
                {!props.menuExpanded &&
                    <ContainerTextHeader>
                        {props.headerAccordion}
                    </ContainerTextHeader>
                }
                <ContainerIconChevron expanded={expanded}>
                    <LuPanelTopOpen size={22} color={theme.colors.background} />
                </ContainerIconChevron>
            </AccordionHeader>
            {!props.menuExpanded &&
                <AccordionContent expanded={expanded}>
                    {props.buttons.map((item, index) => (
                        <Button key={index} onClick={() => onButtonClicked(item.path)}>
                            {item.text}
                        </Button>
                    ))}
                </AccordionContent>
            }
        </AccordionStyled>
    );
};

export default AccordionMenu;
