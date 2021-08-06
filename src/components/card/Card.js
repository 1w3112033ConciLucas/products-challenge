import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { useStyles } from './styles';


export default function ProductCard({createdAt, title, category, description, tags, image, link, id}) {
    const classes = useStyles();
    //Creo una nueva variable para modificar la fecha
    let date = new Date(createdAt);
    //Creo un arreglo con meses para matchear con el numero de mes de la fecha
    let months = ["Ene", "Feb", 'Mar', "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    //Obtengo dia y mes
    let day = date.getDate();
    let month = months[date.getMonth()];
    
    let dateShow = [ day, month ];
    return (
        <Card className={classes.root}>
            <div className={classes.imgContainer}>
                <div className={classes.dt} >
                    <div  className={classes.dt}>
                    {dateShow[0]}
                    <br/>
                    {dateShow[1]}
                    </div> 
                </div>      
                <div 
                className={classes.image} 
                style={{ 
                    backgroundImage: `url(${image})`, 
                }}>
                </div>
                <div className={classes.category} >
                    {category}
                </div>
            </div>
        
            <CardContent style={{maxHeight: "3rem", marginBottom: "5rem"}}>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="h2"
            >
                {title}
            </Typography>
                <div style={{ display:"flex", flexDirection:"row" }}>
                    <FolderOpenIcon className={classes.icon} />
                    <Typography className={classes.tags} >
                        {tags}
                    </Typography>
                </div>    
            <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                className={classes.description}
            >
                {description}
            </Typography>
            </CardContent>
        <CardActions className={classes.actions} >
                <Button 
                    href={link} 
                    size="small" 
                    className={classes.button} 
                >
                    Read More
                </Button>
        </CardActions>
        </Card>
    );
}