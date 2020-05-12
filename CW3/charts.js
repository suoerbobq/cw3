//round of 16//
// Belgium v Turkey
var chart = c3.generate({
bindto: '#bel_tur_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    // iris data from R
    columns: [
        ['Belgium', 1],
        ['Turkey', 3],
        ['Draws', 5]
    ],
    type : 'donut',
    colors: {
        Belgium: '#FFA500',
        Draws: '#808080',
        Turkey: '#ff0000'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#bel_tur_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Belgium', 13],
            ['Turkey', 15],
        ],
      type : 'donut',
      colors: {
        Belgium: '#FFA500',
        Turkey: '#ff0000'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});


// Netherlands v Portugal
var chart = c3.generate({
bindto: '#ned_por_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['Netherlands', 2],
        ['Portugal', 8],
        ['Draws', 4]
    ],
    type : 'donut',
    colors: {
        Netherlands: 'FF4F00',
        Draws: '#808080',
        Portugal: '#006600'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#ned_por_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Netherlands', 10],
            ['Portugal', 17],
        ],
      type : 'donut',
      colors: {
        Netherlands: 'FF4F00',
        Portugal: '#006600'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});


// Austria v Italy
var chart = c3.generate({
bindto: '#aut_ita_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['Austria', 0],
        ['Italy', 4],
        ['Draws', 1]
    ],
    type : 'donut',
    colors: {
        Austria: '#ff0000',
        Draws: '#808080',
        Italy: '#0064aa'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#aut_ita_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Austria', 3],
            ['Italy', 7],
        ],
      type : 'donut',
      colors: {
        Austria: '#ff0000',
        Italy: '#0064aa'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});



// Denmark v Norway
var chart = c3.generate({
bindto: '#den_nor_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['Denmark', 27],
        ['Norway', 9],
        ['Draws', 8]
    ],
    type : 'donut',
    colors: {
        Denmark: '#C60C30',
        Draws: '#808080',
        Norway: '#002868'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#den_nor_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Denmark', 112],
            ['Norway', 52],
        ],
      type : 'donut',
      colors: {
        Denmark: '#C60C30',
        Norway: '#002868'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});



// Germany v Russia
var chart = c3.generate({
bindto: '#ger_rus_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['Germany', 6],
        ['Russia', 0],
        ['Draws', 1]
    ],
    type : 'donut',
    colors: {
        Germany: '#000000',
        Draws: '#808080',
        Russia: '#DA291C'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#ger_rus_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Germany', 28],
            ['Russia', 3],
        ],
      type : 'donut',
      colors: {
        Germany: '#000000',
        Russia: '#DA291C'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});



// Croatia v Sweden
var chart = c3.generate({
bindto: '#cro_swe_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['Croatia', 3],
        ['Sweden', 1],
        ['Draws', 0]
    ],
    type : 'donut',
    colors: {
        Croatia: '#FF0000',
        Draws: '#808080',
        Sweden: '#FFCD00'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#cro_swe_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Croatia', 5],
            ['Sweden', 4],
        ],
      type : 'donut',
      colors: {
        Croatia: '#FF0000',
        Sweden: '#FFCD00'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});



// England v France
var chart = c3.generate({
bindto: '#eng_fra_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['England', 16],
        ['France', 9],
        ['Draws', 5]
    ],
    type : 'donut',
    colors: {
        England: '#ea1f29',
        Draws: '#808080',
        France: '#0055A4'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#eng_fra_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['England', 67],
            ['France', 38],
        ],
      type : 'donut',
      colors: {
        England: '#ea1f29',
        France: '#0055A4'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});



// Spain v Switzerland
var chart = c3.generate({
bindto: '#esp_sui_wins',
size: {
      height: 220,
      width: 440
    },
data: {
    columns: [
        ['Spain', 2],
        ['Switzerland', 1],
        ['Draws', 1]
    ],
    type : 'donut',
    colors: {
        Spain: '#F1BF00',
        Draws: '#808080',
        Switzerland: '#D52B1E'
      }
},
donut: {
    title: "Head-to-head",
    label: {
format: function (value) { return value; }
}
}
});

var chart = c3.generate({
bindto: '#esp_sui_goals',
size: {
  height: 220,
  width: 440
},
  data: {

      columns: [
            ['Spain', 6],
            ['Switzerland', 3],
        ],
      type : 'donut',
      colors: {
        Spain: '#F1BF00',
        Switzerland: '#D52B1E'
      }
    },
    donut: {
      title: "Goal Ratio",
      label: {
format: function (value) { return value; }
}
    }
});
