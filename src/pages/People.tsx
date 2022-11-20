import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect, useMemo } from "react";

interface PeopleProps {
  title?: string;
}

const People: React.FC<PeopleProps> = () => {
  const [name, setName] = useState<string | undefined>("");
  const [lastName, setLastName] = useState<string | undefined>("");
  const [list, setList] = useState<string[]>([]);

  //useEffect
  useEffect(() => {
    console.log("Alterou o nome, estado do name");
    if (name) {
      if (name.length >= 5) {
        alert("Você digitou um nome legal!");
      }
    }
  }, [name]);

  useEffect(() => {
    console.log("Quando montar o componente.");

    return () => {
      console.log("Quando desmontar o componente.");
    };
  }, []);

  //useRef
  const inputRef = useRef<HTMLInputElement>();
  const counter = useRef(0);

  //useMemo
  const listMemo = useMemo(() => {
    console.log("Renderizou a lista");
    return (
      <>
        {list.map((item) => (
          <h1 key={item}>{item}</h1>
        ))}
      </>
    );
  }, [list]);

  const handleChangeName = (ev: any) => {
    const value = ev.target.value;
    counter.current = counter.current + 1;
    setName(value);
  };

  const handleFocus = () => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClick = () => {
    if (!name || !lastName) {
      alert("Preencha os campos");
    }

    const person = `${name} ${lastName}`;

    const exist = list.find((item) => item === person);

    if (exist) {
      alert("Pessoa já cadastrada!");
      return;
    }

    setList([...list, person]);

    setName("");
    setLastName("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Lista de Pessoas {counter.current}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Nome"
          value={name}
          onChange={handleChangeName}
          fullWidth
          variant="outlined"
          inputRef={inputRef}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Sobrenome"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value)}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
        <Button onClick={handleClick} variant="contained">
          Salvar
        </Button>

        <Button onClick={handleFocus} variant="contained">
          Ir para o nome
        </Button>
      </Grid>
      <Grid item xs={12}>
        {listMemo}
      </Grid>
    </Grid>
  );
};

export default People;
