import { Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions";
import ProductCard from "../card/Card";
import { useStyles } from "./styles";


function ProductsCards() {
    const classes = useStyles();
    //Hooks
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);
    //Creo un arreglo de las categorias para los botones 
    const cat = products.map((produ) => produ.category);
    const filter = new Set(cat);
    const show = [...filter];
    //Creo un estado local para filtrar los productos
    const [categories, setCategories] = useState([...products]);
    //Funcion que elimina los objetos duplicados en el arreglo
    function removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject = {};

        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
    
        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }
    //Funcion handleClick de los botones para modificar el estado
    function filterCategories(name) {
        const categ = products.filter((p) => p.category === name);
        setCategories(categ);
    }
    //Funcion handleDoubleClick para borrar el filtro de categories y traer todos los productos
    function showAll(){
        setCategories([...products]);
    }
    //Arreglo final con los filtros aplicados 
    const result = removeDuplicates(categories, "id");

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        setCategories([...products]);
    }, [products]);

    return (
        <Grid>
            <Grid container className={classes.containerButtons} >
                {   
                    !loading ? 
                    show?.map((cate) => {
                    
                        const c = cate;
                        
                        return (
                            <Button 
                                className={classes.button}
                                name={cate}
                                onClick={() => filterCategories(c)}
                                onDoubleClick={() => showAll()}
                            >
                            {cate}
                            </Button>
                        );
                    })
                    : null
                }
            </Grid>
            <Grid
                container
                className={classes.containerCards}
            >
                {!loading ? (
                result?.map((p) => { 
                    return (
                    <ProductCard
                        key={p.id}
                        createdAt={p.createdAt}
                        title={p.title}
                        category={p.category}
                        description={p.description}
                        tags={p.tags}
                        image={p.image}
                        link={p.link}
                        id={p.id}
                        style={{ padding: "0.3rem" }}
                    />
                    );
                })
                ) : (
                <h1>Cargando...</h1>
                )}
            </Grid>
        </Grid>
    );
}

export default ProductsCards;