---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SSH


O **ssh** é o acrônimo de *secure shell*, uma versão atualizada do rsh (*remote shell*), que criptografa os dados trafegados. Opera com a arquitetura cliente/servidor, tendo a porta 22 como padrão.

O ssh é uma ferramenta para acesso remoto, amplamente utilizado em ambientes Linux.


O ssh é extremamente cuidadoso em suas conexões. A primeira vez em uma máquina é acessada, o cliente ssh sempre pergunta ao usuário se ele realmente conhece aquela máquina. Nesta primeira conexão, é necessário digitar explicitamente que **sim** (ou ***yes***), informando que conhecemos o servidor e temos certeza do IP que estamos acessando (ciente que não estamos sofrendo um ataque do tipo **MITM** (*Man In The Middle*), p.ex.). A lista com as máquinas já conhecidas é armazenada no arquivo `.ssh/known_hosts`, na *home* do usuário.

**Sintaxe**  
```bash
ssh <usuario>@<destino> <comando>
```
onde:  
- `<usuario>` : nome de usuário no servidor remoto. Caso omitido, utiliza o usuário logado na máquina local.  
- `<destino>` : endereço de destino
- `<comando>` : comando a ser executado no servidor. Caso omitido, é aberto um terminal interativo.

- opções:  
    - `-p <porta>` : especifica que a conexão deve ser realizada utilizando uma porta específica.
    



**Exemplos**  
```sh
ssh 192.168.0.10  
ssh aluno@10.1.1.50
ssh root@10.1.1.1 
ssh -p 2230 aluno@10.1.1.50
ssh aluno@10.1.1.20 ifconfig
ssh root@10.1.1.1 apt update
```


:::caution Cuidado
Lembre-se que após logar com o ssh, os comandos serão executados na máquina **remota**, e não mais na máquina local. Por exemplo, executar o comando `poweroff`, desligará a máquina remota.
:::


**Atividade**  
Acesse o servidor criado na máquina virtual, com os usuários:
- *aluno*
- *root*  

Qual a diferença?  


**Atividade**  

- qual é o endereço IP da máquina conectada remotamente?
- quanto de memória RAM possui a máquina remota?
    - `free -h`
- quais são os nomes dos arquivos existentes no diretório `home` do usuário?


## scp
O `scp` é um serviço que permite a cópia de arquivos e diretórios entre máquinas, utilizando o protocolo e serviço SSH.

**Sintaxe**  
```bash
scp <arquivo/diretório local> <usuário>@<endereço>:<diretório remoto onde será feita a cópia>
```
**Parâmetros**  
- `-r` recursivo. Utilizado para cópia de diretórios.
- `-P <porta>` porta. Caso o `ssh` esteja operando em outra porta diferente da padrão (22), pode utilizar este parâmetro para informar a porta correta.

**Exemplo**  
- Cópia do arquivo `hello.txt`, no diretório em que o comando está sendo executado na máquina local, para o diretório *home* do usuário no servidor.
```bash
scp hello.txt aluno@10.1.1.20:
```

- Cópia do arquivo `texto.txt`, no diretório `/tmp/` do usuário na máquina local, para o diretório `/tmp` do usuário no servidor.
```bash
scp /tmp/texto.txt aluno@10.1.1.20:/tmp/
```

**Observação**  
Para a cópia de diretórios, é necessário utilizar o parâmetro `-r` (*recursive*).


**Atividade**

Para esta atividade, utilize servidor e endereço IP informado pelo professor.

- Qual é o conteúdo do arquivo `campus.jpg`, que está no servidor?
- Envie um arquivo do seu computador para o servidor.
- Copie o diretório `trabalhos` para o seu computador.