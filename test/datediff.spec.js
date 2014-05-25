describe('First test setup', function() {
  it('should setup okay', function() {
    expect(true).toBe(true);
  })
});
describe('Difference date', function() {
  var from, to, diff;
  afterEach(function() {
    from = null;
    to = null;
    diff = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  });
  it('should throw exception if non arguments specified', function() {
    expect(function() {
      datediff()
    }).toThrow();
  });

  it('Should return 0 values if "from date" bigger then "to date"', function() {
    to = new Date(2012, 0, 1, 0);
    from = new Date(2014, 0, 1, 0);
    diff = datediff(from, to);
    expect(diff.years).toBe(0);
    expect(diff.months).toBe(0);
    expect(diff.days).toBe(0);
    expect(diff.hours).toBe(0);
    expect(diff.seconds).toBe(0);
  });
  it('Should return correct diff when leap year + 1 days', function() {
    to = new Date(2013, 0, 1, 0);
    from = new Date(2012, 0, 1, 0);
    diff = datediff(from, to);
    expect(diff.years).toBe(1);
    expect(diff.months).toBe(0);
    expect(diff.days).toBe(1);
  });
  it('Should return correct years', function() {
    to = new Date(2014, 0, 1, 0);
    from = new Date(1970, 0, 1, 0);
    diff = datediff(from, to);
    expect(diff.years).toBe(44);
  });

  it('Should return correct month', function() {
    to = new Date(2013, 1, 1, 0);
    from = new Date(2012, 0, 1, 0);
    diff = datediff(from, to);
    expect(diff.years).toBe(1);
    expect(diff.months).toBe(1);
    expect(diff.days).toBe(1);
  });
  it('Should return correct days', function() {
    to = new Date(2012, 0, 31, 0);
    from = new Date(2012, 0, 1, 0);
    diff = datediff(from, to);
    expect(diff.years).toBe(0);
    expect(diff.months).toBe(0);
    expect(diff.days).toBe(30);
  });
  it('Should return correct hours', function() {
    to = new Date(2012, 0, 1, 23);
    from = new Date(2012, 0, 1, 11);
    diff = datediff(from, to);
    expect(diff.years).toBe(0);
    expect(diff.months).toBe(0);
    expect(diff.days).toBe(0);
    expect(diff.hours).toBe(12);
  });
  it('Should return correct minutes', function() {
    to = new Date(2012, 0, 1, 11, 12);
    from = new Date(2012, 0, 1, 10, 59);
    diff = datediff(from, to);
    expect(diff.years).toBe(0);
    expect(diff.months).toBe(0);
    expect(diff.days).toBe(0);
    expect(diff.hours).toBe(0);
    expect(diff.minutes).toBe(13);
  });
  it('Should return correct seconds', function() {
    to = new Date(2012, 0, 1, 11, 12, 1);
    from = new Date(2012, 0, 1, 10, 59, 59);
    diff = datediff(from, to);
    expect(diff.years).toBe(0);
    expect(diff.months).toBe(0);
    expect(diff.days).toBe(0);
    expect(diff.hours).toBe(0);
    expect(diff.minutes).toBe(12);
    expect(diff.seconds).toBe(2);
  });
});
