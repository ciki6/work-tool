import Image from "next/image";

// 在现有代码基础上调整布局结构，保持与侧边栏样式一致
export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">欢迎使用工作工具集</h1>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">请从左侧菜单选择工具</p>
      </div>
    </div>
  );
}
