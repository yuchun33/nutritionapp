import React, { Component } from 'react'
import {Card, Grid, Paper, List, ListItem, Box, TextField, Avatar, Typography, Button, MenuItem, Select, FormControl, InputLabel} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import './chart.css'
import * as d3 from 'd3'

const MyPaper = styled(Paper)({
    padding: '20px 10px 0px 10px',
    boxShadow: '0 6px 12px #E1EBF7',
    width: '96%',
})

const MyBox = styled(Box)({
    padding: '20px',
    position: 'relative',
    width: "100%",
    overflowY: 'hidden',
    overflowX: 'hidden',

})

const MyFormControl = styled(FormControl)({
    width: '80px',
    marginRight: '10px',
    '& > *':{
        fontWeight: '500',
        textAlign: 'center',
        fontSize: '18px'
    }
    
})

const Mydiv = styled(Box)({
    overflowY: 'hidden',
})

class MonthChart extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let monthData = this.props.nutritionMonthLog.nutritionLogList
        let self = this
        var margin = {top: 40, right: 40, bottom: 0, left: 10}
        var width = 600 - margin.right - margin.left
        var height = 290 - margin.top - margin.bottom
        var svg = d3.select(self.refs.monthChart).append('svg').attr('width', '600px').attr('height', height).attr('fill', '#707070').attr('overflowX','scroll')
        .attr('position', 'relative').attr('class','monthSVG')
        var days = Array.from(Array(31), (_,x)=>x)
        var x_scale = d3.scaleLinear().domain([1,31]).range([0,width])
        var y_scale = d3.scaleLinear().domain([400,0]).range([200,0])

        var stack = d3.stack().keys(['protein', 'fat', 'carbohydrate'])
        var series = stack(monthData)

        var colors = ['#FADE67', '#D3E8F6', '#FFEBD1']
        var groups = svg.selectAll('g').data(series).enter().append('g').style('fill', (d,i)=>colors[i])
        var rects = groups.selectAll('rect').data(d=>d).enter().append('rect')
        .attr('x', (d,i)=> x_scale(i+1))
        .attr('y', (d,i)=> y_scale(580-(d[0]+d[1])))
        .attr('height', (d)=>y_scale(d[1]))
        .attr('width', (d)=>(14))
        .on('mouseover', (d,i) =>{  
            tooltip.style('opacity',1)
        })
        .on('mousemove', (d,i) =>{ 
            tooltip
                .html(content(monthData[i]))
                .style('left', x_scale(i+2) + 'px')
                .style('top', y_scale(100) + 'px')

        })
        .on('mouseleave', (d,i)=>{
            tooltip
            .style('opacity',0) 
        })

        var x_axis = d3.axisBottom().scale(x_scale).tickValues(days)
        var y_axis = d3.axisLeft().scale(y_scale)
        svg.append('g').call(x_axis).attr('transform',`translate(7,${height-20})`).call(g=>g.select('.domain').remove()).attr('stroke-width', 0)

        var tooltip = d3.select(self.refs.monthChart)
        .append('div')
        .style('opacity', 0)
        .style('background-color', 'rgba(255,255,255,0.5)')
        .style('border-radius', '8px')
        .style('border', '1px solid #ccc')
        .style('padding', '10px')
        .style('position', 'absolute')

        function content(monthData){
            let content = `
            <div>${monthData.year}/${monthData.month}/${monthData.day}</div>
            <div><span>卡路里:</span>  <span>${monthData.calories} kcal</span> </div>
            <div><span>蛋白質:</span> <span>${monthData.protein} g</span> </div>
            <div><span>脂肪:</span> <span>${monthData.fat} g</span> </div>
            <div><span>總碳水:</span> <span>${monthData.carbohydrate} g</span> </div>`
            return content
        }
        var colors = ['#FADE67', '#D3E8F6', '#FFEBD1']
        var svg2 = d3.select(self.refs.legend).append('svg').attr('width', '100px').attr('height', '100px').attr('fill', '#707070').attr('position', 'relative').attr('class','legendSVG')
        var legend = svg2.selectAll(".legend")
        .data(colors)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
        
        legend.append("rect")
        .attr('x', '-24px')
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function(d, i) {return colors.slice().reverse()[i];});
        
        legend.append("text")
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function(d, i) { 
            switch (i) {
            case 0: return "總碳水";
            case 1: return "脂肪";
            case 2: return "蛋白質";
            }
        });
    }
    componentDidUpdate(){
        d3.select('.monthSVG').remove()        
        let monthData = this.props.nutritionMonthLog.nutritionLogList
        let self = this
        var margin = {top: 40, right: 40, bottom: 0, left: 10}
        var width = 600 - margin.right - margin.left
        var height = 290 - margin.top - margin.bottom
        var svg = d3.select(self.refs.monthChart).append('svg').attr('width', '600px').attr('height', height).attr('fill', '#707070').attr('overflowX','scroll')
        .attr('position', 'relative').attr('class','monthSVG')
        var days = Array.from(Array(31), (_,x)=>x)
        var x_scale = d3.scaleLinear().domain([1,31]).range([0,width])
        var y_scale = d3.scaleLinear().domain([500,0]).range([300,0])


        var stack = d3.stack().keys(['protein', 'fat', 'carbohydrate'])
        var series = stack(monthData)
        var colors = ['#FADE67', '#D3E8F6', '#FFEBD1']
        var groups = svg.selectAll('g').data(series).enter().append('g').style('fill', (d,i)=>colors[i])
        var rects = groups.selectAll('rect').data(d=>d).enter().append('rect')
        .attr('x', (d,i)=> x_scale(i+1))
        .attr('y', (d,i)=> y_scale(380-(d[0]+d[1])))
        .attr('height', (d)=>y_scale(d[1]))
        .attr('width', (d)=>(14))
        .on('mouseover', (d,i) =>{  
            tooltip.style('opacity',1)
        })
        .on('mousemove', (d,i) =>{ 

            if(i < 18){
                tooltip
                .html(content(monthData[i]))
                .style('left', x_scale(i+2) + 'px')
                .style('top', y_scale(100) + 'px')
            }
            else {
                tooltip
                .html(content(monthData[i]))
                .style('left', x_scale(i-10) + 'px')
                .style('top', y_scale(100) + 'px')      
            }
        })
        .on('mouseleave', (d,i)=>{
            tooltip
            .style('opacity',0) 
        })

        var x_axis = d3.axisBottom().scale(x_scale).tickValues(days)
        var y_axis = d3.axisLeft().scale(y_scale)
        svg.append('g').call(x_axis).attr('transform',`translate(7,${height-20})`).call(g=>g.select('.domain').remove()).attr('stroke-width', 0)

        var tooltip = d3.select(self.refs.monthChart)
        .append('div')
        .style('opacity', 0)
        .style('background-color', 'rgba(255,255,255,0.5)')
        .style('border-radius', '8px')
        .style('border', '1px solid #ccc')
        .style('padding', '10px')
        .style('position', 'absolute')
       

        function content(monthData){
            let content = `
            <div>${monthData.year}/${monthData.month}/${monthData.day}</div>
            <div><span>卡路里:</span>  <span>${monthData.calories} kcal</span> </div>
            <div><span>蛋白質:</span> <span>${monthData.protein} g</span> </div>
            <div><span>脂肪:</span> <span>${monthData.fat} g</span> </div>
            <div><span>總碳水:</span> <span>${monthData.carbohydrate} g</span> </div>`
            return content
        }

    }
    render(){
        let {nutritionMonthLog, changeMonth, changeYear} = this.props
        return(
            <MyPaper>
                
                <MyFormControl>
                    <Select
                    value={nutritionMonthLog.year}
                    onChange={changeYear}
                    >
                    <MenuItem value={2020}>{2020}</MenuItem>
                    <MenuItem value={2021}>{2021}</MenuItem>
                    <MenuItem value={2022}>{2022}</MenuItem>
                    </Select>
                </MyFormControl>

                <MyFormControl>
                    <Select
                        value={nutritionMonthLog.month}
                        onChange={changeMonth}
                    >
                    <MenuItem value={1}>一月</MenuItem>
                    <MenuItem value={2}>二月</MenuItem>
                    <MenuItem value={3}>三月</MenuItem>
                    <MenuItem value={4}>四月</MenuItem>
                    <MenuItem value={5}>五月</MenuItem>
                    <MenuItem value={6}>六月</MenuItem>
                    <MenuItem value={7}>七月</MenuItem>
                    <MenuItem value={8}>八月</MenuItem>
                    <MenuItem value={9}>九月</MenuItem>
                    <MenuItem value={10}>十月</MenuItem>
                    <MenuItem value={11}>十一月</MenuItem>
                    <MenuItem value={12}>十二月</MenuItem>
                    </Select>
                </MyFormControl>

                <MyBox>
                    <Grid container>
                        <Grid item lg={10} md={10} xs={10}>
                            <Mydiv ref='monthChart'></Mydiv>
                        </Grid>
                        <Grid item lg={2} md={2} xs={2}>
                            <div ref='legend'></div>
                        </Grid> 
                    </Grid>
                </MyBox>

            </MyPaper>
        )
    }
}

export default MonthChart