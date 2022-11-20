import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Products: React.FC = () => {
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const [canNotSave, setCanNotSave] = useState(true);

  useEffect(() => {
    if (product.length > 3 && quantity > 0) {
      setCanNotSave(false);
    } else {
      setCanNotSave(true);
    }
  }, [product, quantity]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Lista de Produtos </Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Nome do produto"
          onChange={(ev) => setProduct(ev.target.value)}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Quantidade"
          type={"number"}
          onChange={(ev) => setQuantity(Number(ev.target.value))}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={(ev) => console.log(ev)}
          variant="contained"
          disabled={canNotSave}
        >
          Salvar
        </Button>
      </Grid>
      <Grid item xs={12}>
        "lista de produtos"
      </Grid>
    </Grid>
  );
};

export default Products;
