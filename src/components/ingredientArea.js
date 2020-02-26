import React, { Component } from 'react'
import {Box, Button, Table, TableRow, TableBody, TableHead, TableCell, List, ListItem, ListItemText, Grid, Typography} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import {styled} from '@material-ui/core/styles'
import { thresholdSturges } from 'd3'
import IngredientInput from '../containers/ingredientInput'
import NutritionTable from '../containers/nutritionTable'
import NutritionForm from '../containers/nutritionForm'
import {MyButton} from '../styleComponent/index.js'
import IngredientIdea from '../containers/ingredientIdea.js'

const IngredientBox = styled(Box)({
    width: '96%'
})
class IngredientArea extends Component {
    render(){
        let {closeNutritionTable, addIngredientToLog, addIngredientToRecipe, ingredient, nutritionTable, openingredientForm, closeIngredientMessage} = this.props       
        return(
            <IngredientBox>
                 <Typography variant='h3'>營養成分查詢</Typography>
                <IngredientInput/>
                {nutritionTable ?  
                <><NutritionTable/>
                <Grid container justify="flex-end">
                    <Grid item>
                        <MyButton variant="contained" color="primary" onClick={closeNutritionTable}>關閉</MyButton>
                        <MyButton variant="contained" color="primary" onClick={addIngredientToLog}>新增至紀錄</MyButton>
                        <MyButton variant="contained" color="primary" onClick={addIngredientToRecipe}>新增至食譜</MyButton>
                    </Grid>
                </Grid>
                </> 
                : <></> } 
                {ingredient.querySuccess ?
                <></>:
                <Grid container justify="center" spacing={1}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Alert severity="warning" onClose={closeIngredientMessage}>{ingredient.message}</Alert>
                    </Grid>
                    <Grid item>
                        <MyButton variant="outlined" color="secondary" onClick={openingredientForm}>新增食材</MyButton>
                    </Grid>
                </Grid>
                }

                <NutritionForm/>

                <Typography variant='h3'>更多食材</Typography>
                <IngredientIdea/>

            </IngredientBox>
        )
    }
}

export default IngredientArea