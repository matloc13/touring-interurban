console.log('hello');

const queryObj = {
  baseUrl: `https: //maps.googleapis.com/maps/api/distancematrix/json?units=imperial&`,
  origin: ``,
  destination: ``,

}
//distancematrix query
//units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY
// let queryUrl = `${queryObj.baseUrl}origins-${queryObj.origin},DC&destinations= +`

const findDuration = () => {
  $.ajax({
    url: `https: //maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=${process.env.KEY}`,
    type: 'GET'
  }).then((data) => {
    console.log(data);
  })
}

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