var arr = [1, 2, 5, 2, 4, 2];

for (let i = 0; i < arr.length; i++) {}

var marks = [70, 40, 60, 20, 35];

let max = 0;
let avg = 0;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
  avg += marks[i] / marks.length;
}
console.log(max);
console.log(avg);
