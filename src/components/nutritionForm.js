import React, { Component } from 'react'
import {List, ListItem, Grid, Typography, InputAdornment, Dialog} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import nutritionContent from '../nutritionContent'
import {MyButton, MyTextField, TextFieldInAddForm, NutritionFormPaper} from '../styleComponent/index.js'

class NutritionForm extends Component {
    render() {
        let {createIngredient, ingredientForm, closeIngredientForm, newIngredient, changeNewingredient, createMessage} = this.props
        return(
            <Dialog open={ingredientForm} onClose={closeIngredientForm}>
            <NutritionFormPaper>
                <Typography variant='h3'>新增食材</Typography>
                <List>
                    <ListItem>
                        <Grid container spacing={1} justify='space-between'>
                            <Grid item lg={8} md={8} xs={8}>
                                <MyTextField label="新增食材" variant="outlined" required size='small' 
                                name='ingredient'
                                value = {newIngredient.ingredient}
                                onChange={changeNewingredient}/>
                            </Grid>
                            <Grid item md xs>
                                <MyTextField label="單位(g)" variant="outlined" defaultValue="100" size='small'
                                name='unit'
                                onChange={changeNewingredient}/>
                            </Grid>
                        </Grid>
                    </ListItem>
                    {nutritionContent.map((nutrition,index)=>(
                        <ListItem key={index}>
                           <TextFieldInAddForm 
                                label={nutrition.nutrition} 
                                variant="outlined" 
                                size='small'
                                InputProps={{
                                endAdornment: <InputAdornment position="end">{nutrition.unit}</InputAdornment>,
                                }}
                                name={nutrition.name}
                                onChange={changeNewingredient}
                                />
                        </ListItem>
                    ))}
                    {createMessage.success? <></> : <Alert severity="warning" >{createMessage.message}</Alert>}
                    
                    <ListItem>
                        <MyButton variant="contained" color="primary" onClick={closeIngredientForm}>關閉</MyButton>
                        <MyButton variant="contained" color="primary" onClick={createIngredient}>新增</MyButton>
                    </ListItem>
                </List>
            </NutritionFormPaper>
            </Dialog>
        )
    }
}

export default NutritionForm