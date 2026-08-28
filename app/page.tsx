"use client";

import React, { useState } from "react";
import { Search, ShieldAlert, ExternalLink, Flame, Zap, Shield, BarChart2, MessageSquare, Terminal } from "lucide-react";

// Web3 导航精选数据源
const NAV_DATA = [
  {
    category: "看板与分析 (Analytics)",
    icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: "DexScreener", desc: "链上 DEX 实时 K 线与热搜", url: "https://dexscreener.com" },
      { name: "GMGN", desc: "Meme 土狗极速扫盘与聪明的钱", url: "https://gmgn.ai" },
      { name: "TradingView", desc: "专业行情分析与 Pine 脚本", url: "https://www.tradingview.com" },
      { name: "Dune Analytics", desc: "社区驱动链上数据看板", url: "https://dune.com" },
    ]
  },
  {
    category: "安全与工具 (Security & Tools)",
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: "Revoke.cash", desc: "取消链上合约危险授权", url: "https://revoke.cash" },
      { name: "GoPlus Security", desc: "代币/合约安全检测", url: "https://gopluslabs.io" },
      { name: "ScamSniffer", desc: "Web3 实时防钓鱼安全插件", url: "https://scamsniffer.io" },
      { name: "Token Sniffer", desc: "自动检测貔貅盘与风险合约", url: "https://tokensniffer.com" },
    ]
  },
  {
    category: "社群与开发 (Dev & Community)",
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: "Vercel", desc: "零成本前端自动化部署平台", url: "https://vercel.com" },
      { name: "NameSilo", desc: "独立 Web3 域名管理解析", url: "https://www.namesilo.com" },
      { name: "GitHub", desc: "代码托管与 Bot 项目开发", url: "https://github.com" },
      { name: "Telegram Bot API", desc: "电报社群自动化开发文档", url: "https://core.telegram.org/bots/api" },
    ]
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // 判断是否为合约地址 (CA)
  const isCA = searchQuery.trim().length >= 32;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (isCA) {
      // 粘 CA 默认直接跳转 GMGN 查盘
      window.open(`https://gmgn.ai/sol/token/${searchQuery.trim()}`, "_blank");
    } else {
      // 普通搜索使用 Google / DexScreener
      window.open(`https://dexscreener.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* 顶部 Gas 与状态栏 */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 py-3 flex justify-between items-center text-xs">
        <div className="flex items-center gap-4">
          <span className="font-bold text-emerald-400 text-sm tracking-wide">Web3 Nav Pro</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> ETH Gas: <strong className="text-slate-200">12 Gwei</strong>
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Flame className="w-3.5 h-3.5 text-rose-500" /> SOL Gas: <strong className="text-slate-200">0.000005 SOL</strong>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            全能敏捷版
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 核心搜索区域（支持 CA 识别） */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold mb-4 tracking-tight">
            Web3 极客工作台 & 快捷导航
          </h1>
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="输入站点名称 或 直接粘贴代币合约地址 (CA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-xl px-12 py-4 text-sm text-slate-100 placeholder-slate-500 outline-none transition shadow-2xl"
              />
              <Search className="absolute left-4 top-4 text-slate-500 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-3 top-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-xs transition"
              >
                {isCA ? "一键查盘 (CA)" : "搜索"}
              </button>
            </div>
            
            {/* CA 自动检测提示 */}
            {isCA && (
              <div className="mt-2 text-left bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2.5 text-xs text-emerald-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  检测到合约地址，回车将自动载入 GMGN / DexScreener 安全面板
                </span>
              </div>
            )}
          </form>
        </div>

        {/* 分类网格卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NAV_DATA.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition">
              <div className="flex items-center gap-2 mb-4 font-semibold text-slate-200">
                {cat.icon}
                <span>{cat.category}</span>
              </div>
              <div className="space-y-3">
                {cat.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800/80 rounded-lg p-3 transition"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition flex items-center gap-1">
                        {link.name}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">{link.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}