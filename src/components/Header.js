import { useEthers } from '@usedapp/core';

function Header() {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  return (
    <header className='header'>
      <div class="logo">
        <h1>Smart Agent</h1>
      </div>
      {!account && <button className='connect' onClick={() => activateBrowserWallet()}>Connect</button>}
      {account && <button className='connect' onClick={deactivate}>{account}</button>}
    </header>
  );
}

export default Header;