# PharmaChain

## Overview

**PharmaChain** is a full-stack platform designed to enhance pharmaceutical supply chain traceability using **Blockchain**, **IoT**, and **Artificial Intelligence**. It ensures secure, transparent tracking of pharmaceutical products from manufacturing to distribution to pharmacies, addressing issues such as:

- Counterfeiting
- Environmental non-compliance
- Lack of transparency

The system integrates:

- **Blockchain (Ethereum):** For immutable data recording and smart contract automation.
- **IoT (Node-RED):** For real-time environmental monitoring (temperature, humidity, etc.).
- **AI:** For anomaly detection and fraud prevention in certificates and documents.
- **Web and Mobile Interfaces:** For interaction among manufacturers, distributors, pharmacies, and end-users.

---

## Features

- **Traceability:** Track drugs from manufacturing to dispensing via blockchain-based immutability.
- **Environmental Monitoring:** IoT sensors collect and report real-time temperature and humidity.
- **Fraud Detection:** AI validates certificates with 96% accuracy.
- **User Interfaces:**
  - Web platform for manufacturers, distributors, and pharmacies.
  - Mobile app for end-users to verify product authenticity and history.
- **Decentralized Storage:** IPFS is used for secure, distributed data storage.
- **Scalability & Security:** Modular architecture ensures performance and data integrity.

---

## Architecture

![Architecture](https://github.com/user-attachments/assets/a2fb4e47-ae31-4c26-b673-3ce215c94efb)


PharmaChain’s modular architecture separates presentation, business logic, middleware, and storage for easy maintenance and scalability.

### Frontend

- **Web Platform:** Built using React.js, Vite, Material Tailwind, and integrates MetaMask via Web3.js.
- **Mobile App:** Developed with React Native using Zustand and Expo.

### Backend

- **Blockchain:** Ethereum blockchain using Solidity smart contracts.
- **IPFS:** Decentralized storage for documents and sensor data using CIDs.
- **IoT Integration:** Node-RED manages and simulates IoT data (temperature, humidity, location).
- **Middleware:** Real-time event listeners, synchronization services, and IPFS gateway.
- **AI Module:** Real-time anomaly detection and certificate validation.
- **Authentication:** Role-based access via Ethereum addresses (MetaMask).


---

## Prerequisites

Ensure the following are installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Truffle Suite
- MetaMask browser extension
- Node-RED
- Ganache (for local Ethereum testing)
- Expo CLI
- A running Ethereum blockchain and IPFS node

---

## Installation and Setup

Place both `pharmachain-web` and `pharmachain-mobile` in the same parent directory.

### Web Platform Setup

```bash
cd pharmachain-web

# Install dependencies
npm install lucide-react
npm install @material-tailwind/react
npm install web3

# Run development server
npm run dev

# Deploy smart contracts
truffle migrate

# Export ABI
node scripts/exportABI.js

# Open in browser
http://localhost:5173
