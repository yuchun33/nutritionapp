import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import {MyButton, MyChip, MyTextField, MyBox} from '../styleComponent/index.js'

class IngredientInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredientInput: '花椰菜',
            defineUnit: 100
        }
        this.ingredientChange = this.ingredientChange.bind(this)
        this.defineUnitChange = this.defineUnitChange.bind(this)
    }
    ingredientChange(e){
        this.setState({ingredientInput: e.target.value})
    }
    defineUnitChange(e){
        this.setState({defineUnit: e.target.value})
    }
    render(){
        let {handleQueryIngredient, queryIngredient, ingredientChange, defineUnitChange} = this.props
        let {ingredientInput, defineUnit} = this.props
        let commonUseIngredients = [
            {name: '奇異果'},
            {name: '檸檬'},
            {name: '牛蒡'},
            {name: '秋刀魚'},
            {name: '金針菇'},
            {name: '冷凍蛋餅皮'},
        ]
        return(
            <>
            <Grid container spacing={1} justify='space-between' alignItems="center">
                <Grid item lg={6} md={8} xs={8}>
                    <MyTextField label="食材" variant="outlined" required size='small' value={ingredientInput} onChange={ingredientChange}/>
                </Grid>
                <Grid item md xs>
                    <MyTextField label="單位(g)" variant="outlined" defaultValue="100" size='small' value={defineUnit} onChange={defineUnitChange}/>
                </Grid>
                <Grid item md xs>
                    <MyButton variant="contained" color="secondary" onClick={()=>handleQueryIngredient(ingredientInput, defineUnit)}>查詢</MyButton>
                </Grid>
            </Grid>
           
            
            <MyBox>
                建議食材：
                {commonUseIngredients.map(commonUseIngredient=>(            
                <MyChip key={commonUseIngredient.name} label={commonUseIngredient.name} clickable={true} variant="outlined" onClick={()=>queryIngredient(commonUseIngredient.name, defineUnit)}></MyChip>
                ))}
            </MyBox>
            </>
        )
    }
}

export default IngredientInput