//Round of 16
var minimalData = {
  "teams": [              // Matchups
    ["BEL", "TUR"], // First match
    ["NED", "POR"],
    ["AUT", "ITA"],
    ["DEN", "NOR"],
    ["GER", "RUS"],
    ["CRO", "SWE"],
    ["ENG", "FRA"],
    ["ESP", "SUI"]                      // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket
        [1, 0],           // Team 1 vs Team 2
        [3, 2],
        [0, 3],
        [2, 0],
        [4, 1],
        [1, 2],
        [3, 2],
        [3, 4],            // Team 3 vs Team 4
      ],
    ]
  ]
};


$('.demo1').bracket({
init: minimalData
});

var minimalData = {
  "teams": [              // Matchups
    ["BEL", "TUR"], // First match
    ["NED", "POR"],
    ["AUT", "ITA"],
    ["DEN", "NOR"],
    ["GER", "RUS"],
    ["CRO", "SWE"],
    ["ENG", "FRA"],
    ["ESP", "SUI"]                      // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket          // Team 3 vs Team 4
      ],
    ]
  ]
};


$('.demo').bracket({
init: minimalData
});

var resizeParameters = {
  teamWidth: 100,
  scoreWidth: 100,
  matchMargin: 100,
  roundMargin: 100,
  init: minimalData
};


//Quarter-Finals
var minimalData = {
  "teams": [              // Matchups
    ["BEL", "NED"], // First match
    ["ENG", "SUI"],
    ["GER", "SWE"],
    ["ITA", "DEN"]                   // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [
        [1, 3],
        [3, 0],
        [2, 0],
        [1, 3],
      ],
    ]
  ]
};


$('.demo2').bracket({
init: minimalData
});


//Semi-Finals
var minimalData = {
  "teams": [              // Matchups
    ["GER", "DEN"], // First match
    ["ENG", "NED"]                 // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [
        [6, 5],
        [1, 2],
      ],
    ]
  ]
};


$('.demo3').bracket({
init: minimalData
});


function updateResizeDemo() {
  $('#resize .demo').bracket(resizeParameters);
}

  $(updateResizeDemo)
