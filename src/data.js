// Airport coordinates are geographic; economics and aircraft figures are game-balanced.
export const airports=[
['TPE','台北桃園','Taipei',25.08,121.23,1.2,'Asia'],['HND','東京羽田','Tokyo',35.55,139.78,1.5,'Asia'],['KIX','大阪關西','Osaka',34.43,135.24,1.15,'Asia'],['ICN','首爾仁川','Seoul',37.46,126.44,1.3,'Asia'],['HKG','香港','Hong Kong',22.31,113.92,1.4,'Asia'],['SIN','新加坡樟宜','Singapore',1.36,103.99,1.45,'Asia'],['BKK','曼谷蘇凡納布','Bangkok',13.69,100.75,1.2,'Asia'],['MNL','馬尼拉','Manila',14.5,121.02,1,'Asia'],['SGN','胡志明市','Ho Chi Minh',10.82,106.66,1,'Asia'],['PVG','上海浦東','Shanghai',31.14,121.8,1.4,'Asia'],['PEK','北京首都','Beijing',40.08,116.58,1.25,'Asia'],['DEL','德里','Delhi',28.56,77.1,1.2,'Asia'],['DXB','杜拜','Dubai',25.25,55.36,1.6,'Middle East'],['DOH','杜哈','Doha',25.27,51.61,1.15,'Middle East'],['IST','伊斯坦堡','Istanbul',41.28,28.75,1.35,'Europe'],['LHR','倫敦希斯洛','London',51.47,-.45,1.65,'Europe'],['CDG','巴黎戴高樂','Paris',49.01,2.55,1.5,'Europe'],['FRA','法蘭克福','Frankfurt',50.03,8.57,1.4,'Europe'],['AMS','阿姆斯特丹','Amsterdam',52.3,4.76,1.3,'Europe'],['FCO','羅馬','Rome',41.8,12.25,1.1,'Europe'],['LAX','洛杉磯','Los Angeles',33.94,-118.4,1.6,'North America'],['SFO','舊金山','San Francisco',37.62,-122.38,1.4,'North America'],['JFK','紐約甘迺迪','New York',40.64,-73.78,1.65,'North America'],['YVR','溫哥華','Vancouver',49.19,-123.18,1.2,'North America'],['SEA','西雅圖','Seattle',47.45,-122.31,1.2,'North America'],['SYD','雪梨','Sydney',-33.94,151.18,1.4,'Oceania'],['MEL','墨爾本','Melbourne',-37.67,144.84,1.2,'Oceania'],['AKL','奧克蘭','Auckland',-37,174.79,1,'Oceania'],['HNL','檀香山','Honolulu',21.32,-157.92,1.1,'North America'],['GRU','聖保羅','São Paulo',-23.43,-46.47,1.1,'South America'],['JNB','約翰尼斯堡','Johannesburg',-26.14,28.25,1,'Africa'],['CPT','開普敦','Cape Town',-33.97,18.6,.95,'Africa'],
['TSA','台北松山','Taipei',25.07,121.55,.8,'Asia'],['KHH','高雄','Kaohsiung',22.58,120.35,.9,'Asia'],['RMQ','台中','Taichung',24.26,120.62,.65,'Asia'],['NRT','東京成田','Tokyo',35.77,140.39,1.45,'Asia'],['FUK','福岡','Fukuoka',33.59,130.45,1.1,'Asia'],['CTS','札幌新千歲','Sapporo',42.78,141.69,1,'Asia'],['OKA','沖繩那霸','Okinawa',26.2,127.65,.95,'Asia'],['PUS','釜山','Busan',35.18,128.94,.85,'Asia'],['HAN','河內','Hanoi',21.22,105.81,.9,'Asia'],['KUL','吉隆坡','Kuala Lumpur',2.75,101.7,1.1,'Asia'],['CGK','雅加達','Jakarta',-6.13,106.66,1.2,'Asia'],['DPS','峇里島','Bali',-8.75,115.17,1.05,'Asia'],['BOM','孟買','Mumbai',19.09,72.87,1.2,'Asia'],['AUH','阿布達比','Abu Dhabi',24.43,54.65,1.1,'Middle East'],['ZRH','蘇黎世','Zurich',47.46,8.55,1.2,'Europe'],['MAD','馬德里','Madrid',40.47,-3.56,1.25,'Europe'],['BCN','巴塞隆納','Barcelona',41.3,2.08,1.2,'Europe'],['HEL','赫爾辛基','Helsinki',60.32,24.96,1,'Europe'],['MUC','慕尼黑','Munich',48.35,11.79,1.2,'Europe'],['ORD','芝加哥','Chicago',41.98,-87.9,1.4,'North America'],['DFW','達拉斯','Dallas',32.9,-97.04,1.3,'North America'],['YYZ','多倫多','Toronto',43.68,-79.63,1.2,'North America'],['BNE','布里斯本','Brisbane',-27.38,153.12,1,'Oceania'],['PER','伯斯','Perth',-31.94,115.97,.95,'Oceania']
].map(([code,name,city,lat,lon,demand,region])=>({code,name,city,lat,lon,demand,region}));
export const aircraft=[
{id:'atr42',name:'ATR 42-600',category:'區域客機',seats:48,range:1400,speed:500,price:1700000,burn:.65,level:1,image:'atr42-v2'},
{id:'atr',name:'ATR 72-600',category:'區域客機',seats:72,range:1500,speed:480,price:2400000,burn:.85,level:1,image:'atr-v2'},
{id:'dash8',name:'Dash 8 Q400',category:'區域客機',seats:82,range:2000,speed:650,price:3200000,burn:1.05,level:1,image:'dash8-v2'},
{id:'crj900',name:'Bombardier CRJ900',category:'區域噴射',seats:90,range:2800,speed:830,price:3400000,burn:1.35,level:1,image:'crj900-v2'},
{id:'e175',name:'Embraer E175',category:'區域噴射',seats:88,range:3700,speed:820,price:3800000,burn:1.2,level:1,image:'e175-v2'},
{id:'e190',name:'Embraer E190',category:'區域噴射',seats:114,range:4500,speed:830,price:4600000,burn:1.6,level:1,image:'e190-v2'},
{id:'e195',name:'Embraer E195-E2',category:'區域噴射',seats:132,range:4800,speed:800,price:5200000,burn:1.5,level:1,image:'e195-v2'},
{id:'a220100',name:'Airbus A220-100',category:'窄體客機',seats:125,range:6300,speed:830,price:6500000,burn:1.65,level:2,image:'a220100-v2'},
{id:'a220300',name:'Airbus A220-300',category:'窄體客機',seats:149,range:6200,speed:830,price:7400000,burn:1.8,level:2,image:'a220300-v2'},
{id:'a319',name:'Airbus A319',category:'窄體客機',seats:144,range:6900,speed:830,price:6700000,burn:2.05,level:2,image:'a319-v2'},
{id:'a320',name:'Airbus A320neo',category:'窄體客機',seats:180,range:6300,speed:830,price:8800000,burn:1.95,level:2,image:'a320-v2'},
{id:'b737',name:'Boeing 737-700',category:'窄體客機',seats:149,range:5500,speed:840,price:6200000,burn:2.05,level:2,image:'b737-v2'},
{id:'b738',name:'Boeing 737-800',category:'窄體客機',seats:189,range:5600,speed:840,price:8500000,burn:2.45,level:2,image:'b738-v2'},
{id:'max8',name:'Boeing 737 MAX 8',category:'窄體客機',seats:189,range:6500,speed:840,price:10500000,burn:2,level:3,image:'max8-v2'},
{id:'max9',name:'Boeing 737 MAX 9',category:'窄體客機',seats:220,range:6500,speed:840,price:12500000,burn:2.2,level:3,image:'max9-v2'},
{id:'a321',name:'Airbus A321neo',category:'窄體客機',seats:220,range:7400,speed:830,price:11000000,burn:2.2,level:2,image:'a321-v2'},
{id:'a321xlr',name:'Airbus A321XLR',category:'窄體客機',seats:206,range:8700,speed:830,price:14800000,burn:2.3,level:3,image:'a321xlr-v2'},
{id:'b757',name:'Boeing 757-200',category:'窄體客機',seats:228,range:7200,speed:850,price:9500000,burn:3.05,level:3,image:'b757-v2'},
{id:'b767',name:'Boeing 767-300ER',category:'長程廣體',seats:269,range:11000,speed:860,price:16500000,burn:4.5,level:3,image:'b767-v2'},
{id:'a332',name:'Airbus A330-200',category:'長程廣體',seats:260,range:13400,speed:870,price:19000000,burn:4.7,level:4,image:'a332-v2'},
{id:'a333',name:'Airbus A330-300',category:'長程廣體',seats:300,range:11700,speed:870,price:21000000,burn:4.9,level:4,image:'a333-v2'},
{id:'a339',name:'Airbus A330-900neo',category:'長程廣體',seats:310,range:13300,speed:880,price:28500000,burn:4.4,level:5,image:'a339-v2'},
{id:'b788',name:'Boeing 787-8',category:'長程廣體',seats:242,range:13500,speed:900,price:23000000,burn:4.2,level:4,image:'b788-v2'},
{id:'b789',name:'Boeing 787-9',category:'長程廣體',seats:290,range:14100,speed:900,price:26000000,burn:4.6,level:4,image:'b789-v2'},
{id:'b7810',name:'Boeing 787-10',category:'長程廣體',seats:330,range:11900,speed:900,price:31000000,burn:4.9,level:5,image:'b7810-v2'},
{id:'a359',name:'Airbus A350-900',category:'長程廣體',seats:340,range:15000,speed:910,price:34000000,burn:5.1,level:5,image:'a359-v2'},
{id:'b772',name:'Boeing 777-200ER',category:'長程廣體',seats:314,range:14300,speed:905,price:29500000,burn:6,level:5,image:'b772-v2'},
{id:'b77w',name:'Boeing 777-300ER',category:'旗艦廣體',seats:396,range:13600,speed:905,price:42000000,burn:6.8,level:6,image:'b77w-v2'},
{id:'a35k',name:'Airbus A350-1000',category:'旗艦廣體',seats:410,range:16100,speed:920,price:55000000,burn:6,level:8,image:'a35k-v2'},
{id:'b748',name:'Boeing 747-8',category:'旗艦廣體',seats:467,range:14800,speed:920,price:62000000,burn:8.5,level:9,image:'b748-v2'},
{id:'a380',name:'Airbus A380-800',category:'旗艦廣體',seats:525,range:15200,speed:900,price:70000000,burn:9.2,level:10,image:'a380-v2'},
{id:'b738f',name:'Boeing 737-800BCF',category:'貨運專機',seats:0,cargo:23,range:3700,speed:830,price:7800000,burn:2.5,level:2,image:'b738f-v2'},
{id:'b763f',name:'Boeing 767-300F',category:'貨運專機',seats:0,cargo:52,range:6000,speed:850,price:17500000,burn:4.8,level:4,image:'b763f-v2'},
{id:'b777f',name:'Boeing 777F',category:'貨運專機',seats:0,cargo:102,range:9200,speed:900,price:45000000,burn:6.8,level:6,image:'b777f-v2'},
{id:'b748f',name:'Boeing 747-8F',category:'貨運專機',seats:0,cargo:137,range:8100,speed:910,price:58000000,burn:8.2,level:8,image:'b748f-v2'}
];
export const roles=[{id:'pilots',name:'飛行員',icon:'◈',salary:180,hire:15000,batch:4,text:'每架執飛飛機需 4 人輪班'}, {id:'cabin',name:'客艙組員',icon:'◇',salary:70,hire:5000,batch:6,text:'按座位數配置服務與輪班'}, {id:'engineers',name:'維修工程師',icon:'⚙',salary:140,hire:12000,batch:2,text:'維護機隊並提高營運可靠度'}, {id:'ground',name:'地勤人員',icon:'▤',salary:40,hire:2500,batch:4,text:'每架執飛飛機需 2 人'}];
export const strategies=[{id:'balanced',name:'全服務航空',text:'E195-E2 · $8.5M · 聲望 70',cash:8500000,model:'e195',rep:70}, {id:'regional',name:'區域航空',text:'ATR 72 · $11M · 低成本起步',cash:11000000,model:'atr',rep:65}, {id:'premium',name:'精品航空',text:'E195-E2 · $7M · 客艙研究 Lv.1',cash:7000000,model:'e195',rep:80}];
export const incidents=[
{id:'storm',title:'颱風逼近基地',text:'氣象中心預警，未來三天航班可能延誤。要如何安排旅客與機隊？',options:[{label:'啟動備援調度',cost:100000,rep:1,disruption:.95,days:3},{label:'縮減班次，安置旅客',cost:30000,rep:-1,disruption:.7,days:3},{label:'維持原計畫',cost:0,rep:-4,disruption:.55,days:3}]},
{id:'technical',title:'引擎檢查警報',text:'工程團隊發現異常震動，需要額外檢查，避免影響後續航班。',options:[{label:'立即全面檢修',cost:85000,rep:1,condition:4},{label:'分批停機檢查',cost:30000,disruption:.8,days:2},{label:'先停飛等待零件',cost:0,rep:-2,disruption:.5,days:3}]},
{id:'sick',title:'機組員集體請病假',text:'本週排班吃緊，可安排備援機組，或調整班次。',options:[{label:'聘用臨時備援',cost:60000,morale:3},{label:'支付加班津貼',cost:25000,morale:-3},{label:'取消部分航班',cost:0,rep:-2,disruption:.7,days:2}]},
{id:'strike',title:'員工要求改善待遇',text:'員工代表要求更好的工作環境。你的決策會影響士氣與營運。',options:[{label:'改善休息室與津貼',cost:95000,morale:12,rep:1},{label:'安排協商與排班改革',cost:25000,morale:4,disruption:.9,days:2},{label:'暫緩改善',cost:0,morale:-12,rep:-2}]},
{id:'overbooking',title:'超賣引發客訴',text:'熱門班機座位超賣，旅客正在櫃台等候處理。',options:[{label:'補償並升等轉機',cost:45000,rep:2},{label:'安排下一班與住宿',cost:18000,rep:0},{label:'只退還票款（營運成本已計入）',cost:0,rep:-4}]},
{id:'baggage',title:'行李系統故障',text:'基地行李轉盤故障，若處理太慢會影響旅客體驗。',options:[{label:'租用備援設備',cost:55000,rep:1},{label:'增加人工搬運',cost:18000,morale:-2,disruption:.9,days:2},{label:'等待機場修復',cost:0,rep:-3,disruption:.8,days:3}]},
{id:'viral',title:'旅客分享優質服務',text:'你的服務影片在社群爆紅。現在是擴大品牌影響力的機會。',options:[{label:'推出品牌宣傳',cost:80000,rep:5,demand:1.2,days:4},{label:'獎勵服務團隊',cost:25000,morale:8,rep:2},{label:'感謝旅客分享',cost:0,rep:1}]},
{id:'runway',title:'跑道臨時維修',text:'基地機場宣布臨時施工，未來兩天可用時段減少。',options:[{label:'購買替代時段',cost:70000,disruption:.95,days:2},{label:'調整班表',cost:15000,disruption:.8,days:2},{label:'暫停受影響班次',cost:0,rep:-2,disruption:.6,days:2}]},
{id:'competition',title:'競爭對手推出低價票',text:'其他航空公司正在搶客。你可以用價格、品牌或服務應對。',options:[{label:'限時促銷與加強宣傳',cost:65000,demand:1.15,days:4},{label:'用品牌品質回應',cost:20000,rep:2},{label:'觀察市場',cost:0,demand:.85,days:4}]},
{id:'vip',title:'國際活動包機邀約',text:'主辦單位需要可靠的航空夥伴，你是否願意提供包機與服務支援？',options:[{label:'承接高規格服務',cost:110000,reward:280000,rep:2,morale:-2},{label:'只提供一般運送',cost:40000,reward:100000},{label:'婉拒邀約',cost:0}]},
{id:'fuelSupply',title:'燃油供應延遲',text:'供應商延誤交貨。備援供應較昂貴，但能維持航班。',options:[{label:'購買備援燃油',cost:90000},{label:'調整航班優先順序',cost:20000,disruption:.8,days:2},{label:'等候原供應商',cost:0,rep:-2,disruption:.65,days:3}]},
{id:'inspection',title:'航空品質稽核',text:'稽核團隊正在檢查你的維護、排班與旅客服務紀錄。',options:[{label:'投入資源完善流程',cost:70000,rep:4,training:1},{label:'提供現有完整紀錄',cost:15000,rep:1},{label:'延後稽核準備',cost:0,rep:-3}]},
{id:'snow',title:'目的地大雪',text:'多座機場降雪，班表可能受影響。選擇應變方式。',options:[{label:'購買除冰與備援時段',cost:75000,disruption:.95,days:2},{label:'合併部分班次',cost:15000,disruption:.8,days:2},{label:'等待天候改善',cost:0,rep:-2,disruption:.6,days:2}]},
{id:'bird',title:'航班遭遇鳥擊',text:'飛機平安落地，工程團隊建議安排額外檢查。',options:[{label:'全面檢查與更換零件',cost:65000,condition:3,rep:1},{label:'分批完成檢查',cost:20000,disruption:.85,days:2},{label:'停飛等候檢查',cost:0,disruption:.6,days:3}]},
{id:'festival',title:'國際節慶帶動旅遊',text:'全球旅客需求上升，旅行社正尋找航空夥伴。',options:[{label:'推出節慶套裝',cost:55000,demand:1.25,days:4},{label:'獎勵第一線團隊',cost:20000,morale:6,demand:1.1,days:3},{label:'維持一般營運',cost:0,rep:1}]},
{id:'catering',title:'餐飲供應商臨時停工',text:'機上餐食供應不足，需要新的合作方案。',options:[{label:'聘用備援供應商',cost:40000,rep:1},{label:'改用簡餐並發代金券',cost:12000,rep:-1},{label:'暫停餐飲服務',cost:0,rep:-3}]},
{id:'medical',title:'旅客需要醫療協助',text:'一名旅客途中身體不適，機組已提供初步協助並聯絡地面醫療。',options:[{label:'轉降並安排完整照護',cost:35000,rep:3,disruption:.9,days:1},{label:'安排專人協助後續轉機',cost:15000,rep:1},{label:'停止後續班次等候協助',cost:0,disruption:.75,days:1}]},
{id:'talent',title:'資深教官提出合作',text:'資深教官願意為你的團隊提供進階培訓。',options:[{label:'接受完整訓練課程',cost:90000,training:1,morale:5},{label:'安排專題講座',cost:25000,morale:4},{label:'先維持現有訓練',cost:0}]}

];
export const research=[{id:'fuel',name:'燃油效率',text:'每級降低燃油成本 6%',base:450000,max:5},{id:'service',name:'客艙服務',text:'每級提高需求與品牌口碑',base:350000,max:5},{id:'marketing',name:'全球行銷',text:'每級提高航線需求 8%',base:550000,max:5},{id:'maintenance',name:'預防維護',text:'每級減少機隊耗損 12%',base:400000,max:5}];
export const goals=[{id:'first',name:'首航完成',text:'完成 1 架次',target:1,metric:'flights',reward:180000},{id:'network',name:'亞洲連線',text:'同時經營 3 條航線',target:3,metric:'routes',reward:600000},{id:'pax',name:'旅客的選擇',text:'累積運送 10,000 位旅客',target:10000,metric:'pax',reward:1200000},{id:'fleet',name:'成長中的機隊',text:'擁有 5 架飛機',target:5,metric:'fleet',reward:1800000},{id:'world',name:'跨洲航空',text:'航網抵達 3 個地區',target:3,metric:'regions',reward:3000000},{id:'million',name:'百萬旅客',text:'累積運送 1,000,000 位旅客',target:1000000,metric:'pax',reward:15000000}];
export const events=[{title:'櫻花季來了',text:'旅客湧向日本，全球需求在未來 5 天增加 20%。',type:'demand',value:1.2},{title:'國際油價上漲',text:'未來 4 天燃油價格增加 25%。維持利潤或調整票價？',type:'fuel',value:1.25},{title:'旅遊淡季',text:'未來 4 天市場需求下降 15%。低票價有助吸引旅客。',type:'demand',value:.85},{title:'企業旅遊合約',text:'提供包機支援，支付 $120,000 可換取 $260,000 合約收入與聲望。',type:'choice',cost:120000,reward:260000},{title:'永續航空計畫',text:'投入 $200,000，讓品牌聲望增加 4 點。',type:'choice',cost:200000,reward:0,rep:4}];
export const airport=code=>airports.find(a=>a.code===code);
export const model=id=>aircraft.find(a=>a.id===id);
