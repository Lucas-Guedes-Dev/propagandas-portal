import React from "react";
import { AccordionItem, ButtonFilter, Container, ContainerAccordion, RowActions, RowFilters, ButtonNew } from "./style";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaCaretDown } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

interface FilterAccordionProps {
    fields?: React.ReactElement[],
    title: string,
    onNewClicked: () => void
}

const FilterAccordion: React.FC<FilterAccordionProps> = (props) => {
    return (
        <Container>
            <Accordion style={{ width: '100%' }}>
                <AccordionSummary
                    expandIcon={<FaCaretDown />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ContainerAccordion>
                        <RowFilters>
                            {props.fields && props.fields.map((item) => (
                                <AccordionItem>
                                    {item}
                                </AccordionItem>
                            ))}
                        </RowFilters>
                        <RowActions>
                            {props.fields && (
                                <ButtonFilter>
                                    Filtrar
                                    <FaSearch />
                                </ButtonFilter>
                            )}

                            <ButtonNew onClick={props.onNewClicked}>
                                Novo
                                <FaPlusCircle />
                            </ButtonNew>
                        </RowActions>
                    </ContainerAccordion>

                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default FilterAccordion;