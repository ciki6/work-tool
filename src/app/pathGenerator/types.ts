// 添加ID生成函数
export type PathPoint = {
  id: string;
  x: number;
  y: number;
};

export const generateId = () => Math.random().toString(36).substr(2, 9);