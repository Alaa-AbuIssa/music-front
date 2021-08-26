import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../assists/logo white-01.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Footer() {
    const classes = useStyles();
    return (
        <div className="footer">
            <img src={Logo} alt="-" className="logo-foot" />
            <div className="info">
                <p>PROFILE</p>
                <br />
                <p>SIGN IN</p>
                <br />
                <p>MUSIC</p>
            </div>

            <div className={classes.root} >
                <AppBar position="static" className="bar" >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <div className="about">
                                <Button variant="text" size="small" color="inherit">
                                    LEGAL
                                </Button>
                                <Button size="small" color="inherit">
                                    PRIVACY CENTER
                                </Button>
                                <Button size="small" color="inherit">
                                    PRIVACY POLICY
                                </Button>
                                <Button size="small" color="inherit">
                                    COOKIES
                                </Button>
                                <Button size="small" color="inherit">
                                    ABOUT ADS
                                </Button>
                            </div>
                        </Typography>

                        <p className="copy-right">&copy;2021 MUSICDB</p>

                    </Toolbar>
                </AppBar>
            </div>

        </div>
    )

}






