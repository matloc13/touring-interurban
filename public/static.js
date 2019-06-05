console.log('hello');

const secondsToTime = (secs) => {
  let hr = Math.floor(secs / (60 * 60));
  let divForMin = secs % (60 * 60);
  let min = Math.floor(divForMin / 60);
  let divForSec = divForMin % 60;
  let seconds = Math.ceil(divForSec);
  let time = hr + ':' + min + ':' + seconds
  return time
}

$(() => {
  const $time = $('.yourTime').text()
  $('.yourTime').text(secondsToTime($time));

  console.log($('.indexTime')[1]);




})