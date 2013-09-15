 function month_minus()
{
	var monthOb = document.getElementById('month');
	var yearOb = document.getElementById('year');
	var monthCurrent = monthOb.innerHTML;
	var yearCurrent = yearOb.innerHTML;

	objMonthsAll = { 
	  Январь: 'Декабрь',
	  Февраль: 'Январь',
	  Март: 'Февраль',
	  Апрель: 'Март',
	  Май: 'Апрель',
	  Июнь: 'Май',
	  Июль: 'Июнь',
	  Август: 'Июль',
	  Сентябрь: 'Август',
	  Октябрь: 'Сентябрь',
	  Ноябрь: 'Октябрь',
	  Декабрь: 'Ноябрь'
	}
	monthOb.innerHTML = objMonthsAll[monthCurrent];
	
	if(monthCurrent=='Январь'){
		yearOb.innerHTML = parseInt(yearCurrent) - 1;
	}
	monthOb.innerHTML = objMonthsAll[monthCurrent];
		
	setCalendar(false, false, false);
	enlight_event();
}

function month_plus()
{
	var monthOb = document.getElementById('month');
	var yearOb = document.getElementById('year');
	var monthCurrent = monthOb.innerHTML;
	var yearCurrent = yearOb.innerHTML;

	objMonthsAll = { 
	  Январь: 'Февраль', 
	  Февраль: 'Март',
	  Март: 'Апрель',
	  Апрель: 'Май',
	  Май: 'Июнь',
	  Июнь: 'Июль',
	  Июль: 'Август',
	  Август: 'Сентябрь',
	  Сентябрь: 'Октябрь',
	  Октябрь: 'Ноябрь',
	  Ноябрь: 'Декабрь',
	  Декабрь: 'Январь'
	}
	
	if(monthCurrent=='Декабрь'){
		yearOb.innerHTML = parseInt(yearCurrent) + 1;
	}
	monthOb.innerHTML = objMonthsAll[monthCurrent];
	
	setCalendar(false, false, false);
	enlight_event();
}

function getMonthById(i)
{
	var arMonths = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
	return arMonths[i];
}

function getDayNameById(i)
{
	var arDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]; 
	return arDays[i];
}

function add_del_event_show(el)
{
	var cell = [];
	var cellsAll = document.getElementById('cells_list').childNodes;
	 
	for(var k = 0; k < cellsAll.length; k++)
	{
		cell = cellsAll[k].childNodes;
		for(var m = 0; m < cell.length; m++)
		{
			if(cell[m].getAttribute('class').substr(0,5) == 'hover' && cell[m].getAttribute('style') == 'display: block')
			{
				cell[m].setAttribute('style', 'display: none');
			}
			
		}
		
		cellsAll[k].setAttribute('style', ''); 
	}
	
	setBorder(cellsAll, el);
	
	for(var i = 0; i < el.childNodes.length; i++)
	{
		if(el.childNodes[i].getAttribute('class').substr(0,5) == 'hover')
		{
			el.childNodes[i].setAttribute('style', 'display: block');
			break;
		}
	}
	
	 
}

