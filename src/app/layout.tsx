import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// 顶部添加 Link 导入
import Link from "next/link";

// 在 body 的 className 中添加 flex 布局
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}>
        {/* 左侧菜单 */}
        <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
          <nav className="space-y-2">
            <Link
              href="/pathGenerator"
              className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Path Generator
            </Link>
            <Link
              href="/worthWork"
              className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Worth Work
            </Link>
          </nav>
        </aside>

        {/* 右侧内容区域 */}
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}
