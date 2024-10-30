module.exports = () => {
  $.gulp.task('prepareHtml', function () {
    return $.gulp.src(
      [
        `${$.config.sourcePath}/${$.config.htmlPath}/**/*.html`,
        `!${$.config.sourcePath}/${$.config.htmlPath}/layouts/**/*.html`
      ]
    )
      .pipe($.gulpPlugin.fileInclude())
      .pipe($.gulp.dest(`${$.config.tmpPath}/`))
      .pipe($.bs.reload({stream: true}));
  });
};
