# General Route Planner
 
**GRP**(General Route Planner) is a high-performance and open-source routing engine for multiple pickup and dropoffs routing optimization and multi-vehicle allocation. 

The algorithm is designed to work faster and finding better cost minimum than genetic algorithms, tabu search and ant colony optimization in this problem.

![](grp.gif)
## GRP is Designed for 

* **multiple pickup/dropoffs routing optimization**: N to N delievey / 1 to N delivery / with or without parcel limit constraint.

* **multi-vehicle routing problem**: with or without parcel limit constraint.

## Use case

* Carpooling
* Food Delivery Route Optimization
* Logistics Optimization
* Smart City
* Warehouse Optimization

## Demo

[demo](http://max-ng.com/grp/) 

## Documentation (editing)
You can use one of the following distances within the optimzation: 
* Euclidean distance 
* Distance from Haversine formula
* Estimated distance of real world by [OSRM](https://github.com/Project-OSRM/osrm-backend)

## Installation (The version with OSRM)
1 Make sure you have installed and started the OSRM server.   
2 cd grp_backend  
3 npm i  
4 npm start  
5 replace the token in grp_frontend/web/demo.js with your own mapbox token.  
6 open the grp_frontend/web/index.html file and you are ready to go.  

## Special Thanks 
[OSRM](https://github.com/Project-OSRM/osrm-backend) is one of the best routing engines for 1 to 1 shortest paths in road networks.

This is a personal project without funding.\
The server source code is coming. The code is a bit messy as it was finished long time ago and I will tidy it up when I have time.\
Always feel free to say hello ;) maxnghello@gmail.com
