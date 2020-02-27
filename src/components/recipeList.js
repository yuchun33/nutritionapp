import React, { Component } from 'react'
import {Paper, TextField, Chip, Box, List, ListItem, Button, ListItemText, Grid, Typography, Tooltip, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

import {styled} from '@material-ui/core/styles'
import {FirstListItem, RecipeItem, RecipePaper, MyList} from '../styleComponent/recipeList'


class RecipeList extends Component {
    render(){
        let {ingredientInRecipe, nutritionInRecipe, ingredient, changeRecipeIngredient, changeRecipeIngredientDefineUnit, deleteIngredient} = this.props        
        return(
            <RecipePaper>
            <MyList> 
                <FirstListItem>
                    <Grid container justify="space-between" alignItems="stretch">
                        <Grid item className='grid'>
                            <div>熱量</div>
                            <span>{Number(nutritionInRecipe.calories).toFixed(1)}</span> <span>kcal</span>
                        </Grid>
                        <Grid item className='grid'>
                            <div>蛋白質</div>
                            <span>{Number(nutritionInRecipe.protein).toFixed(1)}</span> <span>g</span>
                        </Grid>
                        <Grid item>
                            <div>醣類</div>
                            <span>{Number(nutritionInRecipe.carbohydrate).toFixed(1)}</span> <span>g</span>
                        </Grid>
                        <Grid item>
                            <div>脂肪</div>
                            <span>{Number(nutritionInRecipe.fat).toFixed(1)}</span> <span>g</span>
                        </Grid>
                    </Grid>
                </FirstListItem>
                {ingredientInRecipe.map((ingredient,index)=>(
                    <ListItem key={index}>
                    <RecipeItem container justify="space-between" alignItems="center"> 
                        <Grid item xs={7}>
                            <TextField label="食材" variant="outlined" value={ingredient.name} name='name' onChange={(e)=>changeRecipeIngredient(e,index)} size='small' />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField label='份量(g)' variant="outlined"  value={ingredient.defineUnit}  name='defineUnit' onChange={(e)=>changeRecipeIngredientDefineUnit(e,index)} size='small'/>
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="edit">
                            <IconButton onClick={()=>deleteIngredient(index)}>
                                <DeleteIcon fontSize="small"/>
                            </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={12} className="secondary">
                            <span>{Number(ingredient['calories']).toFixed(1)}</span> kcal
                        </Grid>
                        <Grid item xs={12} className="secondary">
                            蛋白質<span>{Number(ingredient.protein).toFixed(1)}</span>g, 醣類<span>{Number(ingredient.carbohydrate).toFixed(1)}</span>g, 脂肪<span>{Number(ingredient.fat).toFixed(1)}</span>g
                        </Grid>
                    </RecipeItem>
                    </ListItem>
                ))}
            </MyList>
            </RecipePaper>
        )
    }
}

export default RecipeList