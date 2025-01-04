import { useEffect, useRef } from "react";

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  height?: number;
  width?: number;
}

const Canvas: React.FC<CanvasProps> = props => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext('2d');

    const draw = (context: CanvasRenderingContext2D) => {
      context.fillStyle = 'grey'
      context.fillRect(10,10, 100, 100)
    } 

    if (context) {
      draw(context)
    }
  }, [])

return <canvas ref={ref} {...props}/>
}

export default Canvas;