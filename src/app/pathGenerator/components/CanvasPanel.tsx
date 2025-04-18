'use client';
import { PathPoint } from '../types';

interface CanvasPanelProps {
  paths: PathPoint[][];
  viewBox: { width: number; height: number };
  onAddPoint: (x: number, y: number) => void;
  onUpdatePoint: (id: string, x: number, y: number) => void;
}

export function CanvasPanel({
  paths,
  viewBox,
  onAddPoint,
  onUpdatePoint
}: CanvasPanelProps) {
  const handleAddPoint = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onAddPoint(x, y);
  };

  return (
    <div className="flex-1 border-r bg-white dark:bg-gray-900 p-4">
      <svg
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        className="w-full h-full cursor-crosshair"
        onClick={handleAddPoint}
      >
        <rect width={viewBox.width} height={viewBox.height} fill="white" x="0" y="0" />
        <g stroke="#eee" strokeWidth="0.1">
          {Array.from({ length: viewBox.height + 1 }).map((_, y) => (
            <line key={`h${y}`} x1={0} y1={y} x2={viewBox.width} y2={y} />
          ))}
          {Array.from({ length: viewBox.width + 1 }).map((_, x) => (
            <line key={`v${x}`} x1={x} y1={0} x2={x} y2={viewBox.height} />
          ))}
        </g>
        {paths.map((path, pathIndex) => (
          <g key={pathIndex}>
            <path
              d={`M ${path.map(p => `${p.x},${p.y}`).join(' L ')}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            {path.map((point) => (
              <circle
                key={point.id}
                cx={point.x}
                cy={point.y}
                r="5"
                fill="#ef4444"
                className="cursor-move"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  const startX = e.clientX;
                  const startY = e.clientY;

                  const onMouseMove = (moveEvent: MouseEvent) => {
                    onUpdatePoint(
                      point.id,
                      point.x + moveEvent.clientX - startX,
                      point.y + moveEvent.clientY - startY
                    );
                  };

                  const onMouseUp = () => {
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                  };

                  window.addEventListener('mousemove', onMouseMove);
                  window.addEventListener('mouseup', onMouseUp);
                }}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
