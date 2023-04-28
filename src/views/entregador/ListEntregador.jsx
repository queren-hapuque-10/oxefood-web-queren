import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListEntregador extends React.Component{

   state = {

       listaEntregadores: []
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get("http://localhost:8082/api/entregador")
    .then((response) => {
       
        this.setState({
            listaEntregadores: response.data
        })
    })

};

formatarData = (dataParam) => {

    let data = new Date(dataParam);
    let dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
    let mes = (data.getMonth() + 1) < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);
    let dataFormatada = dia + "/" + mes + "/" + data.getFullYear();
   
    return dataFormatada
};

render(){
    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Entregador </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>
                      <Link to={'/form-entregador'}>
                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            floated='right'
                        >
                            <Icon name='clipboard outline' />
                          Novo 
                        </Button></Link>
                       
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled  style={{marginLeft: '-20%'}}>

                          <Table.Header >
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>CPF</Table.HeaderCell>
                                  <Table.HeaderCell>RG</Table.HeaderCell>
                                  <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                  <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                  <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                  <Table.HeaderCell>N° Entregas Realizadas</Table.HeaderCell>
                                  <Table.HeaderCell>Valor do Frete</Table.HeaderCell>
                                  <Table.HeaderCell>Rua</Table.HeaderCell>
                                  <Table.HeaderCell>Bairro</Table.HeaderCell>
                                  <Table.HeaderCell>Numero</Table.HeaderCell>
                                  <Table.HeaderCell>Complemento</Table.HeaderCell>
                                  <Table.HeaderCell>Cidade</Table.HeaderCell>
                                  <Table.HeaderCell>Cep</Table.HeaderCell>
                                  <Table.HeaderCell>UF</Table.HeaderCell>

                                  <Table.HeaderCell textAlign='center' width={2} style={{paddingRight: '40px', paddingLeft: '40px'}}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaEntregadores.map(entregador => (

                                  <Table.Row>
                                      <Table.Cell>{entregador.nome}</Table.Cell>
                                      <Table.Cell>{entregador.cpf}</Table.Cell>
                                      <Table.Cell>{entregador.rg}</Table.Cell>
                                      <Table.Cell>{this.formatarData(entregador.dataNascimento)}</Table.Cell>
                                      <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                      <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                      <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                      <Table.Cell>{entregador.valorFrete}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoRua}</Table.Cell> 
                                      <Table.Cell>{entregador.enderecoBairro}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoNumero}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoComplemento}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoCidade}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoCep}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoUf}</Table.Cell>


                                      <Table.Cell textAlign='center' >
                                         
                                          <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste entregador' /> &nbsp;

                                        <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este entregador' />

                                           </Table.Cell>
                                       </Table.Row>
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
           </div>
       )
   }
}

export default ListEntregador;
