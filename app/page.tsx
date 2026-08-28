import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-[#eaedf0] font-sans">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* 顶部状态栏 */}
      <header className="bg-[#0d111a] border-b border-[#1a2130] px-4 py-2 text-xs flex flex-wrap justify-between items-center text-gray-400 gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <i className="fa-solid fa-bolt"></i> Web3 Nav Pro
          </span>
          <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-[11px] border border-gray-700">
            <i className="fa-regular fa-clock mr-1"></i>2026年08月28日 (本地) <span className="text-emerald-500 font-mono">UTC</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-gray-300 font-mono">
            <span>⛽ ETH: <strong class="text-white">12 Gwei</strong></span>
            <span>🔮 SOL: <strong class="text-white">0.000005</strong></span>
          </div>
          <a href="https://t.me/Hsah0909" target="_blank" rel="noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-full font-medium transition flex items-center gap-1 text-xs">
            <i className="fa-brands fa-telegram"></i> 加入交流群
          </a>
        </div>
      </header>

      {/* 公告 Banner */}
      <div className="max-w-7xl w-full mx-auto px-4 mt-3">
        <div className="bg-gradient-to-r from-[rgba(16,37,42,0.8)] to-[rgba(13,25,38,0.8)] border border-[#143530] rounded-lg px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 overflow-hidden">
            <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold shrink-0">哈希情报</span>
            <p className="truncate text-gray-300">
              📢 欢迎来到 Web3 极客工作台！入群获取实时扫盘 Bots & 独家 Pine Script 操盘脚本！
            </p>
          </div>
          <a href="https://t.me/Hsah0909" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline shrink-0 ml-2">了解更多 &rarr;</a>
        </div>
      </div>

      {/* 主体区域 */}
      <main className="max-w-7xl w-full mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Web3 极客工作台 & 全能导航
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            一站式直达全网 Meme 扫盘、DeFi、链上数据分析与开发者工具
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-[#131822] border border-[#222b3e] focus-within:border-emerald-500 rounded-lg px-3 py-2 transition shadow-lg">
              <i className="fa-solid fa-magnifying-glass text-gray-500 ml-2"></i>
              <input type="text" placeholder="输入代币名称 / 智能合约地址 (CA)..." className="bg-transparent border-none text-sm text-white focus:outline-none w-full px-3 placeholder-gray-500" />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs px-4 py-2 rounded transition shrink-0">
                查 CA
              </button>
            </div>
          </div>
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* 1. Binance */}
          <a href="https://www.binance.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-coins"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Binance | 币安</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">全球最大加密货币交易所<br/><span className="text-gray-500 text-[11px]">World&apos;s Leading Crypto Exchange</span></p>
            </div>
          </a>

          {/* 2. OKX */}
          <a href="https://www.topzhjdgxcb.net/join/86659972" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-gray-100/10 text-white flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-cube"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">OKX | 欧易</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">领先的交易平台与 Web3 钱包<br/><span className="text-gray-500 text-[11px]">Leading Crypto Exchange & Web3 Wallet</span></p>
            </div>
          </a>

          {/* 3. Deepcoin */}
          <a href="https://s.xdcjoin.com/9260588" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-right-left"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Deepcoin | 深币</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">创新型衍生品交易平台<br/><span className="text-gray-500 text-[11px]">Innovative Crypto Derivatives Exchange</span></p>
            </div>
          </a>

          {/* DexScreener */}
          <a href="https://dexscreener.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">DexScreener</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">全链 DEX 实时 K 线与热搜追踪</p>
            </div>
          </a>

          {/* GMGN */}
          <a href="https://gmgn.ai" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">GMGN</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">Meme 土狗极速扫盘与聪明钱追踪</p>
            </div>
          </a>

          {/* Pump.fun */}
          <a href="https://pump.fun" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Pump.fun</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">Solana 生态 Meme 币内盘发售平台</p>
            </div>
          </a>

          {/* Ave.ai */}
          <a href="https://ave.ai" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-fire"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Ave.ai</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">老牌链上数据与行情终端</p>
            </div>
          </a>

          {/* TradingView */}
          <a href="https://www.tradingview.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-chart-area"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">TradingView</h3>
              <p class="text-xs text-gray-400 mt-1 line-clamp-2">专业行情分析与 Pine 脚本开发</p>
            </div>
          </a>

          {/* Coinglass */}
          <a href="https://www.coinglass.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-skull"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Coinglass</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">全网合约爆仓、持仓量与资金费率</p>
            </div>
          </a>

          {/* CoinMarketCap */}
          <a href="https://coinmarketcap.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-coins"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">CoinMarketCap</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">全球加密货币市值与代币行情权威站</p>
            </div>
          </a>

          {/* DefiLlama */}
          <a href="https://defillama.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">DefiLlama</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">全网 TVL 锁仓量与 DeFi 协议数据聚合</p>
            </div>
          </a>

          {/* DeBank */}
          <a href="https://debank.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-wallet"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">DeBank</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">个人链上多资产看板与巨鲸追踪</p>
            </div>
          </a>

          {/* Dune Analytics */}
          <a href="https://dune.com" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-orange-600/10 text-orange-500 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-database"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Dune Analytics</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">社区驱动的链上 SQL 数据可视化看板</p>
            </div>
          </a>

          {/* Revoke.cash */}
          <a href="https://revoke.cash" target="_blank" rel="noreferrer" className="bg-[#131822] border border-[#1e2638] hover:border-[#2b364f] hover:bg-[#171e2c] p-4 rounded-xl flex items-start space-x-3 transition group">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 text-lg">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-bold text-white group-hover:text-emerald-400 transition truncate text-sm">Revoke.cash</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">检查并取消链上合约危险授权</p>
            </div>
          </a>

        </div>
      </main>

      {/* 页脚 */}
      <footer className="text-center py-6 text-xs text-gray-500 border-t border-gray-900 mt-auto">
        <p className="mb-1">
          开发者: <a href="https://t.me/U09099" target="_blank" rel="noreferrer" className="text-emerald-400 font-medium hover:underline">吉途影</a> | 
          Telegram: <a href="https://t.me/U09099" target="_blank" rel="noreferrer" className="text-emerald-400 font-medium hover:underline">@U09099</a> | 
          官方交流群: <a href="https://t.me/Hsah0909" target="_blank" rel="noreferrer" className="text-emerald-400 font-medium hover:underline">@Hsah0909</a>
        </p>
        <p>&copy; 2026 Web3 Nav Pro. Designed for Traders & Developers.</p>
      </footer>
    </div>
  );
}
