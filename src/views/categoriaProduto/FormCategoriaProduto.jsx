import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../util/Constantes';

export default function FormCategoriaProduto () {

    const { state } = useLocation();

    const [idCategoria, setIdCategoria] = useState();
    const [descricao, setDescricao] = useState();

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get(ENDERECO_API + "api/categoriaproduto/" + state.id)
            .then((response) => {
                
                setIdCategoria(response.data.id)
                setDescricao(response.data.descricao)
            })
        }
        
    }, [state])

    function salvar() {

		let categoriaRequest = {

			descricao: descricao,
		}

        if (idCategoria != null) { //Alteração:

            axios.put(ENDERECO_API + "api/categoriaproduto/" + idCategoria, categoriaRequest)
		    .then((response) => { console.log('Categoria de produto alterado com sucesso.') })
		    .catch((error) => { console.log('Erro ao alter uma aategoria de produto.') })

        } else { //Cadastro:
        
            axios.post(ENDERECO_API + "api/categoriaproduto", categoriaRequest)
		    .then((response) => { console.log('Categoria de produto cadastrado com sucesso.') })
		    .catch((error) => { console.log('Erro ao incluir a categoria de produto.') })

        }
	}

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    { idCategoria === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Categoria de Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idCategoria !== undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Categoria de Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Input
                                required
                                fluid
                                label='Descrição'
                                maxLength="200"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />

                        </Form>

                        <div style={{marginTop: '4%'}}>

                            <Button
                                label='Voltar'
                                circular
                                color='orange'
                                icon='reply'
                                as={Link} 
                                to='/list-categoria-produto'
                            />

                            <Button
                                label='Salvar'
                                circular
                                color='blue'
                                icon='save'
                                floated='right'
                                onClick={() => salvar()}
                            />

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}