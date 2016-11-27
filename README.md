# gulp-img2svg

> A gulp plugin for converting images (PNG, JPG, BMP atc) to SVG.


## Usage

First, install `gulp-img2svg` as a development dependency:

```shell
npm install --save-dev gulp-img2svg
```

Then, add it to your `gulpfile.js`:

```javascript
const img2svg = require('gulp-img2svg');

gulp.task('img2svg', function () {
    gulp.src('./specs/assets/**/*.png')
        .pipe(img2svg())
        .pipe(gulp.dest('./build'));
});
```

## Arguments

### img2svg([options])

`options`

Plugin based on [potrace](https://www.npmjs.com/package/potrace), so see option there.