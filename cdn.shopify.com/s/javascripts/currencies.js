  var Currency = {
      rates: {
          "USD": 1.0,
          "EUR": 1.07401,
          "GBP": 1.27399,
          "CAD": 0.726997,
          "ARS": 0.0011086,
          "AUD": 0.660781,
          "BRL": 0.18634,
          "CLP": 0.00108323,
          "CNY": 0.137849,
          "CYP": 0.397899,
          "CZK": 0.043441,
          "DKK": 0.143989,
          "EEK": 0.0706676,
          "HKD": 0.128003,
          "HUF": 0.00271773,
          "ISK": 0.00718372,
          "INR": 0.0119613,
          "JMD": 0.00640551,
          "JPY": 0.00636491,
          "LVL": 1.57329,
          "LTL": 0.320236,
          "MTL": 0.293496,
          "MXN": 0.0537955,
          "NZD": 0.614485,
          "NOK": 0.0935065,
          "PLN": 0.247466,
          "SGD": 0.739069,
          "SKK": 21.5517,
          "SIT": 175.439,
          "ZAR": 0.0538896,
          "KRW": 0.0007259,
          "SEK": 0.0953693,
          "CHF": 1.11381,
          "TWD": 0.0309264,
          "UYU": 0.0255113,
          "MYR": 0.211877,
          "BSD": 1.0,
          "CRC": 0.00188855,
          "RON": 0.215793,
          "PHP": 0.0170306,
          "AED": 0.272294,
          "VEB": 2.7478e-10,
          "IDR": 6.12771e-05,
          "TRY": 0.0308782,
          "THB": 0.027225,
          "TTD": 0.14776,
          "ILS": 0.269624,
          "SYP": 7.69152e-05,
          "XCD": 0.370218,
          "COP": 0.000250446,
          "RUB": 0.0110802,
          "HRK": 0.142546,
          "KZT": 0.00221677,
          "TZS": 0.000383098,
          "XPT": 958.975,
          "SAR": 0.266667,
          "NIO": 0.0272012,
          "LAK": 4.62943e-05,
          "OMR": 2.59745,
          "AMD": 0.00258023,
          "CDF": 0.000353487,
          "KPW": 0.00111113,
          "SPL": 6.0,
          "KES": 0.00775236,
          "ZWD": 0.00276319,
          "KHR": 0.000242887,
          "MVR": 0.0648673,
          "GTQ": 0.128856,
          "BZD": 0.493977,
          "BYR": 3.05813e-05,
          "LYD": 0.205766,
          "DZD": 0.00741802,
          "BIF": 0.000346957,
          "GIP": 1.27399,
          "BOB": 0.144891,
          "XOF": 0.00163732,
          "STD": 4.34619e-05,
          "NGN": 0.000659995,
          "PGK": 0.260264,
          "ERN": 0.0666667,
          "MWK": 0.000576663,
          "CUP": 0.0416914,
          "GMD": 0.0147305,
          "CVE": 0.00973982,
          "BTN": 0.0119613,
          "XAF": 0.00163732,
          "UGX": 0.000265464,
          "MAD": 0.10049,
          "MNT": 0.000294467,
          "LSL": 0.0538896,
          "XAG": 29.2973,
          "TOP": 0.42371,
          "SHP": 1.27399,
          "RSD": 0.00917479,
          "HTG": 0.00754048,
          "MGA": 0.000223598,
          "MZN": 0.0156999,
          "FKP": 1.27399,
          "BWP": 0.0729651,
          "HNL": 0.0405082,
          "PYG": 0.000132882,
          "JEP": 1.27399,
          "EGP": 0.0210266,
          "LBP": 1.09861e-05,
          "ANG": 0.558224,
          "WST": 0.365643,
          "TVD": 0.660781,
          "GYD": 0.00478979,
          "GGP": 1.27399,
          "NPR": 0.00747233,
          "KMF": 0.00218309,
          "IRR": 2.3658e-05,
          "XPD": 893.499,
          "SRD": 0.0315754,
          "TMM": 5.70844e-05,
          "SZL": 0.0538896,
          "MOP": 0.124275,
          "BMD": 1.0,
          "XPF": 0.00900021,
          "ETB": 0.0174029,
          "JOD": 1.41044,
          "MDL": 0.0562388,
          "MRO": 0.00253461,
          "YER": 0.00399309,
          "BAM": 0.549133,
          "AWG": 0.558659,
          "PEN": 0.264906,
          "VEF": 2.74781e-07,
          "SLL": 4.45442e-05,
          "KYD": 1.21786,
          "AOA": 0.00115943,
          "TND": 0.318885,
          "TJS": 0.0932459,
          "SCR": 0.0732859,
          "LKR": 0.00329225,
          "DJF": 0.00559401,
          "GNF": 0.000115956,
          "VUV": 0.0083391,
          "SDG": 0.00170794,
          "IMP": 1.27399,
          "GEL": 0.349046,
          "FJD": 0.444762,
          "DOP": 0.0168382,
          "XDR": 1.31933,
          "MUR": 0.0215112,
          "MMK": 0.000476649,
          "LRD": 0.00515488,
          "BBD": 0.5,
          "ZMK": 3.82044e-05,
          "XAU": 2315.14,
          "VND": 3.92929e-05,
          "UAH": 0.0246661,
          "TMT": 0.285422,
          "IQD": 0.0007625,
          "BGN": 0.549133,
          "KGS": 0.0114956,
          "RWF": 0.000756741,
          "BHD": 2.65957,
          "UZS": 7.9242e-05,
          "PKR": 0.00358909,
          "MKD": 0.0174524,
          "AFN": 0.0141108,
          "NAD": 0.0538896,
          "BDT": 0.00850449,
          "AZN": 0.588254,
          "SOS": 0.00175319,
          "QAR": 0.274725,
          "PAB": 1.0,
          "CUC": 1.0,
          "SVC": 0.114286,
          "SBD": 0.119843,
          "ALL": 0.0107082,
          "BND": 0.739069,
          "KWD": 3.26049,
          "GHS": 0.0667556,
          "ZMW": 0.0382044,
          "XBT": 67321.5,
          "NTD": 0.0337206,
          "BYN": 0.305813,
          "CNH": 0.137502,
          "MRU": 0.0253461,
          "STN": 0.0434619,
          "VES": 0.0274781,
          "MXV": 0.443444,
          "VED": 0.0274781,
          "SLE": 0.0445442
      },
      convert: function(amount, from, to) {
          return (amount * this.rates[from]) / this.rates[to];
      }
  };