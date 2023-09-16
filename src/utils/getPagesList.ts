import fs from 'fs';
import path from 'path';

const getStaticPaths = async () => {
  const files = await fs.readdirSync(path.join(process.cwd(), 'src/app/'));
  const pages = await files.filter(
    file =>
      !file.endsWith('.tsx') &&
      !file.endsWith('.scss') &&
      !file.endsWith('.ico'),
  );

  return pages;
};
export default getStaticPaths;
