import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormEntregador extends React.Component{
    state = {
		nome: null,
		cpf: null,
        rg:null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
        qtdEntregasRealizadas:null,
        valorFrete:null,
        enderecoRua:null,
        enderecoNumero:null,
        enderecoBairro:null,
        enderecoCidade:null,
        enderecoCep:null,
        enderecoUf:null,
        enderecoComplemento:null

	} 

	salvar = () => {

		let entregadorRequest = {

		nome: this.state.nome,
		cpf: this.state.cpf,
        rg:this.state.rg,
		dataNascimento: this.state.dataNascimento,
		foneCelular: this.state.foneCelular,
		foneFixo: this.state.foneFixo,
        qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
        valorFrete: this.state.valorFrete,
        enderecoRua: this.state.enderecoRua,
        enderecoNumero:this.state.enderecoNumero,
        enderecoBairro: this.state.enderecoBairro,
        enderecoCidade: this.state.enderecoCidade,
        enderecoCep: this.state.enderecoCep,
        enderecoUf: this.state.enderecoUf,
        enderecoComplemento: this.state.enderecoComplemento

		}
		axios.post("http://localhost:8082/api/entregador", entregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o Entregador.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome'
										maxLength="100"
										value={this.state.nome}
										onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
										fluid
										label='CPF'>
										<InputMask 
										mask="999.999.999-99"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})}
										/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='RG'
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})}
										/> 
								</Form.Group>
								
								<Form.Group>
                                <Form.Input
                                        fluid
                                        label='Data de Nascimento'
                                        width={6}>
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
											value={this.state.dataNascimento}
										    onChange={e => this.setState({dataNascimento: e.target.value})}
                                        /> 
                                        </Form.Input>

									<Form.Input
										fluid
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})}
										/> 
									</Form.Input>

									<Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})}
										/> 
									</Form.Input>
								</Form.Group>

								<Form.Group widths='equal'>	
                                    <Form.Input
										fluid
										label= 'N° Entregas Realizadas'
                                        width={6}
										value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})}
										/>
									

                                    <Form.Input
										fluid
										label='Valor do Frete'
                                        width={6}
										value={this.state.valorFrete}
										onChange={e => this.setState({valorFrete: e.target.value})}
										/>
									 
									</Form.Group>

								<Form.Group widths='equal'>
                                    <Form.Input
										fluid
										label='Rua'
                                        width={6}
										value={this.state.enderecoRua}
										onChange={e => this.setState({enderecoRua: e.target.value})}
										/>
									
                                    <Form.Input
										fluid
										label='Bairro'
                                        width={6}
										value={this.state.enderecoBairro}
										onChange={e => this.setState({enderecoBairro: e.target.value})}
										/>

                                    <Form.Input
										fluid
										label='Numero'
                                        width={6}
										value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})}
										/>

									<Form.Input
										fluid
										label='Complemento'
                                        width={6}
										value={this.state.enderecoComplemento}
										onChange={e => this.setState({enderecoComplemento: e.target.value})}
										/>
								</Form.Group>

								<Form.Group widths='equal'>
                                    <Form.Input
										fluid
										label='Cidade'
                                        width={6}
										value={this.state.enderecoCidade}
										onChange={e => this.setState({enderecoCidade: e.target.value})}
										/>

                                    <Form.Input
										fluid
										label='Cep'
                                        width={6}
										value={this.state.enderecoCep}
										onChange={e => this.setState({enderecoCep: e.target.value})}
										/>

                                    <Form.Input
										fluid
										label='Uf'
                                        width={6}
										value={this.state.enderecoUf}
										onChange={e => this.setState({enderecoUf: e.target.value})}
										/>


								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormEntregador;