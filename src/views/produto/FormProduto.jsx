import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Titulo'
										maxLength="100"
                                        placeholder='Informe o título do produto'
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto'
                                        placeholder='Informe o título do produto'>
										
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

									<Form.TextArea
										fluid
										label='Descrição'
                                        placeholder='Informe a descrição do produto'
                                        rows="3"
                                        width={16}
    
                                        >
									</Form.TextArea>

                                    </Form.Group>

                                <Form.Group widths='equal'>
									<Form.Input
                                        required
										fluid
										label='Valor unitário'
                                        >
									
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de entrega Mínimo em minutos'
                                    >
                                       <InputMask 
										placeholder="30"/> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de entrega Máximo em minutos'
                                    >
                                        <InputMask 
										placeholder="40"/> 
                                    </Form.Input>

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

export default FormProduto;