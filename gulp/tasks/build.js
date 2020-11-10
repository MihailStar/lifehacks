/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import compileFonts from './fonts';
import compileImages from './images';
import compileStyles from './styles';
import compileTemplates from './templates';

export default gulp.parallel(
  compileFonts,
  compileImages,
  compileStyles,
  compileTemplates,
);
