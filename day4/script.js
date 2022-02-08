"use strict";

const bingoInput = `83,5,71,61,88,55,95,6,0,97,20,16,27,7,79,25,81,29,22,52,43,21,53,59,99,18,35,96,51,93,14,77,15,3,57,28,58,17,50,32,74,63,76,84,65,9,62,67,48,12,8,68,31,19,36,85,98,30,91,89,66,80,75,47,4,23,60,70,87,90,13,38,56,34,46,24,41,92,37,49,73,10,94,26,42,40,33,54,86,82,72,39,2,45,78,11,1,44,69,64

97 62 17  5 79
 1 99 98 80 84
44 16  2 40 94
68 95 49 32  8
38 35 23 89  3

48 53 59 99 43
77 24 62 50 27
28  8 10 86 18
96  9 92 66 67
20 55 87 52 31

79 51 62 33  5
15 39 21 48 90
88 29  7 92 98
87 49 84  6 14
72 85 46 71 26

 3 86 40 61 65
 4 82 28 46 32
31  5 33 96 98
30 62 68 75 70
 9 18 92 19 72

82 24 95 21 79
85 84 38 89 50
 7 10  5 25 20
99 37 48 86 12
68 93  6 66 43

 9 95 75 14  1
94 90 40 84 24
43 72 93  4 87
48 50 53 20  6
65 11 38 25 46

41 22 47 34 55
74 57 42 85 33
40 21 52 78  7
51 58 37  4 49
53 75 11 48 76

90  6 98 25 80
41 81 30 87 33
11 21 79 62 92
27 60 46 56 88
 4 69 70 13 84

 1 22 72 43 58
78 97 52 61 62
27 48 81  2 63
33 37  4 82 18
65 28 70 31 59

78 51 69 47 16
48 55 58 70 37
 7 59 66  5 76
94 52 82 22 10
13 83 95 24 79

 8 38 40 67 24
45  9 21  7 89
82 96 72 92  4
86 49 80 79 22
26 11 84 78 70

32 73  0 37 86
78 42 13 30 53
44 99 51 12 96
45 57 63 34 58
41 91  7 49 52

 1 66  8  6  7
47 96 25 77 72
23 22 31 42 24
52 27 53 51 99
21 65 35 84  5

49  1 79 39 82
 7 96 13 33 85
 3 53 32 12 50
36 30 27 55 95
16 24  2 66 77

45 75 85 35 72
99 25 91 68 28
29 52  1 80 98
62 46 63 22 44
82 86 57 24 58

70 19 79  7 24
35 71 93 42 76
17 88 62 25 12
54  0 11 32 58
38 64 29 75 80

58 93 63 52 23
77 60  1 38 87
75 89 85 25 91
64 39 96 49 66
14 45 84 13 29

85 10 21 33 80
78 86 77 41 36
98 58 53 82 72
75 20 65  3 46
52 16 74 45 99

45 97 96 23 62
79 59 60 87 64
75  2 30 47 50
85 81 56 11 38
17 26 40  7 66

94 99 67 88 82
96  5 21 53 52
41 15 49 35 89
54 39 66 24 51
 9  6 62 33 70

33 89 48  4 20
46 66 45 76  7
12 77 43 60 15
54 58 91 95 69
11  8 32 31 18

63 78 55  7 60
95 14 38 10 45
 3 16 72 53 37
 1 89 70 75 44
 5  6 66 13 46

74 65 27 53 39
67 66 76 13 31
75 51 11 49 59
18 12 71  9 89
98 24 73 26 43

90 21 75 77 97
80 29 54 16 10
55 98 65 19  7
96 76 20 28 88
94 83 91 26 86

60 57 22 95 23
81  4 34 36 14
77  1 45 24 19
33 88  8 28 74
 2 17 37 32 94

34 82 45 65 44
70 89 95 20 79
88 18 62 68 37
85 17 54 86 69
97 25 13 42 67

70 30 59 94 86
40 87 20 69 25
46 44 41 17 79
75 99  3 91  8
71 39 73 88 37

90 76 12 80 58
60 45 35 10 33
79 19 65 54 21
63 51 77 15 92
34 53  7 59 44

40 14 68 43 37
12 35 29 82 48
47 28 97 44 93
95 56 33 96 27
38 85 88 49  6

88 36 81 42 10
85 99 29 70 86
64 15 37 96 61
66 76 87 17 62
91 16 60 13 65

45 71 66 80 69
53 39 29 92 99
23  0 72 36 52
75 70 33  2 14
22 77 21 26  3

52 32 14 66 47
53  7  9 69 11
19 36 57 54 65
17 26 76 51 42
13  8 44 63 39

23 84 34 35 19
29 71 81 32 92
22 49 54  6 56
64 94 53 89  2
74 68 11 13 47

34 25 67 59 66
68 27 69 91 33
 4 56 46 99 21
51 13 24 41 12
90 65 19 26 55

15 85  8 65 79
95 51 39 75 96
18 45 68 81 71
67 28 21 61 20
70 29 92 74 36

25 75 23  2 38
66 52 42 62 16
93 63 78 31 65
 0 91 77  4 14
61 59 53 17 10

16 95 72 67 17
71  3 38 90 14
34  8 55 49 33
54 79 20 27 80
96 31 18 70 61

60 46  4 56 49
 2 36  8 51 54
71 82 97  1 18
45 69 37  6 26
85 61 27 92 77

62 90 59 67 25
41 45  7 91 17
10 29 75 43 82
12 78 95 37 32
28 66 76  2 49

26  6 49 44 74
94 34 73 70 64
14 91 23 88 31
90 55 62 75 43
 4  1 63 57 19

 2 30 11 55 52
51 92 73 54 96
89 22 67 56 17
49 50  9 95 45
23 74 13 75  7

 6 31 78 64 89
76 13 83 56 34
95 29 97 49 37
66 77 74 73 90
87 41 62 39 85

51 80 38 15 44
53 23 83 61 63
27 33 79 40 32
84  2 82 20 93
72 92 48 39 98

36 78 46 84 14
56 53 51 92 89
39 99 77 22 32
65 38 42 76  7
62 31  1 87 95

74 99  6  4 20
95 81 27 59 88
63 69 30 25 87
92 96 89 42 18
11 77 91  8 46

29 62 77  3 89
54 12 55 44 34
66 78 83 98 22
17 10 67 82 75
43 16 84 41 19

67 24  9 89 48
56  7 44 47 68
12 38 35 54 14
95 58 78 13 28
97  5 37 99 42

48 64 21 23 92
29 99 75  2 53
41 97 74 39 89
66 63 22 45 73
20 68 30 35 78

76  3 47 40 72
41  7 68  5 58
12 32 81 62 93
91 80 17 78 61
22 95 94 38 33

42 27 70 13  5
77 38 50  3 44
29 56 36 15 97
68 20 94 12 54
64 83 25 55 80

77 63 37 68 73
34 30 22 91 10
16 80 89 98 45
46 36 90 95 83
54 52 57 61 55

55  3 33 66 69
51 97 36 57 50
56 74 35 84 44
45 92 18 42 52
85 13 27 70 20

56 68 71 11 63
12 93 57 94 84
91 13 29 31 75
54 49 51 73  5
81  7 60 53 89

73 55 87 35 84
37 63 41 54 39
58 42 85 66 68
96 24 86 72 27
40 28  4 80 33

29 79  8 76 31
30 20 12  0 61
14 37 49 45 74
64 17  1 91 51
87 67  3 77 47

72 15 46 71 75
41 16 68 14 43
97 25 78 26 39
59 57 88  4 52
20 49  3 23 29

33 78 31 35  6
85 43  7 87 18
68 93  4 80 96
98 13 61 77 23
10 29 34 36  5

 0 78 44 49 14
72 88 30 31 81
34 87 55 27 11
58 64 76 40 62
47 18 38 35 26

16  2 67 56 74
50 41 86 38 39
32 96 59 40  8
17 82 49 55 89
34 88 81 73 94

52 18 32 56 61
40  5 48 64 62
22 57 19 26 91
31  3 95 27 87
74 83 75 99 73

 6 65 91 22 86
82 72 60 41 87
 2 71  9 12 84
51 90 43 49 80
15 20 54 66 29

39 64 35 23 10
73 25  1 45 93
50 37 95 86 78
52  6  2  0 13
26 89 27 62 80

65 67 95 33 60
55 49 64 92  7
56 75 73 35 99
 8 72 80  0 46
41 25  2 69  4

26 51 31 44 25
21  6 70 12 71
67 69 13 63 79
81 74  8 89 30
16 48 88 72 66

99 69 61 29 86
67 88  5 20  2
70 60 27 82  6
95 65 30  9 85
23 58 59 87 66

40 90 43 57 26
10 52 27 64 72
 3 83 11 54 42
39 20 87 15 81
49 28 58 33 29

11 32 63 96 81
77 82  0 30 15
88 31 41 46  6
17 55 76 42 87
24 93 70 66 40

35  6 28 90 21
72 74 78 43  3
47 17 13 41 96
68 12 76 81 11
70 34 33 25 54

94  9 58 91 38
84  7 22 30 63
23 26 49 93 48
79 75 99 96 67
90 19 66 57 47

35 98 24 31 41
79 63 92 70 11
36  3 72 50 93
90 21 40 38 77
 0 14 42 99 67

96 45 75 97 94
68 35  9 30 67
25 88 40 46 37
82 79 90 76 55
50 59 58 22 21

96 73 49 36 56
 6 45 30 81 76
10 95 70 88 98
43 47 74 66 84
77 83 68 54 28

96 48 64 89  6
76 12 47  8 30
39 55 95 11 62
68 25 50 63 31
59 17 46 52 78

66 27 61 79 73
37 88 47 84 72
50 18 99  7 76
97 11 53 43 30
42 56 98 39 63

64 13 45  7 72
66 35 18 68 86
38 30 89 11 29
37 76 23 14 67
36 61 87 26 46

20 72 10 30 17
25 14 74 71 58
34 51 45 43 76
38 75 50 98 42
 2 12 67 66 82

44 23 73 56 88
 4 96 90  0 32
40 86 47 87 50
28 30 42 39 17
10 12 16  8 14

21 33  7 20 78
81 46 77 42 79
84 28 82 93 68
90 63 60  0 34
35 70 40 29 54

93  8 11  2 39
74 40 95 69 57
86 21 31 88 63
52 16 19 20 22
72  7 25 90 77

83 29 90 48 46
97 21  2 65 15
89 28 60 69 26
77 75  9 35 96
82 49 66  5 16

80 57  2 73 46
22 50 87 60 89
95 74 98 93 62
86 61 10 69  9
48 31 53 88 84

46 17 28 56 50
64 65 43 73 22
32 31 89 20 38
13 49 18 55 72
83 41 78 94 57

39  8 68 87 21
78 59 27  0 14
25  3 96 51 63
92 35 19 57 99
83 75 69 37 72

42 36 34 77 69
21 55 47 52 89
61 90  3 23 41
45 80 29 27 99
79 86 87 93 74

59  8 97 48 73
40 31 29 49 85
41 68 11  9 45
87 74 77 75 91
67 27 70 90 16

80 47 53 81 36
75 35 87 90 89
19  5 56 28 26
 8 44 77 31 20
61 96 27 99 79

35 16 40 94 65
60 28 46 51 61
45 53 36 89 80
33 93 12 39 42
13 68 57 64 26

39 55 88 78 72
 6 82 52  1 60
41 23 97 44 11
 3 15 21 93 38
24 90  7 80  2

81 46 31 56 30
94 22 58 69 41
42 91 20  0 14
71 11 17 37 12
 7 73 79  9 26

38 32 24 98 79
48 49  4 17 90
12 20 95 99 10
94 23 30 92 97
84 18 57 11 53

75 22 42 59 55
23 33 90  2 52
94 13 78  0 16
39 72 67 45 31
11 53  7 83 28

43 33 52 89 40
53 94 87 90 19
98 51 64 63 62
66 65 57 93 18
80 79 59 99 73

57 63 96  3 27
88 74  9 60 99
48 30  1 18 15
23 77 89 24 55
37 58 67 91 10

36 73 27 72  8
75 74 87 55  7
 2 67 34 84 51
94 18 23 62 11
65 41  3 29 53

63 67 73 53 13
28 54 19 72 93
48 41 55 64 33
83 70 65 26 22
11 86 35 16 18

13 50 19 48 58
28 42 83 20 29
 5 96 92 90  3
87 93 56 23 78
98 57  0 72 62

95 76 16  5 56
55 28 52 88 73
 6 99 75 90 18
12 25 22 44 57
62 37 36 30 48

24 41 73 90 46
55 91 63 86 44
 0 74 72 47 76
34 13 33 65 62
49 75 10 15 27

85 63 62 11 38
53 29  2  8 13
87 64 31 69 58
88 84 17  3 26
 5 32 23 33 39

25  8 81 29 95
65 56 86 34 17
38 66 85 43 26
39 12 70 32 19
49 68 10  4 13`;

