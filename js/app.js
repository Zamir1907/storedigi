/* =====================================================
   KiosPulsa — App Logic (Updated)
   ===================================================== */

const APP = {
  storageKeys: {
    user: 'kp_user',
    orders: 'kp_orders',
    deposits: 'kp_deposits',
    tickets: 'kp_tickets',
    theme: 'kp_theme',
    hasDeposited: 'kp_has_deposited',
    pendingDeposit: 'kp_pending_deposit'
  },

  config: {
    bonusRegister: 5000,
    minDeposit: 10000,
    processDelayMin: 800,
    processDelayMax: 2500,
    depositConfirmDelay: 25
  },

  products: {
    pulsa: [
      { id: 'p-tsel-5', op: 'telkomsel', name: 'Pulsa Telkomsel 5.000', nominal: 5000, price: 4750, normal: 5500, discount: 14 },
      { id: 'p-tsel-10', op: 'telkomsel', name: 'Pulsa Telkomsel 10.000', nominal: 10000, price: 9450, normal: 10500, discount: 10 },
      { id: 'p-tsel-15', op: 'telkomsel', name: 'Pulsa Telkomsel 15.000', nominal: 15000, price: 14100, normal: 15700, discount: 10 },
      { id: 'p-tsel-20', op: 'telkomsel', name: 'Pulsa Telkomsel 20.000', nominal: 20000, price: 18700, normal: 20500, discount: 9 },
      { id: 'p-tsel-25', op: 'telkomsel', name: 'Pulsa Telkomsel 25.000', nominal: 25000, price: 23300, normal: 25500, discount: 9 },
      { id: 'p-tsel-30', op: 'telkomsel', name: 'Pulsa Telkomsel 30.000', nominal: 30000, price: 27900, normal: 30700, discount: 9 },
      { id: 'p-tsel-50', op: 'telkomsel', name: 'Pulsa Telkomsel 50.000', nominal: 50000, price: 46200, normal: 51000, discount: 9 },
      { id: 'p-tsel-100', op: 'telkomsel', name: 'Pulsa Telkomsel 100.000', nominal: 100000, price: 91900, normal: 101500, discount: 9 },
      { id: 'p-tsel-150', op: 'telkomsel', name: 'Pulsa Telkomsel 150.000', nominal: 150000, price: 137500, normal: 152000, discount: 10 },
      { id: 'p-tsel-200', op: 'telkomsel', name: 'Pulsa Telkomsel 200.000', nominal: 200000, price: 182000, normal: 203000, discount: 10 },
      { id: 'p-tsel-300', op: 'telkomsel', name: 'Pulsa Telkomsel 300.000', nominal: 300000, price: 272000, normal: 305000, discount: 11 },
      { id: 'p-tsel-500', op: 'telkomsel', name: 'Pulsa Telkomsel 500.000', nominal: 500000, price: 449000, normal: 510000, discount: 12 },
      { id: 'p-tsel-1000', op: 'telkomsel', name: 'Pulsa Telkomsel 1.000.000', nominal: 1000000, price: 889000, normal: 1020000, discount: 13 },
      { id: 'p-isat-5', op: 'indosat', name: 'Pulsa Indosat 5.000', nominal: 5000, price: 4700, normal: 5500, discount: 15 },
      { id: 'p-isat-10', op: 'indosat', name: 'Pulsa Indosat 10.000', nominal: 10000, price: 9350, normal: 10500, discount: 11 },
      { id: 'p-isat-15', op: 'indosat', name: 'Pulsa Indosat 15.000', nominal: 15000, price: 13950, normal: 15700, discount: 11 },
      { id: 'p-isat-20', op: 'indosat', name: 'Pulsa Indosat 20.000', nominal: 20000, price: 18500, normal: 20500, discount: 10 },
      { id: 'p-isat-25', op: 'indosat', name: 'Pulsa Indosat 25.000', nominal: 25000, price: 23100, normal: 25500, discount: 9 },
      { id: 'p-isat-50', op: 'indosat', name: 'Pulsa Indosat 50.000', nominal: 50000, price: 45800, normal: 51000, discount: 10 },
      { id: 'p-isat-100', op: 'indosat', name: 'Pulsa Indosat 100.000', nominal: 100000, price: 91200, normal: 101500, discount: 10 },
      { id: 'p-isat-200', op: 'indosat', name: 'Pulsa Indosat 200.000', nominal: 200000, price: 181000, normal: 203000, discount: 11 },
      { id: 'p-isat-500', op: 'indosat', name: 'Pulsa Indosat 500.000', nominal: 500000, price: 445000, normal: 510000, discount: 13 },
      { id: 'p-isat-1000', op: 'indosat', name: 'Pulsa Indosat 1.000.000', nominal: 1000000, price: 885000, normal: 1020000, discount: 13 },
      { id: 'p-xl-5', op: 'xl', name: 'Pulsa XL 5.000', nominal: 5000, price: 4800, normal: 5600, discount: 14 },
      { id: 'p-xl-10', op: 'xl', name: 'Pulsa XL 10.000', nominal: 10000, price: 9500, normal: 10600, discount: 10 },
      { id: 'p-xl-15', op: 'xl', name: 'Pulsa XL 15.000', nominal: 15000, price: 14200, normal: 15800, discount: 10 },
      { id: 'p-xl-25', op: 'xl', name: 'Pulsa XL 25.000', nominal: 25000, price: 23400, normal: 25600, discount: 9 },
      { id: 'p-xl-50', op: 'xl', name: 'Pulsa XL 50.000', nominal: 50000, price: 46500, normal: 51200, discount: 9 },
      { id: 'p-xl-100', op: 'xl', name: 'Pulsa XL 100.000', nominal: 100000, price: 92500, normal: 102000, discount: 9 },
      { id: 'p-xl-200', op: 'xl', name: 'Pulsa XL 200.000', nominal: 200000, price: 183500, normal: 204000, discount: 10 },
      { id: 'p-xl-500', op: 'xl', name: 'Pulsa XL 500.000', nominal: 500000, price: 448000, normal: 512000, discount: 12 },
      { id: 'p-xl-1000', op: 'xl', name: 'Pulsa XL 1.000.000', nominal: 1000000, price: 890000, normal: 1025000, discount: 13 },
      { id: 'p-axis-5', op: 'axis', name: 'Pulsa Axis 5.000', nominal: 5000, price: 4750, normal: 5500, discount: 14 },
      { id: 'p-axis-10', op: 'axis', name: 'Pulsa Axis 10.000', nominal: 10000, price: 9400, normal: 10500, discount: 10 },
      { id: 'p-axis-25', op: 'axis', name: 'Pulsa Axis 25.000', nominal: 25000, price: 23200, normal: 25500, discount: 9 },
      { id: 'p-axis-50', op: 'axis', name: 'Pulsa Axis 50.000', nominal: 50000, price: 46000, normal: 51000, discount: 10 },
      { id: 'p-axis-100', op: 'axis', name: 'Pulsa Axis 100.000', nominal: 100000, price: 91500, normal: 101500, discount: 10 },
      { id: 'p-axis-200', op: 'axis', name: 'Pulsa Axis 200.000', nominal: 200000, price: 181500, normal: 203000, discount: 11 },
      { id: 'p-axis-500', op: 'axis', name: 'Pulsa Axis 500.000', nominal: 500000, price: 446000, normal: 510000, discount: 13 },
      { id: 'p-tri-5', op: 'tri', name: 'Pulsa Tri 5.000', nominal: 5000, price: 4650, normal: 5500, discount: 15 },
      { id: 'p-tri-10', op: 'tri', name: 'Pulsa Tri 10.000', nominal: 10000, price: 9250, normal: 10500, discount: 12 },
      { id: 'p-tri-25', op: 'tri', name: 'Pulsa Tri 25.000', nominal: 25000, price: 22800, normal: 25500, discount: 11 },
      { id: 'p-tri-50', op: 'tri', name: 'Pulsa Tri 50.000', nominal: 50000, price: 45200, normal: 51000, discount: 11 },
      { id: 'p-tri-100', op: 'tri', name: 'Pulsa Tri 100.000', nominal: 100000, price: 90500, normal: 101500, discount: 11 },
      { id: 'p-tri-200', op: 'tri', name: 'Pulsa Tri 200.000', nominal: 200000, price: 179000, normal: 203000, discount: 12 },
      { id: 'p-tri-500', op: 'tri', name: 'Pulsa Tri 500.000', nominal: 500000, price: 442000, normal: 510000, discount: 13 },
      { id: 'p-sf-5', op: 'smartfren', name: 'Pulsa Smartfren 5.000', nominal: 5000, price: 4700, normal: 5500, discount: 15 },
      { id: 'p-sf-10', op: 'smartfren', name: 'Pulsa Smartfren 10.000', nominal: 10000, price: 9350, normal: 10500, discount: 11 },
      { id: 'p-sf-25', op: 'smartfren', name: 'Pulsa Smartfren 25.000', nominal: 25000, price: 23000, normal: 25500, discount: 10 },
      { id: 'p-sf-50', op: 'smartfren', name: 'Pulsa Smartfren 50.000', nominal: 50000, price: 45500, normal: 51000, discount: 11 },
      { id: 'p-sf-100', op: 'smartfren', name: 'Pulsa Smartfren 100.000', nominal: 100000, price: 91000, normal: 101500, discount: 10 },
      { id: 'p-sf-200', op: 'smartfren', name: 'Pulsa Smartfren 200.000', nominal: 200000, price: 180500, normal: 203000, discount: 11 },
      { id: 'p-byu-10', op: 'byu', name: 'Pulsa by.U 10.000', nominal: 10000, price: 9450, normal: 10500, discount: 10 },
      { id: 'p-byu-25', op: 'byu', name: 'Pulsa by.U 25.000', nominal: 25000, price: 23300, normal: 25500, discount: 9 },
      { id: 'p-byu-50', op: 'byu', name: 'Pulsa by.U 50.000', nominal: 50000, price: 46200, normal: 51000, discount: 9 },
      { id: 'p-byu-100', op: 'byu', name: 'Pulsa by.U 100.000', nominal: 100000, price: 92000, normal: 101500, discount: 9 },
      { id: 'p-byu-200', op: 'byu', name: 'Pulsa by.U 200.000', nominal: 200000, price: 182500, normal: 203000, discount: 10 }
    ],
    ewallet: [
      { id: 'e-dana-10', op: 'dana', name: 'Dana 10.000', nominal: 10000, price: 9500, normal: 10500, discount: 10 },
      { id: 'e-dana-20', op: 'dana', name: 'Dana 20.000', nominal: 20000, price: 18900, normal: 20700, discount: 9 },
      { id: 'e-dana-25', op: 'dana', name: 'Dana 25.000', nominal: 25000, price: 23500, normal: 25800, discount: 9 },
      { id: 'e-dana-50', op: 'dana', name: 'Dana 50.000', nominal: 50000, price: 46800, normal: 51200, discount: 9 },
      { id: 'e-dana-100', op: 'dana', name: 'Dana 100.000', nominal: 100000, price: 92900, normal: 102000, discount: 9 },
      { id: 'e-dana-200', op: 'dana', name: 'Dana 200.000', nominal: 200000, price: 184500, normal: 204000, discount: 10 },
      { id: 'e-dana-500', op: 'dana', name: 'Dana 500.000', nominal: 500000, price: 455000, normal: 512000, discount: 11 },
      { id: 'e-dana-1000', op: 'dana', name: 'Dana 1.000.000', nominal: 1000000, price: 899000, normal: 1025000, discount: 12 },
      { id: 'e-ovo-10', op: 'ovo', name: 'OVO 10.000', nominal: 10000, price: 9550, normal: 10600, discount: 10 },
      { id: 'e-ovo-20', op: 'ovo', name: 'OVO 20.000', nominal: 20000, price: 19000, normal: 20800, discount: 9 },
      { id: 'e-ovo-25', op: 'ovo', name: 'OVO 25.000', nominal: 25000, price: 23600, normal: 25900, discount: 9 },
      { id: 'e-ovo-50', op: 'ovo', name: 'OVO 50.000', nominal: 50000, price: 47000, normal: 51500, discount: 9 },
      { id: 'e-ovo-100', op: 'ovo', name: 'OVO 100.000', nominal: 100000, price: 93500, normal: 102500, discount: 9 },
      { id: 'e-ovo-200', op: 'ovo', name: 'OVO 200.000', nominal: 200000, price: 185500, normal: 205000, discount: 10 },
      { id: 'e-ovo-500', op: 'ovo', name: 'OVO 500.000', nominal: 500000, price: 458000, normal: 515000, discount: 11 },
      { id: 'e-ovo-1000', op: 'ovo', name: 'OVO 1.000.000', nominal: 1000000, price: 905000, normal: 1030000, discount: 12 },
      { id: 'e-gopay-10', op: 'gopay', name: 'GoPay 10.000', nominal: 10000, price: 9600, normal: 10600, discount: 9 },
      { id: 'e-gopay-20', op: 'gopay', name: 'GoPay 20.000', nominal: 20000, price: 19100, normal: 20800, discount: 8 },
      { id: 'e-gopay-50', op: 'gopay', name: 'GoPay 50.000', nominal: 50000, price: 47200, normal: 51500, discount: 8 },
      { id: 'e-gopay-100', op: 'gopay', name: 'GoPay 100.000', nominal: 100000, price: 93800, normal: 102500, discount: 9 },
      { id: 'e-gopay-200', op: 'gopay', name: 'GoPay 200.000', nominal: 200000, price: 186000, normal: 205000, discount: 9 },
      { id: 'e-gopay-500', op: 'gopay', name: 'GoPay 500.000', nominal: 500000, price: 460000, normal: 515000, discount: 11 },
      { id: 'e-gopay-1000', op: 'gopay', name: 'GoPay 1.000.000', nominal: 1000000, price: 908000, normal: 1030000, discount: 12 },
      { id: 'e-spay-10', op: 'shopeepay', name: 'ShopeePay 10.000', nominal: 10000, price: 9450, normal: 10500, discount: 10 },
      { id: 'e-spay-20', op: 'shopeepay', name: 'ShopeePay 20.000', nominal: 20000, price: 18800, normal: 20700, discount: 9 },
      { id: 'e-spay-50', op: 'shopeepay', name: 'ShopeePay 50.000', nominal: 50000, price: 46500, normal: 51200, discount: 9 },
      { id: 'e-spay-100', op: 'shopeepay', name: 'ShopeePay 100.000', nominal: 100000, price: 92500, normal: 102000, discount: 9 },
      { id: 'e-spay-200', op: 'shopeepay', name: 'ShopeePay 200.000', nominal: 200000, price: 183500, normal: 204000, discount: 10 },
      { id: 'e-spay-500', op: 'shopeepay', name: 'ShopeePay 500.000', nominal: 500000, price: 452000, normal: 512000, discount: 12 },
      { id: 'e-spay-1000', op: 'shopeepay', name: 'ShopeePay 1.000.000', nominal: 1000000, price: 895000, normal: 1025000, discount: 13 },
      { id: 'e-la-10', op: 'linkaja', name: 'LinkAja 10.000', nominal: 10000, price: 9550, normal: 10600, discount: 10 },
      { id: 'e-la-20', op: 'linkaja', name: 'LinkAja 20.000', nominal: 20000, price: 19050, normal: 20800, discount: 8 },
      { id: 'e-la-50', op: 'linkaja', name: 'LinkAja 50.000', nominal: 50000, price: 47100, normal: 51500, discount: 9 },
      { id: 'e-la-100', op: 'linkaja', name: 'LinkAja 100.000', nominal: 100000, price: 93600, normal: 102500, discount: 9 },
      { id: 'e-la-200', op: 'linkaja', name: 'LinkAja 200.000', nominal: 200000, price: 185800, normal: 205000, discount: 9 },
      { id: 'e-la-500', op: 'linkaja', name: 'LinkAja 500.000', nominal: 500000, price: 459000, normal: 515000, discount: 11 }
    ],
    pln: [
      { id: 'pln-20', op: 'pln', name: 'Token PLN 20.000', nominal: 20000, price: 20150, normal: 22000, discount: 8 },
      { id: 'pln-50', op: 'pln', name: 'Token PLN 50.000', nominal: 50000, price: 49800, normal: 53500, discount: 7 },
      { id: 'pln-100', op: 'pln', name: 'Token PLN 100.000', nominal: 100000, price: 98900, normal: 106000, discount: 7 },
      { id: 'pln-200', op: 'pln', name: 'Token PLN 200.000', nominal: 200000, price: 196500, normal: 211000, discount: 7 },
      { id: 'pln-500', op: 'pln', name: 'Token PLN 500.000', nominal: 500000, price: 489000, normal: 525000, discount: 7 },
      { id: 'pln-1000', op: 'pln', name: 'Token PLN 1.000.000', nominal: 1000000, price: 975000, normal: 1050000, discount: 7 },
      { id: 'pln-2000', op: 'pln', name: 'Token PLN 2.000.000', nominal: 2000000, price: 1945000, normal: 2100000, discount: 7 },
      { id: 'pln-5000', op: 'pln', name: 'Token PLN 5.000.000', nominal: 5000000, price: 4840000, normal: 5250000, discount: 8 }
    ],
    game: [
      { id: 'g-ml-86', op: 'mlbb', name: 'MLBB 86 Diamonds', nominal: '86 DM', price: 18500, normal: 22000, discount: 16 },
      { id: 'g-ml-172', op: 'mlbb', name: 'MLBB 172 Diamonds', nominal: '172 DM', price: 36500, normal: 43000, discount: 15 },
      { id: 'g-ml-257', op: 'mlbb', name: 'MLBB 257 Diamonds', nominal: '257 DM', price: 54500, normal: 64000, discount: 15 },
      { id: 'g-ml-344', op: 'mlbb', name: 'MLBB 344 Diamonds', nominal: '344 DM', price: 72500, normal: 85000, discount: 15 },
      { id: 'g-ml-429', op: 'mlbb', name: 'MLBB 429 Diamonds', nominal: '429 DM', price: 89900, normal: 106000, discount: 15 },
      { id: 'g-ml-514', op: 'mlbb', name: 'MLBB 514 Diamonds', nominal: '514 DM', price: 107500, normal: 127000, discount: 15 },
      { id: 'g-ml-706', op: 'mlbb', name: 'MLBB 706 Diamonds', nominal: '706 DM', price: 147000, normal: 175000, discount: 16 },
      { id: 'g-ml-1050', op: 'mlbb', name: 'MLBB 1050 Diamonds', nominal: '1050 DM', price: 215000, normal: 255000, discount: 16 },
      { id: 'g-ml-2195', op: 'mlbb', name: 'MLBB 2195 Diamonds', nominal: '2195 DM', price: 445000, normal: 530000, discount: 16 },
      { id: 'g-ml-starlight', op: 'mlbb', name: 'MLBB Starlight Member', nominal: 'Starlight', price: 125000, normal: 150000, discount: 17 },
      { id: 'g-ff-50', op: 'freefire', name: 'Free Fire 50 Diamonds', nominal: '50 DM', price: 6500, normal: 8000, discount: 19 },
      { id: 'g-ff-70', op: 'freefire', name: 'Free Fire 70 Diamonds', nominal: '70 DM', price: 8900, normal: 11000, discount: 19 },
      { id: 'g-ff-140', op: 'freefire', name: 'Free Fire 140 Diamonds', nominal: '140 DM', price: 17500, normal: 21500, discount: 19 },
      { id: 'g-ff-355', op: 'freefire', name: 'Free Fire 355 Diamonds', nominal: '355 DM', price: 43500, normal: 53000, discount: 18 },
      { id: 'g-ff-720', op: 'freefire', name: 'Free Fire 720 Diamonds', nominal: '720 DM', price: 87500, normal: 106000, discount: 17 },
      { id: 'g-ff-1450', op: 'freefire', name: 'Free Fire 1450 Diamonds', nominal: '1450 DM', price: 172000, normal: 210000, discount: 18 },
      { id: 'g-ff-2180', op: 'freefire', name: 'Free Fire 2180 Diamonds', nominal: '2180 DM', price: 255000, normal: 315000, discount: 19 },
      { id: 'g-ff-3640', op: 'freefire', name: 'Free Fire 3640 Diamonds', nominal: '3640 DM', price: 420000, normal: 520000, discount: 19 },
      { id: 'g-ff-bp', op: 'freefire', name: 'Free Fire Booyah Pass', nominal: 'BP', price: 89000, normal: 110000, discount: 19 },
      { id: 'g-pubg-60', op: 'pubg', name: 'PUBG Mobile 60 UC', nominal: '60 UC', price: 12500, normal: 15000, discount: 17 },
      { id: 'g-pubg-325', op: 'pubg', name: 'PUBG Mobile 325 UC', nominal: '325 UC', price: 65500, normal: 79000, discount: 17 },
      { id: 'g-pubg-660', op: 'pubg', name: 'PUBG Mobile 660 UC', nominal: '660 UC', price: 129000, normal: 155000, discount: 17 },
      { id: 'g-pubg-1800', op: 'pubg', name: 'PUBG Mobile 1800 UC', nominal: '1800 UC', price: 345000, normal: 420000, discount: 18 },
      { id: 'g-pubg-3850', op: 'pubg', name: 'PUBG Mobile 3850 UC', nominal: '3850 UC', price: 720000, normal: 880000, discount: 18 },
      { id: 'g-pubg-8100', op: 'pubg', name: 'PUBG Mobile 8100 UC', nominal: '8100 UC', price: 1480000, normal: 1800000, discount: 18 },
      { id: 'g-val-125', op: 'valorant', name: 'Valorant 125 VP', nominal: '125 VP', price: 14500, normal: 17500, discount: 17 },
      { id: 'g-val-420', op: 'valorant', name: 'Valorant 420 VP', nominal: '420 VP', price: 47500, normal: 58000, discount: 18 },
      { id: 'g-val-700', op: 'valorant', name: 'Valorant 700 VP', nominal: '700 VP', price: 78500, normal: 95000, discount: 17 },
      { id: 'g-val-1375', op: 'valorant', name: 'Valorant 1375 VP', nominal: '1375 VP', price: 152000, normal: 185000, discount: 18 },
      { id: 'g-val-2400', op: 'valorant', name: 'Valorant 2400 VP', nominal: '2400 VP', price: 265000, normal: 320000, discount: 17 },
      { id: 'g-val-4000', op: 'valorant', name: 'Valorant 4000 VP', nominal: '4000 VP', price: 435000, normal: 530000, discount: 18 },
      { id: 'g-val-8150', op: 'valorant', name: 'Valorant 8150 VP', nominal: '8150 VP', price: 875000, normal: 1070000, discount: 18 },
      { id: 'g-gi-60', op: 'genshin', name: 'Genshin 60 Genesis Crystal', nominal: '60 GC', price: 12500, normal: 15000, discount: 17 },
      { id: 'g-gi-300', op: 'genshin', name: 'Genshin 300+30 Genesis', nominal: '330 GC', price: 61500, normal: 75000, discount: 18 },
      { id: 'g-gi-980', op: 'genshin', name: 'Genshin 980+110 Genesis', nominal: '1090 GC', price: 195000, normal: 240000, discount: 19 },
      { id: 'g-gi-1980', op: 'genshin', name: 'Genshin 1980+260 Genesis', nominal: '2240 GC', price: 385000, normal: 475000, discount: 19 },
      { id: 'g-gi-3280', op: 'genshin', name: 'Genshin 3280+600 Genesis', nominal: '3880 GC', price: 625000, normal: 780000, discount: 20 },
      { id: 'g-gi-6480', op: 'genshin', name: 'Genshin 6480+1600 Genesis', nominal: '8080 GC', price: 1220000, normal: 1520000, discount: 20 },
      { id: 'g-hok-60', op: 'hok', name: 'Honor of Kings 60 Tokens', nominal: '60 T', price: 10500, normal: 13000, discount: 19 },
      { id: 'g-hok-300', op: 'hok', name: 'Honor of Kings 300 Tokens', nominal: '300 T', price: 50500, normal: 62000, discount: 19 },
      { id: 'g-hok-680', op: 'hok', name: 'Honor of Kings 680 Tokens', nominal: '680 T', price: 112000, normal: 138000, discount: 19 },
      { id: 'g-hok-1280', op: 'hok', name: 'Honor of Kings 1280 Tokens', nominal: '1280 T', price: 208000, normal: 255000, discount: 18 },
      { id: 'g-rbx-80', op: 'roblox', name: 'Roblox 80 Robux', nominal: '80 R$', price: 14500, normal: 18000, discount: 19 },
      { id: 'g-rbx-400', op: 'roblox', name: 'Roblox 400 Robux', nominal: '400 R$', price: 68500, normal: 85000, discount: 19 },
      { id: 'g-rbx-800', op: 'roblox', name: 'Roblox 800 Robux', nominal: '800 R$', price: 132000, normal: 165000, discount: 20 },
      { id: 'g-rbx-1700', op: 'roblox', name: 'Roblox 1700 Robux', nominal: '1700 R$', price: 275000, normal: 345000, discount: 20 },
      { id: 'g-rbx-4500', op: 'roblox', name: 'Roblox 4500 Robux', nominal: '4500 R$', price: 715000, normal: 900000, discount: 21 }
    ]
  },

  opMeta: {
    telkomsel: { name: 'Telkomsel', icon: 'fa-signal', bg: 'bg-telkomsel' },
    indosat: { name: 'Indosat', icon: 'fa-broadcast-tower', bg: 'bg-indosat' },
    xl: { name: 'XL', icon: 'fa-wifi', bg: 'bg-xl' },
    axis: { name: 'Axis', icon: 'fa-wifi', bg: 'bg-axis' },
    tri: { name: 'Tri', icon: 'fa-mobile-alt', bg: 'bg-tri' },
    smartfren: { name: 'Smartfren', icon: 'fa-signal', bg: 'bg-smartfren' },
    byu: { name: 'by.U', icon: 'fa-mobile', bg: 'bg-byu' },
    dana: { name: 'Dana', icon: 'fa-wallet', bg: 'bg-dana' },
    ovo: { name: 'OVO', icon: 'fa-wallet', bg: 'bg-ovo' },
    gopay: { name: 'GoPay', icon: 'fa-wallet', bg: 'bg-gopay' },
    shopeepay: { name: 'ShopeePay', icon: 'fa-shopping-bag', bg: 'bg-shopeepay' },
    linkaja: { name: 'LinkAja', icon: 'fa-link', bg: 'bg-linkaja' },
    pln: { name: 'PLN', icon: 'fa-bolt', bg: 'bg-pln' },
    mlbb: { name: 'Mobile Legends', icon: 'fa-gamepad', bg: 'bg-mlbb' },
    freefire: { name: 'Free Fire', icon: 'fa-fire', bg: 'bg-freefire' },
    pubg: { name: 'PUBG Mobile', icon: 'fa-crosshairs', bg: 'bg-pubg' },
    valorant: { name: 'Valorant', icon: 'fa-crosshairs', bg: 'bg-valorant' },
    genshin: { name: 'Genshin Impact', icon: 'fa-star', bg: 'bg-genshin' },
    hok: { name: 'Honor of Kings', icon: 'fa-crown', bg: 'bg-hok' },
    roblox: { name: 'Roblox', icon: 'fa-cube', bg: 'bg-roblox' }
  },

  categoryMeta: {
    pulsa: { name: 'Pulsa Semua Operator', icon: 'fa-mobile-alt', color: 'bg-telkomsel' },
    ewallet: { name: 'Top Up E-Wallet', icon: 'fa-wallet', color: 'bg-ewallet' },
    pln: { name: 'Token Listrik PLN', icon: 'fa-bolt', color: 'bg-pln' },
    game: { name: 'Top Up Game', icon: 'fa-gamepad', color: 'bg-game' }
  },

  currentUser: null,
  selectedProduct: null,
  selectedCategory: null,
  selectedNominal: null,
  currentCategory: 'pulsa',
  currentOpFilter: 'all',
  selectedDepositAmount: null,
  selectedMethod: 'qris',
  depositTimer: null,
  depositUnlockAt: null,

  init() {
    this.loadTheme();
    this.loadUser();
    this.bindProtection();
    this.bindGlobalEvents();
    this.updateHeaderUI();
    this.renderPageSpecific();
  },

  get(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },

  loadTheme() {
    const theme = localStorage.getItem(this.storageKeys.theme) || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeIcon(theme);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(this.storageKeys.theme, next);
    this.updateThemeIcon(next);
  },

  updateThemeIcon(theme) {
    const el = document.getElementById('themeIcon');
    if (el) el.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    const label = document.getElementById('themeLabel');
    if (label) label.textContent = theme === 'dark' ? 'Mode Terang' : 'Mode Gelap';
  },

  loadUser() {
    this.currentUser = this.get(this.storageKeys.user);
  },

  saveUser() {
    if (this.currentUser) this.set(this.storageKeys.user, this.currentUser);
  },

  isLoggedIn() {
    return !!this.currentUser;
  },

  hasRealDeposit() {
    return localStorage.getItem(this.storageKeys.hasDeposited) === '1';
  },

  formatRp(n) {
    return 'Rp' + Number(n).toLocaleString('id-ID');
  },

  formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  },

  generateId(prefix) {
    return prefix + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  },

  toast(title, msg, type = 'info', duration = 3500) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const icons = { success: 'fa-check', error: 'fa-times', info: 'fa-info', warning: 'fa-exclamation' };
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.innerHTML = `
      <div class="toast-icon"><i class="fas ${icons[type] || icons.info}"></i></div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${msg}</div>
      </div>
    `;
    container.appendChild(el);
    setTimeout(() => {
      el.classList.add('hiding');
      setTimeout(() => el.remove(), 300);
    }, duration);
  },

  openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('show');
  },

  closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show');
  },

  showAuthModal(tab = 'login') {
    this.switchAuthTab(tab);
    this.openModal('authModal');
  },

  switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-panel').forEach(p => p.classList.add('hidden'));
    const tabEl = document.querySelector(`.auth-tab[data-tab="${tab}"]`);
    const panel = document.getElementById('auth' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (tabEl) tabEl.classList.add('active');
    if (panel) panel.classList.remove('hidden');
  },

  handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const pass = document.getElementById('regPass').value;
    if (!name || !phone || !pass) {
      this.toast('Lengkapi data', 'Semua field wajib diisi.', 'warning');
      return;
    }
    if (phone.length < 10 || phone.length > 14) {
      this.toast('Nomor tidak valid', 'Masukkan nomor HP yang benar (10–14 digit).', 'warning');
      return;
    }
    if (pass.length < 6) {
      this.toast('Password terlalu pendek', 'Minimal 6 karakter.', 'warning');
      return;
    }
    const existing = this.get(this.storageKeys.user);
    if (existing && existing.phone === phone) {
      this.toast('Sudah terdaftar', 'Nomor ini sudah punya akun. Silakan masuk.', 'warning');
      return;
    }
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Mendaftar...';
    setTimeout(() => {
      this.currentUser = {
        id: this.generateId('usr'),
        name, phone, password: pass,
        balance: this.config.bonusRegister,
        createdAt: new Date().toISOString()
      };
      this.saveUser();
      localStorage.setItem(this.storageKeys.hasDeposited, '0');
      btn.disabled = false;
      btn.innerHTML = orig;
      this.closeModal('authModal');
      this.updateHeaderUI();
      this.toast('Selamat datang!', `Bonus saldo ${this.formatRp(this.config.bonusRegister)} sudah masuk. Silakan deposit untuk mulai order.`, 'success', 5000);
      if (typeof this.onLoginSuccess === 'function') {
        this.onLoginSuccess();
        this.onLoginSuccess = null;
      }
    }, 1200);
  },

  handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value.trim();
    const pass = document.getElementById('loginPass').value;
    if (!phone || !pass) {
      this.toast('Lengkapi data', 'Nomor HP dan password wajib diisi.', 'warning');
      return;
    }
    const user = this.get(this.storageKeys.user);
    if (!user || user.phone !== phone || user.password !== pass) {
      this.toast('Gagal masuk', 'Nomor HP atau password salah.', 'error');
      return;
    }
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Masuk...';
    setTimeout(() => {
      this.currentUser = user;
      this.saveUser();
      btn.disabled = false;
      btn.innerHTML = orig;
      this.closeModal('authModal');
      this.updateHeaderUI();
      this.toast('Berhasil masuk', `Halo, ${user.name}!`, 'success');
      if (typeof this.onLoginSuccess === 'function') {
        this.onLoginSuccess();
        this.onLoginSuccess = null;
      }
    }, 800);
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.storageKeys.user);
    this.updateHeaderUI();
    this.toast('Keluar', 'Kamu sudah logout.', 'info');
    if (['account', 'deposit', 'support'].includes(document.body.dataset.page)) {
      setTimeout(() => { window.location.href = 'index.html'; }, 800);
    }
  },

  updateHeaderUI() {
    const balChip = document.getElementById('balanceChip');
    const userBtn = document.getElementById('userBtn');
    const loginBtn = document.getElementById('loginBtnHeader');
    if (this.isLoggedIn()) {
      if (balChip) {
        balChip.classList.remove('hidden');
        const amt = balChip.querySelector('.bal-amount');
        if (amt) amt.textContent = this.formatRp(this.currentUser.balance);
      }
      if (userBtn) {
        userBtn.classList.remove('hidden');
        const av = userBtn.querySelector('.avatar');
        const un = userBtn.querySelector('.uname');
        if (av) av.textContent = this.currentUser.name.charAt(0).toUpperCase();
        if (un) un.textContent = this.currentUser.name.split(' ')[0];
      }
      if (loginBtn) loginBtn.classList.add('hidden');
    } else {
      if (balChip) balChip.classList.add('hidden');
      if (userBtn) userBtn.classList.add('hidden');
      if (loginBtn) loginBtn.classList.remove('hidden');
    }
  },

  bindProtection() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) || (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
      }
    });
  },

  bindGlobalEvents() {
    const menuBtn = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('show');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
      });
    }
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());
    document.querySelectorAll('[data-auth]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.showAuthModal(el.dataset.auth || 'login');
      });
    });
    document.querySelectorAll('[data-close-modal]').forEach(el => {
      el.addEventListener('click', () => this.closeModal(el.dataset.closeModal));
    });
    document.querySelectorAll('.modal-overlay').forEach(ov => {
      ov.addEventListener('click', (e) => {
        if (e.target === ov) ov.classList.remove('show');
      });
    });
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    const regForm = document.getElementById('registerForm');
    if (regForm) regForm.addEventListener('submit', (e) => this.handleRegister(e));
    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => this.switchAuthTab(tab.dataset.tab));
    });
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', () => this.logout());
    const userBtn = document.getElementById('userBtn');
    if (userBtn) userBtn.addEventListener('click', () => { window.location.href = 'account.html'; });
  },

  renderPageSpecific() {
    const page = document.body.dataset.page;
    if (page === 'index') this.renderHomeCategories();
    else if (page === 'layanan') this.initLayanan();
    else if (page === 'deposit') this.initDeposit();
    else if (page === 'account') this.initAccount();
    else if (page === 'faq') this.initFaq();
    else if (page === 'support') this.initSupport();
  },

  renderHomeCategories() {
    const grid = document.getElementById('homeCategories');
    if (!grid) return;
    const cats = Object.keys(this.categoryMeta);
    grid.innerHTML = cats.map(key => {
      const m = this.categoryMeta[key];
      const count = (this.products[key] || []).length;
      return `
        <a href="layanan.html?cat=${key}" class="category-card">
          <div class="cat-icon ${m.color}"><i class="fas ${m.icon}"></i></div>
          <div class="cat-name">${m.name}</div>
          <div class="cat-count">${count} produk</div>
        </a>
      `;
    }).join('');
  },

  initLayanan() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    this.currentCategory = cat && this.products[cat] ? cat : 'pulsa';
    this.currentOpFilter = 'all';
    this.renderCategoryFilters();
    this.renderOperatorFilters();
    this.renderProducts();
    const search = document.getElementById('productSearch');
    if (search) search.addEventListener('input', () => this.renderProducts());
  },

  renderCategoryFilters() {
    const bar = document.getElementById('categoryFilters');
    if (!bar) return;
    const cats = Object.keys(this.categoryMeta);
    bar.innerHTML = cats.map(key => {
      const m = this.categoryMeta[key];
      return `<button class="filter-chip ${this.currentCategory === key ? 'active' : ''}" data-cat="${key}">
        <i class="fas ${m.icon}"></i> ${m.name}
      </button>`;
    }).join('');
    bar.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentCategory = btn.dataset.cat;
        this.currentOpFilter = 'all';
        this.renderCategoryFilters();
        this.renderOperatorFilters();
        this.renderProducts();
      });
    });
  },

  renderOperatorFilters() {
    const bar = document.getElementById('operatorFilters');
    if (!bar) return;
    const products = this.products[this.currentCategory] || [];
    const ops = [...new Set(products.map(p => p.op))];
    let html = `<button class="op-tab ${this.currentOpFilter === 'all' ? 'active' : ''}" data-op="all">
      <i class="fas fa-th"></i> Semua
    </button>`;
    ops.forEach(op => {
      const m = this.opMeta[op] || { name: op, icon: 'fa-circle' };
      html += `<button class="op-tab ${this.currentOpFilter === op ? 'active' : ''}" data-op="${op}">
        <i class="fas ${m.icon}"></i> ${m.name}
      </button>`;
    });
    bar.innerHTML = html;
    bar.querySelectorAll('.op-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentOpFilter = btn.dataset.op;
        this.renderOperatorFilters();
        this.renderProducts();
      });
    });
  },

  renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    let list = this.products[this.currentCategory] || [];
    if (this.currentOpFilter !== 'all') list = list.filter(p => p.op === this.currentOpFilter);
    const search = document.getElementById('productSearch');
    const q = search ? search.value.trim().toLowerCase() : '';
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || String(p.nominal).toLowerCase().includes(q));
    if (list.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><p>Tidak ada produk yang cocok.</p></div>`;
      return;
    }
    grid.innerHTML = list.map(p => {
      const op = this.opMeta[p.op] || { name: p.op, icon: 'fa-circle', bg: 'bg-ewallet' };
      return `
        <div class="product-card">
          <div class="product-header">
            <div class="product-op">
              <div class="op-icon ${op.bg}"><i class="fas ${op.icon}"></i></div>
              <span class="op-name">${op.name}</span>
            </div>
            <span class="discount-badge">-${p.discount}%</span>
          </div>
          <div class="product-name">${p.name}</div>
          <div class="product-meta">
            <span><i class="fas fa-bolt"></i> &lt;5 menit</span>
            <span><i class="fas fa-check-circle"></i> Otomatis</span>
          </div>
          <div class="product-price">
            <div class="price-block">
              <div class="price-old">${this.formatRp(p.normal)}</div>
              <div class="price-new">${this.formatRp(p.price)}</div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="APP.openCheckout('${p.id}', '${this.currentCategory}')">Beli</button>
          </div>
        </div>
      `;
    }).join('');
  },

  openCheckout(productId, category) {
    if (!this.isLoggedIn()) {
      this.toast('Masuk dulu', 'Silakan masuk atau daftar untuk order.', 'warning');
      this.showAuthModal('login');
      return;
    }
    if (!this.hasRealDeposit()) {
      this.toast('Deposit dulu', 'Order pertama wajib deposit minimal sekali. Bonus saja belum cukup.', 'warning', 4500);
      setTimeout(() => { window.location.href = 'deposit.html'; }, 1200);
      return;
    }
    const list = this.products[category] || [];
    const product = list.find(p => p.id === productId);
    if (!product) return;
    this.selectedProduct = product;
    this.selectedCategory = category;
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    document.getElementById('coProductName').textContent = product.name;
    document.getElementById('coPrice').textContent = this.formatRp(product.price);
    document.getElementById('coNormal').textContent = this.formatRp(product.normal);
    document.getElementById('coBalance').textContent = this.formatRp(this.currentUser.balance);
    const targetLabel = document.getElementById('coTargetLabel');
    const targetInput = document.getElementById('coTarget');
    if (category === 'ewallet') {
      targetLabel.textContent = 'Nomor HP / ID E-Wallet';
      targetInput.placeholder = '08xxxxxxxxxx atau ID e-wallet';
    } else if (category === 'pln') {
      targetLabel.textContent = 'ID Pelanggan / No. Meter';
      targetInput.placeholder = 'Contoh: 12345678901';
    } else if (category === 'game') {
      targetLabel.textContent = 'User ID / Player ID Game';
      targetInput.placeholder = 'Masukkan User ID / Zone ID jika ada';
    } else {
      targetLabel.textContent = 'Nomor HP Tujuan';
      targetInput.placeholder = '08xxxxxxxxxx';
    }
    targetInput.value = '';
    this.openModal('checkoutModal');
  },

  confirmCheckout(e) {
    e.preventDefault();
    if (!this.selectedProduct || !this.currentUser) return;
    const target = document.getElementById('coTarget').value.trim();
    if (!target || target.length < 5) {
      this.toast('Data tidak valid', 'Masukkan nomor / ID tujuan yang benar.', 'warning');
      return;
    }
    const price = this.selectedProduct.price;
    if (this.currentUser.balance < price) {
      this.toast('Saldo kurang', 'Saldo tidak cukup. Silakan deposit dulu.', 'error');
      return;
    }
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Memproses...';
    this.currentUser.balance -= price;
    this.saveUser();
    this.updateHeaderUI();
    const order = {
      id: this.generateId('ord'),
      productId: this.selectedProduct.id,
      productName: this.selectedProduct.name,
      category: this.selectedCategory,
      op: this.selectedProduct.op,
      target, price,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const orders = this.get(this.storageKeys.orders) || [];
    orders.unshift(order);
    this.set(this.storageKeys.orders, orders);
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = orig;
      this.closeModal('checkoutModal');
      this.toast('Order diterima!', `Pesanan ${order.id} sedang diproses.`, 'success');
      this.progressOrder(order.id);
    }, 1000);
  },

  progressOrder(orderId) {
    setTimeout(() => {
      const list = this.get(this.storageKeys.orders) || [];
      const i = list.findIndex(o => o.id === orderId);
      if (i >= 0 && list[i].status === 'Pending') {
        list[i].status = 'Proses';
        list[i].updatedAt = new Date().toISOString();
        this.set(this.storageKeys.orders, list);
      }
    }, 1500 + Math.random() * 1500);
    setTimeout(() => {
      const list = this.get(this.storageKeys.orders) || [];
      const i = list.findIndex(o => o.id === orderId);
      if (i >= 0 && (list[i].status === 'Proses' || list[i].status === 'Pending')) {
        list[i].status = 'Selesai';
        list[i].updatedAt = new Date().toISOString();
        this.set(this.storageKeys.orders, list);
      }
    }, 4000 + Math.random() * 3000);
  },

  initDeposit() {
    if (!this.isLoggedIn()) {
      this.toast('Masuk dulu', 'Silakan masuk untuk deposit.', 'warning');
      setTimeout(() => this.showAuthModal('login'), 500);
    }
    this.selectedDepositAmount = null;
    this.selectedMethod = 'qris';
    this.depositUnlockAt = null;

    document.querySelectorAll('.deposit-amount-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.deposit-amount-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedDepositAmount = parseInt(btn.dataset.amount, 10);
        const custom = document.getElementById('customDeposit');
        if (custom) custom.value = '';
        this.onDepositAmountSelected();
      });
    });

    const custom = document.getElementById('customDeposit');
    if (custom) {
      custom.addEventListener('input', () => {
        document.querySelectorAll('.deposit-amount-btn').forEach(b => b.classList.remove('selected'));
        const val = parseInt(custom.value, 10);
        this.selectedDepositAmount = isNaN(val) ? null : val;
        this.onDepositAmountSelected();
      });
    }

    document.querySelectorAll('.method-card:not(.disabled)').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.method-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedMethod = card.dataset.method;
        this.updateDepositPreview();
      });
    });

    const form = document.getElementById('depositForm');
    if (form) form.addEventListener('submit', (e) => this.handleDeposit(e));

    this.restorePendingDeposit();
  },

  onDepositAmountSelected() {
    if (!this.selectedDepositAmount || this.selectedDepositAmount < this.config.minDeposit) {
      this.clearPendingDeposit();
      this.updateDepositPreview();
      this.setConfirmButtonState(false, null);
      return;
    }
    const now = Date.now();
    const pending = {
      amount: this.selectedDepositAmount,
      method: this.selectedMethod || 'qris',
      selectedAt: now
    };
    this.set(this.storageKeys.pendingDeposit, pending);
    this.depositUnlockAt = now + (this.config.depositConfirmDelay * 1000);
    this.updateDepositPreview();
    this.startDepositCountdown();
  },

  restorePendingDeposit() {
    const pending = this.get(this.storageKeys.pendingDeposit);
    if (!pending || !pending.amount || pending.amount < this.config.minDeposit) {
      this.setConfirmButtonState(false, null);
      return;
    }
    this.selectedDepositAmount = pending.amount;
    this.selectedMethod = pending.method || 'qris';
    document.querySelectorAll('.deposit-amount-btn').forEach(b => {
      b.classList.toggle('selected', parseInt(b.dataset.amount, 10) === pending.amount);
    });
    const custom = document.getElementById('customDeposit');
    if (custom && ![10000, 20000, 50000, 100000, 200000, 500000].includes(pending.amount)) {
      custom.value = pending.amount;
    }
    document.querySelectorAll('.method-card').forEach(c => {
      c.classList.toggle('active', c.dataset.method === this.selectedMethod);
    });
    this.depositUnlockAt = (pending.selectedAt || Date.now()) + (this.config.depositConfirmDelay * 1000);
    this.updateDepositPreview();
    this.startDepositCountdown();
  },

  clearPendingDeposit() {
    localStorage.removeItem(this.storageKeys.pendingDeposit);
    this.depositUnlockAt = null;
    if (this.depositTimer) {
      clearInterval(this.depositTimer);
      this.depositTimer = null;
    }
  },

  startDepositCountdown() {
    if (this.depositTimer) clearInterval(this.depositTimer);
    const update = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((this.depositUnlockAt - now) / 1000));
      if (remaining <= 0) {
        this.setConfirmButtonState(true, 0);
        if (this.depositTimer) {
          clearInterval(this.depositTimer);
          this.depositTimer = null;
        }
      } else {
        this.setConfirmButtonState(false, remaining);
      }
    };
    update();
    this.depositTimer = setInterval(update, 250);
  },

  setConfirmButtonState(enabled, remainingSec) {
    const form = document.getElementById('depositForm');
    if (!form) return;
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    if (enabled) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-check-circle"></i> Konfirmasi Deposit';
    } else {
      btn.disabled = true;
      if (remainingSec !== null && remainingSec > 0) {
        btn.innerHTML = `<i class="fas fa-clock"></i> Konfirmasi Deposit`;
      } else {
        btn.innerHTML = '<i class="fas fa-lock"></i> Pilih nominal dulu';
      }
    }
  },

  updateDepositPreview() {
    const preview = document.getElementById('depositPreview');
    const amountEl = document.getElementById('previewAmount');
    if (!preview || !amountEl) return;
    if (this.selectedDepositAmount && this.selectedDepositAmount >= this.config.minDeposit) {
      preview.classList.remove('hidden');
      amountEl.textContent = this.formatRp(this.selectedDepositAmount);
    } else {
      preview.classList.add('hidden');
    }
  },

  handleDeposit(e) {
    e.preventDefault();
    if (!this.isLoggedIn()) {
      this.showAuthModal('login');
      return;
    }
    const amount = this.selectedDepositAmount;
    if (!amount || amount < this.config.minDeposit) {
      this.toast('Nominal kurang', `Minimal deposit ${this.formatRp(this.config.minDeposit)}.`, 'warning');
      return;
    }
    if (this.depositUnlockAt && Date.now() < this.depositUnlockAt) {
      const rem = Math.ceil((this.depositUnlockAt - Date.now()) / 1000);
      this.toast('Tunggu sebentar', `Tombol bisa diklik setelah ${rem} detik.`, 'warning');
      return;
    }
    if (this.selectedMethod !== 'qris') {
      this.toast('Segera hadir', 'Metode ini belum tersedia. Gunakan QRIS.', 'info');
      return;
    }
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Memproses...';
    setTimeout(() => {
      this.currentUser.balance += amount;
      this.saveUser();
      localStorage.setItem(this.storageKeys.hasDeposited, '1');
      this.updateHeaderUI();
      const deposits = this.get(this.storageKeys.deposits) || [];
      deposits.unshift({
        id: this.generateId('dep'),
        amount, method: 'QRIS', status: 'Berhasil',
        createdAt: new Date().toISOString()
      });
      this.set(this.storageKeys.deposits, deposits);
      this.clearPendingDeposit();
      btn.disabled = false;
      btn.innerHTML = orig;
      this.toast('Deposit berhasil!', `${this.formatRp(amount)} sudah masuk ke saldo kamu.`, 'success', 4000);
      this.selectedDepositAmount = null;
      document.querySelectorAll('.deposit-amount-btn').forEach(b => b.classList.remove('selected'));
      const custom = document.getElementById('customDeposit');
      if (custom) custom.value = '';
      this.updateDepositPreview();
      this.setConfirmButtonState(false, null);
      const balEl = document.getElementById('pageBalance');
      if (balEl) balEl.textContent = this.formatRp(this.currentUser.balance);
    }, 1800);
  },

  initAccount() {
    if (!this.isLoggedIn()) {
      this.toast('Masuk dulu', 'Silakan masuk untuk melihat akun.', 'warning');
      setTimeout(() => {
        this.showAuthModal('login');
        this.onLoginSuccess = () => {
          this.renderAccountProfile();
          this.renderOrderHistory();
          this.renderDepositHistory();
        };
      }, 400);
      return;
    }
    this.renderAccountProfile();
    this.renderOrderHistory();
    this.renderDepositHistory();
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById('tab-' + btn.dataset.tab);
        if (panel) panel.classList.add('active');
      });
    });
    const applyBtn = document.getElementById('applyDateFilter');
    if (applyBtn) applyBtn.addEventListener('click', () => this.renderOrderHistory());
  },

  renderAccountProfile() {
    if (!this.currentUser) return;
    const nameEl = document.getElementById('profileName');
    const phoneEl = document.getElementById('profilePhone');
    const balEl = document.getElementById('profileBalance');
    const avEl = document.getElementById('profileAvatar');
    if (nameEl) nameEl.textContent = this.currentUser.name;
    if (phoneEl) phoneEl.textContent = this.currentUser.phone;
    if (balEl) balEl.textContent = this.formatRp(this.currentUser.balance);
    if (avEl) avEl.textContent = this.currentUser.name.charAt(0).toUpperCase();
  },

  renderOrderHistory() {
    const tbody = document.getElementById('orderHistoryBody');
    if (!tbody) return;
    let orders = this.get(this.storageKeys.orders) || [];
    const from = document.getElementById('filterFrom');
    const to = document.getElementById('filterTo');
    if (from && from.value) {
      const fromDate = new Date(from.value);
      orders = orders.filter(o => new Date(o.createdAt) >= fromDate);
    }
    if (to && to.value) {
      const toDate = new Date(to.value);
      toDate.setHours(23, 59, 59);
      orders = orders.filter(o => new Date(o.createdAt) <= toDate);
    }
    if (orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="empty-state" style="padding:2rem"><i class="fas fa-inbox"></i><p>Belum ada riwayat order.</p></td></tr>`;
      return;
    }
    tbody.innerHTML = orders.map(o => {
      const statusClass = { 'Pending': 'status-pending', 'Proses': 'status-proses', 'Selesai': 'status-selesai', 'Gagal': 'status-gagal' }[o.status] || 'status-pending';
      return `
        <tr>
          <td><div class="font-bold text-sm">${o.id}</div><div class="text-muted text-sm">${this.formatDate(o.createdAt)}</div></td>
          <td><div>${o.productName}</div><div class="text-muted text-sm">${o.target}</div></td>
          <td>${this.formatRp(o.price)}</td>
          <td><span class="status-badge ${statusClass}">${o.status}</span></td>
          <td class="text-muted text-sm">${this.formatDate(o.updatedAt)}</td>
        </tr>
      `;
    }).join('');
  },

  renderDepositHistory() {
    const tbody = document.getElementById('depositHistoryBody');
    if (!tbody) return;
    const deposits = this.get(this.storageKeys.deposits) || [];
    if (deposits.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" class="empty-state" style="padding:2rem"><i class="fas fa-wallet"></i><p>Belum ada riwayat deposit.</p></td></tr>`;
      return;
    }
    tbody.innerHTML = deposits.map(d => `
      <tr>
        <td><div class="font-bold text-sm">${d.id}</div><div class="text-muted text-sm">${this.formatDate(d.createdAt)}</div></td>
        <td>${this.formatRp(d.amount)}</td>
        <td>${d.method}</td>
        <td><span class="status-badge status-selesai">${d.status}</span></td>
      </tr>
    `).join('');
  },

  initFaq() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  },

  initSupport() {
    if (!this.isLoggedIn()) {
      this.toast('Masuk dulu', 'Silakan masuk untuk kirim tiket.', 'warning');
      setTimeout(() => this.showAuthModal('login'), 400);
    }
    const form = document.getElementById('supportForm');
    if (form) form.addEventListener('submit', (e) => this.handleSupport(e));
    const fileInput = document.getElementById('ticketFile');
    const fileArea = document.getElementById('fileUploadArea');
    if (fileInput && fileArea) {
      fileArea.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        const preview = document.getElementById('filePreview');
        if (fileInput.files.length > 0) {
          preview.textContent = 'File: ' + fileInput.files[0].name;
          preview.classList.remove('hidden');
        } else preview.classList.add('hidden');
      });
    }
    this.renderTickets();
  },

  handleSupport(e) {
    e.preventDefault();
    if (!this.isLoggedIn()) {
      this.showAuthModal('login');
      return;
    }
    const subject = document.getElementById('ticketSubject').value.trim();
    const message = document.getElementById('ticketMessage').value.trim();
    const orderId = document.getElementById('ticketOrderId').value.trim();
    if (!subject || !message) {
      this.toast('Lengkapi data', 'Subjek dan pesan wajib diisi.', 'warning');
      return;
    }
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Mengirim...';
    setTimeout(() => {
      const tickets = this.get(this.storageKeys.tickets) || [];
      tickets.unshift({
        id: this.generateId('tkt'),
        subject, message,
        orderId: orderId || null,
        status: 'Menunggu',
        createdAt: new Date().toISOString()
      });
      this.set(this.storageKeys.tickets, tickets);
      btn.disabled = false;
      btn.innerHTML = orig;
      e.target.reset();
      const preview = document.getElementById('filePreview');
      if (preview) preview.classList.add('hidden');
      this.toast('Tiket terkirim', 'Tim support akan segera menindaklanjuti.', 'success');
      this.renderTickets();
    }, 1000);
  },

  renderTickets() {
    const list = document.getElementById('ticketList');
    if (!list) return;
    const tickets = this.get(this.storageKeys.tickets) || [];
    if (tickets.length === 0) {
      list.innerHTML = `<div class="empty-state"><i class="fas fa-headset"></i><p>Belum ada tiket komplain.</p></div>`;
      return;
    }
    list.innerHTML = tickets.map(t => `
      <div class="card mb-2">
        <div class="card-body">
          <div class="flex items-center gap-2" style="justify-content:space-between;margin-bottom:0.5rem">
            <span class="font-bold">${t.subject}</span>
            <span class="status-badge status-pending">${t.status}</span>
          </div>
          <p class="text-sm text-muted" style="margin-bottom:0.5rem">${t.message}</p>
          <div class="text-sm text-muted">
            ${t.id} · ${this.formatDate(t.createdAt)}
            ${t.orderId ? ' · Order: ' + t.orderId : ''}
          </div>
        </div>
      </div>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => APP.init());
