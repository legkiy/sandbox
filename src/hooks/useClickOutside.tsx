import { MutableRefObject, useCallback, useEffect } from 'react';

const useClickOutside = (
  onClick: () => void,
  ref: MutableRefObject<HTMLElement | null>,
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref?.current && !ref?.current.contains(e?.target as HTMLElement)) {
        onClick();
      }
    },
    [onClick, ref],
  );

  useEffect(() => {
    document.body.addEventListener('click', e => handleClick(e));
    return () => {
      document.body.removeEventListener('click', e => handleClick(e));
    };
  }, [handleClick]);
};
export default useClickOutside;
