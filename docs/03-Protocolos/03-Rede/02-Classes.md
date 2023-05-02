---
sidebar_position: 2
---

# Classes de IP


Cada interface deve possui um endereço único para identificação, o *Internet address* (IP). Um endereço IP é composto por um valor de 32 bits.

Para representar um endereço IP, a notação utilizada é a *dotted-decimal*, que consiste em utilizar 4 números decimais separados por ponto. Cada número consiste em um valor de 8 bits (octeto), ou seja, números no intervalo de 0 a 255.

**Exemplos**

|Endereço|
|---|
|10.0.1.50|
|192.128.122.1|
|192.168.0.100|
|179.154.41.4|


## Classes
Inicialmente, os endereçamento utilizado no protocolo IP foi planejado para que parte dele representasse a rede e parte representasse máquinas dessa rede.

De forma a saber quantas máquinas são possíveis de incluir em tais redes, foram criadas as **classes** de IP.

Parte do endereço contém a identificação da rede (*netid*) e parte contém a identificação da máquina (*hostid*).

Os bits iniciais do endereço servem para identificar a classe à qual aquele endereço corresponde.

|Classe| Bits|*Range*|
|------|-----|-------|
|A|`0`|`0`-`127`|
|B|`10`|`128`-`191`|
|C|`110`|`192`-`223`|
|D|`1110`|`224`-`239`|
|E|`1111`|`240`-`255`|

As classes **A**, **B** e **C** foram projetadas para endereços *unicast*, ou seja, endereçam uma única interface. A classe **D** serve para endereços *multicast*, e a classe **E** são endereços reservados.

As classes indicam quantos bits devem ser utilizados para *net* e *host*, sendo 8, 16 e 24 para *net* nas classes A, B e C, respectivamente.

|Classe|*netid* total|*netid* ocupado| *netid* livre| *hostid*|
|------|-------------|---------------|--------------|---------|
|A     |8            |1              |7             |24       |
|B     |16           |2              |14            |16       |
|C     |24           |3              |21            |8        |

Com isto, a quantidade total de endereços para cada classe:

|Classe|End. inicial |End. final       |#*nets*|#*hosts*|
|------|-------------|-----------------|-------|--------|
|A     |`0.0.0.0`    |`127.255.255.255`|128    |16777216|
|B     |`128.0.0.0`  |`191.255.255.255`|16384  |65536   |
|C     |`192.168.0.0`|`223.255.255.255`|2097152|256     |

**Atividade**  
- Preencha a tabela abaixo, informando à qual classe pertence cada end. IP.

|Endereço         |Classe| |Endereço         |Classe|
|:----------------|:-----|-|:----------------|:-----|
|`10.5.2.17`      |      | |`169.106.156.8`  |      |
|`236.147.206.200`|      | |`74.106.81.8`    |      |
|`90.66.96.231`   |      | |`152.30.195.12`  |      |
|`139.167.1.197`  |      | |`80.71.155.218`  |      |
|`59.140.114.24`  |      | |`114.125.143.163`|      |
|`173.250.194.252`|      | |`93.220.139.123` |      |
|`21.67.1.128`    |      | |`178.144.87.213` |      |
|`94.195.201.148` |      | |`15.100.46.149`  |      |
|`155.131.56.190` |      | |`108.85.25.122`  |      |
|`152.176.16.26`  |      | |`218.200.125.215`|      |
|`4.123.228.20`   |      | |`197.156.146.104`|      |
|`181.234.77.174` |      | |`20.221.76.80`   |      |
|`12.31.41.173`   |      | |`49.218.142.228` |      |
|`128.108.254.246`|      | |`130.113.129.90` |      |
|`95.197.130.213` |      | |`22.47.119.201`  |      |
|`80.251.52.150`  |      | |`48.175.151.19`  |      |
|`72.30.67.96`    |      | |`142.29.208.77`  |      |
|`31.35.127.50`   |      | |`137.176.67.109` |      |
|`95.45.99.118`   |      | |`169.21.96.152`  |      |
|`224.143.80.115` |      | |`186.152.105.19` |      |
|`61.224.1.12`    |      | |`13.15.11.184`   |      |

**Exercício**
- Desenvolva uma função que a  partir do end. IP, retorna a classe à qual o endereço pertence.

## Referências

STEVENS, W. Richard. TCP/IP illustrated, vol. I: the protocols. Addison Wesley, 1994.

 

