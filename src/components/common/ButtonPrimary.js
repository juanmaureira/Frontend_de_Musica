import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import lyrics from '../../assets/img/lyrics.png';
import back from '../../assets/img/back.png';

export const ButtonPrimary = ({ type, to }) => {
    <Lynk className="buttonPrimary" to={ to }>
        <Button variant="contained" color="primary">
            <img alt = { type === 'lyrics' ? 'lyrics' : 'back' } src = { type === 'lyrics' ? lyrics : back } />
            { type === 'lyrics' ? 'Lyrics' : 'Go Back' }
        </Button>
    </Lynk>
}

export default ButtonPrimary;
