import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, List, Modal, Segment, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

class ListComprador extends React.Component{

    state = {

        listaCompradores: [],
        openModal: false,
        compradorObj: {}
       
     }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get(ENDERECO_API + "api/comprador")
    .then((response) => {
       
        this.setState({
            listaCompradores: response.data
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

setOpenModal = (val) => {

    this.setState({ 
        openModal: val
    })
};

exibirDetalheComprador = (id) => {

    axios.get(ENDERECO_API + "api/comprador/" + id)
    .then((response) => {
      
        this.setState({
            compradorObj: response.data,
            openModal: true,
        })
    })

};

render(){
    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Comprador </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>
                        <Link to={'/form-comprador'}>
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
                        </Button>
                        </Link>
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>Endereco Comercial</Table.HeaderCell>
                                  <Table.HeaderCell>Endereco Residencial</Table.HeaderCell>
                                  <Table.HeaderCell>Comissao</Table.HeaderCell>
                                  <Table.HeaderCell>QTDComprasMediasMes</Table.HeaderCell>
                                  <Table.HeaderCell>contratado Em</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaCompradores.map(comprador => (

                                  <Table.Row>
                                      <Table.Cell>{comprador.nome}</Table.Cell>
                                      <Table.Cell>{comprador.enderecoComercial}</Table.Cell>
                                      <Table.Cell>{comprador.enderecoResidencial}</Table.Cell>
                                      <Table.Cell>{comprador.comissao}</Table.Cell>
                                      <Table.Cell>{comprador.qtdComprasMediasMes}</Table.Cell>
                                      <Table.Cell>{this.formatarData(comprador.contratadoEm)}</Table.Cell>
                                      
                                      <Table.Cell textAlign='center'>
                                         
                                            <Button
                                                   inverted
                                                   circular
                                                   icon='file alternate outline'
                                                   color='green'
                                                   title='Clique aqui para exibir este comprador' 
                                                   onClick={e => this.exibirDetalheComprador(comprador.id)}
                                                />  &nbsp;

                                            <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste comprador' /> &nbsp;

                                            <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este comprador' />

                                           </Table.Cell>
                                       </Table.Row>
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
               <Modal
                    basic
                    onClose={() => this.setOpenModal(false)}
                    onOpen={() => this.setOpenModal(true)}
                    open={this.state.openModal}
                >

                    <Modal.Header>Mais informações</Modal.Header>
                
                    <Modal.Content>
                        <Modal.Description>

                            <Segment>
                                <List relaxed>
                                <List.Item>
                                        <List.Icon name='angle right' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Description>
                                                <strong>Trabalha em Home Office:</strong> &nbsp; &nbsp; 
                                                { this.state.compradorObj.trabalhoHomeOffice === true && 
                                                    <>Sim</>
                                                }
                                                { this.state.compradorObj.trabalhoHomeOffice === false && 
                                                    <>Não</>
                                                }
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>

                        </Modal.Description>
                    </Modal.Content>
                
                </Modal>

            </div>
        )
    }
}

export default ListComprador;