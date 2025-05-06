// scripts/exportABI.js

const fs = require('fs');
const path = require('path');

// 1. Charger le JSON généré par Truffle après déploiement
const contract = require('../src/build/Medecin.json');

// 2. Identifier l'adresse selon l'ID réseau Ganache (généralement 5777)
const networkId = Object.keys(contract.networks)[0];
const address = contract.networks[networkId].address;
const abi = contract.abi;

// 3. Construire le JSON propre pour le front-end
const output = {
    address,
    abi
};

// 4. Définir le chemin du fichier dans le projet React Native
const outputPath = path.resolve(__dirname, '../../expo-app/blockchain/Medecin.json');

// 5. Écrire le fichier
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

