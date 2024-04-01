import {
    List,
    ListItem,
    IconButton,
    ListItemButton,
    ListItemText,
    Typography,
    ListItemIcon,
} from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import Highlight from 'react-highlight';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export type Question = {
    id: number;
    question: string;
    questionSnippet: string;
    answers: { id: number; name: string }[];
    rightId: number;
    description: string;
};

type QuizItemProps = {
    question: Question;
};
export default function QuizItem({ question }: QuizItemProps) {
    const [selected, setSelected] = React.useState<number | null>(null);

    const handleToggle = (answerId: number) => {
        setSelected(answerId);
    };
    const style = selected === question.rightId ? styles.bgGreen : styles.bgRed;
    return (
        <>
            <Typography>{question.question}</Typography>
            <Highlight>{question.questionSnippet}</Highlight>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {question.answers.map((answer) => {
                    const showRight =
                        answer.id === selected &&
                        answer.id === question.rightId;
                    const showWrong =
                        answer.id === selected &&
                        answer.id !== question.rightId;

                    return (
                        <ListItem key={answer.id} disablePadding>
                            <ListItemButton
                                role={undefined}
                                onClick={() => handleToggle(answer.id)}
                                selected={answer.id === selected}
                                dense
                            >
                                <ListItemIcon>
                                    {showRight && <CheckIcon color="success" />}
                                    {showWrong && (
                                        <ClearIcon sx={{ color: 'red' }} />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    id={String(answer.id)}
                                    primary={answer.name}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            {selected && (
                <Typography className={style}>
                    {question.description}
                </Typography>
            )}
        </>
    );
}
