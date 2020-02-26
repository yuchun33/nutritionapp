import React, {Component} from 'react';
import {Grid, Paper, Container, Box, Tabs, Tab, Avatar, AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {styled} from '@material-ui/core/styles'
import ChartsArea from "../components/chartsArea"
import RecipeArea from "../containers/recipeArea"
import IngredientArea from "../containers/IngredientArea"
import Bar from '../containers/bar'

const MyContainer = styled(Container)({
    minHeight: '100vh'
})

const MyGrid = styled(Grid)({
    padding: '50px 0px 30px 0px',
})

const MyBox = styled(Box)({
    background: '#F2F7FD'
})

class MainBox extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.initNutritionLog()
    }
    render() {
        let {user} = this.props        
        return (
            <>
            {user.loginStatus?
            <MyBox className="App">
                <Bar/>
                <MyContainer maxWidth="lg">
                <MyGrid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                >
                    <Grid item lg={5} md={12} xs={12}>
                        <ChartsArea/>
                    </Grid>
                    
                    <Grid item lg={3} md={6} xs={12}>
                        <RecipeArea/>
                    </Grid>

                    <Grid item lg={3} md={6} xs={12}>
                        <IngredientArea/>
                    </Grid>

                    </MyGrid>
                </MyContainer>
            </MyBox>
            :
            <MyBox className="App">
                <Bar/>
                <MyContainer maxWidth="lg">
                <MyGrid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                >   
                    <Grid item lg={3} md={6} xs={12}>
                        <RecipeArea/>
                    </Grid>

                    <Grid item lg={3} md={6} xs={12}>
                        <IngredientArea/>
                    </Grid>

                    </MyGrid>
                </MyContainer>
            </MyBox>
            }
            </>
        )
    }
}

export default MainBox