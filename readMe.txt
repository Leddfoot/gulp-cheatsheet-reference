Instructions for making this work.

1. npm install -g gulp  **global installation
2. IN PROJECT DIRECTORY npm init
3. npm install --save-dev gulp  **local installation
4. npm install --save-dev gulp-uglify
5. npm install --save-dev gulp-sass
6. npm install --save-dev gulp-concat
7. npm install --save-dev del

NOTE: UGLIFY IS PRE ES6!!! IF YOU WANT TO ARROW FUNCTIONS ETC,
YOU HAVE TO MAKE A TASK THAT RUNS CODE THROUGH BABEL FIRST.
IF YOU IGNORE THIS YOU WILL GET UNEXPLAINED ERRORS.
(TO FIX UNEXPLAINED ERRORS YOU CAN SETUP UGLIFY WITH PUMP)

COMMANDS THAT CAN BE USED (THEY ARE EXPLICITLY DEFINED IN THE JS )
gulp message: just a test that logs
gulp copyHtml
gulp sass
gulp concat
gulp wipe

gulp (this is defined by the default statement)

TO HAVE GULP WATCH FOR changes
gulp watch