function setBorder(cellsAll, el)
{
	var ind = Array.prototype.indexOf.call(el.parentNode.childNodes, el);
	var prev = ind - 7;
	var left = ind - 1;
	
	if(ind%7>0)
	{
		cellsAll[left].setAttribute('style', 'border-right: 1px solid rgb(176, 216, 247);'); 
		if(ind>=7)
		{
			cellsAll[prev].setAttribute('style', 'border-bottom: 1px solid rgb(176, 216, 247);');
			cellsAll[ind].setAttribute('style', 'background-color: rgb(194,228,254); padding-top: 6px; padding-left: 5px; width: 120px; border-left: 1px rgb(176, 216, 247) solid; border-bottom: 2px rgb(176, 216, 247) solid; height: 110px!important; border-top: 1px rgb(176, 216, 247) solid; border-right: 2px solid rgb(176, 216, 247);'); 			
		}
		else
		{
			cellsAll[ind].setAttribute('style', 'background-color: rgb(194,228,254); padding-top: 5px; padding-left: 5px; width: 120px; border-left: 1px rgb(176, 216, 247) solid; border-bottom: 2px rgb(176, 216, 247) solid; height: 110px!important; border-top: 2px rgb(176, 216, 247) solid; border-right: 2px solid rgb(176, 216, 247);'); 
		}
	}
	else
	{
		if(ind>=7)
		{
			cellsAll[prev].setAttribute('style', 'border-bottom: 1px solid rgb(176, 216, 247);');
			cellsAll[ind].setAttribute('style', 'background-color: rgb(194,228,254); padding-top: 6px; padding-left: 4px; width: 120px; border-left: 2px rgb(176, 216, 247) solid; border-bottom: 2px rgb(176, 216, 247) solid; height: 110px!important; border-top: 1px rgb(176, 216, 247) solid; border-right: 2px solid rgb(176, 216, 247);'); 			
		}
		else
		{
			cellsAll[ind].setAttribute('style', 'background-color: rgb(194,228,254); padding-top: 5px; padding-left: 4px; width: 120px; border-left: 2px rgb(176, 216, 247) solid; border-bottom: 2px rgb(176, 216, 247) solid; height: 110px!important; border-top: 2px rgb(176, 216, 247) solid; border-right: 2px solid rgb(176, 216, 247);'); 
		}
	}
}

function add_del_event_hide(event, cl)
{
	cl.parentNode.setAttribute('style', 'display: none');
	event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	
	var cellsAll = document.getElementById('cells_list').childNodes;
	for(var k = 0; k < cellsAll.length; k++)
	{
		cellsAll[k].setAttribute('style', ''); 
	}
}

function ch_bckgr(btn)
{
	btn.setAttribute('style', 'background: url(img/btn_add_pressed.png) 0 0 no-repeat;');
}

function old_bckgr(btn)
{
	btn.setAttribute('style', 'background: url(img/btn_add.png) 0 0 no-repeat;');
}


function create_form_show()
{
	document.getElementById('cr_form').setAttribute('style', 'display: block');
}

function create_form_hide()
{
	document.getElementById('cr_form').setAttribute('style', 'display: none');
}

function paintCalendar(i, innerText, date, monthNow)
{
	var parentElem = document.getElementById('cells_list');
	var newDiv = document.createElement('div');
	var monthText = document.getElementById('month').innerHTML;
	var monthNow = getMonthById(monthNow);
	
	if(innerText == date && ((date >= 24 && i > 7) || date <= 24 && i < 24) && monthNow == monthText) newDiv.setAttribute('class', 'cell day_current');
	else newDiv.setAttribute('class', 'cell');
	
	newDiv.setAttribute('onclick', 'add_del_event_show(this)');
			
	if(i < 7)
	{
		var newSpanWeekDay = document.createElement('span');
		newSpanWeekDay.setAttribute('class', 'day_date');
		newSpanWeekDay.innerHTML = getDayNameById(i) + "&nbsp;";
						
		var newSpan = document.createElement('span');
		newSpan.setAttribute('class', 'day_number');
		newSpan.innerHTML = innerText;
		
		var newDivClear = document.createElement('div');
		newDivClear.setAttribute('class', 'clear');
		
		newDiv.appendChild(newSpanWeekDay);
	}
	else
	{
		var newSpan = document.createElement('span');
		newSpan.setAttribute('class', 'day_date');
		newSpan.innerHTML = innerText;
		
		var newDivClear = document.createElement('div');
		newDivClear.setAttribute('class', 'clear');
		//newSpan.appendChild(newDivClear);
	}
	
	
	newDiv.appendChild(newSpan);
	newDiv.appendChild(newDivClear);
	
	
	if((i >= 0 && i <= 3) || (i >= 7 && i <= 10) || (i >= 14 && i <= 17)){
		paintHover(newDiv, 'hover_left');
	}
	
	if((i >= 4 && i <= 6) || (i >= 11 && i<= 13) || (i >= 18 && i <= 20)){
		paintHover(newDiv, 'hover_right');
	}
	
	if((i >= 21 && i <= 24) || (i >= 28 && i <= 31) || (i >= 35 && i <= 38)){
		paintHover(newDiv, 'hover_bottom_left');
	}
	
	if((i >= 25 && i <= 27) || (i >= 32 && i <= 34) || (i >= 39 && i <= 41)){
		paintHover(newDiv, 'hover_bottom_right');
	}
	
	
	parentElem.appendChild(newDiv);
}

