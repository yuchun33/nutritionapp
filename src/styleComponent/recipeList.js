import {Paper, TextField, Chip, Box, List, ListItem, Button, ListItemText, Grid, Typography, InputAdornment} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'

const FirstListItem = styled(Box)({
    background: '#ffffff',
    marginTop: '-10px',
    padding: '10px',
    border: `2px solid #FBCD50`,
    borderRadius: '3px',
    '& > *': {
        textAlign: 'center',
        fontWeight: '500'
    },
    '& span, & span:after':{
        color: '#FBCD50',
        fontSize: '16px'
    }
})
const RecipeItem = styled(Grid)({
    padding: '10px 0px',
    '& .secondary':{
        marginTop: '3px',
        letterSpacing: '0.1rem',
    }
})
const RecipePaper = styled(Paper)({
    marginBottom: '10px',
    boxShadow: '0 6px 12px #E1EBF7',
    width: '100%'
})

const MyList = styled(List)({
    paddingTop: '10px',
    height: '460px',
    overflowY: 'scroll'
})

export {
    FirstListItem,
    RecipeItem,
    RecipePaper,
    MyList
}