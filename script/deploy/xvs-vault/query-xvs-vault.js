const contractConfigData = require("../../../networks/testnet.json");

(async () => {  

  const XVSVaultProxyAddress = contractConfigData.Contracts.XVSVaultProxy;
  const xvsVaultProxyContractInstance = await saddle.getContractAt('XVSVault', XVSVaultProxyAddress);
  const xvsStoreAddress = await xvsVaultProxyContractInstance.methods.xvsStore().call();
  console.log(`XVSVault -> has xvsStore: ${xvsStoreAddress}`);
})();
