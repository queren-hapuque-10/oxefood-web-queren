import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Modal, Table, TableCell } from 'semantic-ui-react';

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

    if (dataParam == null || dataParam == '') {
        return ''
    }
    
    let dia = dataParam.substr(8,2);
    let mes = dataParam.substr(5,2);
    let ano = dataParam.substr(0,4);
    let dataFormatada = dia + '/' + mes + '/' + ano;

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
                      
                      <Table color='orange' sortable celled >

                          <Table.Header >
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>N° Entregas Realizadas</Table.HeaderCell>
                                  <Table.HeaderCell>Valor do Frete</Table.HeaderCell>
                                  <Table.HeaderCell>Rua</Table.HeaderCell>
                                  <Table.HeaderCell>Bairro</Table.HeaderCell>
                                  <Table.HeaderCell>Numero</Table.HeaderCell>
                                  <Table.HeaderCell>Complemento</Table.HeaderCell>
                                  <Table.HeaderCell>Cidade</Table.HeaderCell>
                                  <Table.HeaderCell>Cep</Table.HeaderCell>
                                  <Table.HeaderCell>UF</Table.HeaderCell>
                                  <Table.HeaderCell>Mais Informações</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2} style={{paddingRight: '40px', paddingLeft: '40px'}}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaEntregadores.map(entregador => (

                                  <Table.Row>
                                      <Table.Cell>{entregador.nome}</Table.Cell>
                                      <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                      <Table.Cell>{entregador.valorFrete}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoRua}</Table.Cell> 
                                      <Table.Cell>{entregador.enderecoBairro}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoNumero}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoComplemento}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoCidade}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoCep}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoUf}</Table.Cell>
                                      <TableCell textAlign='center'>
                                       <Modal
                                        trigger={<Button><i>info</i></Button>}
                                        header='Mais Informações'
                                        content={"CPF: "+entregador.cpf+" | RG: "+entregador.rg+
                                        " | Data de Nascimento: "+entregador.dataNascimento+" | Celular: "+entregador.foneCelular+"  | Tel Fixo: "+entregador.foneFixo} 

                                        actions={[ {key: 'done', content: 'Fechar', positive:true}]}
                                        />
                                      </TableCell>

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
