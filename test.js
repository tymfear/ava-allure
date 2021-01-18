const test = require('ava');
const {AllureRuntime, AllureTest} = require('allure-js-commons');

const runtime = new AllureRuntime({resultsDir: 'allure-results'});
runtime.startGroup(__filename);

const wait = () => {
  const time = Math.ceil(Math.random() * 3) * 500;

  return new Promise(resolve => setTimeout(resolve, time));
};

test.before(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');

  await wait();

  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test.before(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test.beforeEach(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test.beforeEach(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test('test', async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = t.title;
  const step = allureTest.startStep('Some step');
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
  t.pass();
});
test('test 2', async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = t.title;
  const step = allureTest.startStep('Some step');
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
  t.pass();
});

test.afterEach(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test.afterEach(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test.after(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

test.after(async t => {
  const allureTest = new AllureTest(runtime, Date.now());
  allureTest.fullName = `${__filename}${t.title}${allureTest.uuid}`;
  const step = allureTest.startStep('Some step', Date.now());
  step.addParameter('some parameters here');
  await wait();
  step.endStep(Date.now());
  allureTest.status = 'PASSED';
  allureTest.endTest(Date.now());
});

