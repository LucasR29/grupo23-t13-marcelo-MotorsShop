<h2 align="center" style='font-family: sans-serif'>
	Motors Shop API | API REST (Back-end)
</h2>


<h3>Iniciando o projeto</h3>


<p align = "center">
Para instalar as dependências, utilize o seguinte comando no prompt de comando:
</p>

```json
$ yarn

```

<p align = "center">
Passo 2 - Rodar uma migração :gear:
</p>
Após instalar as dependências, você pode rodar uma migração utilizando o seguinte comando no prompt de comando:

```json
$ yarn migration:run
```

<p align = "center">
Passo 3 - Iniciar o servidor de desenvolvimento :rocket:
</p>

```json
$ yarn dev

```


<h3>Agora você tem uma aplicação em pleno funcionamento e esperando para ser rodada. 🚀<h3>

🔥 Server running 🔥

</br>

<p align = "center">
Este é o backend da aplicação WebAgenda API para gerenciamento de clientes e contatos.
</p>


<li>A API  disponível em</li>


<h2 align ='center'>Users (Endpoints)</h2>


<li style='font-size: 20px'>Criação de um Usuario:</li>

<br/>

Observação: O campo "telefone" precisa ter 11 digitos

`POST /client - FORMATO DA REQUISIÇÃO - STATUS 201`

```json

{
  "name": "João Silva",
  "email": "joao.silva@example.com",
  "cpf": "123.456.789-00",
  "cell_phone": "(11) 98319-1188",
  "birthdate": "20/10/1996",
  "description": "Lorem ipsum dolor sit amet",
  "password": "@Joao123",
  "type": "Anunciante",
  "profile_picture": "",

  "address": {
    "street": "Rua A",
    "number": "123",
    "complement": "Apto 1",
    "neighborhood": "Bairro X",
    "state": "São Paulo",
    "city": "SP",
    "country": "Brazil",
    "cep": "01234-567"
  }
}


```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`POST /users/ - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"name": "João Silva",
	"email": "joao.silva@example.com",
	"cpf": "123.456.789-00",
	"cell_phone": "(11) 98319-1188",
	"birthdate": "1996-10-20",
	"description": "Lorem ipsum dolor sit amet",
	"type": "Anunciante",
	"profile_picture": "",
	"address": {
		"cep": "01234-567",
		"state": "São Paulo",
		"city": "SP",
		"street": "Rua A",
		"number": "123",
		"complement": "Apto 1",
		"id": "7a65ef33-ce8e-485c-8900-c24358de2c9a"
	},
	"deleted_at": null,
	"reset_token": null,
	"reset_time": null,
	"id": "897f225d-f4d9-4b78-91c3-27bc9da00505",
	"created_at": "2023-05-03T16:35:07.616Z",
	"updated_at": "2023-05-03T16:35:07.616Z",
	"is_active": true
}

```

<br/>

<li style='font-size: 20px'>Login do Cliente</li>

<br/>

`POST /login/ - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
  "email": "joao.silva@example.com",
  "password": "@Joao123"
}

```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`POST /login/ - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW8uc2lsdmFAZXhhbXBsZS5jb20iLCJpZCI6Ijg5N2YyMjVkLWY0ZDktNGI3OC05MWMzLTI3YmM5ZGEwMDUwNSIsImlhdCI6MTY4MzEzMjA3MywiZXhwIjoxNjgzMzA0ODczLCJzdWIiOiI4OTdmMjI1ZC1mNGQ5LTRiNzgtOTFjMy0yN2JjOWRhMDA1MDUifQ.lOrM_Zs-JSR7EzbXx7yK0gwNRdg2OeTYDSoJJD3QbEc"
}
```

Caso dê um erro irá retornar o seguinte erro:

```json
{
	"message": "Incorrect Email or Password"
}
```

## **Rotas precisão de token*

<br/>

`POST /ads/ - FORMATO DA REQUISIÇÃO - STATUS 201 `

