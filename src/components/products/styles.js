import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    button:{
        backgroundColor: "#FF0000",
        color: "#FFF0F0",
        marginLeft: "0.2rem",
        marginTop: "0.3rem",
        fontWeight: "bolder",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
    containerButtons:{
        justifyContent: "center"
    },
    containerCards:{
        justifyContent: "center", 
        flexGrow: 1, 
        padding: "0.2rem"
    },
});