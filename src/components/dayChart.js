import React, { Component } from 'react'
import {Card, Grid, Paper, List, ListItem, Box, TextField, Avatar, Typography, Button, Tooltip, IconButton} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {styled} from '@material-ui/core/styles'
import * as d3 from 'd3'

const AvatarInList = styled(Avatar)({
    height: '24px',
    marginTop: '-10px',
    transform: 'rotate(10deg)',
    '&>img': {
        height: '24px',
        width: '24px'
    }
})

const MyPaper = styled(Paper)({
    padding: '6px 10px 10px 0px',
    boxShadow: '0 6px 12px #E1EBF7',
    width: '96%',
})

const TitleListItem = styled(ListItem)({
    marginBottom: '10px'
})

const EditTooltip = styled(Tooltip)({
    position: 'absolute',
    right: '0px'
})

const GoalTextField = styled(TextField)({
    width: '66px',
    height: '30px',
    float: 'right',
    marginTop: '-6px',
    marginLeft: '4px',
    '& > *':{
        textAlign: 'center',
    }
})

const RGrid = styled(Grid)({
    textAlign: 'right',
})
class DayChart extends Component {
    componentDidMount(){
        let nutritions = ['calories', 'protein', 'carbohydrate', 'fat', 'water']
        let {nutritionDayLog} = this.props
        let self = this
        nutritions.map(nutrition =>{
            let nutritionName = nutrition          
            var svg = d3.select(self.refs[nutritionName]).append('svg').attr('width', '100%').attr('height', '14px').style('position','relative')
            svg.selectAll('rect.colorBar').data([nutrition]).enter().append('rect').attr('class', `${nutritionName}_bar`)
            .attr('width', (d,i)=>((nutritionDayLog.assume[d]/nutritionDayLog.goal[d])*150))
            .attr('height', '14px').attr('fill', '#D3E8F6')
            .style('position', 'absolute').style('margin', 'auto').style('top', '0').style('bottom', '0')
            var line = d3.line()
            var lineData = [[150,0], [150,20]]
            svg.append("path").attr("d",line(lineData)).attr('stroke','#FBCD50').attr('stroke-width','4px').attr('fill','none')
        })
    }

    componentDidUpdate(prevProps) {
        let nutritions = ['calories', 'protein', 'carbohydrate', 'fat']
        let {nutritionDayLog} = this.props
        let self = this
        nutritions.map(nutrition =>{
            let nutritionName = nutrition     
            d3.selectAll(`rect.${nutritionName}_bar`).attr('height', '44px')
            .attr('width', (nutritionDayLog.assume[nutritionName]/nutritionDayLog.goal[nutritionName])*150)
        })
    }

    render(){
        let nutritions = ['calories', 'protein', 'carbohydrate', 'fat']
        let nutritionsIcon = ['./icons/food.png', './icons/egg.png', './icons/gluten.png', './icons/oil.png']
        let {nutritionDayLog, editGoal, changeGoalValue} = this.props    
        
        return(
            <MyPaper>
                <List>

                    {nutritionDayLog.editStatus?
                    <>
                    <TitleListItem>
                    <Typography variant='h2'><span>{nutritionDayLog.year}</span>/<span>{nutritionDayLog.month}</span>/<span>{nutritionDayLog.date}</span> <span>{nutritionDayLog.day}</span></Typography>
                    
                    <EditTooltip title="edit">
                        <IconButton onClick={()=>editGoal(false)}>
                            <CheckCircleOutlineIcon/>
                        </IconButton>
                    </EditTooltip>
                    </TitleListItem>
                    {nutritions.map((nutrition,index)=>(         
                        <ListItem key={index}>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item lg={1} md={1} xs={1}><AvatarInList alt={nutritionsIcon[index]} src={nutritionsIcon[index]} variant="rounded"/></Grid>
                                <Grid item lg={6} md={6} xs={6} ref={nutrition}></Grid>
                                <RGrid item lg={4} md={4} xs={4}>
                                    {Number(nutritionDayLog.assume[nutrition]).toFixed(1)} / <GoalTextField variant="outlined" name={nutrition} value={nutritionDayLog.goal[nutrition]} onChange={changeGoalValue} size="small"/>
                                </RGrid>
                            </Grid>
                        </ListItem>
                    ))}
                    </>
                    :
                    <>
                    <TitleListItem>
                    <Typography variant='h2'><span>{nutritionDayLog.year}</span>/<span>{nutritionDayLog.month}</span>/<span>{nutritionDayLog.date}</span> <span>{nutritionDayLog.day}</span></Typography>
                    
                    <EditTooltip title="edit">
                        <IconButton onClick={()=>editGoal(true)}>
                            <EditIcon />
                        </IconButton>
                    </EditTooltip>
                    </TitleListItem>
                    {nutritions.map((nutrition,index)=>(         
                        <ListItem key={index}>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item lg={1} md={1} xs={1}><AvatarInList alt={nutritionsIcon[index]} src={nutritionsIcon[index]} variant="rounded"/></Grid>
                                <Grid item lg={6} md={6} xs={6} ref={nutrition}></Grid>
                                <Grid item lg={3} md={3} xs={3}>
                                    <Typography align="center" variant="body2">{Number(nutritionDayLog.assume[nutrition]).toFixed(1)} / {nutritionDayLog.goal[nutrition]}</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                    </>
                    }

                </List>
            </MyPaper>
        )
    }
}

export default DayChart