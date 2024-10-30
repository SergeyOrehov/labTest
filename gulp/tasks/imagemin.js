module.exports = () => {
    $.gulp.task('imagemin', () => {
        if (!$.config.imagemin) {
            return $.gulp.src(`${$.config.sourcePath}/${$.config.imagesPath}/**/*.{png,jpg,jpeg,gif,svg}`)
                .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.imagesPath}/`));
        }

        return $.gulp.src(`${$.config.sourcePath}/${$.config.imagesPath}/**/*.{png,jpg,jpeg,gif,svg}`)
            .pipe($.gulpPlugin.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5
            }))
            .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.imagesPath}/`));
    });
};
