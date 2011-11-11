var workouts = ['P90X Classic', 'P90X Lean', 'P90X Doubles', 'Insanity'];
var exercises = [// P90X
                 'Chest, Back + Ab Ripper X', 
                 'Plyometrics',
                 'Shoulders, Arms + Ab Ripper X',
                 'Yoga X',
                 'Legs, Back + Ab Ripper X',
                 'Kenpo X',
                 'X Stretch',
                 'Core Synergistics',
                 'Chest, Shoulders + Ab Ripper X',
                 'Back, Biceps + Ab Ripper X',
                 'Cardio X',
                 'Ab Ripper X',
                 // Insanity
                 'Insanity Fit Test', // 12
                 'Plyometric Cardio Circuit', // 13
                 'Cardio Power and Resistance', // 14
                 'Cardio Recovery', // 15
                 'Pure Cardio', // 16
                 'Cardio Abs', // 17
                 'Core Cardio and Balance', // 18
                 'Max Interval Circuit', // 19
                 'Max Interval Plyo', // 20
                 'Max Cardio Conditioning', // 21
                 'Max Recovery', // 22
                 'Insane Abs', // 23
                 'Max Interval Sports Training', // 24
                 'Upper Body Weight Training', // 25
                 'Rest' // 26
                 ];
var routines = [
[0, 1, 2, 3, 4, 5, 6,
 0, 1, 2, 3, 4, 5, 6,
 0, 1, 2, 3, 4, 5, 6,
 3, 7, 5, 6, 7, 3, 6,
 8, 1, 9, 3, 4, 5, 6,
 8, 1, 9, 3, 4, 5, 6,
 8, 1, 9, 3, 4, 5, 6,
 3, 7, 5, 6, 7, 3, 6,
 0, 1, 2, 3, 4, 5, 6,
 8, 1, 9, 3, 4, 5, 6,
 0, 1, 2, 3, 4, 5, 6,
 8, 1, 9, 3, 4, 5, 6,
 3, 7, 5, 6, 7, 3, 6 ],
[7, 10, 2, 3, 4, 5, 6,
 7, 10, 2, 3, 4, 5, 6,
 7, 10, 2, 3, 4, 5, 6,
 3, 7, 5, 6, 10, 3, 6,
 7, 10, 9, 3, 4, 5, 6,
 7, 10, 9, 3, 4, 5, 6,
 7, 10, 9, 3, 4, 5, 6,
 3, 7, 5, 6, 10, 3, 6,
 0, 10, 2, 3, 7, 5, 6,
 8, 10, 9, 3, 7, 5, 6,
 0, 10, 2, 3, 7, 5, 6,
 8, 10, 9, 3, 7, 5, 6,
 3, 7, 5, 6, 7, 3, 6 ],
[0, 1, 2, 3, 4, 5, 6,
 0, 1, 2, 3, 4, 5, 6,
 0, 1, 2, 3, 4, 5, 6,
 3, 7, 5, 6, 7, 3, 6,
 [10, 8], 1, [10, 9], 3, [10, 4], 5, 6,
 [10, 8], 1, [10, 9], 3, [10, 4], 5, 6,
 [10, 8], 1, [10, 9], 3, [10, 4], 5, 6,
 3, 7, 5, 6, 7, 3, 6,
 [10, 0], 1, [10, 2], 3, [10, 4], 5, 6,
 [10, 8], 1, [10, 9], 3, [10, 4], 5, 6,
 [10, 0], 1, [10, 2], 3, [10, 4], 5, 6,
 [10, 8], 1, [10, 9], 3, [10, 4], 5, 6,
 3, 7, 5, 6, 7, 3, 6 ],
[12, 13, 14, 15, 16, 13, 26,
 14, 16, 13, 15, 14, [16, 17], 26,
 12, 13, [16, 17], 15, 14, 13, 26,
 [16, 17], 14, 13, 15, [16, 17], 13, 26,
 18, 18, 18, 18, 18, 18, 26,
 [12, 19], 20, 21, 22, 19, 20, 26,
 21, 19, 20, 22, [21, 17], 18, 26,
 [12, 19], 20, [21, 17], 22, 19, 18, 26,
 20, [21, 17], 19, 18, 20, [21, 17], 12]
];

module.exports = {workouts: workouts, exercises: exercises, routines: routines};