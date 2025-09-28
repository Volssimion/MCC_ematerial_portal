const programData = {
  Regular: {
    UG: {
      programs: [
        { id: "BAHIS", name: "B.A History" },
        { id: "BAPOL", name: "B.A Political Science" },
        { id: "BAECO", name: "B.A Economics" },
        { id: "BATAM", name: "B.A Tamil" },
        { id: "BAENG", name: "B.A English Language and Literature" },
        { id: "BCOM", name: "B.Com" },
        { id: "BSCMAT", name: "B.Sc Mathematics" },
        { id: "BSCSTA", name: "B.Sc Statistics" },
        { id: "BSCPHY", name: "B.Sc Physics" },
        { id: "BSCCHE", name: "B.Sc Chemistry" },
        { id: "BSCBOT", name: "B.Sc Plant Biology and Plant Biotechnology" },
        { id: "BSCZOO", name: "B.Sc Zoology" },
      ],
      years: [1, 2, 3],
      semesters: {
        1: [1, 2],
        2: [3, 4],
        3: [5, 6],
      },
      batches: ["2024-2026", "2025-2027", "2026-2028"],
    },
    PG: {
      programs: [
        { id: "MAHIS", name: "M.A History" },
        { id: "MAPOL", name: "M.A Political Science" },
        { id: "MAPUB", name: "M.A Public Administration" },
        { id: "MAECO", name: "M.A Economics" },
        { id: "MAPHI", name: "M.A Philosophy" },
        { id: "MATAM", name: "M.A Tamil" },
        { id: "MAENG", name: "M.A English Language and Literature" },
        { id: "MCOM", name: "M.Com" },
        { id: "MSW", name: "M.S.W" },
        { id: "MSCMA", name: "M.Sc Mathematics" },
        { id: "MSCSTA", name: "M.Sc Statistics" },
        { id: "MSCPHY", name: "M.Sc Physics" },
        { id: "MSCCHE", name: "M.Sc Chemistry" },
        { id: "MSCBOT", name: "M.Sc Plant Biology and Plant Biotechnology" },
        { id: "MSCZOO", name: "M.Sc Zoology" },
      ],
      years: [1, 2],
      semesters: {
        1: [1, 2],
        2: [3, 4],
      },
      batches: ["2024-2026", "2025-2027"],
    },
  },

  "self-financed": {
    UG: {
      programs: [
        { id: "BAENGSF", name: "B.A English Language and Literature" },
        {
          id: "BAHISVOC",
          name: "B.A History – Voc (Archeology and Museology)",
        },
        { id: "BAJOUR", name: "B.A Journalism" },
        { id: "BSW", name: "B.S.W Social Work" },
        { id: "BCOMSF", name: "B.Com" },
        { id: "BCOMAF", name: "B.Com Accounting and Finance" },
        { id: "BCOMPA", name: "B.Com Professional Accounting" },
        { id: "BBA", name: "B.B.A Business Administration" },
        { id: "BCA", name: "B.C.A Computer Application" },
        { id: "BSCMAT", name: "B.Sc Mathematics" },
        { id: "BSCPHY", name: "B.Sc Physics" },
        { id: "BSCMIC", name: "B.Sc Microbiology" },
        { id: "BSCVC", name: "B.Sc Visual Communication" },
        { id: "BSCPE", name: "B.Sc Physical Education" },
        { id: "BSCGEO", name: "B.Sc Geography" },
        { id: "BSCTOUR", name: "B.Sc Hospitality and Tourism" },
        { id: "BSCPSY", name: "B.Sc Psychology" },
        { id: "BSCCS", name: "B.Sc Computer Science" },
      ],
      years: [1, 2, 3],
      semesters: {
        1: [1, 2],
        2: [3, 4],
        3: [5, 6],
      },
      batches: ["2024-2027", "2025-2028"],
    },
    PG: {
      programs: [
        { id: "MACOMM", name: "M.A Communication" },
        { id: "MSWHR", name: "M.S.W Human Resource Management" },
        { id: "MSCCHE", name: "M.Sc Chemistry" },
        { id: "MSCAMIC", name: "M.Sc Applied Microbiology" },
        { id: "MSCDS", name: "M.Sc Data Science" },
        {
          id: "MCOMCOBA",
          name: "M.Com Computer Oriented Business Application",
        },
        { id: "MCASF01", name: "M.C.A Computer Applications" },
      ],
      years: [1, 2],
      semesters: {
        1: [1, 2],
        2: [3, 4],
      },
      batches: ["2024-2026", "2025-2027"],
    },
  },
};

export default programData;
