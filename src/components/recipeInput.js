import React, { Component } from 'react'
import {Paper, TextField, Chip, Box, Button, Table, TableRow, TableBody, TableHead, TableCell, List, ListItem, ListItemText, Grid, Typography} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import {MyButton, MyChip, MyTextField, MyBox} from '../styleComponent/index.js'

class RecipeInput extends Component {
    render(){
        const {queryRecipeClip, recipe, changeRecipeName} = this.props
        let commonUseRecipes = [
            {name: '蔬菜湯'},
            {name: '番茄義大利麵'},
            {name: '起司蛋吐司'},
            {name: '煎魚'},
            {name: '肉燥飯'},
        ]
        return(
            <>
            <Grid container spacing={1} justify='space-between' alignItems="center">
                <Grid item lg={8} md={8} xs={8}>
                    <MyTextField label="食譜" variant="outlined" size='small' value={recipe.recipeName} required onChange={changeRecipeName}/>
                </Grid>
                <Grid item md xs>
                    <MyButton variant="contained" color="secondary" onClick={()=>queryRecipeClip(recipe.recipeName)}>查詢</MyButton>
                </Grid>
            </Grid>
            <MyBox>
                建議食譜：
                {commonUseRecipes.map(recipe=>(            
                <MyChip key={recipe.name} label={recipe.name} clickable={true} variant="outlined" onClick={()=>queryRecipeClip(recipe.name)}></MyChip>
                ))}
            </MyBox>
            </>
        )
    }
}

export default RecipeInput