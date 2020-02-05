//Max Ng Kei Sing 
grp={};
(function(global){
		function matrix(){

		this.init = function(y, x){
				var M = new Array(y);
				for (var k = 0; k < y ; k ++)
					M[k] = new Array(x);
				return M ;
		 }
}

matrix.prototype.zeros = function(y, x){
			var M = this.init(y, x);
				for(var i = 0; i < y; i++){
					for(var j = 0; j < x; j++)
							M[i][j] = 0; 
				} 
				return M ;  
		} 

matrix.prototype.map = function(y, x){
			var M = this.init(y, x);
				for(var i = 0; i < y; i++){
					for(var j = 0; j < x; j++)
							M[i][j] = 0.01; 
				} 
				return M ;  
		} 

matrix.prototype.random = function(y, x){
			var M = this.init(y, x);
				for(var i = 0; i < y; i++){
					for(var j = 0; j < x; j++)
							M[i][j] = Math.random(); 
				} 
				return M ;  
		}  

matrix.prototype.dot = function(A, B){
	if (B[0].length === undefined)
		var l = 1;
	else
		var l = B[0].length;
		if (A[0].length === undefined)
		var r = 1;
	else
				var r = A[0].length;
	var C = this.zeros(A.length, l);
	for(var i = 0; i < A.length;i ++){
		for(var j = 0; j < l;j ++){
			for(var s = 0; s < r;s ++){
								C[i][j] += A[i][s] * B[s][j];
						}
				}
		}
		return C;
}

matrix.prototype.add = function(A, B){

	if (B[0].length === undefined)
		var l = 1;
	else
		var l = B[0].length;
		if (A[0].length === undefined)
		var r = 1;
	else
				var r = A[0].length;

	if(A.length <= B.length)
		var s = B.length;
	else
		var s = A.length;
	if(r <= l)
		var d = l;
	else 
		var d = r;
		var C = this.zeros(s, d);
	for (var i = 0;i < s;i++){
		for(var j = 0;j < d;j++){
			if(A[i] !== undefined){
				if(A[i][j]!== undefined)
				C[i][j] += A[i][j];
				 }
			if(B[i]!== undefined){
				if(B[i][j]!== undefined)
				C[i][j] += B[i][j];
				 }
		} 
	}
		return C;   
}

matrix.prototype.sigmoid = function(A){

	if (A[0].length === undefined)
		var l = 1;
	else
		var l = A[0].length;
		
		var C = this.zeros(A.length, l);
	for (var i = 0;i < A.length;i++){
		for(var j = 0;j < l;j++){
			C[i][j] = 1 / (1 + Math.exp(-1* A[i][j]));
		} 
	}
		return C;   
}

matrix.prototype.transpose = function(A){
	if (A[0].length === undefined)
		var l = 1;
	else
		var l = A[0].length;
		
		var C = this.zeros(l, A.length);
	for (var i = 0;i < A.length;i++){
		for(var j = 0;j < l;j++){
			C[j][i] = A[i][j];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
		} 
	}
		return C;   
}
var newM = new matrix();
function getRandomColor() {
	
			var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
				color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
}

var agent =function(i,a,b,c,loc,j){
			 var array = [i,a,b,c,loc,j];
			 return array;
}
map.prototype.randomconnect = function(){

this.weighting= newM.map(this.startnumber * 2 , this.endnumber * 2 );



}

map.prototype.turnopt = function(A1){
		var B1 = [];
	 for (var k = 0; k< A1.length; k++){
			 B1[k] = A1[k];
	 }
 for(i=0;i<B1.length -3 ;i++){ 

			var C1 = [];
			 for (var k = 0; k< B1.length; k++){
			 C1[k] = B1[k];
			 }
			if(B1[i] == 0 || B1[i+1] ==0 || B1[i+2] ==0 ||  B1[i+3] ==0){
				continue;
			}
			if(    (B1[i+1][1] == true && B1[i+2][2] == true  && B1[i+1][0] != B1[i+2][0])   ||   (B1[i+1][2] == true && B1[i+2][1] == true  )     ) 
			{
		

				var n = [];
				 n[0] = B1[i][5];
				 n[1] = B1[i+1][5];
				 n[2] = B1[i+2][5];
				 n[3] = B1[i+3][5];
				var bestcomb = [0,1];
				
				var now = this.distance(n[0],n[1]) + this.distance(n[1],n[2]) + this.distance(n[2],n[3]) ;


				 var comb = [[1,0]];
				 for (var j = 0;j<comb.length;j++){
							var change  = comb[j];
							var distance = this.distance(n[0],n[change[0]+1]) + this.distance(n[change[0]+1],n[change[1]+1]) + this.distance(n[change[1]+1],n[3]);
							
							if (distance < now){
									bestcomb = change;
									now = distance;
							}
				 }
				
				 B1[i+1] = C1[bestcomb[0] + i+1 ];
				 B1[i+2] = C1[bestcomb[1] + i +1];
				
			 
			 }
	}
	return [B1, now];
}
show = false;
map.prototype.threeopt = function(A1){
		var B1 = [];
	 for (var k = 0; k< A1.length; k++){
			 B1[k] = A1[k];
	 }
 for(i=0;i<B1.length -3 ;i++){ 

			var C1 = [];
			 for (var k = 0; k< B1.length; k++){
			 C1[k] = B1[k];
			 }
			if(B1[i] == 0 || B1[i+1] ==0 || B1[i+2] ==0 ||  B1[i+3] ==0){
				continue;
			}
			if((B1[i+1][1] == true && B1[i+2][1] == true  ) || (B1[i+1][2] == true && B1[i+2][2] == true  ) ){
		

				var n = [];
				 n[0] = B1[i][5];
				 n[1] = B1[i+1][5];
				 n[2] = B1[i+2][5];
				 n[3] = B1[i+3][5];
				var bestcomb = [0,1];

				var now = this.distance(n[0],n[1]) + this.distance(n[1],n[2]) + this.distance(n[2],n[3]) ;
				if ( i == 13 ){
					show = true;
				//  console.log(  this.distance(n[1],n[2]) , this.distance(n[2],n[1])  );
					show = false;
				 }
				 var comb = [[1,0]];
					 for (var j = 0;j<comb.length;j++){
								 var change  = comb[j];
									
								 var distance = this.distance(n[0],n[2]) + this.distance(n[2],n[1]) + this.distance(n[1],n[3]);
								 
								 if (distance < now){
										 //console.log('yes', i);
										 bestcomb = change;
										 now = distance;
								 }
						}
				
				 B1[i+1] = C1[bestcomb[0] + i+1 ];
				 B1[i+2] = C1[bestcomb[1] + i +1];
				
			 
			 }
}
	return [B1, now];
}

map.prototype.fouropt = function(A1){
		var B1 = [];
	 for (var k = 0; k< A1.length; k++){
			 B1[k] = A1[k];
	 }
 for(i=0;i<B1.length -4 ;i++){ 

			var C1 = [];
			 for (var k = 0; k< B1.length; k++){
			 C1[k] = B1[k];
			 }
			if(B1[i] ==0 || B1[i+1] ==0 || B1[i+2] ==0 || B1[i+4] ==0 || B1[i+3] ==0){
				continue;
			}
			if((B1[i+1][1] == true && B1[i+2][1] == true  && B1[i+3][1] == true) || (B1[i+1][2] == true && B1[i+2][2] == true  && B1[i+3][2] == true) ){
		

				var n = [];
				 n[0] = B1[i][5];
				 n[1] = B1[i+1][5];
				 n[2] = B1[i+2][5];
				 n[3] = B1[i+3][5];
				 n[4] = B1[i+4][5];
				var bestcomb = [0,1,2];

				var now = this.distance(n[0],n[1]) + this.distance(n[1],n[2]) + this.distance(n[2],n[3]) + this.distance(n[3],n[4]);
				 var comb = [[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
				 for (var j = 0;j<comb.length;j++){
							var change  = comb[j];
							var distance = this.distance(n[0],n[change[0]+1]) + this.distance(n[change[0]+1],n[change[1]+1]) + this.distance(n[change[1]+1],n[change[2]+1]) + this.distance(n[change[2]+1],n[4]);
							
							if (distance < now){
									bestcomb = change;
									now = distance;
							}
				 }
				
				 B1[i+1] = C1[bestcomb[0] + i+1 ];
				 B1[i+2] = C1[bestcomb[1] + i +1];
				 B1[i+3] = C1[bestcomb[2] + i +1];
			 
			 }
	}
	return B1;
}
map.prototype.fiveopt = function(A1){
		var B1 = [];
	 for (var k = 0; k< A1.length; k++){
			 B1[k] = A1[k];
	 }
 for(i=0;i<B1.length -5 ;i++){ 

			var C1 = [];
			 for (var k = 0; k< B1.length; k++){
			 C1[k] = B1[k];
			 }
			if(B1[i] ==0 || B1[i+1] ==0 || B1[i+2] ==0 || B1[i+4] ==0 || B1[i+3] ==0 || B1[i+5] ==0){
				continue;
			}
			if((B1[i+1][1] == true && B1[i+2][1] == true  && B1[i+3][1] == true && B1[i+4][1] == true) || (B1[i+1][2] == true && B1[i+2][2] == true  && B1[i+3][2] == true && B1[i+4][2] == true) ){
		

				var n = [];
				 n[0] = B1[i][5];
				 n[1] = B1[i+1][5];
				 n[2] = B1[i+2][5];
				 n[3] = B1[i+3][5];
				 n[4] = B1[i+4][5];
				 n[5] = B1[i+5][5];
				var bestcomb = [0,1,2,3];

				var now = this.distance(n[0],n[1]) + this.distance(n[1],n[2]) + this.distance(n[2],n[3]) + this.distance(n[3],n[4]) + this.distance(n[4],n[5]);
				 //console.log(now);
				 var comb = [[3,2,1,0],[3,1,2,0]];
				 for (var j = 0;j<comb.length;j++){
							var change  = comb[j];
							var distance = this.distance(n[0],n[change[0]+1]) + this.distance(n[change[0]+1],n[change[1]+1]) + this.distance(n[change[1]+1],n[change[2]+1]) + this.distance(n[change[2]+1],n[change[3]+1]) + this.distance(n[change[3]+1],n[5]);
							
							if (distance < now){
									bestcomb = change;
									now = distance;
							}
				 }
				
				 B1[i+1] = C1[bestcomb[0] + i+1 ];
				 B1[i+2] = C1[bestcomb[1] + i +1];
				 B1[i+3] = C1[bestcomb[2] + i +1];
				 B1[i+4] = C1[bestcomb[3] + i +1];
			 
			 }
	}
	return B1;
}


function map(start,end,ww,w,gvalue,parcelLimit,timeLimit){
	 var t0 = new Date();
		 this.start = start;
		 this.end = end;
		 this.startnumber = start.length;
		 this.endnumber = end.length;
		 this.startpoints =[];
		 this.endpoints =[];
		 this.point1;
		 this.point2;
		 this.choice;
		 this.path;
		 this.full;
		 this.dm = w;
		 this.gvalue = gvalue;
		 for(var  i=0;i<this.startnumber;i++){
			 
						 this.point1 = new agent(i,true,false,0.1,this.start[i],i);
						 this.startpoints.push(this.point1);

		 }
		 this.endpoints =[];
		 for(var  i=0;i<this.endnumber;i++){
						 point2 = new agent(i,false,true,0.1,this.end[i],i+this.endnumber);
					 this.endpoints.push(point2);

		 }
		 if(ww){

			this.weighting = ww;
		 }

		 console.log('distance time cost ', new Date() - t0, 'ms');



		 this.limit =  parcelLimit || this.startnumber;
		 this.dlimit = 60*timeLimit || 99999999999999999 ;
		// this.dlimit *= 2;
		 console.log('pacel limit is', this.limit);
	 
	

}

var ccc = 0;
map.prototype.inbox = function(A,[x,c,v,b]){
	 if (A[0] <= x && A[0] >= c && A[1] >= v && A[1] <= b){
		 
		 return true
		}
	 else{
		 return false
	 }
}
map.prototype.distance = function(A,B){  

	 return this.dm[A][B] ;

}
map.prototype.distance0 = function(A,B){  
	
		var lon1 = A[1] /180 * Math.PI;
	 var lat1 = A[0] /180 * Math.PI;
	 var lon2 = B[1]/180 * Math.PI;
	 var lat2 = B[0] /180 * Math.PI;
	 var dlon = lon2 -lon1;
	 var dlat = lat2 - lat1;
	 var a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon/2) *Math.sin(dlon/2);
	 var c = 2 * Math.asin(Math.sqrt(a));
	 var km = 6367 * c;
	 return km ;
	 //console.log('dist',A,B,km);
}



map.prototype.containendpoint = function(A){
		 var c = 0; 
		 var choice = [];
		 for( i=0;i<A.length;i++){
				choice[i] = A[i];
		 }
		 for( i=0;i<choice.length;i++){
				 if(choice[i][2]== true)
					c = 1;

		 }
		 return c;
}

map.prototype.onlystartpoint = function(A){
		var array = [];
		var c =0;
		for( i=0;i<A.length;i++){
				if(A[i][1] == true){
					array[c] = A[i];
					c++;
				}
		}
		return array;
}

map.prototype.onlyendpoint = function(A){
		var array = [];
		var c =0;
		for( i=0;i<A.length;i++){
				if(A[i][2] == true){
					array[c] = A[i];
					c++;
				}
		}
		return array;
}

map.prototype.probability=function(point,A){
			var score =[];
			 if(point[1] == true){
							var gap = 0;
					}else{
						var gap = this.startnumber;
					}
					var p1 = gap + point[0];


			for(i=0;i<A.length;i++){
				if(A[i][1] == true){
							var gap1 = 0;
					}else{
						var gap1 = this.startnumber;
					}
					var p2 = gap1 + A[i][0];

					 score[i] = this.weighting[p1][p2];
			}
			var sumscore = score.reduce((a, b) => a + b, 0);
			var tip = Math.random() * sumscore;
			var add = 0;
			for(k=0;k<score.length;k++){
					 add += score[k];
					 if (tip <= add){
							 var node = k;
							 break;
					 }

				}


return node;
}

map.prototype.findnode = function(){

			 var color = getRandomColor();
			 

			 
			 var path= [];
			 var choice = [];
				for( i=0;i<this.startnumber;i++){
					 choice[i] = this.startpoints[i];
					}
			 var index = Math.floor(Math.random() * this.startnumber);
						this.startingpoint = choice[index];
			 //route(this.startingpoint.loc, this.endpoints[index].loc,"#000000");
						path.push(choice[index]);
					 // console.log('i',choice[index][0]);
						//console.log(choice[index][5],this.endpoints[index][5]);
						var thisdistance = 30*60;
					 // console.log(thisdistance);
						choice.splice(index,1);
						choice.push(this.endpoints[index]);
						var full = 1;
						
					//  console.log('inow',path[0][0]);
						

		 while(choice.length > 0){

					while(true){
					
							if(choice.length == 0 ){
									break;
							}
							if(full < this.limit && thisdistance < this.dlimit){
							var index = this.probability(path[path.length -1], choice);
							var x =  choice[index];
							path.push(x);
							choice.splice(index,1);
							if(x[1] == true){
								
										thisdistance += 30*60;
										full++;
										choice.push(this.endpoints[x[0]]);
							} else {
 //               full--;
								thisdistance -= 30*60;
							}
							
							thisdistance += this.distance(path[path.length-2][5],path[path.length-1][5]);
							

						 // console.log(thisdistance);
							}else if (full ==this.limit || thisdistance >= this.dlimit){
								if(this.containendpoint(choice) == 0 ){
								
									 break;
								}
								var choice1 = this.onlyendpoint(choice);
								
								var index = this.probability(path[path.length -1], choice1);
								var x =  choice1[index];
								path.push(x);
								choice1.splice(index,1);
								for (j=0;j<choice.length;j++){
										 if (choice[j] == x){
												 choice.splice(j,1);

										 } 
								}
	//              full--;
								thisdistance -= 30*60;
								thisdistance += this.distance(path[path.length-2][5],path[path.length-1][5]);

							}
				
				}//while true
				
				 if(choice.length == 0){
					break;
				 }
		
			 path.push(0);
			 
			 thisdistance = 0;
			 index = Math.floor(Math.random() * choice.length);
			 var startingpoint = choice[index];
			 //route(this.startingpoint.loc, this.endpoints[index].loc,"#000000");
						path.push(choice[index]);
						
						var thisdistance = 30*60;
						choice.splice(index,1);
						choice.push(this.endpoints[startingpoint[0]]);
						var full = 1;
				
		 }

	
	 
	 //path = this.fouropt(path);
	 //path = this.threeopt(path)[0];
	 //path = fiveopt(path);


	var car = 1;
	 var  totaldistance = 0;
	 var distance = 0;
		for(i=0;i<path.length -1 ;i++){
			if(path[i] ==0 )
				car++;
			if(path[i] ==0  || path[i+1] ==0)
				continue;
		 distance = 0;
		 
		 distance = this.distance(path[i][5],path[i+1][5]);
		 totaldistance += distance;
		}
		

		return [path,totaldistance];

}

map.prototype.onegeneration = function(pre,turn){
	var s=0;
	var allpath =[];
	var allscore=[];
	var one;
	var t0 = new Date();
	var each = [];
	if ( this.gvalue>800)
			this.gvalue = Math.floor(this.gvalue/1.1);
	//console.log('ggggg', gvalue);
	for(iter=0;iter<this.gvalue;iter++){

		one = this.findnode();
	 
		allpath[iter] = one[0];
		allscore[iter] = one[1];
	
	}

	var sum = allscore.reduce((a, b) => a + b, 0);
	var index = allscore.reduce(function(iMin,x,ww,a) {return x<a[iMin] ? ww : iMin;}, 0);
		
			 allpath[index] = this.threeopt(allpath[index])[0];
			 

			 allpath[index] = this.fouropt(allpath[index]);
			 allpath[index] = this.fiveopt(allpath[index]);
			 allpath[index] = this.turnopt(allpath[index])[0];

			 var orders = [];
						for (var item = 0; item < allpath[1].length; item++) {
							 orders.push(allpath[1][item][0]);
						}

	 var eachd = 0;
	 var  totaldistance = 0;
	 var distance = 0;
		for(i=0;i<allpath[index].length -1 ;i++){
			if(allpath[index][i] ==0  ){
				each.push(eachd);
				eachd = 0;
			}
			if(allpath[index][i] ==0  || allpath[index][i+1] ==0){
				s++;
				continue;
			}
		 distance = 0;
		 
		 distance = this.distance(allpath[index][i][5],allpath[index][i+1][5]);
		 totaldistance += distance;
		 eachd += distance;
		}
		each.push(eachd);

		
		var weight =1;
		//if (pre > totaldistance) var weight =1 ; else var weight =0.5;
			 for(ii=0;ii<allpath[index].length -1 ;ii++){
				var weight =   1;
					if(allpath[index][ii] ==0 || allpath[index][ii+1] ==0)
						 continue;
					if(allpath[index][ii][1]== true){
							var gap = 0;
						 // var A = allpath[index][ii][0];
					}else{
						var gap = this.startnumber;
					 // var A = this.end[allpath[index][ii][0]];
					}
					var p1 = gap + allpath[index][ii][0];


					if(allpath[index][ii+1][1] == true){
							var gap1 = 0;
					//    var B = this.start[allpath[index][ii+1][0]];
					}else{
						var gap1 = this.startnumber;
				 //   var B = this.end[allpath[index][ii+1][0]];
					}
					var p2 = gap1 + allpath[index][ii+1][0];
					if(turn == true){
					//console.log( 1/(this.distance(p1,p2)*0.001+ 0.000005));
					this.weighting[p1][p2] = this.weighting[p1][p2]  +  1/(this.distance(p1,p2)*0.0001+ 0.000005);
					//this.weighting[p1][p2] = this.weighting[p1][p2] +1 ;
					}
					else{
					this.weighting[p1][p2] = this.weighting[p1][p2]  ;
					}

				 }
	 
						
	


		//var pathstring='';
		//for (let item of allpath[index]){pathstring += String(item[0]);};
		//console.log(pathstring);


	//console.log(s);
	//console.log(totaldistance);
	//console.log(new Date() - t0, 'ms');
	return [allpath[index],totaldistance,allscore[index],each];
}

map.prototype.firstgeneration = function(pre,turn){
	var allpath =[];
	var allscore=[];
	var one;
	var t0 = new Date();
	for(iter=0;iter<this.gvalue;iter++){

		one = this.findnode();
	 
		allpath[iter] = one[0];
		allscore[iter] = one[1];
	
	}

	var sum = allscore.reduce((a, b) => a + b, 0);
	var index = allscore.reduce(function(iMin,x,ww,a) {return x<a[iMin] ? ww : iMin;}, 0);

			

	

	console.log(new Date() - t0, 'ms');
	return [allpath[index],allscore[0]];
}

map.prototype.intersect = function(Q,W,E,R){
	 var a = W[0] - Q[0];
	 var b = W[1] - Q[1];
	 var c = R[0] - E[0];
	 var d = R[1] - E[1];
	 var f = E[0] - Q[0];
	 var g = E[1] - Q[1];
	 var cross = a*d - b*c;
	 //console.log('cross',cross);
	 if (cross == 0 ) return false;
	 var u = (f*b - g*a) / cross;
	 var t = (f*d - g*c) / cross;
	 //if (show == true) console.log('ut',u,t);
	 if ( u >=0 && t >=0 && u <= 1 && t <= 1 ){ return true
		}
	 else {return false};
}
map.prototype.drawfinalroute = function(A){
var color = getRandomColor();
 for(i=0;i<A.length -1 ;i++){
			if(A[i] ==0 || A[i+1] ==0){
				color = getRandomColor();
				continue;
			}

		 var final = route(A[i][4],A[i+1][4],color);
		}
}

function route(s,e,color){
				 var canvas = document.getElementById("mycanvas");


				 var ctx = canvas.getContext("2d");


							x1 = s[0] * 6;
							y1 = s[1]  *6;
							x2 = e[0] * 6;
							y2 = e[1]  *6;
							ctx.lineWidth =6;
							ctx.strokeStyle= color;
							ctx.beginPath();
							ctx.moveTo(x1,y1);
							ctx.lineTo(x2,y2);
							ctx.closePath();
							ctx.stroke();    



}
global.map = map;
global.matrix = matrix;
})(grp);