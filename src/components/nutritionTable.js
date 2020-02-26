import React, { Component } from 'react'
import {Grid, Typography} from '@material-ui/core'
import {IngredientList, IngredientListItem, FirstListItem, IngredientPaper} from '../styleComponent/nutritionTable'

class NutritionTable extends Component {
    render(){
        let {nutritionList} = this.props

        return(
            <IngredientPaper>
            <IngredientList>
                <FirstListItem>
                    <Grid container justify="space-between" spacing={1}>
                        <Grid item xs>
                            <Typography variant="body2" align='left'>營養成分</Typography>
                            
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body2" align='right'>每份</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body2" align='right'>每100公克</Typography>
                        </Grid>
                    </Grid>
                </FirstListItem>
                {nutritionList.map(row =>(
                    <IngredientListItem key={row.name}>
                        <Grid container justify="space-between" spacing={1}>
                            <Grid item xs>
                                <Typography variant="body2" align='left'>{row.name}</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body2" align='right'>{row.define} {row.unit}</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body2" align='right'>{row.standard} {row.unit}</Typography>
                            </Grid>
                        </Grid>
                    </IngredientListItem>
                ))}

            </IngredientList>
            </IngredientPaper>
        )
    }
}

export default NutritionTable