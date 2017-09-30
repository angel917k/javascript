var weekendTasks = [ [1, " Spend time with Paola"], [4, " Watch football"], [5, " Pray Von Miller breaks his leg"], [3, " Do javascript homework"], [2, " Eat at some point"], [6, " Wash clothes"], [7, " Perhaps take a trip home"] ];

var i = weekendTasks;
for(i = 1; i < weekendTasks.length; i++){
 weekendTasks.sort();
 i = weekendTasks.splice(i,1);
}
alert(weekendTasks);

var j = 0;
while ( j < weekendTasks.length){
  j = weekendTasks.pop();
}
alert(weekendTasks);


var k = 0;
 
do {
  k++;
  weekendTasks.splice(k, 1, weekendTasks[k] + " done");
}
while (k < 4);
alert(weekendTasks);
