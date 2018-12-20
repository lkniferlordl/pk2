// Ermachenkov E.M. RK_2, IVT-2016-01

var games_names = ['Wirms', 'Arcanoeat', 'Super Basilio', 'Mortal fight', 'Butcher 3', 'Pac-woman', 'Meowman: Revenge', 'World of Peacecraft', 'Heroes of eat and sleep', 'Chess'];


function rand_name1() //функция генерации имени
  { 
    var text1 = "";
    var text2 = "";
    var symbol = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";

    for (var i = 0; i < 4; i++)
      {
        text1 += symbol.charAt(Math.floor(Math.random() * symbol.length));
      }
    text2 += number.charAt(Math.floor(Math.random() * number.length));
    
    return text1+text2;

  }

var clans = ['Котики', 'Хомячки','Разрушители', 'Север', 'ЛУЧШИЕ'];
function clan_name() //функция генерации клана
  {
  var rand = Math.floor(Math.random() * clans.length);
  var arr = clans[rand];
  var scan = clans.indexOf(arr,0)
  
  	clans.splice(scan, 1)
    
  return arr;

  }


var games = []; //массив объектов игр
     
     for (var i = 0; i < games_names.length; i++)
     	{
      	obj = {};
        obj.name = games_names[i];
        obj.picture = '';
				games.push(obj)
      }

      
     
      
 function like_game() //функция случайного выбора любимых игр
   {
     var number = [1, 2, 3, 4, 5, 6];
     var rand = Math.floor(Math.random() * number.length);
     var n = number[rand];
     var like_games = [];
     
       for (var i  = 0; i < n; i++)
         {
            var q = Math.floor(i+0.5);
         			if(n < 5)
              	{

          				like_games[i] =  games[n+q];
              
          			}
          		else
                {
                	like_games[i] =  games[n-q];
                }
         }
       return like_games;
   }
 

 
 var arr = [];
 arr = like_game();
 
 function output_arr() //функция вывода объектов массива любимых игр
   {
     var length = arr.length;
     
     for (var i = 0; i < length; i++)
          {
            console.log(arr[i]);
          }

   }
 
 
function rand_trophy() //функция генерации трофея
  {
    var trophy = ['bronze', 'silver', 'gold']
    var rand = Math.floor(Math.random() * trophy.length);
    var arr = trophy[rand];
    
    return arr;
  }
  
function rand_game_name() //функция генерации случайного имени из игр
  {
    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var rand = Math.floor(Math.random() * number.length);
    var n = number[rand];
    
    return games[n].name
  }
  
function date() //функция генерации даты
  {

  var date_mass = [];
  var day = [1, ...Array.from(Array(30).keys(),x=>x+2)];
  var month = [1, ...Array.from(Array(11).keys(),x=>x+2)];
  var year = [2009, ...Array.from(Array(9).keys(),x=>x+2010)];
  var hour = [0, ...Array.from(Array(23).keys(),x=>x+1)];
  var minute = [0, ...Array.from(Array(59).keys(),x=>x+1)];
  var text = '';

  date_mass[0] = day;
  date_mass[1] = month;
  date_mass[2] = year;
  date_mass[3] = hour;
  date_mass[4] = minute;

  var n = [];
  var n1 = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  var n_scan =[0,1,2,3,4,5,6,7,8,9]

  var size = date_mass[0].length;

  for (var i = 0; i < 5; i++)
    {
      var size = date_mass[i].length;
      var rand = Math.floor(Math.random() * size);
      n[i] = date_mass[i][rand];
      for (var q = 0; q < 10; q++)
      	{
       		if (n[i] == n_scan[q])
        		{
          		n[i] = n1[q];
          	}
      	}
       text = 'DATA ' + n[0] + '.' + n[1] + '.' + n[2] + ' TIME ' + n[3] + ':' + n[4];	
    }
    
  return text;

  }

var  last_trophy = {};
last_trophy.type = rand_trophy();
last_trophy.name_game = rand_game_name();
last_trophy.date = date();



  function compare(player1, player2) //функция сравнения\сортировки
  {
  	return player2.res - player1.res;
	}
      
     var games_names = ['Wirms', 'Arcanoeat', 'Super Basilio', 'Mortal fight', 'Butcher 3', 'Pac-woman', 'Meowman: Revenge', 'World of Peacecraft', 'Heroes of eat and sleep', 'Chess'];
     var games = [];
     
     for (var i = 0; i < games_names.length; i++)
     	{
      	obj = {};
        obj.name = games_names[i];
        obj.picture = '';
				games.push(obj)
           
      }
      
        function rand_number(min, max) //функция случайного числа от х до у
    {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    }
    
  var best_res = [];
    
  function rand_name() //генерация случайных игр
  {
    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var game = [];
    
    for (var k = 0; k < 10; k ++)
      {
        game[k] = games[k].name;
      }

    for (var i = 0; i < 5; i++)
      {
      	var rand = Math.floor(Math.random() * game.length);
      	obj = {};
        obj.name = game[rand];
        obj.res = rand_number(1,10000);
        best_res.push(obj);
        
       
				var scan = game.indexOf(best_res[i].name,0);
        
        game.splice(scan, 1)
        }

  		}


rand_name();
best_res.sort(compare);
   
var nam = [];
for (var i=0; i < 5; i++)
	{
  	nam[i] = rand_name1();
    console.log(nam[i])
  }
    
var players = [];

for (var i = 0; i < 5; i++)
	{
  	obj = {};
    obj.name = '' + nam[i];
    obj.clan = clan_name();
    obj.avatar = 'images/avatars/' + nam[i];
    obj.rating = sum();
    obj.favorite_game = like_game();
    obj.last_trophy = 'Последний полученный трофей ' + rand_trophy() + ' в игре ' + rand_game_name() + ' ' + date();
    obj.best_result_in_game = best_res.sort(compare);
    players.push(obj);
  }
  

  
 
  
  function sum() //функция суммы результатов для рейтинга
  {
  var summ = 0;
  for (var i = 0; i < 5; i++)
  	{
    	summ = best_res[i].res + summ;
    	
    }
    return summ;
  }
  sum();
  

  console.log(players)