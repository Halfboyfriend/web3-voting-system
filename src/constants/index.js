import ballotContractABI from "./Ballot.json";

const supportedChain = {
  id: 0x61,
  idString: "0x61",
  name: "BSC Testnet",
  rpcUrl: "https://data-seed-prebsc-2-s2.binance.org:8545",
  explorerUrl: "https://testnet.bscscan.com/",
  nativeCurrency: {
    symbol: "BNB",
    decimals: 18,
  },
};

const addresses = {
  ballot: "0xe2ccbe39Aa6068a132a6a579Eb09EE1164fb9f86",
};

const abis = {
  ballot: ballotContractABI,
};

export { supportedChain, addresses, abis };
