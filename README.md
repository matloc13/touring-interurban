# touring-interurban

#### site url
[touring-interurban](https://touring-interurban.herokuapp.com/)

![half-bicycle](/assets/58110593075__09EB8310-BBDC-4071-A34A-771DECE19C83.jpeg)

![wireframe-part1](/assets/IMG_3203.jpeg)
![wireframe-part2](/assets/IMG_3204.jpeg)


### calculate a bicycle journey

- use date object to find time to destination, race against previous times
- user can create and edit user info.  image of bike array of favorite routes

### user stories

- user can use app to measure distance of a trip in time
- user can add a description route stating if it was safe or a good or bad ride
- user can share favorite rides to public board

### part two

- add google geocoding, distanceMatrix, and geolocaton api
- second object to hold important google response data
- user will be referenced in both models, user trip will ref matching google updatedAt
- store google api geocoding response for start and end values

### routes object
- time of trip
- beginning and ending of trip
- description of the trip

### stretch goals
- connect user to routes models
- user login
- stretch goals  use google distance matrix api and geolocation and geocoding api
