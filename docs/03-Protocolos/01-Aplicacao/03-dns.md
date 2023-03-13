---
sidebar_position: 3
---

# DNS


 O DNS (_**D**omain **N**ame **S**ystem_ - Sistema de nomes e domínios) é um sistema responsável por traduzir nomes de domínio em endereços IP, o que ocorre sempre que acessamos um *site* na internet pelo seu nome.

O DNS é um sistema que permite que computadores na internet identifiquem e se comuniquem uns com os outros usando nomes de domínio, em vez de endereços IP numéricos. Ele realiza a correspondência entre um nome de domínio, como "google.com", e um endereço IP numérico, como "216.58.194.174", que é usado para identificar o servidor na internet.

O processo de resolução de nomes de domínio começa quando um cliente envia uma solicitação para um servidor DNS. A solicitação contém o nome de domínio do site que o cliente está tentando acessar. O servidor DNS então verifica seu banco de dados para encontrar o endereço IP associado a esse nome de domínio. Se o servidor DNS não tiver o endereço IP em seu banco de dados, ele envia uma solicitação para outros servidores DNS para encontrar a informação.

A resolução de nomes de domínio é realizada usando um protocolo de rede chamado DNS. O protocolo DNS é baseado em uma arquitetura cliente/servidor e usa mensagens de protocolo para transferir informações entre os clientes e os servidores DNS. As mensagens do protocolo DNS contêm informações como o nome de domínio que está sendo resolvido, o tipo de registro DNS que está sendo solicitado (por exemplo, um registro de endereço IP), e informações de controle para garantir a integridade e a confiabilidade da comunicação.

Existem dois tipos principais de servidores DNS: servidores de autoridade e servidores de cache. Os servidores de autoridade são responsáveis por manter informações sobre os nomes de domínio e seus endereços IP associados. Os servidores de cache mantêm uma cópia em cache das informações de outros servidores DNS para acelerar a resolução de nomes de domínio.

Em resumo, o protocolo DNS é usado para resolver nomes de domínio em endereços IP numéricos para permitir a comunicação entre computadores na internet. Ele usa uma arquitetura cliente/servidor e mensagens de protocolo para transferir informações entre os clientes e os servidores DNS. O DNS é uma parte essencial da infraestrutura da internet e permite que as pessoas naveguem na web usando nomes de domínio amigáveis em vez de endereços IP numéricos complicados.


Existem vários tipos de registros DNS, cada um com uma finalidade diferente. Aqui estão alguns dos tipos mais comuns de registros DNS:

- Registro de endereço (A): Este registro é usado para mapear um nome de domínio para um endereço IP IPv4. Por exemplo, o registro A para o nome de domínio "google.com" pode apontar para o endereço IP "216.58.194.174".

- Registro de endereço IPv6 (AAAA): Este registro é usado para mapear um nome de domínio para um endereço IP IPv6. É semelhante ao registro A, mas é usado para endereços IP IPv6 em vez de endereços IP IPv4.

- Registro de alias (CNAME): Este registro é usado para criar um alias para um nome de domínio. Por exemplo, um registro CNAME pode ser usado para apontar "www.google.com" para "google.com".

- Registro de servidor de nomes (NS): Este registro é usado para identificar os servidores de nomes responsáveis por um determinado nome de domínio. Cada domínio deve ter pelo menos um registro NS.

- Registro de correio (MX): Este registro é usado para identificar o servidor de correio responsável por um determinado nome de domínio. Isso é usado para enviar e-mails para os domínios.

- Registro de serviço (SRV): Este registro é usado para identificar um serviço específico que está associado a um nome de domínio. Por exemplo, um registro SRV pode ser usado para identificar um servidor de chat associado a um nome de domínio.

- Registro de texto (TXT): Este registro é usado para armazenar informações arbitrárias em um nome de domínio. Isso pode ser usado para fornecer informações adicionais sobre o domínio, como informações de segurança ou políticas de privacidade.

Cada registro DNS é identificado por um tipo de recurso (RR) que é definido pelo código de tipo de recurso (TRR). O código TRR é usado para identificar o tipo de registro DNS associado a um nome de domínio específico. Os registros DNS são armazenados em servidores DNS autorizados para o domínio. Quando um cliente faz uma solicitação DNS para um nome de domínio, o servidor DNS autorizado envia uma resposta contendo os registros DNS associados ao nome de domínio.