function paintHover(parent, divClass)
{
		var newHoverContainer = document.createElement('div');
		newHoverContainer.setAttribute('class', divClass);
		newHoverContainer.setAttribute('style', 'display:none;');
		
		var newHoverCorner = document.createElement('div');
		newHoverCorner.setAttribute('class', 'hover_corner');
		newHoverContainer.appendChild(newHoverCorner);
	
		var newHover = document.createElement('div');
		newHover.setAttribute('class', 'hover_block');
		newHoverContainer.appendChild(newHover);
		newHover.innerHTML = '<input class="input_title" type="text" value="Событие"/>' +
		'<input type="text" value="День, месяц, год"/>' +
		'<input type="text" value="Имена участников"/>' +
		'<textarea></textarea>' +
		'<input type="submit" value="Готово"/><input type="submit" value="Удалить"/>';
		
		var newCloseRef = document.createElement('div');
		//newCloseRef.setAttribute('href', 'javascript:void(0)');
		newCloseRef.setAttribute('class', 'ref_close');
		newCloseRef.setAttribute('onclick', 'add_del_event_hide(event, this)');
		newHover.appendChild(newCloseRef);
		
		parent.appendChild(newHoverContainer);
}

function setCalendar(date, month, year)
{
	//var Months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
	objMonthsAll = { 
	  Январь: 0, 
	  Февраль: 1,
	  Март: 2,
	  Апрель: 3,
	  Май: 4,
	  Июнь: 5,
	  Июль: 6,
	  Август: 7,
	  Сентябрь: 8,
	  Октябрь: 9,
	  Ноябрь: 10,
	  Декабрь: 11
	}
	
	var today = new Date();	
	var monthNow = today.getMonth();
	
	if(date == false || month == false || year == false )
	{
		date = today.getDate();
	
		var monthOb = document.getElementById('month');
		var yearOb = document.getElementById('year');
		
		var year = yearOb.innerHTML;
		var month =objMonthsAll[monthOb.innerHTML];
	}
		
	var prev = new Date (year, month, 0);
	var prevDay = prev.getDay();
	var prevDate = prev.getDate();
	var prevQuant = prevDay;
	
	var first = new Date (year, month);
	var firstDay = first.getDay();
	var firstDate = first.getDate();
	
	var lastCurMonth = new Date (year, month+1, 0);
	var lastDayCurMonth = lastCurMonth.getDay();
	var lastDateCurMonth = lastCurMonth.getDate();

	var nextQuant = 7 - lastDayCurMonth;
	var cntPrevDay = prevDay;
	var k = 1;
	var m = 1;
	var cellsTotal = lastDateCurMonth + prevQuant + nextQuant;
	
	document.getElementById('cells_list').innerHTML='';
	
	for(var i = 0; i < cellsTotal; i++)
	{
		if(i <= prevDay - 1)
		{
			var spanText = prevDate - cntPrevDay+1;
			paintCalendar(i, spanText, date, monthNow);
			cntPrevDay--;
		}
		else
		{
			if(k <= parseInt(lastDateCurMonth))
			{
				paintCalendar(i, k, date, monthNow);
				k++;
			}			
			else
			{
				paintCalendar(i, m, date, monthNow);
				m++;
			}
			
			
		}
	}
}

