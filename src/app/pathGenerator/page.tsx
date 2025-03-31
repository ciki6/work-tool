'use client';
import { useState } from 'react';
import { CanvasPanel } from './components/CanvasPanel';
import { EditorPanel } from './components/EditorPanel';
import { PathPoint, generateId } from './types';

export default function PathGenerator() {
  const [paths, setPaths] = useState<PathPoint[][]>([[]]);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  // 状态管理保持在此组件
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <CanvasPanel
        paths={paths}
        viewBox={{ width: 100, height: 100 }}
        onAddPoint={(x, y) => {/* 添加点逻辑 */}}
        onUpdatePoint={(id, x, y) => {/* 更新点逻辑 */}} 
      />
      
      <EditorPanel
        paths={paths}
        selectedPoint={selectedPoint}
        onUpdatePoint={(id, x, y) => {/* 更新点逻辑 */}} 
        onCreateNewPath={() => setPaths(prev => [
          ...prev,
          [
            { id: generateId(), x: 0, y: 0 },
            { id: generateId(), x: 10, y: 10 }
          ]
        ])}
      />
    </div>
  );
}
