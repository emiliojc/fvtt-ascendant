const ASCENDANT = {}

/**
 * Challenge Action Resolution Table (CHART)
 * sorted by index from 0 = for RV -6 to 11 = for RV 6, the middle being index 6 = for RV 0
 * within each index, every result is sorted for the damage multiplier
 */
ASCENDANT.RV_TABLE = [
  [ // -6
    { min: 4, max: 7 }, // green
    { min: 2, max: 3 }, // yellow
    { min: 1, max: 1 }, // orange
    { min: 0, max: 0 }, // red
    { min: 8, max: 100 }, // white
  ],
  [ // -5
    { min: 7, max: 9 }, // green
    { min: 3, max: 6 }, // yellow
    { min: 1, max: 2 }, // orange
    { min: 0, max: 0 }, // red
    { min: 10, max: 100 }, // white
  ],
  [ // -4
    { min: 8, max: 12 }, // green
    { min: 4, max: 7 }, // yellow
    { min: 1, max: 3 }, // orange
    { min: 0, max: 0 }, // red
    { min: 13, max: 100 }, // white
  ],
  [ // -3
    { min: 10, max: 19 }, // green
    { min: 5, max: 9 }, // yellow
    { min: 1, max: 4 }, // orange
    { min: 0, max: 0 }, // red
    { min: 20, max: 100 }, // white
  ],
  [ // -2
    { min: 14, max: 25 }, // green
    { min: 7, max: 13 }, //yellowe
    { min: 1, max: 6 }, // orange
    { min: 0, max: 0 }, // red
    { min: 26, max: 100 }, // white
  ],
  [ // -1
    { min: 20, max: 35 }, // green
    { min: 8, max: 19 }, //yellowe
    { min: 1, max: 7 }, // orange
    { min: 0, max: 0 }, // red
    { min: 36, max: 100 }, // white
  ],
  [ // 0
    { min: 27, max: 50 }, // green
    { min: 12, max: 26 }, //yellowe
    { min: 2, max: 11 }, // orange
    { min: 1, max: 1 }, // red
    { min: 51, max: 100 }, // white
  ],
  [ // 1
    { min: 34, max: 67 }, // green
    { min: 14, max: 33 }, //yellowe
    { min: 3, max: 13 }, // orange
    { min: 1, max: 2 }, // red
    { min: 68, max: 100 }, // white
  ],
  [ // 2
    { min: 51, max: 98 }, // green
    { min: 21, max: 50 }, //yellowe
    { min: 4, max: 20 }, // orange
    { min: 1, max: 3 }, // red
    { min: 99, max: 100 }, // white
  ],
  [ // 3
    { min: 80, max: 99 }, // green
    { min: 38, max: 79 }, // yellow
    { min: 10, max: 37 }, // orange
    { min: 1, max: 9 }, // red
    { min: 100, max: 100 }, // white
  ],
  [ // 4
    { min: 99, max: 99 }, // green
    { min: 56, max: 98 }, // yellow
    { min: 24, max: 55 }, // orange
    { min: 1, max: 23 }, // red
    { min: 100, max: 100 }, // white
  ],
  [ // 5
    { min: 99, max: 99 }, // green
    { min: 96, max: 98 }, // yellow
    { min: 48, max: 95 }, // orange
    { min: 1, max: 47 }, // red
    { min: 100, max: 100 }, // white
  ],
  [ // 6
    { min: 99, max: 99 }, // green
    { min: 98, max: 98 }, // yellow
    { min: 97, max: 97 }, // orange
    { min: 1, max: 96 }, // red
    { min: 100, max: 100 }, // white
  ],
];

ASCENDANT.RV_COLORS = [
  'green',
  'yellow',
  'orange',
  'red',
  'white',
];

ASCENDANT.EV_VALUES = [0, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192];

export const ATTRIBUTE_TYPES = ["String", "Number", "Boolean", "Formula", "Resource"];
export default ASCENDANT;
