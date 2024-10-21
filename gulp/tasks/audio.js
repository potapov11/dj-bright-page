import gulpif from "gulp-if";
import newer from "gulp-newer";

export const audio = () => {
  return (
    app.gulp
      .src(
        [
          `${app.paths.srcAudioFolder}/**/*.mp3`,
          `${app.paths.srcAudioFolder}/**/*.wav`,
        ],
        { encoding: false }
      )
      // .pipe(newer(app.paths.buildAudioFolder))
      .pipe(app.gulp.dest(app.paths.buildAudioFolder))
  );
};
