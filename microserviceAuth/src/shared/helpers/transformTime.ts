export function timeToFloat(time: string) {
  let [m, s, ms] = time.split(':');
  let result = Number(m) * 60 + Number(s) + Number(ms) * 0.01;
  return result;
}

export function floatTimeToTime(timeFloat: number) {
  let [durationLast, ms] = timeFloat.toString().split('.');
  let durationNumber = Number(durationLast);
  let m = Math.floor(durationNumber % 60);
  let s = durationNumber - m;
  if (ms == undefined) {
    ms = '0';
  }
  let result = `${s}:${m}:${ms}`;
  return result;
}