// Lostrekken nummers en borden
const numbers = bingoInput
  .split("\n\n")
  .filter((element) => typeof element !== undefined)
  .shift()
  .split(",");

// Borden los in array
const boards = bingoInput.split("\n\n").slice(1);

// Borden opslaan als 1 lange array ipv 5 rijen onder elkaar
boards.forEach(function (e, i, arr) {
  arr[i] = e.trim().split("\n");
  arr[i].forEach(function (element, index, array) {
    array[index] = element.trim().split(/\s+/g);
  });
});

const boardsArr = boards.map(function (board, i) {
  return {
    board: board,
    boardCount: i,
    inPlay: true,
  };
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

let winnersCount = 0;

const checkWinner = function (boards, board, numbers, turn) {
  if (winnersCount === boards.length - 1) {
    console.log(`Hey de winnaar was bord ${board + 1}`);
    const boardNumbers = boards[board].board.reduce((a, b) => a + "," + b);
    const boardActualNumbers = boardNumbers
      .split(",")
      .map(Number)
      .filter((i) => (isNaN(i) ? 0 : i));
    console.log(boardActualNumbers.reduce((a, b) => a + b) * numbers[turn]);
  }
  boardsArr[board].inPlay = false;
  winnersCount++;
};

////// Loop per cijfer
const playGame = function () {
  for (let turn = 0; turn < numbers.length; turn++) {
    for (let board = 0; board < boardsArr.length; board++) {
      if (boardsArr[board].inPlay) {
        for (let row = 0; row < boardsArr[board].board.length; row++) {
          const currentRow = boardsArr[board].board[row];
          const index = currentRow.indexOf(numbers[turn]);
          if (index !== -1) {
            currentRow.splice(index, 1, "x");
          }
          if (arrayEquals(currentRow, new Array(currentRow.length).fill("x"))) {
            checkWinner(boardsArr, boardsArr[board].boardCount, numbers, turn);
          }
        }
      }
      // Op elke array in board checken of ze ALLEMAAL op zelfde index x hebben staan
      if (boardsArr[board].inPlay) {
        const transposedBoard = boardsArr[board].board[0].map((_, colIndex) =>
          boardsArr[board].board.map((row) => row[colIndex])
        );
        for (let row = 0; row < transposedBoard.length; row++) {
          if (
            arrayEquals(
              transposedBoard[row],
              new Array(transposedBoard[row].length).fill("x")
            )
          ) {
            checkWinner(boardsArr, boardsArr[board].boardCount, numbers, turn);
          }
        }
      }
    }
  }
};
playGame();

// Alleen checken voor boards die nog in play zijn
// Als winnerscount gelijk is aan boardsArr.length - 1, dan pas 'winnaar' announcen.

/*
// Alle mogelijke win conditions uitschrijven als string > Alleen rij of kolom
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

const checkWinner = function (boards, board, numbers, turn) {
  console.log(`Hey de winnaar was bord ${board + 1}`);
  const boardNumbers = boards[board].reduce((a, b) => a + "," + b);
  const boardActualNumbers = boardNumbers
    .split(",")
    .map(Number)
    .filter((i) => (isNaN(i) ? 0 : i));
  console.log(boardActualNumbers.reduce((a, b) => a + b) * numbers[turn]);
};

////// Loop per cijfer
const playGame = function () {
  for (let turn = 0; turn < numbers.length; turn++) {
    for (let board = 0; board < boards.length; board++) {
      for (let row = 0; row < boards[board].length; row++) {
        const currentRow = boards[board][row];
        const index = currentRow.indexOf(numbers[turn]);
        if (index !== -1) {
          currentRow.splice(index, 1, "x");
        }
        if (arrayEquals(currentRow, new Array(currentRow.length).fill("x"))) {
          checkWinner(boards, board, numbers, turn);
          return;
        }
      }

      // Op elke array in board checken of ze ALLEMAAL op zelfde index x hebben staan
      const transposedBoard = boards[board][0].map((_, colIndex) =>
        boards[board].map((row) => row[colIndex])
      );
      for (let row = 0; row < transposedBoard.length; row++) {
        if (
          arrayEquals(
            transposedBoard[row],
            new Array(transposedBoard[row].length).fill("x")
          )
        ) {
          checkWinner(boards, board, numbers, turn);
          return;
        }
      }
    }
  }
};
playGame(); */
