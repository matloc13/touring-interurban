# touring-interurban
- Matthew Lockdall

#### site url
[touring-interurban](https://touring-interurban.herokuapp.com/)

![half-bicycle](/assets/58110593075__09EB8310-BBDC-4071-A34A-771DECE19C83.jpeg)

![wireframe-part1](/assets/IMG_3203.jpeg)
![wireframe-part2](/assets/IMG_3204.jpeg)


### user stories

- user can use app to measure distance of a trip in time
- user can add a description route stating if it was safe or a good or bad ride
- user can share favorite rides to public board
- user can create and edit user info.  


### part two

- add google geocoding, distanceMatrix, and geolocaton api
- second object to hold relevant google response data
  - location lat lang and distance matrix ; time to destination estimation.
- user will be referenced in both models, user trip will ref matching google updatedAt
- store google api geocoding response for start and end values

### routes object
- time of trip
- beginning and ending of trip
- description of the trip
- user id
- favorite trip?
- google response data id

### stretch goals
- connect user to routes models
- stretch goals  use google distance matrix api and geolocation and geocoding api
