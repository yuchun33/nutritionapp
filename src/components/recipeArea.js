import React, { Component } from 'react'
import {Paper, TextField, Chip, Box, List, ListItem, Button, ListItemText, Grid, Typography} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import {styled} from '@material-ui/core/styles'
import RecipeList from '../containers/recipeList'
import RecommandRecipeList from '../containers/recommandRecipe'
import RecipeInput from '../containers/recipeInput'
import {MyButton, MyChip, MyTextField} from '../styleComponent/index.js'


const RecipeBox = styled(Box)({
    width: '96%'
})
class RecipeArea extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()        
    }
    render(){
        let {addRecipeToDB, addRecipeToLog, closeRecipeTable, recipe, closeRecipeMessage} = this.props
        return(
            <RecipeBox>
                <Typography variant='h3'>食譜建立/查詢</Typography>
                
                {/* <form> */}
                <RecipeInput/>
                {recipe.recipeTable?                
                <>
                <RecipeList/>
                <Grid container justify="flex-end">
                    <Grid item>
                        <MyButton variant="contained" color="primary"  onClick={closeRecipeTable}>關閉</MyButton>
                        <MyButton variant="contained" color="primary" type="submit" onClick={addRecipeToLog}>新增至紀錄</MyButton>
                        <MyButton variant="contained" color="primary" type="submit" onClick={addRecipeToDB}>新增至食譜庫</MyButton>
                    </Grid>
                </Grid>
                </>:
                <></>}

                {recipe.querySuccess ?
                    <></>:
                    <><Alert severity="warning" onClose={closeRecipeMessage}>{recipe.message}</Alert></>
                }

                <Typography variant='h3'>更多食譜</Typography>
                <RecommandRecipeList/>
                {/* </form> */}
            </RecipeBox>
        )
    }
}

export default RecipeArea