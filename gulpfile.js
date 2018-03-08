const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const stylus = require('gulp-stylus')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const del = require('del')
const gulpPlumber = require('gulp-plumber')
const gulpNotify = require('gulp-notify')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const puglint = require('gulp-pug-lint')
const uglify = require('gulp-uglifyes')

//* 搜尋 pretty (開啟pug壓縮)
//* cleanCSS (開啟css壓縮)

// setting port
const port = 3000

// setting route
const stylusPath = { src: './src/stylus/*.styl', ignore: '!*src/stylus/_*.styl', dest: './public/css' }
const pugPath = { src: './src/views/*.pug', ignore: '!*src/views/_*.pug', dest: './public' }
const sassPath = { src: './src/sass/*.sass', dest: './public/css' }
const jsPath = { src: './src/js/*.js', dest: './public/js' }
const imgPath = { src: './src/img/**', dest: './public/img' }

// 編譯語言 / 縮圖 / 監聽
gulp.task('default', ['stylus', 'sass', 'compile_pug', 'typescript', 'minify_img', 'browser-sync'])

// +清空不一致 / 壓縮JS & 合併
// gulp.task('default', ['clean', 'stylus', 'sass', 'compile_pug', 'minify_js', 'typescript', 'minify_img', 'browser-sync'])

gulp.task('sass', () => gulp.src(sassPath.src)
  .pipe(gulpPlumber())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false,
  }))
  // .pipe(cleanCSS({ compatibility: 'ie8' })) // 要壓縮請開啟
  .pipe(gulp.dest(sassPath.dest))
  .pipe(browserSync.stream()))

gulp.task('compile_pug', () => gulp.src([pugPath.src, pugPath.ignore])
  .pipe(gulpPlumber())
  .pipe(puglint())
  // .pipe(pug()) // 壓縮版
  .pipe(pug({ pretty: true })) // 未壓縮版
  .pipe(gulp.dest(pugPath.dest))
  .pipe(browserSync.stream()))

gulp.task('minify_js', () => gulp.src(jsPath.src)
  .pipe(gulpPlumber())
  .pipe(concat('main.js'))
  .pipe(uglify({ 
    mangle: false, 
    ecma: 6, 
  }))
  .pipe(gulp.dest(jsPath.dest))
  .pipe(browserSync.stream()))

gulp.task('minify_img', () =>
  gulp.src(imgPath.src)
    .pipe(gulpPlumber())
    .pipe(imagemin())
    .pipe(gulp.dest(imgPath.dest))
    .pipe(browserSync.stream())
    .pipe(gulpNotify('CompressImg Done')))

gulp.task('clean', () =>
  del([`${imgPath.dest}/**/*`]))

gulp.task('browser-sync', () => {
  browserSync.init({
    port,
    server: pugPath.dest,
  })
  gulp.watch(sassPath.src, ['sass'])
  gulp.watch(stylusPath.src, ['stylus'])
  gulp.watch(pugPath.src, ['compile_pug'])
  gulp.watch(jsPath.src, ['minify_js'])
  gulp.watch(tsPath.src, ['typescript'])
  gulp.watch(imgPath.src, ['minify_img'])
  gulp.watch(`${pugPath.dest}/*.html`).on('change', browserSync.reload)
})

// typescript ------------------------------------------------------
const typescript = require('gulp-typescript')

const tsPath = { src: './src/ts/*.ts', dest: './public/js' }
gulp.task('typescript', () => gulp.src(tsPath.src)
  .pipe(gulpPlumber())
  .pipe(typescript({
    noImplicitAny: true,
    target: 'es5',
    outFile: 'main.js',
  }))
  .pipe(uglify({ 
    mangle: false,
    ecma: 6,
  }))
  .pipe(gulp.dest(tsPath.dest))
  .pipe(browserSync.stream()))

gulp.task('stylus', () => gulp.src([stylusPath.src, stylusPath.ignore])
  .pipe(gulpPlumber())
  .pipe(stylus({
    use: [
      // typographic(),
      // nib(),
      // rupture(),
    ],
  }))
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false,
  }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest(stylusPath.dest))
  .pipe(browserSync.stream()))
