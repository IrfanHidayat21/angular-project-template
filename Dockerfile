# Dockerfile
FROM node:lts
RUN npm install -g @angular/cli 
RUN mkdir /home/node/projecttemplate && chown node:node /home/node/projecttemplate
RUN mkdir /home/node/projecttemplate/node_modules && chown node:node /home/node/projecttemplate/node_modules
WORKDIR  /home/node/projecttemplate
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --quiet
COPY --chown=node:node ./ .