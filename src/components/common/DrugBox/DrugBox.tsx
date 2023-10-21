'use client';
import {
  FC,
  memo,
  useState,
  useRef,
  useCallback,
  MouseEvent as MouseEventGeneric,
  ReactNode,
  useEffect,
} from 'react';
import styles from './DrugBox.module.scss';
import useDragging from './DnD';

interface IDragAndDrop {
  children: ReactNode;
}

const DragAndDrop: FC<IDragAndDrop> = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [xTranslate, setXTranslate] = useState(0);
  const [yTranslate, setYTranslate] = useState(0);
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const onMouseDown = (e: MouseEventGeneric) => {
    setInitialMousePosition({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  };
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setXTranslate(xTranslate + e.clientX - initialMousePosition.x);
      setYTranslate(yTranslate + e.clientY - initialMousePosition.y);
    };
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
    }
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isDragging, initialMousePosition]);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);
  return (
    <div
      className={styles.dnd}
      style={{ transform: `translate(${xTranslate}px,${yTranslate}px)` }}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
};

interface IDrugBox {}

const DrugBox: FC<IDrugBox> = ({}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (event: MouseEventGeneric) => {
      const onMouseMove = (event: MouseEvent) => {
        positionRef.current = {
          x: positionRef.current.x + event.movementX,
          y: positionRef.current.y + event.movementY,
        };
        const element = elementRef.current;
        if (element) {
          element.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        }
        setPosition(position);
      };
      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },
    [position, setPosition, elementRef],
  );
  const { ref, state, point, elementOffset, touchOffset } = useDragging();
  return (
    <>
      <div
        className={styles['drug-box']}
        ref={elementRef}
        onMouseDown={onMouseDown}
        style={{
          left: positionRef.current.x,
          top: positionRef.current.y,
        }}
      >
        DrugBox
      </div>
      <DragAndDrop>
        <div className={styles['drug-box-2']}></div>
      </DragAndDrop>
    </>
  );
};

export default memo(DrugBox);