```json
{
    "brand": "Toyota",
    "model": "Corolla",
    "year": "2019",
    "fuel": "Gasolina",
    "mileage": 50000,
    "color": "Branco",
    "fipe_table_price": "R$ 80.000,00",
    "price": "R$ 85.000,00",
    "description": "Carro em excelente estado de conservação.",
    "cover_image": "https://example.com/car.jpg",
    "is_activated": true,
    "gallery": [
        {
            "image_url": "https://example.com/car1.jpg"
        },
        {
            "image_url": "https://example.com/car2.jpg"
        }
			{
            "image_url": "https://example.com/car3.jpg"
        }
    ],
    "user_id": "897f225d-f4d9-4b78-91c3-27bc9da00505"
}
```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`POST /ads/ - FORMATO DA RESPOSTA  - STATUS 201 `

```Json
{
	"id": "cb5c6c94-19e1-4e55-983c-3d2949f509a9",
	"brand": "Toyota",
	"price": "R$ 85.000,00",
	"model": "Corolla",
	"year": "2019",
	"fuel": "Gasolina",
	"description": "Carro em excelente estado de conservação.",
	"mileage": 50000,
	"color": "Branco",
	"fipe_table_price": "R$ 80.000,00",
	"cover_image": "https://example.com/car.jpg",
	"is_activated": true,
	"gallery": [
		{},
		{}
	],
	"user": {
		"id": "897f225d-f4d9-4b78-91c3-27bc9da00505",
		"name": "João Silva",
		"email": "joao.silva@example.com",
		"cell_phone": "(11) 98319-1188",
		"cpf": "123.456.789-00",
		"description": "Lorem ipsum dolor sit amet",
		"profile_picture": ""
	}
}


```

<br/>

Caso seja informado um token inválido:

```json
{
	"message": "Missing token."
}
```
> Caso esteja faltando algum campo:

```json
{
	"message": "null value in column \"mileage\" of relation \"ads\" violates not-null constraint"
}
```

<br/>

<li style='font-size: 20px'>Atualização de um Ads</li>

<br/>

`PUT /ads/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "brand": "Toyota 2"
}

```
`PUT /ads/ - FORMATO DA RESPOSTA  - STATUS 201 `

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

```json

{
	"brand": "Toyota 2",
	"model": "Corolla",
	"year": "2019",
	"fuel": "Gasolina",
	"mileage": 3000,
	"color": "Branco",
	"fipe_table_price": "R$ 80.000,00",
	"price": "R$ 78.972,00",
	"description": "Carro em excelente estado de conservação.",
	"cover_image": "https://example.com/car.jpg",
	"is_activated": true,
	"gallery": [
		{},
		{},
		{}
	]
}

```
`GET /ads/ - FORMATO DA RESPOSTA  - STATUS 200 `


```json
{
		"id": "cb5c6c94-19e1-4e55-983c-3d2949f509a9",
		"brand": "Toyota",
		"price": "R$ 85.000,00",
		"model": "Corolla",
		"year": "2019",
		"fuel": "Gasolina",
		"description": "Carro em excelente estado de conservação.",
		"mileage": 50000,
		"color": "Branco",
		"fipe_table_price": "R$ 80.000,00",
		"cover_image": "https://example.com/car.jpg",
		"is_activated": true,
		"gallery": [],
		"user": {
			"id": "897f225d-f4d9-4b78-91c3-27bc9da00505",
			"name": "João Silva Vicente",
			"email": "joao.silva@example.com",
			"cell_phone": "(11) 98319-1188",
			"cpf": "123.456.789-00",
			"description": "Lorem ipsum dolor sit amet",
			"profile_picture": null
		}
}

```


```

<li style='font-size: 20px'>Podemos deletar um Ads específico utilizando o endpoint:</li>

<br/>

`DELETE /ads/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{}
```

<br/>

<li style='font-size: 20px'>Possível Mensagem de Erro:</li>

<br/>

```json
{
	"message": "Anúncio Não Existe"
}
```

<h2 align ='center'>Editar um usuario (Endpoints)</h2>

<li style='font-size: 20px'>Editando um usuario:</li>

<br/>

`PUT /users/ - FORMATO DA REQUISIÇÃO`

```json
{
	"name": "João Silva Vicente"
}
```

Caso dê tudo certo, a resposta será assim:

`PUT /users/ - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"name": "João Silva Vicente",
	"email": "joao.silva@example.com",
	"cpf": "123.456.789-00",
	"cell_phone": "(11) 98319-1188",
	"birthdate": "1996-10-20",
	"description": "Lorem ipsum dolor sit amet",
	"type": "Anunciante",
	"profile_picture": null
}

