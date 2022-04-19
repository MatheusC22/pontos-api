# Getting Started
```bash
git clone https://github.com/MatheusC22/pontos-api.git

cd src

yarn 

yarn dev
```

[API - link] : https://pontos-api-backend.herokuapp.com/pontos

## ENDPOINTS
---
1. /all - GET - retorna todos registros do banco
---
2. /findByNome - POST - retorna o registro com o nome requerido<br/>
### Body
```JSON
{
  "nome" : "nome"
}
```
---
3. /register - POST - registra os dados no banco de dados<br/>
### Body

```JSON
{
	"nome": "exemplo",
	"descricao": "exemplo",
	"estado": "exemplo",
	"cidade": "exemplo",
	"responsavel": "exemplo",
	"email_resp": "exeomplo@email.com",
	"fone_resp": "14123456788"
}
```
---
4. /deleteByNome - DELETE - deleta o registro com o nome requerido<br/>
### Body
```JSON
{
  "nome" : "nome"
}
```
---
5. /findByEstado - POST - retorna o registro com o estado requerido<br/>
### Body
```JSON
{
  "estado" : "estado"
}
```
---
