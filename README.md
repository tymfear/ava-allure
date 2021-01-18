# AVA-Allure report generation example

This project is example of how [AVA](https://github.com/avajs/ava) test
framework could be potentially used with [Allure Report](http://allure.qatools.ru/);

Step to use:
1. `npm test`
2. `npm run allure:generate`
3. `npm run allure:serve`

**Note:** There is a `pretest` script that removed previous test results,
it's just a `rm -rf` command, so not cross-platform.
