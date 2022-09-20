import useAppTheme from 'hooks/theme';
import { useAppDispatch } from 'hooks/rtk';

const Debug = () => {
  const { nowTheme, setTheme } = useAppTheme();
  const dispatch = useAppDispatch();

  const updateTheme = () => {
    const newTheme = String(nowTheme) === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={updateTheme}>
      {nowTheme}
    </button>
  );
};

export default Debug;
