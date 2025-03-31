'use client';
import { PathPoint } from '../types';

interface EditorPanelProps {
  paths: PathPoint[][];
  selectedPoint: string | null;
  onUpdatePoint: (id: string, x: number, y: number) => void;
  onCreateNewPath: () => void;
}

export function EditorPanel({
  paths,
  selectedPoint,
  onUpdatePoint,
  onCreateNewPath
}: EditorPanelProps) {
  return (
    <div className="w-96 bg-gray-50 dark:bg-gray-800 p-4 overflow-y-auto">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">路径编辑</h2>
        
        {paths.map((path, pathIndex) => (
          <div key={pathIndex} className="bg-white dark:bg-gray-700 p-4 rounded">
            <h3 className="font-medium mb-2">路径 {pathIndex + 1}</h3>
            
            {path.map((point) => (
              <div 
                key={point.id}
                className={`p-2 mb-2 rounded ${
                  selectedPoint === point.id ? 'bg-blue-50 dark:bg-gray-600' : ''
                }`}
              >
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={point.x}  // 移除 Math.round()
                    onChange={(e) => onUpdatePoint(point.id, +e.target.value, point.y)}
                    className="w-full p-1 text-sm border rounded"
                  />
                  <input
                    type="number"
                    value={point.y}  // 移除 Math.round()
                    onChange={(e) => onUpdatePoint(point.id, point.x, +e.target.value)}
                    className="w-full p-1 text-sm border rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
        
        <button
          onClick={onCreateNewPath}
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          新建路径
        </button>
      </div>
    </div>
  );
}