function add_event()
{
	document.getElementById('cr_form').setAttribute('style', 'display: none');
	
	if(typeof(localStorage) == "undefined" ) 
	{
		alert('Ваш браузер не поддерживает localStorage()');
	}
	else 
	{
		var year = document.getElementById('year').innerHTML;
		var hap = document.getElementById('create_event_inp').value + ' ' + year + ';';
				
		var hapExists = localStorage.getItem('happening');
		var hapNew;
		
		if(hapExists != null) hapNew = hap + hapExists;
		else hapNew = hap;
		
		try 
		{
			localStorage.setItem('happening', hapNew); //сохраняет строку по ключу
		}
		catch (e) 
		{
			if (e == QUOTA_EXCEEDED_ERR) 
			{
				alert('Закончилось место'); //данные не сохранены, так как закончилось доступное место
			}
		}
				
		enlight_event();
		//localStorage.removeItem('happening'); //удаляет значение по ключу
	}
}

function enlight_event()
{
	var month = document.getElementById('month').innerHTML;
	var year = document.getElementById('year').innerHTML;
	var obj = {
		Январь: "января",
		Февраль: "февраля",
		Март: "марта",
		Апрель: "апреля",
		Март: "марта",
		Июнь: "июня",
		Август: "августа",
		Сентябрь: "сентября",
		Октябрь: "Октября",
		Ноябрь: "ноября",
		Декабрь: "декабря"
	};
		
	if(typeof(localStorage) == "undefined" ) 
	{
		alert('Ваш браузер не поддерживает localStorage()');
	}
	else 
	{
		var hapExists = localStorage.getItem('happening');
		var result;
		
		if(hapExists)
		{
			var regV = new RegExp("[0-9]+ " + obj[month] + " [^;]+","gi"); 
			var result = hapExists.match(regV);
		}
	
		if(result)
		{
			var allCells = document.getElementById('cells_list').childNodes;

			for(var i = 0; i < allCells.length; i++)
			{
				var curCellClass = allCells[i].getAttribute('class');
				for(var j = 0; j < result.length; j++)
				{
					var arResult = [];
					arResult = result[j].split(' ');
					var cell = allCells[i].childNodes;
					
					var resultBase = arResult[1].substring(0, arResult[1].length - 1);
					var monthBase = month.substring(0, month.length - 1);
									
					for(var k = 0; k < cell.length; k++)
					{
						var dayNumber = "";
						
						if(cell[k].getAttribute('class') == "day_number" || cell[k].getAttribute('class') == "day_date")
						{
							dayNumber = cell[k].innerHTML;
							
							var evText = "";
							var yearFlag = false;
							var resYear = arResult[arResult.length-1];
												
							if(((arResult[0] >= 24 && i > 7) || (arResult[0] <= 24 && i < 24)) && parseInt(dayNumber) == parseInt(arResult[0]) 
								&& arResult[1] === obj[month] && parseInt(year) == parseInt(resYear))
							{
								var regVal = new RegExp("day_event", "gi");
								var resultVal = curCellClass.match(regVal);
								if(!resultVal) allCells[i].setAttribute('class', curCellClass + ' day_event');
								
								var regEv = new RegExp("event_txt", "gi");
								var resultEv = allCells[i].innerHTML.match(regEv);
								if(!resultEv)
								{	
									var newSpan = document.createElement('span');
									newSpan.setAttribute('class', 'event_txt');
									
									var evText = "";
									for(var l = 0; l < arResult.length - 1; l++)
									{
										if(l > 1)
										{
											evText = evText + " " + arResult[l];
										}
									}
									
									newSpan.innerHTML = evText;
									
									allCells[i].appendChild(newSpan);
								}
							}
						}
					
					}
				}
				
			}
		}
		
	}
}
$(document).ready(function()
{
    $(".search_suggestions_scroll").niceScroll();
	var monthOb = document.getElementById('month');
	var yearOb = document.getElementById('year');

	var today = new Date();
	var year = today.getFullYear();
	
	var month = today.getMonth();
	
	var date = today.getDate();
	var day = today.getDay();
	
	monthOb.innerHTML = getMonthById(month);
	yearOb.innerHTML = year;
	
	setCalendar(date, month, year);
	
	enlight_event();
});