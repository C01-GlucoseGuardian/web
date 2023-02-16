# Glucose Guardian Web Frontend
[![Build Status](https://travis-ci.com/C01-GlucoseGuardian/web.svg?branch=main)](https://travis-ci.com/C01-GlucoseGuardian/web) [![Docker](https://github.com/C01-GlucoseGuardian/web/actions/workflows/docker-image.yml/badge.svg)](https://github.com/C01-GlucoseGuardian/web/actions/workflows/docker-image.yml) [![Github Pages](https://github.com/C01-GlucoseGuardian/web/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/C01-GlucoseGuardian/web/actions/workflows/pages/pages-build-deployment) 



## Introduzione
Questa repo contiene il codice sorgente del frontend web del progetto Glucose Guardian, basato sul framework Bootstrap e il tool di build Vite.

## Installazione con Docker
### Creare l'immagine docker dai sorgenti (Opzionale)
1. Installare Git e Docker
2. Aprire un terminale e clonare questo progetto:

   ````
   git clone https://github.com/c01-glucoseguardian/web
   ````
3. Spostarsi nella cartella web:
   ````
   cd web
   ````
4. Personalizzare l'api endpoint nel file di configurazione [docker/config.js](https://github.com/C01-GlucoseGuardian/web/blob/main/docker/config.js) (Opzionale)
5. Personalizzare la configurazione di NGINX nel file: [docker/nginx.conf.template](https://github.com/C01-GlucoseGuardian/web/blob/main/docker/nginx.conf.template) (Opzionale)
6. Compilare l'immagine Docker:
   ````
   docker build -t c01glucoseguardian/web .
   ````
### Lanciare l'immagine Docker
> **Note**<br>
> L'immagine docker è basata su NGINX che nella configurazione di default si occuperà di effettuare il redirect (codice 307) da /api all'endpoint indicato dalla variabile di ambiente API_URL

Un esempio di commando per eseguire l'immagine Docker è il seguente:
```
 docker run --name web -p 8080:80 -e API_URL="http://localhost:8081" -d c01glucoseguardian/web
```
Dove:
- ```--name``` indica il nome da dare al container.
- ```-p 8080:80``` espone la porta 80 del container sulla porta 8080 dell'host.
- ```-e API_URL="http://localhost:8081"``` assegna alla variabile di ambiete API_URL il valore ``http://localhost:8081``.
- ```-d``` utilizza la modalità detached ovvero il container verrà eseguito in background.
- ```c01glucoseguardian/web``` specifica l'immagine da utilizzare. Nel caso in cui non sia disponibile localmente, verrà scaricata da [dockerhub](https://hub.docker.com/r/c01glucoseguardian/web).

Per altre informazioni si rimanda alla [documentazione di Docker](https://docs.docker.com/engine/reference/commandline/run/).

## Installazione da sorgenti
1. Installare Git e Node.js 18 (o superiore)
2. Aprire un terminale e clonare questo progetto:

   ````
   git clone https://github.com/c01-glucoseguardian/web
   ````
3. Spostarsi nella cartella web:
   ````
   cd web
   ````
4. Personalizzare l'api endpoint nel file di configurazione [docker/config.js](https://github.com/C01-GlucoseGuardian/web/blob/main/docker/config.js) (Opzionale)
5. Installare tutte le dipendenze:
   ````
   npm install
   ````
6. Compilare il progetto:
   > **Note**<br>
   > Nella cartella src/dist troverete i file pronti per essere distribuiti

   ````
   npm run build
   ````



## Team
Il progetto è stato realizzato dal **Team C01**<br>
### Team members
<table>
  <tbody>
    <tr>  
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/HandyMenny.png?s=150">
        <br>
        <a href="https://github.com/HandyMenny">Andrea Mennillo</a>
      </td>
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/IamMarco29.png?s=150">
        <br>
        <a href="https://github.com/IamMarco29">Marco Maria<br>Marchese</a>
      </td>
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/matteoaldi.png?s=150">
        <br>
        <a href="https://github.com/matteoaldi">Matteo Aldi</a>
      </td>
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/veetaw.png?s=150">
        <br>
        <a href="https://github.com/veetaw">Vito Piegari</a>
      </td>
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/domenicocifelli.png?s=150">
        <br>
        <a href="https://github.com/domenicocifelli">Domenico Cifelli</a>
      </td>
      </tr>
  </tbody>
</table>

### Project managers
<table>
  <tbody>
    <tr>  
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/Scient122.png?s=150">
        <br>
        <a href="https://github.com/Scient122">Ludovico Lerose</a>
      </td>
      <td align="center" valign="top">
        <img width="100" height="100" src="https://github.com/AmineSr97.png?s=150">
        <br>
        <a href="https://github.com/AmineSr97">Amine M. Serraj</a>
      </td>
      </tr>
  </tbody>
</table>

## Link utili
- [Backend web](https://github.com/C01-GlucoseGuardian/webbackend)
- [Mobile App](https://github.com/C01-GlucoseGuardian/mobileApp)
- [Test di Sistema](https://github.com/C01-GlucoseGuardian/fullproject)
- [Documentazione](https://docs.glucoseguardian.it)
- [Demo](https://glucoseguardian.it)
