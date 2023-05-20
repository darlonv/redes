# Camada de transporte


A camada de transporte:
- recebe os dados da camada de aplicação
- Divide os dados em pacotes menores
- Repassa os pacotes para a camada de rede
- Independe da aplicação
- Seus protocolos são fim-a-fim

Os dois principais protocolos da camada de transporte são o TCP e o UDP.


Figura 1: Empacotamento de dados.
![](https://s3.amazonaws.com/qcon-assets-production/images/provas/58136/75141db82252fe889c55.png)  
Fonte: KUROSE, via [Questões de Concursos](https://www.qconcursos.com/questoes-de-concursos/questoes/2c7739b9-7f)  


Os protocolos da camada de transporte fornecem **comunicação lógica** entre os processos da aplicação que são executados em diferentes hospedeiros (KUROSE 2013, pg 135). Ou seja, a camada de transporte recebe as mensagens da camada de aplicação, inclui seu seu cabeçalho e repassa o novo pacote à camada de rede. Um pacote da camada é chamado de segmento, como indicado na tabela abaixo.

|Camada| Nome do pacote|
|------|---------------|
|Aplicação| Mensagem|
|Transporte| Segmento|

O fato da camada de transporte fornecer comunicação lógica indica que a camada não trata de onde o pacote irá trafegar, tal que a camada de rede (camada abaixo) é responsável pela definição da rota dos pacotes. Observe na Figura 1 que a camada de transporte existe apenas nos hospedeiros de origem e destino.


Como exemplo, considere que o remetente deseja enviar um arquivo razoavelmente grande (50 MiB, p.ex.) ao destinatário, utilizando um protocolo de camada de aplicação como o FTP (*File Transfer Protocol*). Um arquivo deste tamanho provavelmente não caberia na memória de muitos dispositivos intermediários no caminho entre a origem e o destino. Desta forma, a camada de transporte recebe a mensagem FTP com o arquivo completo e divide-o em partes menores. Após isso, cada parte é enviada ao destino, onde a camada de transporte remonta a mensagem original e a repassa à camada de aplicação.

## O serviço de transporte
A camada de transporte possui como principal objetivo oferecer um serviço aos usuários, que em geral são os processos presentes na camada de aplicação. Tal serviço deve ser confiável, eficiente e econômico, e para isso a camada de transporte utiliza serviços da camada de rede (TANEMBAUM 2011, pg 310).

Existem dois tipos de serviço de transporte: o serviço orientado a conexões e o serviço não orientado a conexões.


# Referências

[KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. São Paulo: Pearson, 2013. ISBN 9788581436777.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/23?code=opaQM91XXDo3M6f51IIiU5X7T6DUUY4tnUbUN9g9xAn0nY6qeBM0WLTVwycNe9XtrqzhJL34gWxykS9MrPGJQA==) (Link biblioteca online)  

[TANENBAUM, Andrew S; WETHERAL, David. Redes de Computadores. 5.ed. São Paulo: Pearson, 2011. ISBN 9788576059240.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/2610/pdf/17?code=vVkKzoXOaDOskeJv8esK3sZMysyPTg3HtAPyO3xsw/udBb1u+4g3HJxAzSb6zd3SV3dRGINqMpGo2TNJWfLQ8g==)(Link biblioteca online)  


<!-- ## Outros materiais -->
