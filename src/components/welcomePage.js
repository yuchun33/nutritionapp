import React, {Component} from 'react';
import {Grid, Paper, Container, Box, Tabs, Tab, Avatar, AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {styled} from '@material-ui/core/styles'

const WelcomeBox = styled(Grid)({
    position: 'fixed',
    top: '0',
    width: '100vw',
    height: '100vh', 
    background: 'rgba(255, 255, 255, 0.6)'
})
class WelcomePage extends Component {
    render() {
        let {closeWelcomeBox} = this.props
        return (
            <div>
                <video autoPlay muted loop style={{width: 100+'%'}}>
                    <source src="videoBg.mp4" type="video/mp4"/>
                </video>
                {/* <div><img style={{width: 100+'%'}} src='./bg.png'/></div> */}
                {/* <WelcomeBox> */}
                    <WelcomeBox container justify="center" alignItems="center">
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={closeWelcomeBox}>開始紀錄</Button>

                        </Grid>
                    </WelcomeBox>
                {/* </WelcomeBox> */}
            </div>
        )
    }
}

export default WelcomePage