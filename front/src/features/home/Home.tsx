import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/24651_color.svg'
import { IoMdTrendingUp } from "react-icons/io";
import { GiLightningTrio } from "react-icons/gi";
import { RiQuillPenLine } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#1a1a2e]">
            達人を目指そう
          </h2>
          <p className="text-gray-600 max-w-md">
            実践的なメール作成練習で、ビジネスシーンで活きる
            メールスキルを身につけましょう。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl w-full px-4">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-5xl mb-1 text-gray-500 flex justify-center"><RiQuillPenLine /></div>
            <h3 className="font-bold mb-2">実践的な練習</h3>
            <p className="text-sm text-gray-600">実際のビジネスシーンを想定した練習問題</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-5xl mb-1 text-gray-500 flex justify-center"><GiLightningTrio /></div>
            <h3 className="font-bold mb-2">即時フィードバック</h3>
            <p className="text-sm text-gray-600">作成したメールの評価と改善点の提示</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-5xl mb-1 text-gray-500 flex justify-center ">
              <IoMdTrendingUp />
            </div>
            <h3 className="font-bold mb-2">スキル向上</h3>
            <p className="text-sm text-gray-600">段階的な難易度で着実にスキルアップ</p>
          </div>
        </div>

        <button 
          className="px-12 py-4 text-xl bg-gray-500 text-white rounded-lg hover:bg-gray-700 focus:bg-gray-700 transition-colors shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none"
          onClick={() => navigate('/mailedit')}>
          練習を始める
        </button>
      </div>

      {/* フッター */}
      <div className="flex justify-end p-4 hidden">
        <img src={logo} alt="logo" className="h-12" />
      </div>
    </div>
  )
}

export default Home