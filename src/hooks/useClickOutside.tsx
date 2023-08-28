import { MutableRefObject, useCallback, useEffect } from 'react';

const useClickOutside = (
  onClick: () => void,
  ref: MutableRefObject<HTMLElement | null>
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as HTMLElement)) {
        onClick();
      }
    },
    [onClick, ref]
  );

  useEffect(() => {
    document.addEventListener('click', (e) => handleClick(e));
    return () => {
      document.removeEventListener('click', (e) => handleClick(e));
    };
  }, [handleClick]);
};
export default useClickOutside;
