console.log('hello');

const secToT = (secs) => {
  let hr = Math.floor(secs / (60 * 60));
  let divForMin = secs % (60 * 60);
  let min = Math.floor(divForMin / 60);
  let divForSec = divForMin % 60;
  let seconds = Math.ceil(divForSec);
  let time = hr + ':' + min + ':' + seconds
  return `Time: ${time}`
}

$(() => {
  const $time = $('.yourTime').text()
  $('.yourTime').text(secToT($time));

  console.log($('.indexTime'));

  $('.beginCount').on('click', () => {
    let start = 0;
    start = date.now();
  })

  $('.endCount').on('click', () => {
    let millis = date.now() - start;
    millis = Math.floor(millis / 1000);
  })


})