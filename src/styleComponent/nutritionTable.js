import {Paper, TextField, Chip, Box, Button, Table, TableRow, TableBody, TableHead, TableCell, List, ListItem, ListItemText, Grid, Typography, Tabs, Divider} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'

const IngredientList = styled(List)({
    padding: '16px 16px',
    // height: '460px',
    overflowY: 'scroll',
   
})

const IngredientListItem = styled(ListItem)({
    paddingTop: '1px',
    paddingBottom: '1px',
})

const FirstListItem = styled(ListItem)({
    borderBottom: '1px solid #ccc',
    marginBottom: '6px'
})

const IngredientPaper = styled(Paper)({
    paddingTop: '0px',
    marginBottom: '10px',
    boxShadow: '0 6px 12px #E1EBF7',
    width: '100%',
    height: '460px',
    overflowY: 'scroll',
})

const NutritionGrid = styled(Grid)({
    '& > div': {
        textAlign: 'center',
        // fontWeight: '500'
    },
    '& > div:nth-child(2)':{
        color: '#FBCD50',
    }
})

const RecDivider = styled(Divider)({
    backgroundColor: '#D3E8F6',
    margin: '0 auto',
    width: '96%'
})

const MyTabs = styled(Tabs)({
    borderBottom: '3px solid #FBCD50',
    '& button': {
        padding: '0',
        minWidth: "25%", 
        backgroundColor: '#ffffff',
    },
    '& .Mui-selected':{
        backgroundColor: '#FBCD50',
        color: "#ffffff",
    },
})

export{
    IngredientList,
    IngredientListItem,
    FirstListItem,
    IngredientPaper,
    NutritionGrid,
    RecDivider,
    MyTabs
}