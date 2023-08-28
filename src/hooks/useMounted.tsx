'use client';
import { useEffect, useState } from 'react';

const useMounted = (opened: boolean) => {
  const [mounted, setMounted] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    }
    if (mounted && !expand) {
      setTimeout(() => {
        setExpand(true);
      }, 300);
    } else if (!opened && mounted) {
      setExpand(false);
      setTimeout(() => {
        setMounted(false);
      }, 300);
    }
  }, [opened, mounted]);

  return { mounted, expand };
};
export default useMounted;
