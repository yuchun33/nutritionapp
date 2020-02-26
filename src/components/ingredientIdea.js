import React, { Component } from 'react'
import {Tab, Grid, ListItem, ListItemText} from '@material-ui/core'
import {IngredientPaper, IngredientList, NutritionGrid, RecDivider, MyTabs} from '../styleComponent/nutritionTable'

class IngredientIdea extends Component {
    constructor(props) {
        super(props)
        this.state={
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e,value){
        this.setState({
            value: value
        })
        console.log(value);
        
    }
    render(){
        let {queryIngredient, ingredientIdea, CLICK_TAB} = this.props        
        return (
            <>
            <IngredientPaper>
                <MyTabs
                    value={this.state.value}
                    indicatorColor="secondary"
                    onChange={this.handleChange}
                >
                    <Tab label="蔬菜" value={0} onClick={()=>CLICK_TAB('vegetable')}/>
                    <Tab label="水果" value={1} onClick={()=>CLICK_TAB('fruit')}/>
                    <Tab label="海鮮" value={2} onClick={()=>CLICK_TAB('seafood')}/>
                    <Tab label="肉類" value={3} onClick={()=>CLICK_TAB('meat')}/>
                </MyTabs>

                <IngredientList> 
                {ingredientIdea.display.map((recommand,index)=>(
                    <>
                    <ListItem button key={index} onClick={()=>queryIngredient(recommand.ingredient, 100)}>
                        <ListItemText
                            primary={recommand.ingredient}
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
                </IngredientList>
                </IngredientPaper>
            </>
        )
    }
}

export default IngredientIdea