```
<br/>



<li style='font-size: 20px'>Atualização do endereço de um usuario </li>

<br/>

`PUT /address/ - FORMATO DA REQUISIÇÃO`

```json
{
    "cep": "12345-678",
    "state": "São Paulo",
    "city": "São Paulo",
    "street": "Rua Exemplo",
    "number": "123",
    "complement": "Bloco 2, Apartamento 301"
}
```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`PUT /address/ - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"cep": "12345-678",
	"state": "São Paulo",
	"city": "São Paulo",
	"street": "Rua Exemplo",
	"number": "123",
	"complement": "Bloco 2, Apartamento 301"
}
```


<br/>
<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>


`GET /users/ - FORMATO DA RESPOSTA - STATUS 200`

```json

	{
		"id": "cb5c6c94-19e1-4e55-983c-3d2949f509a9",
		"brand": "Toyota",
		"price": "R$ 85.000,00",
		"model": "Corolla",
		"year": "2019",
		"fuel": "Gasolina",
		"description": "Carro em excelente estado de conservação.",
		"mileage": 50000,
		"color": "Branco",
		"fipe_table_price": "R$ 80.000,00",
		"cover_image": "https://example.com/car.jpg",
		"is_activated": true,
		"gallery": [],
		"user": {
			"id": "897f225d-f4d9-4b78-91c3-27bc9da00505",
			"name": "João Silva Vicente",
			"email": "joao.silva@example.com",
			"cell_phone": "(11) 98319-1188",
			"cpf": "123.456.789-00",
			"description": "Lorem ipsum dolor sit amet",
			"profile_picture": null
		}
	}
```
<li style='font-size: 20px'>Podemos deletar um usuario específico utilizando o endpoint:</li>


`DELETE /users/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{}
```
<br/>

`POST /comments/ - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
    "adId": "cb5c6c94-19e1-4e55-983c-3d2949f509a9",
    "userId": "897f225d-f4d9-4b78-91c3-27bc9da00505",
    "content": "Este é um novo comentário"
}

```

<br/>
<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>


`POST /comments/ - FORMATO DA RESPOSTA - STATUS 201`


```json
{
	"id": "eb434596-0907-49be-a43f-dbcf0673d563",
	"content": "Este é um novo comentário",
	"createdAt": "2023-05-03",
	"user": {
		"id": "897f225d-f4d9-4b78-91c3-27bc9da00505",
		"name": "João Silva Vicente",
		"email": "joao.silva@example.com"
	},
	"ad": {
		"id": "bd14b2d7-1300-48a9-b638-cf2f992d99cf",
		"brand": "citroën",
		"model": "aircross 100 anos 1.6 flex 16v aut.",
		"year": "2019"
	}

```

<br/>
`PACHT /comments/ - FORMATO DA REQUISIÇÃO - STATUS 200`

```json

{
    "adId": "cb5c6c94-19e1-4e55-983c-3d2949f509a9",
    "userId": "897f225d-f4d9-4b78-91c3-27bc9da00505",
    "content": "Este é um novo comentário2"
}

```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>


`PACHT /comments/ - FORMATO DA RESPOSYA - STATUS 200`

```json
{
	"id": "eb434596-0907-49be-a43f-dbcf0673d563",
	"content": "Este é um novo comentário2",
	"createdAt": "2023-05-03",
	"user": {
		"email": "joao.silva@example.com",
		"name": "João Silva Vicente",
		"id": "897f225d-f4d9-4b78-91c3-27bc9da00505"
	},
	"ad": {
		"id": "bd14b2d7-1300-48a9-b638-cf2f992d99cf"
	}
}
```

<br/>

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`DELETE /comments/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{}

```
