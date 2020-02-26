import {Paper, TextField, Chip, Box, List, ListItem, Button, ListItemText, Grid, Typography, InputAdornment} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'

const MyButton = styled(Button)({
    padding: '6px 10px',
    marginLeft: '4px',
    boxShadow: '0 6px 12px rgba(211,236,242,0.2)',
    '&:hover': {
        color: '#FFF',
        boxShadow: '0 6px 12px rgba(211,236,242,0.2)',

    }
})

const MyChip = styled(Chip)({
    color: '#A8A8A8'
})

const MyTextField = styled(TextField)({
    background: 'white',
    width: '100%',
    [`& fieldset`]: {
        borderColor: '#D3E8F6 !important',   
    }
})

const TextFieldInAddForm = styled(TextField)({
    backgroundColor: '#ffffff',
    width: '100%'
})

const MyBox = styled(Box)({
    margin: '10px 0',
    '&>*':{
        margin: '1px'
    },
    color: '#A8A8A8'
})


const NutritionFormPaper = styled(Paper)({
    width: '360px',
    padding: '16px 16px',
    backgroundColor: 'rgba(255,255,255, 0.3)'
})

export { 
    MyButton,
    MyChip,
    MyTextField,
    TextFieldInAddForm,
    MyBox,
    NutritionFormPaper
}