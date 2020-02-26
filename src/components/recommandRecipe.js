import React, { Component } from 'react'
import {Paper, TextField, Chip, Box, List, ListItem, Button, ListItemText, Grid, Typography, Divider} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import {FirstListItem, RecipeItem, RecipePaper, MyList} from '../styleComponent/recipeList'

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

class RecommandRecipe extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let recommandRectipe = [
            {
                name: '海鮮烏龍麵',
                calories: 360,
                protein: 13,
                fat: 2.3,
                carbohydrate: 20
            },
            {
                name: '番茄肉醬義大利麵',
                calories: 420,
                protein: 13,
                fat: 2.3,
                carbohydrate: 20
            }, 
            {
                name: '皮蛋豆腐',
                calories: 120,
                protein: 13,
                fat: 2.3,
                carbohydrate: 5
            },
            {
                name: '雞肉三明治',
                calories: 240,
                protein: 13,
                fat: 2.3,
                carbohydrate: 5
            },
            {
                name: '炒水蓮',
                calories: 240,
                protein: 13,
                fat: 2.3,
                carbohydrate: 5
            }
        ]

        let {queryRecipeClip} = this.props
        return(
            <RecipePaper>
            <MyList> 
                {recommandRectipe.map((recommand,index)=>(
                    <>
                    <ListItem button key={index} onClick={()=>queryRecipeClip(recommand.name)}>
                        <ListItemText
                            primary={recommand.name}
                            secondary={
                                <Grid container spacing={1} justify="space-around">
                                    <NutritionGrid item> 
                                        <div>總熱量</div>
                                        <div>{recommand.calories} kcal</div>
                                    </NutritionGrid>
                                    <NutritionGrid item className="grid">
                                        <div>蛋白質</div>
                                        <div>{recommand.protein} g</div>
                                    </NutritionGrid>
                                    <NutritionGrid item className="grid">
                                        <div>碳水</div>
                                        <div>{recommand.carbohydrate} g</div>
                                    </NutritionGrid>
                                    <NutritionGrid item>
                                        <div>脂肪</div>
                                        <div>{recommand.fat} g</div>
                                    </NutritionGrid>
                                </Grid>
                            }
                        >
                        </ListItemText>
                    </ListItem>
                    <RecDivider/>
                    </>
                ))}
            </MyList>
            </RecipePaper>
        )
    }
}

export default RecommandRecipe